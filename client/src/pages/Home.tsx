/**
 * MIVIKIT — Naval Estate design system.
 * Editorial luxury showroom: MIVIKIT navy, ruby-red technical lines, brushed-metal texture.
 */
import { FormEvent } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  MoveRight,
  ShieldCheck,
} from "lucide-react";
import { toast } from "sonner";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";

const logoUrl = "/manus-storage/logomivikit_581de0ab.png";
const heroUrl = "/manus-storage/mivikit-hero-kitchen_aa7754f2.jpg";
const materialUrl = "/manus-storage/mivikit-material-detail_780f4072.jpg";
const islandUrl = "/manus-storage/mivikit-kitchen-island_783e3be0.jpg";
const darkKitchenUrl = "/manus-storage/mivikit-kitchen-dark_35669729.jpg";
const kitchenLinearUrl = "/manus-storage/mivikit-featured-linear_92e46656.jpg";
const kitchenCornerUrl = "/manus-storage/mivikit-featured-corner_9a1c6a3b.jpg";
const kitchenIslandUrl = "/manus-storage/mivikit-featured-island_93514e64.jpg";
const kitchenTallUrl = "/manus-storage/mivikit-featured-tall_7d5bed4b.jpg";
const showcaseLinearUrl = "/manus-storage/mivikit-showcase-linear_94f63f67.jpg";
const showcaseCornerUrl = "/manus-storage/mivikit-showcase-corner_c14f6002.jpg";
const showcaseIslandUrl = "/manus-storage/mivikit-showcase-island_41578961.jpg";
const journalMaterialUrl = "/manus-storage/mivikit-journal-material_d2465dba.jpg";
const journalApartmentUrl = "/manus-storage/mivikit-journal-apartment_c8d01103.jpg";
const journalPlanningUrl = "/manus-storage/mivikit-journal-planning_8fae13f6.jpg";

const kitchenTypes = [
  {
    number: "01",
    name: "Bếp chữ I",
    description: "Đặt bồn rửa, vùng sơ chế và bếp nấu trên một trục. Phù hợp với căn hộ có một mặt tường bếp.",
    detail: "Một mặt tường",
    image: kitchenLinearUrl,
  },
  {
    number: "02",
    name: "Bếp chữ L",
    description: "Tận dụng hai cạnh tường để tách khu rửa, sơ chế và nấu. Phần góc được tính cùng hệ tủ.",
    detail: "Tận dụng góc nhà",
    image: kitchenCornerUrl,
  },
  {
    number: "03",
    name: "Đảo bếp",
    description: "Thêm mặt bàn cho sơ chế và một điểm kết nối với khu ăn. Cần đủ khoảng trống cho lối đi quanh đảo.",
    detail: "Bếp mở",
    image: kitchenIslandUrl,
  },
  {
    number: "04",
    name: "Hệ tủ cao",
    description: "Gom tủ lạnh, lò nướng và thực phẩm khô vào một mảng tủ cao, giúp mặt bàn luôn thoáng.",
    detail: "Tủ cao và kho",
    image: kitchenTallUrl,
  },
];

const craftsmanship = [
  "Ngăn kéo và khoang tủ được sắp xếp theo trình tự nấu.",
  "Thiết bị và đồ dùng nằm trong tầm với khi thao tác.",
  "Không gian lưu trữ được chia theo những gì gia đình bạn sử dụng.",
];

const featuredKitchens = [
  { number: "01", name: "MIVI Linear", detail: "Tủ bếp chữ I cho căn hộ", label: "Gọn trên một mặt tường", image: showcaseLinearUrl },
  { number: "02", name: "MIVI Corner", detail: "Tủ bếp chữ L cho nhà phố", label: "Tận dụng phần góc", image: showcaseCornerUrl },
  { number: "03", name: "MIVI Island", detail: "Tủ bếp có đảo sơ chế", label: "Cho không gian bếp mở", image: showcaseIslandUrl },
];

