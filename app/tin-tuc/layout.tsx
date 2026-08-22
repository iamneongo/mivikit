import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tư vấn tủ bếp inox | MIVIKIT",
  description: "Ghi chú về tủ bếp inox, bố trí bếp, cánh kính, phụ kiện và những điều cần chuẩn bị trước khi làm tủ bếp.",
};

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
