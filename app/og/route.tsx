import { ImageResponse } from "next/og";
import { metaData } from "../config";

export const runtime = "edge";

export async function GET() {
  const title = metaData.title;
  const description = metaData.description;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "white",
          padding: "40px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              fontSize: "60px",
              fontWeight: "bold",
              color: "black",
              marginBottom: "20px",
            }}
          >
            {title}
          </h1>
          <p
            style={{
              fontSize: "30px",
              color: "#666",
              maxWidth: "800px",
            }}
          >
            {description}
          </p>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