const projectList = [
  { number: "01", context: "CĂN HỘ · MỘT MẶT TƯỜNG", name: "Bếp chữ I cho căn hộ", type: "Tủ dưới · Tủ treo · Khu nấu", summary: "Một trục thao tác rõ ràng, giữ lại lối đi và khoảng trống cho bàn ăn.", image: showcaseLinearUrl },
  { number: "02", context: "NHÀ PHỐ · GÓC BẾP LIỀN KỀ", name: "Bếp chữ L cho nhà phố", type: "Tủ góc · Tủ cao · Kho khô", summary: "Hai cạnh tường chia khu rửa, sơ chế và nấu mà không bỏ phí phần góc.", image: showcaseCornerUrl },
  { number: "03", context: "NHÀ Ở · BẾP MỞ CÓ ĐẢO", name: "Bếp có đảo cho không gian mở", type: "Đảo sơ chế · Khu ăn · Lối đi", summary: "Đảo bếp thêm mặt chuẩn bị và điểm kết nối với phòng khách, vẫn giữ lối đi quanh tủ.", image: showcaseIslandUrl },
];

const journalList = [
  { date: "4 phút đọc", category: "Vật liệu", title: "Tủ bếp inox có hợp với căn bếp gia đình?", summary: "Nhìn vào hơi ẩm, dầu mỡ, tần suất nấu và cách bạn muốn chăm sóc bề mặt.", image: journalMaterialUrl },
  { date: "3 phút đọc", category: "Bố trí", title: "Chọn tủ bếp inox cho căn hộ nhỏ", summary: "Ba điểm cần đo trước: lối đi, vị trí thiết bị và khoảng mở của cánh tủ.", image: journalApartmentUrl },
  { date: "5 phút đọc", category: "Chuẩn bị", title: "Cần chuẩn bị gì trước buổi tư vấn?", summary: "Diện tích, thiết bị dự kiến và vài thói quen nấu ăn sẽ giúp buổi tư vấn đi thẳng vào việc.", image: journalPlanningUrl },
];

