import type { Metadata } from "next";
import { Arimo, Montserrat } from "next/font/google";
import "../client/src/index.css";

const arimo = Arimo({
  subsets: ["latin", "vietnamese"],
  variable: "--font-arimo",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin", "vietnamese"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MIVIKIT | Tủ bếp inox theo không gian",
  description: "MIVIKIT thiết kế, sản xuất và lắp đặt tủ bếp inox cho căn hộ và nhà phố trên toàn quốc.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi">
      <body className={`${arimo.variable} ${montserrat.variable}`}>{children}</body>
    </html>
  );
}
