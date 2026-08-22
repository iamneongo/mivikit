/** MIVIKIT shared chrome — one calm navigation and footer system across every public page. */
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";

const logoUrl = "/manus-storage/logomivikit_581de0ab.png";

export const navigation = [
  { label: "Trang chủ", href: "/" },
  { label: "Về MIVIKIT", href: "/ve-chung-toi" },
  { label: "Tủ bếp", href: "/tu-bep" },
  { label: "Phụ kiện & thiết bị", href: "/phu-kien-thiet-bi-bep" },
  { label: "Dự án", href: "/cong-trinh-thuc-te" },
  { label: "Đại lý", href: "/chinh-sach-dai-ly" },
  { label: "Tin tức", href: "/tin-tuc" },
  { label: "Liên hệ", href: "/lien-he" },
];

export function SiteHeader({ activePath, overlay = false }: { activePath?: string; overlay?: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const currentPath = pathname || activePath || "/";

  useEffect(() => {
    if (!overlay) return;
    const update = () => setScrolled(window.scrollY > 24);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [overlay]);

  useEffect(() => {
    const body = document.body;
    const html = document.documentElement;
    const previousBodyOverflow = body.style.overflow;
    const previousHtmlOverflow = html.style.overflow;

    if (menuOpen) {
      body.style.overflow = "hidden";
      html.style.overflow = "hidden";
    }

    return () => {
      body.style.overflow = previousBodyOverflow;
      html.style.overflow = previousHtmlOverflow;
    };
  }, [menuOpen]);

  const headerClass = `global-header ${overlay ? "global-header--overlay" : "global-header--solid"} ${scrolled ? "global-header--scrolled" : ""}`;

  return <>
    <header className={headerClass}>
      <Link className="global-brand" href="/" aria-label="MIVIKIT - Trang chủ"><img src={logoUrl} alt="MIVIKIT" /></Link>
      <nav className="global-nav" aria-label="Điều hướng chính">
        {navigation.map((item) => {
          const isActive = currentPath === item.href;
          return <Link key={item.href} href={item.href} className={isActive ? "global-nav__active" : undefined} aria-current={isActive ? "page" : undefined}>{item.label}</Link>;
        })}
      </nav>
      <Link className="global-header__cta" href="/lien-he">Nhận tư vấn <ArrowUpRight size={15} /></Link>
      <button type="button" className="global-menu-button" aria-label={menuOpen ? "Đóng menu" : "Mở menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={24} /> : <Menu size={25} />}</button>
    </header>
    <div className={menuOpen ? "global-mobile-menu global-mobile-menu--open" : "global-mobile-menu"}>
      <span>MIVIKIT</span>
      {navigation.map((item) => {
        const isActive = currentPath === item.href;
        return <Link key={item.href} href={item.href} className={isActive ? "global-mobile-menu__active" : undefined} aria-current={isActive ? "page" : undefined} onClick={() => setMenuOpen(false)}>{item.label}<ArrowUpRight size={18} /></Link>;
      })}
    </div>
  </>;
}

export function SiteFooter() {
  return <footer className="global-footer">
    <div className="global-footer__main">
      <div className="global-footer__brand"><img src={logoUrl} alt="MIVIKIT" /><p>Tủ bếp inox, thiết kế theo không gian và hoàn thiện theo căn nhà.</p></div>
      <div className="global-footer__links"><span>KHÁM PHÁ</span><a href="/tu-bep">Tủ Bếp</a><a href="/cong-trinh-thuc-te">Công Trình Thực Tế</a><a href="/tin-tuc">Tin Tức</a></div>
      <div className="global-footer__links"><span>KẾT NỐI</span><a href="/lien-he">Nhận tư vấn</a><a href="/chinh-sach-dai-ly">Đại lý</a><a href="/ve-chung-toi">Về MIVIKIT</a></div>
      <a className="global-footer__top" href="#top" aria-label="Về đầu trang"><ArrowUpRight size={20} /></a>
    </div>
    <div className="global-footer__bottom"><span>© 2026 MIVIKIT. All rights reserved.</span><span>TỦ BẾP INOX · THIẾT KẾ THEO KHÔNG GIAN</span></div>
  </footer>;
}
