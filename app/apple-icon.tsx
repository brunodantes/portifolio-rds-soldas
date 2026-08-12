import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#061027",
        }}
      >
        <div
          style={{
            width: "78%",
            height: "78%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 34,
            background: "linear-gradient(150deg, #f6f8fa 0%, #b9c0cb 46%, #f0f3f6 58%, #98a0ac 100%)",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 62,
              fontWeight: 900,
              letterSpacing: -2,
              color: "#0a1838",
            }}
          >
            RDR
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