function scrollTo(target: string) {
  document.querySelector(target)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Home() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    toast.success("MIVIKIT đã nhận thông tin của bạn.", {
      description: "Đội ngũ sẽ liên hệ để trao đổi thêm về không gian bếp.",
    });
    event.currentTarget.reset();
  };

  return (
    <div className="site-shell">
      <SiteHeader activePath="/" overlay />

      <main id="trang-chu">
        <section className="hero-section" aria-label="Tủ bếp inox MIVIKIT">
          <div className="hero-image" style={{ backgroundImage: `url(${heroUrl})` }} />
          <div className="hero-overlay" />
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-content">
            <div className="hero-kicker">TỦ BẾP INOX MIVIKIT</div>
            <h1>
              Tủ Bếp Inox Mivikit
            </h1>
            <p>
              Sản xuất trực tiếp từ khung inox chống gỉ, mối mọt và ngấm nước. Đo đạc, thiết kế và thi công theo kích thước thực tế căn hộ.
            </p>
            <div className="hero-actions">
              <button className="button-ruby" onClick={() => scrollTo("#tu-van")}>
                Nhận tư vấn <ArrowDownRight size={18} />
              </button>
              <button className="text-link text-link--light" onClick={() => scrollTo("#khong-gian-bep")}>
                Xem mẫu tủ bếp <MoveRight size={18} />
              </button>
            </div>
          </div>
          <div className="hero-spec hero-spec--left"><span>01</span><i /> TỦ BẾP INOX CHO KHU VỰC NẤU</div>
          <div className="hero-spec hero-spec--right"><span>02</span><i /> ĐO, THIẾT KẾ, LẮP ĐẶT</div>
          <button className="hero-scroll" onClick={() => scrollTo("#giai-phap-toi-uu")} aria-label="Cuộn để xem thêm">
            <span>CUỘN ĐỂ KHÁM PHÁ</span><ArrowDownRight size={18} />
          </button>
        </section>

        <section className="intro-section" id="giai-phap-toi-uu">
          <div className="intro-copy">
            <p className="eyebrow">GIẢI PHÁP TỐI ƯU KHÔNG GIAN BẾP</p>
            <h2>Sản xuất tủ bếp khung inox 304 <em>kết hợp đa dạng chất liệu cánh.</em></h2>
          </div>
          <div className="intro-aside">
            <p>
              Cánh kính, acrylic, nhôm hợp kim hoặc gỗ. Mỗi mẫu thiết kế được đo đạc và gia công trực tiếp theo diện tích căn hộ.
            </p>
            <button className="text-link text-link--navy" onClick={() => scrollTo("#khong-gian-bep")}>
              Xem các cách bố trí <ArrowUpRight size={18} />
            </button>
          </div>
        </section>

        <section className="collection-section" id="khong-gian-bep">
          <div className="collection-topline">
            <div>
              <p className="eyebrow">TỦ BẾP MIVIKIT</p>
              <h2>CÁC MẪU TỦ BẾP NỔI BẬT</h2>
            </div>
            <p className="collection-caption">Từ căn hộ nhỏ đến nhà phố rộng, mỗi mẫu tủ được tính theo diện tích và nhịp sử dụng riêng.</p>
          </div>
          <div className="kitchen-grid">
            {kitchenTypes.map((item) => (
              <article className="kitchen-card" key={item.number}>
                <div className="kitchen-card__top"><span>{item.number}</span><ArrowUpRight size={18} /></div>
                <img className="kitchen-card__image" src={item.image} alt={`Tủ bếp inox MIVIKIT ${item.name}`} />
                <div className="kitchen-card__content">
                  <p>{item.detail}</p>
                  <h3>{item.name}</h3>
                  <span>{item.description}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="signature-section" id="uu-diem">
          <div className="signature-image-wrap">
            <img src={darkKitchenUrl} alt="Không gian bếp inox MIVIKIT với tủ cao và ánh sáng ấm" />
          </div>
          <div className="signature-copy">
            <p className="eyebrow eyebrow--light">ƯU ĐIỂM</p>
            <h2>Bố trí gọn gàng. <em>Dễ lấy, dễ cất.</em></h2>
            <p className="signature-description">
              MIVIKIT sắp xếp tủ, ngăn kéo và mặt bàn theo cách bạn nấu ăn. Mỗi món đồ có vị trí rõ ràng, để căn bếp dễ dùng và dễ giữ sạch.
            </p>
            <div className="craft-list">
              {craftsmanship.map((item) => <div key={item}><Check size={16} /> <span>{item}</span></div>)}
            </div>
            <button className="text-link text-link--light" onClick={() => scrollTo("#tu-bep-mivikit")}>
              Xem vật liệu và kết cấu <MoveRight size={18} />
            </button>
          </div>
        </section>

        <section className="material-section" id="tu-bep-mivikit">
          <div className="material-copy">
            <p className="eyebrow">VẬT LIỆU TỦ BẾP</p>
            <h2>Tủ bếp inox. <em>Phối nhiều loại cánh.</em></h2>
            <p>
              Khung inox tạo nền chắc chắn cho hệ tủ. Phần cánh, tay nắm và mặt bàn được phối theo thiết kế tổng thể của căn bếp.
            </p>
            <p className="material-note">Bạn có thể chọn cánh kính, acrylic, nhôm hợp kim hoặc gỗ theo phong cách mong muốn.</p>
            <button className="text-link text-link--navy" onClick={() => scrollTo("#cac-mau")}>Xem các mẫu tủ <ArrowUpRight size={18} /></button>
          </div>
          <div className="material-image-wrap">
            <img src={materialUrl} alt="Chi tiết bề mặt inox chải xước và đường nét tủ bếp MIVIKIT" />
          </div>
        </section>

        <section className="process-section" id="cac-mau">
          <div className="process-heading">
            <p className="eyebrow">MẪU TỦ BẾP</p>
            <h2>Chọn kiểu tủ bếp <em>theo diện tích căn nhà.</em></h2>
          </div>
          <div className="process-list">
            <article>
              <span>01</span>
              <div><h3>Tủ bếp chữ I</h3><p>Phù hợp với căn hộ hoặc bếp hẹp. Tủ và thiết bị nằm gọn trên một mặt tường.</p></div>
              <ChevronRight size={22} />
            </article>
            <article>
              <span>02</span>
              <div><h3>Tủ bếp chữ L</h3><p>Hai cạnh tủ chia khu rửa, sơ chế và nấu, đồng thời tận dụng phần góc nhà.</p></div>
              <ChevronRight size={22} />
            </article>
            <article>
              <span>03</span>
              <div><h3>Tủ bếp có đảo</h3><p>Thêm mặt bàn để sơ chế hoặc dùng như quầy ngồi, phù hợp với bếp mở có lối đi rộng.</p></div>
              <ChevronRight size={22} />
            </article>
          </div>
        </section>

        <section className="featured-section" id="tu-bep-noi-bat">
          <div className="featured-heading">
            <div>
              <p className="eyebrow">MẪU TỦ BẾP THAM KHẢO</p>
              <h2>Tham khảo các mẫu tủ bếp <em>cho căn hộ và nhà phố.</em></h2>
            </div>
            <button className="text-link text-link--navy" onClick={() => scrollTo("#tu-van")}>Nhận tư vấn <ArrowUpRight size={18} /></button>
          </div>
          <div className="featured-gallery">
            {featuredKitchens.map((item) => (
              <article className={`featured-piece ${item.number === "01" ? "featured-piece--lead" : ""}`} key={item.number}>
                <div className="featured-piece__image"><img src={item.image} alt={`Mẫu tủ bếp inox ${item.name}`} /></div>
                <div className="featured-piece__meta"><span>{item.number}</span><div><h3>{item.detail}</h3><p>{item.label}</p></div></div>
              </article>
            ))}
          </div>
        </section>

        <section className="project-section" id="cong-trinh-thuc-te">
          <div className="project-heading">
            <div>
              <p className="eyebrow eyebrow--light">DỰ ÁN MIVIKIT</p>
              <h2>Công trình thực tế</h2>
            </div>
            <a className="text-link text-link--navy" href="/cong-trinh-thuc-te">Xem tất cả công trình <ArrowUpRight size={18} /></a>
          </div>
          <div className="home-project-list">
            {projectList.map((item) => (
              <a className="home-project-row" href="/cong-trinh-thuc-te" key={item.number}>
                <img src={item.image} alt={item.name} />
                <div><h3>{item.name}</h3><p>{item.summary}</p></div>
                <ArrowUpRight size={21} />
              </a>
            ))}
          </div>
        </section>

        <section className="journal-section" id="tin-tuc">
          <div className="journal-heading">
            <div><p className="eyebrow">MIVIKIT</p><h2>TIN TỨC</h2></div>
            <a className="text-link text-link--navy" href="/tin-tuc">Xem tất cả bài viết <ArrowUpRight size={18} /></a>
          </div>
          <div className="journal-grid">
            {journalList.map((item) => (
              <article key={item.title} className="journal-card">
                <img className="journal-card__image" src={item.image} alt={item.title} />
                <div className="journal-card__top"><span>{item.category}</span><time>{item.date}</time></div>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
                <a className="text-link text-link--navy" href="/tin-tuc">Đọc bài <ArrowUpRight size={17} /></a>
              </article>
            ))}
          </div>
        </section>

        <section className="consult-section" id="tu-van">
          <div className="consult-visual" style={{ backgroundImage: `url(${islandUrl})` }}>
            <div className="consult-visual__wash" />
          </div>
          <div className="consult-panel">
            <div className="consult-panel__top"><span>THÔNG TIN LIÊN HỆ</span></div>
            <h2>Gửi thông tin liên hệ.</h2>
            <p className="consult-lead">Điền thông tin liên hệ để MIVIKIT liên hệ với bạn.</p>
            <form className="consult-form" onSubmit={handleSubmit}>
              <label>Họ và tên<input required type="text" name="name" placeholder="Nguyễn Minh Anh" /></label>
              <label>Số điện thoại<input required type="tel" name="phone" placeholder="Nhập số điện thoại của bạn" /></label>
              <label>Nhu cầu của bạn<select name="need" defaultValue=""><option value="" disabled>Chọn một nhu cầu</option><option value="new-kitchen">Thiết kế bếp mới</option><option value="renovation">Cải tạo không gian bếp</option><option value="showroom">Tham quan showroom</option></select></label>
              <button className="button-navy" type="submit">Gửi thông tin <ArrowDownRight size={18} /></button>
            </form>
            <p className="consult-note"><ShieldCheck size={15} /> MIVIKIT dùng thông tin này để liên hệ với bạn.</p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
