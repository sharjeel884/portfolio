import Link from "next/link";
import { ArrowRight, MapPin, Package, Rocket } from "lucide-react";
import { profileData } from "@/content/profile";
import { personalProjects } from "@/content/personal-projects";
import { Sparkle } from "@/components/ui/Graphics";

const innerOrbit = [
  { label: "React", tone: "tone-blue" },
  { label: "Next.js", tone: "tone-blue" },
  { label: "TypeScript", tone: "tone-blue-light" },
];

const outerOrbit = [
  { label: "React Native", tone: "tone-blue-light" },
  { label: "Tailwind", tone: "tone-blue" },
  { label: "Node.js", tone: "tone-blue-light" },
  { label: "REST APIs", tone: "tone-blue" },
];

/** Places items evenly around a circle, as percentage offsets of the ring box. */
function placeOnRing(count: number, offsetDeg: number) {
  return Array.from({ length: count }, (_, i) => {
    const rad = ((offsetDeg + (360 / count) * i) * Math.PI) / 180;
    return {
      left: `${(50 + 50 * Math.cos(rad)).toFixed(2)}%`,
      top: `${(50 + 50 * Math.sin(rad)).toFixed(2)}%`,
    };
  });
}

export function HeroSection() {
  const [firstName, ...rest] = profileData.name.split(" ");
  const lastName = rest.join(" ");
  const initials = `${firstName[0] ?? ""}${lastName[0] ?? ""}`;
  const innerPositions = placeOnRing(innerOrbit.length, -90);
  const outerPositions = placeOnRing(outerOrbit.length, -45);

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative flex min-h-svh items-center overflow-hidden pt-32 pb-20 lg:pt-28"
    >
      <Sparkle className="left-[8%] top-[22%] size-5" />
      <Sparkle className="left-[52%] top-[16%] size-3 text-accent-light!" style={{ animationDelay: "-1s" }} />
      <Sparkle className="bottom-[18%] left-[42%] size-4 text-accent!" style={{ animationDelay: "-2s" }} />

      <div className="shell grid items-center gap-16 lg:grid-cols-[1.15fr_1fr]">
        <div className="space-y-8">
          <div className="reveal">
            <span className="chip tone-blue">
              <span className="dot dot--pulse" aria-hidden="true" />
              {profileData.availability}
            </span>
          </div>

          <h1 id="hero-heading" className="hero-title reveal" style={{ ["--stagger" as string]: 1 }}>
            <span className="block text-ink">Hi, I&apos;m</span>
            <span className="block text-gradient-anim pb-2">{profileData.name}</span>
          </h1>

          <p
            className="reveal max-w-xl text-lg text-ink-2 sm:text-xl"
            style={{ ["--stagger" as string]: 2 }}
          >
            <span className="font-semibold text-ink">{profileData.role}</span> building fast,
            accessible, beautifully-crafted products with{" "}
            <span className="text-gradient-cool font-semibold">{profileData.specialization}</span>.
          </p>

          <div className="reveal flex flex-wrap gap-3" style={{ ["--stagger" as string]: 3 }}>
            <Link href="/projects" className="btn btn-primary">
              View my work
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <Link href="/contact" className="btn btn-ghost">
              Let&apos;s talk
            </Link>
          </div>

          <dl
            className="reveal grid max-w-lg grid-cols-3 gap-4 border-t border-white/10 pt-6"
            style={{ ["--stagger" as string]: 4 }}
          >
            <div>
              <dt className="text-xs text-ink-3">Experience</dt>
              <dd className="font-display text-2xl font-bold text-ink sm:text-3xl">
                {profileData.yearsOfExperience}
                <span className="text-gradient"> yrs</span>
              </dd>
            </div>
            <div>
              <dt className="text-xs text-ink-3">Products</dt>
              <dd className="font-display text-2xl font-bold text-ink sm:text-3xl">
                {personalProjects.length}
                <span className="text-gradient">+</span>
              </dd>
            </div>
            <div>
              <dt className="text-xs text-ink-3">Based in</dt>
              <dd className="flex items-center gap-1 pt-1.5 text-sm font-semibold text-ink">
                <MapPin className="size-4 text-accent-light" aria-hidden="true" />
                {profileData.location.split(",")[0]}
              </dd>
            </div>
          </dl>
        </div>

        <div className="reveal relative" style={{ ["--stagger" as string]: 2 }} aria-hidden="true">
          <div className="orbit">
            <div className="orbit-ring orbit-ring--2">
              {outerOrbit.map((item, i) => (
                <div key={item.label} className="orbit-item" style={outerPositions[i]}>
                  <span className={`orbit-badge ${item.tone}`}>
                    <span className="dot" />
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
            <div className="orbit-ring orbit-ring--1">
              {innerOrbit.map((item, i) => (
                <div key={item.label} className="orbit-item" style={innerPositions[i]}>
                  <span className={`orbit-badge ${item.tone}`}>
                    <span className="dot" />
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
            <div className="orbit-core">
              <div className="orbit-core-inner">
                <span className="font-display text-5xl font-bold text-gradient sm:text-6xl">
                  {initials}
                </span>
              </div>
            </div>
          </div>

          <div className="float-card -left-6 -top-4 hidden sm:block">
            <div className="card tone-blue-light flex items-center gap-3 px-4 py-3">
              <span className="icon-tile size-10! rounded-xl!">
                <Rocket className="size-5" />
              </span>
              <div className="leading-tight">
                <p className="font-display text-sm font-bold text-ink">Shipped to stores</p>
                <p className="text-xs text-ink-3">iOS · Android · Web</p>
              </div>
            </div>
          </div>

          <div className="float-card float-card--delay -bottom-4 -right-6 hidden sm:block">
            <div className="card tone-blue flex items-center gap-3 px-4 py-3">
              <span className="icon-tile size-10! rounded-xl!">
                <Package className="size-5" />
              </span>
              <div className="leading-tight">
                <p className="font-display text-sm font-bold text-ink">onscreen-recorder</p>
                <p className="text-xs text-ink-3">Published on npm</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 lg:block" aria-hidden="true">
        <div className="scroll-cue" />
      </div>
    </section>
  );
}
