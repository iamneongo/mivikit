import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Công trình tủ bếp inox thực tế | MIVIKIT",
  description: "Tham khảo các cấu hình tủ bếp inox, cánh kính và cách hoàn thiện theo từng không gian công trình.",
};

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
