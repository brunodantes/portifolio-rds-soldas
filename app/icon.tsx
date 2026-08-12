import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 7,
          background: "linear-gradient(150deg, #f6f8fa 0%, #b9c0cb 46%, #f0f3f6 58%, #98a0ac 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 15,
            fontWeight: 900,
            letterSpacing: -0.6,
            color: "#0a1838",
          }}
        >
          RDR
        </div>
      </div>
    ),
    { ...size }
  );
}
