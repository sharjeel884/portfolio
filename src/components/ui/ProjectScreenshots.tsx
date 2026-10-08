"use client";

import Image from "next/image";
import { useCallback, useEffect, useId, useRef, useState, type TouchEvent } from "react";
import { createPortal } from "react-dom";
import type { ProjectScreenshot, ScreenshotLayout } from "@/content/personal-projects";

interface ProjectScreenshotsProps {
  name: string;
  screenshots: ProjectScreenshot[];
  layout?: ScreenshotLayout;
}

export function ProjectScreenshots({
  name,
  screenshots,
  layout = "portrait",
}: ProjectScreenshotsProps) {
  const labelId = useId();
  const [index, setIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [mounted, setMounted] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchDeltaX = useRef(0);

  const count = screenshots.length;
  const isLandscape = layout === "landscape";
  const canSlide = count > 1;
  const minZoom = 0.5;
  const maxZoom = 3;
  const zoomStep = 0.25;

  useEffect(() => {
    setMounted(true);
  }, []);

  const goTo = useCallback(
    (next: number) => {
      if (count === 0) return;
      setIndex(((next % count) + count) % count);
    },
    [count],
  );

  const onTouchStart = useCallback((e: TouchEvent) => {
    touchStartX.current = e.touches[0]?.clientX ?? null;
    touchDeltaX.current = 0;
  }, []);

  const onTouchMove = useCallback((e: TouchEvent) => {
    if (touchStartX.current == null) return;
    touchDeltaX.current = (e.touches[0]?.clientX ?? 0) - touchStartX.current;
  }, []);

  const onTouchEnd = useCallback(() => {
    if (!canSlide || touchStartX.current == null) {
      touchStartX.current = null;
      return;
    }
    const threshold = 48;
    if (touchDeltaX.current <= -threshold) goTo(index + 1);
    else if (touchDeltaX.current >= threshold) goTo(index - 1);
    touchStartX.current = null;
    touchDeltaX.current = 0;
  }, [canSlide, goTo, index]);

  const goLightbox = useCallback(
    (next: number) => {
      if (count === 0) return;
      setZoom(1);
      setLightboxIndex(((next % count) + count) % count);
    },
    [count],
  );

  const openLightbox = useCallback((at: number) => {
    setLightboxIndex(at);
    setZoom(1);
    setLightboxOpen(true);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
    setZoom(1);
  }, []);

  const zoomIn = useCallback(() => {
    setZoom((z) => Math.min(maxZoom, Math.round((z + zoomStep) * 100) / 100));
  }, []);

  const zoomOut = useCallback(() => {
    setZoom((z) => Math.max(minZoom, Math.round((z - zoomStep) * 100) / 100));
  }, []);

  const resetZoom = useCallback(() => {
    setZoom(1);
  }, []);

  useEffect(() => {
    if (!lightboxOpen) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowLeft") goLightbox(lightboxIndex - 1);
      if (event.key === "ArrowRight") goLightbox(lightboxIndex + 1);
      if (event.key === "+" || event.key === "=") zoomIn();
      if (event.key === "-" || event.key === "_") zoomOut();
      if (event.key === "0") resetZoom();
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [lightboxOpen, lightboxIndex, closeLightbox, goLightbox, zoomIn, zoomOut, resetZoom]);

  if (count === 0) return null;

  const lightboxShot = screenshots[lightboxIndex]!;

  return (
    <>
      <div
        className={`project-shots-slider${isLandscape ? " project-shots-slider--landscape" : ""}`}
        role="region"
        aria-roledescription="carousel"
        aria-labelledby={labelId}
      >
        <span id={labelId} className="sr-only">
          {name} screenshots
        </span>

        <div
          className="project-shots-viewport"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div
            className="project-shots-track"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {screenshots.map((shot, i) => (
              <button
                key={shot.src}
                type="button"
                className="project-shot-slide"
                onClick={() => openLightbox(i)}
                aria-label={`View ${name} screenshot ${i + 1} of ${count}`}
              >
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  width={isLandscape ? 1024 : 460}
                  height={isLandscape ? 760 : 920}
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="project-shot-img"
                  priority={i === 0}
                />
              </button>
            ))}
          </div>

          <div className="project-shots-fade" aria-hidden="true" />

          {canSlide && (
            <>
              <button
                type="button"
                className="project-shots-nav project-shots-nav--prev"
                onClick={(e) => {
                  e.stopPropagation();
                  goTo(index - 1);
                }}
                aria-label={`Previous ${name} screenshot`}
              >
                <ChevronIcon direction="left" />
              </button>
              <button
                type="button"
                className="project-shots-nav project-shots-nav--next"
                onClick={(e) => {
                  e.stopPropagation();
                  goTo(index + 1);
                }}
                aria-label={`Next ${name} screenshot`}
              >
                <ChevronIcon direction="right" />
              </button>
            </>
          )}

          <div className="project-shots-chrome">
            <div className="project-shots-dots" role="tablist" aria-label={`${name} screenshot slides`}>
              {canSlide
                ? screenshots.map((shot, i) => (
                    <button
                      key={shot.src}
                      type="button"
                      role="tab"
                      aria-selected={i === index}
                      aria-label={`Go to screenshot ${i + 1}`}
                      className={`project-shots-dot${i === index ? " is-active" : ""}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        goTo(i);
                      }}
                    />
                  ))
                : null}
            </div>
            <span className="project-shots-count">
              {index + 1}/{count}
            </span>
          </div>
        </div>
      </div>

      {mounted &&
        lightboxOpen &&
        createPortal(
          <div
            className="project-lightbox"
            role="dialog"
            aria-modal="true"
            aria-label={`${name} screenshots, image ${lightboxIndex + 1} of ${count}`}
            onClick={closeLightbox}
          >
            <div className="project-lightbox-toolbar" onClick={(e) => e.stopPropagation()}>
              <p className="project-lightbox-title">
                {name}
                <span>
                  {lightboxIndex + 1} / {count}
                </span>
              </p>
              <div className="project-lightbox-actions">
                <div className="project-lightbox-zoom" role="group" aria-label="Zoom controls">
                  <button
                    type="button"
                    className="project-lightbox-zoom-btn"
                    onClick={zoomOut}
                    disabled={zoom <= minZoom}
                    aria-label="Zoom out"
                  >
                    <ZoomOutIcon />
                  </button>
                  <button
                    type="button"
                    className="project-lightbox-zoom-level"
                    onClick={resetZoom}
                    aria-label={`Reset zoom, currently ${Math.round(zoom * 100)} percent`}
                  >
                    {Math.round(zoom * 100)}%
                  </button>
                  <button
                    type="button"
                    className="project-lightbox-zoom-btn"
                    onClick={zoomIn}
                    disabled={zoom >= maxZoom}
                    aria-label="Zoom in"
                  >
                    <ZoomInIcon />
                  </button>
                </div>
                <button
                  type="button"
                  className="project-lightbox-close"
                  onClick={closeLightbox}
                  aria-label="Close screenshot viewer"
                >
                  <CloseIcon />
                </button>
              </div>
            </div>

            <div className="project-lightbox-stage" onClick={(e) => e.stopPropagation()}>
              {canSlide && (
                <button
                  type="button"
                  className="project-lightbox-nav project-lightbox-nav--prev"
                  onClick={() => goLightbox(lightboxIndex - 1)}
                  aria-label="Previous screenshot"
                >
                  <ChevronIcon direction="left" />
                </button>
              )}

              <div
                className={`project-lightbox-frame${isLandscape ? " project-lightbox-frame--landscape" : ""}${zoom > 1 ? " is-zoomed" : ""}`}
              >
                <div
                  className="project-lightbox-zoom-target"
                  style={{ transform: `scale(${zoom})` }}
                >
                  <Image
                    src={lightboxShot.src}
                    alt={lightboxShot.alt}
                    width={isLandscape ? 1600 : 460}
                    height={isLandscape ? 1000 : 996}
                    sizes="(min-width: 900px) 80vw, 94vw"
                    className="project-lightbox-img"
                    priority
                  />
                </div>
              </div>

              {canSlide && (
                <button
                  type="button"
                  className="project-lightbox-nav project-lightbox-nav--next"
                  onClick={() => goLightbox(lightboxIndex + 1)}
                  aria-label="Next screenshot"
                >
                  <ChevronIcon direction="right" />
                </button>
              )}
            </div>

            {canSlide && (
              <div
                className={`project-lightbox-thumbs${isLandscape ? " project-lightbox-thumbs--landscape" : ""}`}
                onClick={(e) => e.stopPropagation()}
                role="list"
              >
                {screenshots.map((shot, i) => (
                  <button
                    key={shot.src}
                    type="button"
                    role="listitem"
                    className={`project-lightbox-thumb${i === lightboxIndex ? " is-active" : ""}`}
                    onClick={() => goLightbox(i)}
                    aria-label={`Show screenshot ${i + 1}`}
                    aria-current={i === lightboxIndex ? "true" : undefined}
                  >
                    <Image
                      src={shot.src}
                      alt=""
                      width={isLandscape ? 160 : 72}
                      height={isLandscape ? 100 : 156}
                      sizes="72px"
                      className="project-lightbox-thumb-img"
                    />
                  </button>
                ))}
              </div>
            )}

            <p className="project-lightbox-caption" onClick={(e) => e.stopPropagation()}>
              {lightboxShot.alt}
            </p>
          </div>,
          document.body,
        )}
    </>
  );
}

function ChevronIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {direction === "left" ? <path d="M15 18l-6-6 6-6" /> : <path d="M9 18l6-6-6-6" />}
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  );
}

function ZoomInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.3-4.3M11 8v6M8 11h6" />
    </svg>
  );
}

function ZoomOutIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.3-4.3M8 11h6" />
    </svg>
  );
}
