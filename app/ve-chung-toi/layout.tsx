import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Về MIVIKIT | Đo, thiết kế và hoàn thiện tủ bếp inox",
  description: "Tìm hiểu cách MIVIKIT đo không gian, phối vật liệu và hoàn thiện tủ bếp inox cho căn hộ, nhà phố.",
};

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
