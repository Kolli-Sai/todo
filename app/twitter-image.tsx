import { ImageResponse } from "next/server";
import NextImage from "next/image";
// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "Home Page";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#fff",
          fontSize: 32,
          fontWeight: 600,
        }}
      >
        <NextImage
          src={"/favicon-32x32.png"}
          alt="logo"
          width={32}
          height={32}
        />
        <div style={{ marginTop: 40 }}>Home Page N</div>
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
    }
  );
}
