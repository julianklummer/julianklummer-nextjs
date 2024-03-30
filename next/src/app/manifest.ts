import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Julian Klummer | Portfolio",
    short_name: "Julian Klummer | Portfolio",
    description: "Personal portfolio website of web developer Julian Klummer",
    start_url: "/",
    display: "standalone",
    background_color: "#242424",
    theme_color: "#242424",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/assets/favicon/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/assets/favicon/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
