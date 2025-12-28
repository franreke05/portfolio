import { Fraunces, Sora } from "next/font/google";
import CookieBanner from "./components/CookieBanner";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const sora = Sora({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata = {
  title: "Francisco Requena | Mobile Developer",
  description:
    "Freelance mobile developer for iOS and Android. Clean, fast, and maintainable apps.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${sora.variable} ${fraunces.variable}`}>
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
