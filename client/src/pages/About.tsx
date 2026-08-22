/**
 * MIVIKIT About — a restrained industrial editorial page: navy architecture, brushed steel, and quiet proof points.
 * Design intent: show capability through process, material, and the people who measure, fabricate, and install.
 */
import { ArrowDownRight, ArrowUpRight, MoveRight } from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";

const logoUrl = "/manus-storage/logomivikit_581de0ab.png";
const factoryUrl = "/manus-storage/mivikit-factory-cnc_9c72d3e7.jpg";
const factoryDetailUrl = "/manus-storage/mivikit-factory-detail_c6a7c8aa.jpg";
const measureUrl = "/manus-storage/mivikit-site-measure_eb89b272.jpg";
const projectLinearUrl = "/manus-storage/mivikit-showcase-linear_94f63f67.jpg";
const projectCornerUrl = "/manus-storage/mivikit-showcase-corner_c14f6002.jpg";
const projectIslandUrl = "/manus-storage/mivikit-showcase-island_41578961.jpg";

const process = [
  { number: "01", title: "Đo không gian bếp", text: "Ghi lại diện tích, nhu cầu, thiết bị, lối đi và các điểm chờ trước khi lên phương án." },
  { number: "02", title: "Chốt thiết kế", text: "Chọn vật liệu, cánh tủ và bố trí trên bản vẽ để bạn hình dung tổng thể." },
  { number: "03", title: "Hoàn thiện & lắp đặt", text: "Kiểm tra từng phần tại xưởng rồi lắp đặt theo bản vẽ tại công trình." },
];

const projects = [
  { title: "Biệt Thự Vinhomes Riverside", description: "Tủ bếp inox, cánh kính và bố cục mở cho căn bếp liền phòng khách.", image: projectLinearUrl },
  { title: "Căn Hộ Penthouse The Zei", description: "Cánh Acrylic, đảo bếp và mặt bàn được phối theo không gian rộng.", image: projectIslandUrl },
  { title: "Nhà Phố KĐT Vạn Phúc", description: "Hệ tủ chữ U, tủ cao và cánh gỗ tạo cảm giác ấm hơn cho nhà phố.", image: projectCornerUrl },
];

export default function About() {
  return (
    <div className="about-shell">
      <SiteHeader activePath="/ve-chung-toi" overlay />

      <main>
        <section className="about-hero">
          <div className="about-hero__image" style={{ backgroundImage: `url(${factoryUrl})` }} />
          <div className="about-hero__overlay" />
          <div className="about-hero__content">
            <p className="about-kicker">VỀ CHÚNG TÔI</p>
            <h1>Về MIVIKIT</h1>
            <p>MIVIKIT đo không gian, phối vật liệu và hoàn thiện tủ bếp cho căn hộ, nhà phố trên toàn quốc.</p>
            <a href="/#tu-van" className="about-button-ruby">Nhận tư vấn <ArrowDownRight size={18} /></a>
          </div>
        </section>

        <section className="about-production">
          <div className="production-feature">
            <figure className="production-feature__visual"><img src={factoryDetailUrl} alt="Chi tiết máy CNC gia công tấm inox tại xưởng MIVIKIT" /></figure>
            <div className="production-feature__content"><p className="about-kicker about-kicker--navy"><i /> MIVIKIT</p><h2>GIỚI THIỆU NHÀ MÁY MIVIKIT</h2><div className="production-feature__copy"><p>MIVIKIT chuyên sản xuất và lắp đặt hệ thống tủ bếp khung inox 304. Chúng tôi tập trung vào giải pháp lưu trữ gọn gàng, vật liệu chịu nước và kết cấu chắc chắn cho phòng bếp gia đình.</p><p>Khung tủ inox 304 kết hợp đa dạng vật liệu mặt cánh như kính cường lực, acrylic, nhôm hợp kim hoặc gỗ phủ melamine/laminate.</p></div><a className="production-feature__link" href="/#tu-van">Nhận tư vấn <ArrowDownRight size={17} /></a></div>
          </div>
        </section>

        <section className="about-process">
          <div className="about-process__heading"><p className="about-kicker about-kicker--navy"><i /> QUY TRÌNH</p><h2>Quy trình làm tủ bếp <em>từ đo đến lắp đặt.</em></h2></div>
          <div className="about-process__steps">
            {process.map((item) => <article key={item.number}><span>{item.number}</span><h3>{item.title}</h3><p>{item.text}</p><ArrowDownRight size={19} /></article>)}
          </div>
        </section>

        <section className="about-projects">
          <div className="about-projects__heading"><p className="about-kicker"><i /> MIVIKIT</p><h2>CÔNG TRÌNH THỰC TẾ</h2></div>
          <div className="about-projects__grid">
            {projects.map((project, index) => <article key={project.title} className={index === 0 ? "about-project-card about-project-card--featured" : "about-project-card"}><img src={project.image} alt={project.title} /><div><span>0{index + 1}</span><h3>{project.title}</h3><p>{project.description}</p><a href="/#tu-van">Xem dự án <ArrowUpRight size={17} /></a></div></article>)}
          </div>
        </section>

        <section className="about-closing">
          <div className="about-closing__image"><img src={measureUrl} alt="Kĩ thuật viên MIVIKIT đo đạc không gian bếp thực tế" /></div>
          <div className="about-closing__shade" />
          <div className="about-closing__content"><p>KHÔNG GIAN BẾP MIVIKIT</p><h2><span>Đo đúng không gian.</span><span>Chọn đúng vật liệu.</span><span>Hoàn thiện căn bếp vừa nhà bạn.</span></h2><a href="/#tu-van" className="about-closing__link">Nhận tư vấn <MoveRight size={17} /></a></div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
