/** Naval Estate content pages — restrained editorial showroom layouts, focused on material, image rhythm and calm hierarchy. */
import { FormEvent } from "react";
import { ArrowDownRight, ArrowUpRight, Check } from "lucide-react";
import { toast } from "sonner";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";

const linearUrl = "/manus-storage/mivikit-showcase-linear_94f63f67.jpg";
const cornerUrl = "/manus-storage/mivikit-showcase-corner_c14f6002.jpg";
const islandUrl = "/manus-storage/mivikit-showcase-island_41578961.jpg";
const tallUrl = "/manus-storage/mivikit-featured-tall_7d5bed4b.jpg";
const factoryUrl = "/manus-storage/mivikit-factory-cnc_9c72d3e7.jpg";
const factoryDetailUrl = "/manus-storage/mivikit-factory-detail_c6a7c8aa.jpg";
const measureUrl = "/manus-storage/mivikit-site-measure_eb89b272.jpg";
const journalMaterialUrl = "/manus-storage/mivikit-journal-material_d2465dba.jpg";
const journalApartmentUrl = "/manus-storage/mivikit-journal-apartment_c8d01103.jpg";
const journalPlanningUrl = "/manus-storage/mivikit-journal-planning_8fae13f6.jpg";

type PageIntroProps = { eyebrow: string; title: string; italic: string; description: string; image: string };
function PageIntro({ eyebrow, title, italic, description, image }: PageIntroProps) {
  return <section className="content-hero">
    <div className="content-hero__image" style={{ backgroundImage: `url(${image})` }} /><div className="content-hero__wash" />
    <div className="content-hero__copy"><p>{eyebrow}</p><h1>{title}<em>{italic}</em></h1><span>{description}</span></div>
  </section>;
}
function PageFrame({ activePath, children }: { activePath: string; children: React.ReactNode }) {
  return <div className="content-shell" id="top"><SiteHeader activePath={activePath} overlay /><main>{children}</main><SiteFooter /></div>;
}
const kitchenModels = [
  { no: "01", name: "Bếp chữ I", copy: "Một trục thao tác cho căn hộ hoặc bếp hẹp. Tủ và thiết bị được tính cùng một mặt tường.", image: linearUrl },
  { no: "02", name: "Bếp chữ L", copy: "Hai cạnh tủ chia khu rửa, sơ chế và nấu, đồng thời tận dụng phần góc nhà.", image: cornerUrl },
  { no: "03", name: "Bếp có đảo", copy: "Thêm mặt bàn cho sơ chế và kết nối với khu ăn khi lối đi quanh đảo đủ rộng.", image: islandUrl },
  { no: "04", name: "Hệ tủ cao", copy: "Gom tủ lạnh, lò nướng và đồ khô vào một mảng tủ cao để mặt bàn nhẹ hơn.", image: tallUrl },
];

export function KitchenPage() {
  return <PageFrame activePath="/tu-bep"><PageIntro eyebrow="TỦ BẾP MIVIKIT" title="Các kiểu tủ bếp" italic="cho từng không gian." description="Tủ chữ I, chữ L, tủ có đảo và tủ cao cho căn hộ, nhà phố." image={linearUrl} />
    <section className="content-section content-section--paper"><div className="content-section__head"><p>BỐ TRÍ THEO DIỆN TÍCH VÀ NHU CẦU SỬ DỤNG</p><h2>CÁC KIỂU TỦ BẾP</h2></div><div className="model-grid">{kitchenModels.map((item) => <article key={item.no}><div className="model-grid__image"><img src={item.image} alt={item.name} /></div><div className="model-grid__meta"><span>{item.no}</span><div><h3>{item.name}</h3><p>{item.copy}</p></div></div></article>)}</div></section>
    <section className="split-panel"><div className="split-panel__image"><img src={measureUrl} alt="Đo đạc không gian bếp thực tế" /></div><div className="split-panel__copy"><p>ĐO ĐẠC VÀ LÊN BẢN VẼ</p><h2>THIẾT KẾ THEO THỰC TẾ</h2><span>MIVIKIT ghi lại vị trí cửa, đường điện nước, thiết bị và lối đi. Bản vẽ được chỉnh theo số đo thật trước khi chuyển sang sản xuất.</span><a className="content-button" href="/lien-he">Nhận tư vấn <ArrowDownRight size={18} /></a></div></section>
  </PageFrame>;
}

