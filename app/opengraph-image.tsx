import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Supraja Group - Progress with Purpose";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background: "linear-gradient(135deg, #07152d 0%, #0d2345 56%, #8b5f1a 100%)",
          color: "white",
          padding: "72px 82px",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 430,
            height: 430,
            right: -90,
            top: -120,
            borderRadius: "50%",
            border: "2px solid rgba(245, 186, 76, 0.3)",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 300,
            height: 300,
            right: 25,
            bottom: -135,
            borderRadius: "50%",
            background: "rgba(242, 177, 52, 0.14)",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            zIndex: 2,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <div
              style={{
                width: 68,
                height: 68,
                borderRadius: 18,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "2px solid #efb44a",
                color: "#efb44a",
                fontWeight: 800,
                fontSize: 26,
              }}
            >
              SG
            </div>
            <div style={{ fontSize: 30, fontWeight: 800, letterSpacing: -0.5 }}>
              Supraja Group
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", maxWidth: 900 }}>
            <div
              style={{
                display: "flex",
                color: "#efb44a",
                fontSize: 22,
                fontWeight: 700,
                letterSpacing: 3.5,
                textTransform: "uppercase",
                marginBottom: 22,
              }}
            >
              Progress with Purpose
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 66,
                lineHeight: 1.04,
                fontWeight: 800,
                letterSpacing: -2.5,
              }}
            >
              Building responsible businesses that create lasting value.
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: 20,
              color: "#d7dfeb",
            }}
          >
            <div style={{ display: "flex" }}>Real Estate • Hospitality • Food & Tradition • Community</div>
            <div style={{ display: "flex", color: "#efb44a", fontWeight: 700 }}>suprajagroup.com</div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
