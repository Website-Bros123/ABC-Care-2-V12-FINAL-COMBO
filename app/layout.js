import "@/styles/globals.css";
import Providers from "./providers";

export const metadata = {
  title: "ABC Care 2 — Bothell & Mill Creek",
  description:
    "Licensed family child care in Bothell & Mill Creek, WA — a warm, safe home where infants through school-age kids learn and thrive.",
  verification: {
    google: "nkQ5DIdsdc9J4UrIXdyz6RipIHWoBT39LoVToGq5dtY",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@500;600;700;800&family=Nunito:wght@400;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#1c3a5e" />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
