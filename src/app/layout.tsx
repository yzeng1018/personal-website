import type { Metadata } from "next";
import { Instrument_Serif, Plus_Jakarta_Sans } from "next/font/google";
import Footer from "@/components/Footer";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Samuel Zeng",
    template: "%s — Samuel Zeng",
  },
  description:
    "Product Director at Trip.com Group. Math PhD. I build AI-native consumer products at scale.",
  openGraph: {
    title: "Samuel Zeng",
    description:
      "Product Director at Trip.com Group. Math PhD. I build AI-native consumer products at scale.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Samuel Zeng",
    description:
      "Product Director at Trip.com Group. Math PhD. I build AI-native consumer products at scale.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${plusJakartaSans.variable}`}
    >
      <body>
        <div style={{ minHeight: "100dvh", display: "flex", flexDirection: "column" }}>
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
