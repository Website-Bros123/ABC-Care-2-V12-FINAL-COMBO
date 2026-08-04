import "@/styles/globals.css";
import Providers from "./providers";

export const metadata = {
  title: "ABC Care 2 — Bothell & Mill Creek",
  description:
    "Licensed family child care in Bothell & Mill Creek, WA — a warm, safe, and engaging home where infants, toddlers, preschoolers, and school-age children learn, grow, and thrive.",
  icons: {
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'%3E%3Ccircle cx='24' cy='24' r='23' fill='%23F2793D'/%3E%3C/svg%3E"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
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
