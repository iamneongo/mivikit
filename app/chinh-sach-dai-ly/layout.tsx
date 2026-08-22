import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hợp tác đại lý tủ bếp inox | MIVIKIT",
  description: "Trao đổi cùng MIVIKIT về sản phẩm, thiết kế và cách phối hợp triển khai tủ bếp inox theo từng dự án.",
};

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
