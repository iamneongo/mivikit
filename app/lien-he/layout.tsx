import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Liên hệ nhận tư vấn tủ bếp inox | MIVIKIT",
  description: "Gửi số đo hoặc ảnh hiện trạng để MIVIKIT tư vấn vật liệu, thiết bị và cấu hình tủ bếp phù hợp.",
};

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
