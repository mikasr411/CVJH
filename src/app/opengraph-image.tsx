import { ImageResponse } from "next/og";
import { business } from "@/data/business";

export const alt = `${business.name} — junk removal in Fresno and the Central Valley`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#111418",
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
        }}
      >
        <div style={{ color: "#22c55e", fontSize: 28, letterSpacing: 6 }}>
          FRESNO • CENTRAL VALLEY
        </div>
        <div style={{ fontSize: 88, fontWeight: 700, lineHeight: 0.95, marginTop: 24 }}>
          Junk Gone.
        </div>
        <div style={{ fontSize: 88, fontWeight: 700, lineHeight: 0.95, color: "#22c55e" }}>
          Space Back.
        </div>
        <div style={{ marginTop: 36, fontSize: 32 }}>{business.name}</div>
      </div>
    ),
    size,
  );
}
