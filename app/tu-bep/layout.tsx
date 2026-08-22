import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tủ bếp inox theo không gian | MIVIKIT",
  description: "Khám phá tủ bếp inox chữ I, chữ L, có đảo và hệ tủ cao, thiết kế theo không gian thực tế.",
};

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
