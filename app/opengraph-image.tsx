import { ImageResponse, ImageResponseOptions } from "next/server";
import NextImage from "next/image";
export const runtime = "edge";
export const alt = "Home Page";
export const sizes = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

async function Image() {
  return new ImageResponse(
    (
      <div tw=" w-full h-full flex flex-col justify-center items-center gap-4">
        <div tw=" flex justify-center gap-4">
          <NextImage src={"/favicon-32x32.png"} alt="logo" />
          <h1 tw=" text-4xl font-bold">Home Page</h1>
        </div>
      </div>
    ),
    {
      ...sizes,
    }
  );
}

export default Image;