const accessoryGroups = [
  { title: "Khu rửa & sơ chế", items: ["Chậu rửa liền bàn", "Vòi bếp", "Khoang dưới chậu"], image: linearUrl, alt: "Khu bếp inox với chậu rửa và mặt chuẩn bị" },
  { title: "Hệ lưu trữ", items: ["Ray kéo", "Giá nâng hạ", "Kệ góc"], image: cornerUrl, alt: "Hệ tủ bếp góc và không gian lưu trữ" },
  { title: "Thiết bị và tủ cao", items: ["Lò nướng", "Máy hút mùi", "Bếp từ"], image: tallUrl, alt: "Hệ tủ cao tích hợp thiết bị âm tủ" },
];
export function AccessoriesPage() {
  return <PageFrame activePath="/phu-kien-thiet-bi-bep"><PageIntro eyebrow="MIVIKIT" title="PHỤ KIỆN & THIẾT BỊ" italic="" description="Chọn phụ kiện và thiết bị theo khoang tủ, tầm với và thói quen nấu ăn." image={tallUrl} />
    <section className="content-section accessory-section"><div className="content-section__head"><p>KHU RỬA · LƯU TRỮ · THIẾT BỊ</p><h2>PHỤ KIỆN VÀ THIẾT BỊ TRONG TỦ BẾP</h2></div><div className="accessory-grid">{accessoryGroups.map((group, index) => <article key={group.title}><div className="accessory-grid__image"><img src={group.image} alt={group.alt} /></div><span>0{index + 1}</span><h3>{group.title}</h3>{group.items.map((item) => <p key={item}><Check size={14} /> {item}</p>)}</article>)}</div></section>
  </PageFrame>;
}

const cases = [
  { title: "Biệt Thự Vinhomes Riverside", detail: "Tủ bếp inox, cánh kính và bố cục mở cho căn bếp liền phòng khách.", image: linearUrl },
  { title: "Căn Hộ Penthouse The Zei", detail: "Cánh Acrylic, đảo bếp và mặt bàn được phối theo không gian rộng.", image: islandUrl },
  { title: "Nhà Phố KĐT Vạn Phúc", detail: "Hệ tủ chữ U, tủ cao và khu thiết bị được chia theo lối đi của nhà phố.", image: cornerUrl },
  { title: "Biệt Thự Chateau Quận 7", detail: "Inox, đá Ceramic và tủ cao được phối thành một hệ thống gọn, liền mạch.", image: tallUrl },
];
export function ProjectsPage() {
  const leadCase = cases[0];
  const remainingCases = cases.slice(1);
  return <PageFrame activePath="/cong-trinh-thuc-te">
    <PageIntro eyebrow="MIVIKIT" title="CÔNG TRÌNH THỰC TẾ" italic="" description="Tham khảo các công trình đã hoàn thiện với nhiều kiểu tủ, vật liệu và cách bố trí khác nhau." image={islandUrl} />
    <section className="projects-cluster"><div className="projects-cluster__lead"><div className="projects-cluster__lead-image"><img src={leadCase.image} alt={leadCase.title} /></div><div className="projects-cluster__lead-copy"><p>DỰ ÁN TIÊU BIỂU <span>01 / 04</span></p><h2>{leadCase.title}</h2><em>{leadCase.detail}</em><a href="/lien-he">Trao đổi về dự án <ArrowUpRight size={17} /></a></div></div><div className="projects-cluster__grid">{remainingCases.map((item, index) => <article key={item.title}><img src={item.image} alt={item.title} /><div><span>0{index + 2} / 04</span><h2>{item.title}</h2><p>{item.detail}</p><a href="/lien-he" aria-label={`Trao đổi về ${item.title}`}><ArrowUpRight size={17} /></a></div></article>)}</div></section>
  </PageFrame>;
}

