import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Phụ kiện và thiết bị tủ bếp | MIVIKIT",
  description: "Chọn phụ kiện, thiết bị và khoang lưu trữ theo tầm với, thao tác nấu và cấu hình tủ bếp inox.",
};

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
