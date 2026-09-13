import { ImageResponse } from "next/og";
import { profileData } from "@/content/profile";

export const alt = `${profileData.name} - ${profileData.role}`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #09090b 0%, #18181b 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          padding: "80px",
          fontFamily: "sans-serif",
          color: "#ffffff",
          border: "12px solid #27272a",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "12px",
              background: "rgba(56, 189, 248, 0.2)",
              border: "2px solid #38bdf8",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#38bdf8",
              fontSize: "24px",
              fontWeight: "bold",
            }}
          >
            &gt;_
          </div>
          <div style={{ fontSize: "28px", fontWeight: "bold", color: "#f4f4f5" }}>
            {profileData.name}
          </div>
          <div
            style={{
              fontSize: "16px",
              background: "rgba(16, 185, 129, 0.2)",
              color: "#34d399",
              padding: "6px 14px",
              borderRadius: "20px",
              border: "1px solid rgba(52, 211, 153, 0.4)",
            }}
          >
            4+ Years Frontend Experience
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div
            style={{
              fontSize: "52px",
              fontWeight: 800,
              lineHeight: 1.15,
              color: "#ffffff",
              maxWidth: "1000px",
            }}
          >
            Frontend Engineer specializing in React, Next.js, React Native & TypeScript
          </div>
          <div
            style={{
              fontSize: "24px",
              color: "#a1a1aa",
              maxWidth: "950px",
            }}
          >
            Accessible architectures, resilient state management, defendable performance, and practical Node.js backend capability.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: "16px",
          }}
        >
          {profileData.coreTechnologies.map((t, idx) => (
            <div
              key={idx}
              style={{
                fontSize: "18px",
                background: "#27272a",
                padding: "8px 18px",
                borderRadius: "8px",
                color: "#38bdf8",
                border: "1px solid #3f3f46",
              }}
            >
              {t.name}
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