const dealerPoints = [
    ["Sản phẩm", "Tủ bếp inox, cánh và phụ kiện được chọn theo từng cấu hình, không gian và phân khúc dự án."], ["Hỗ trợ thiết kế", "Cùng rà không gian, thiết bị và yêu cầu hoàn thiện trước khi chốt phương án."], ["Phối hợp triển khai", "Thống nhất đầu mối, tiến độ và cách bàn giao để mỗi dự án đi đúng bản vẽ."],
];
export function DealerPage() {
  return <PageFrame activePath="/chinh-sach-dai-ly"><PageIntro eyebrow="MIVIKIT" title="CHÍNH SÁCH ĐẠI LÝ" italic="" description="Thông tin về sản phẩm, hỗ trợ thiết kế và cách phối hợp triển khai cùng MIVIKIT." image={factoryUrl} />
    <section className="content-section dealer-section"><div className="content-section__head"><p>ĐẠI LÝ MIVIKIT</p><h2>TRAO ĐỔI HỢP TÁC</h2></div><div className="dealer-grid">{dealerPoints.map(([title, copy], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p></article>)}</div><div className="dealer-callout"><div><strong>Bạn đang tìm đơn vị tủ bếp inox để cùng triển khai?</strong><span>Gửi thông tin đơn vị, khu vực hoạt động và loại dự án bạn đang quan tâm.</span></div><a className="content-button" href="/lien-he">Trao đổi cùng MIVIKIT <ArrowDownRight size={18} /></a></div></section>
  </PageFrame>;
}

const articles = [
  { tag: "Kinh nghiệm", title: "Chọn vật liệu tủ bếp từ cách gia đình bạn sử dụng", time: "Đọc 4 phút", image: journalMaterialUrl },
  { tag: "Tư vấn", title: "Bếp inox có phù hợp với căn hộ hay không?", time: "Đọc 3 phút", image: journalApartmentUrl },
  { tag: "Chuẩn bị", title: "Ba thông tin nên có trước khi đo bếp", time: "Đọc 5 phút", image: journalPlanningUrl },
  { tag: "Bố trí", title: "Lối đi trong bếp nên chừa bao nhiêu là vừa?", time: "Đọc 4 phút", image: linearUrl },
  { tag: "Thiết bị", title: "Chốt thiết bị trước hay sau khi làm tủ bếp?", time: "Đọc 3 phút", image: cornerUrl },
  { tag: "Bảo quản", title: "Lau chùi bề mặt inox trong khu vực nấu", time: "Đọc 2 phút", image: factoryDetailUrl },
];
export function NewsPage() {
  return <PageFrame activePath="/tin-tuc"><PageIntro eyebrow="MIVIKIT" title="TIN TỨC" italic="" description="Cập nhật thông tin về tủ bếp, vật liệu, thiết bị và các công trình MIVIKIT." image={factoryDetailUrl} />
    <section className="content-section content-section--paper"><div className="article-grid">{articles.map((article) => <article key={article.title}><img src={article.image} alt={article.title} /><span>{article.tag}</span><time>{article.time}</time><h2>{article.title}</h2><a href="/lien-he">Đọc bài <ArrowUpRight size={16} /></a></article>)}</div></section>
  </PageFrame>;
}

export function ContactPage() {
  const submit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); toast.success("MIVIKIT đã nhận thông tin của bạn.", { description: "MIVIKIT sẽ liên hệ để trao đổi về nhu cầu của bạn." }); event.currentTarget.reset(); };
  return <PageFrame activePath="/lien-he"><PageIntro eyebrow="MIVIKIT" title="LIÊN HỆ" italic="" description="Gửi thông tin liên hệ để MIVIKIT trao đổi về tủ bếp và thiết bị." image={measureUrl} />
    <section className="contact-page"><div className="contact-page__copy"><p>MIVIKIT</p><h2>THÔNG TIN TRAO ĐỔI</h2><span>Cho MIVIKIT biết diện tích, thiết bị dự kiến và nhu cầu của bạn.</span><div><b>LIÊN HỆ</b><a href="mailto:info@mivikit.vn">info@mivikit.vn</a></div></div><form className="contact-form" onSubmit={submit}><label>Họ và tên<input required name="name" placeholder="Tên của bạn" /></label><label>Số điện thoại<input required name="phone" type="tel" placeholder="Số điện thoại để MIVIKIT liên hệ" /></label><label>Nhu cầu<select defaultValue=""><option value="" disabled>Chọn nhu cầu</option><option>Làm tủ bếp mới</option><option>Cải tạo bếp hiện có</option><option>Tư vấn vật liệu và cấu hình</option></select></label><label>Ghi chú<textarea name="note" placeholder="Mô tả ngắn về nhu cầu của bạn" /></label><button type="submit" className="content-button">Nhận tư vấn <ArrowDownRight size={18} /></button></form></section>
  </PageFrame>;
}
