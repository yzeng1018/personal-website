import type { Metadata } from "next";
import { Instrument_Serif, Plus_Jakarta_Sans } from "next/font/google";
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
    default: "曾言 / Zeng Yan",
    template: "%s — 曾言 / Zeng Yan",
  },
  description:
    "AI 产品经理，也懂商业。我在思考 AI 如何重构产品、组织和市场的边界。",
  openGraph: {
    title: "曾言 / Zeng Yan",
    description:
      "AI 产品经理，也懂商业。我在思考 AI 如何重构产品、组织和市场的边界。",
    type: "website",
    locale: "zh_CN",
  },
  twitter: {
    card: "summary",
    title: "曾言 / Zeng Yan",
    description:
      "AI 产品经理，也懂商业。我在思考 AI 如何重构产品、组织和市场的边界。",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="zh"
      className={`${instrumentSerif.variable} ${plusJakartaSans.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
