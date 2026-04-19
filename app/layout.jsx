import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "DeftSquad — IT Consulting & AI Solutions",
  description:
    "Cloud-native development, AI solutions, and managed IT services engineered for your business.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="swiss-noise min-h-screen antialiased">{children}</body>
    </html>
  );
}
