import { ImageResponse } from "next/og";
import { profileData } from "@/content/profile";

export const alt = `${profileData.name} - ${profileData.role}`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

const chipColors = ["#3b82f6", "#60a5fa"];

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          fontFamily: "sans-serif",
          color: "#f1f5ff",
          background:
            "radial-gradient(circle at 10% 10%, rgba(59,130,246,0.55), transparent 45%), radial-gradient(circle at 90% 90%, rgba(96,165,250,0.45), transparent 50%), #0b1530",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
          <div
            style={{
              width: "64px",
              height: "64px",
              borderRadius: "18px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "28px",
              fontWeight: 800,
              color: "#fff",
              background: "linear-gradient(120deg, #3b82f6, #60a5fa)",
            }}
          >
            SK
          </div>
          <div style={{ fontSize: "30px", fontWeight: 700 }}>{profileData.name}</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <div style={{ fontSize: "76px", fontWeight: 800, lineHeight: 1.02, letterSpacing: "-0.04em" }}>
            {profileData.role}
          </div>
          <div style={{ fontSize: "28px", color: "#c3cde6", maxWidth: "950px" }}>
            {`${profileData.yearsOfExperience} years building fast, accessible web & mobile products.`}
          </div>
        </div>

        <div style={{ display: "flex", gap: "14px" }}>
          {profileData.coreTechnologies.map((t, i) => (
            <div
              key={t.name}
              style={{
                fontSize: "22px",
                fontWeight: 600,
                padding: "10px 22px",
                borderRadius: "999px",
                color: "#fff",
                background: "rgba(11,21,48,0.6)",
                border: `2px solid ${chipColors[i % chipColors.length]}`,
              }}
            >
              {t.name}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size },
  );
}
