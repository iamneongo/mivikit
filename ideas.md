# Định hướng thiết kế MIVIKIT

## Ba hướng tiếp cận

| Theme Name | Very Brief Intro | Probability |
| --- | --- | --- |
| L’Atelier Inox | Không gian showroom đương đại, lấy chất liệu inox xước và ánh sáng phòng trưng bày làm trung tâm. Tạo cảm giác chính xác, bền vững và có chiều sâu. | 0.07 |
| Naval Estate | Sắc navy của MIVIKIT trở thành nền kiến trúc, đối thoại với đỏ ruby như một nét ký tên tinh tế. Ngôn ngữ giàu tính thương hiệu, trang trọng và sắc sảo. | 0.04 |
| Gallery of Function | Website như một catalogue kiến trúc với nhịp chữ biên tập, khoảng trắng lớn và các chi tiết vật liệu. Phù hợp với khách hàng coi căn bếp là một khoản đầu tư dài hạn. | 0.08 |

## Hướng được chọn: Naval Estate

**Design Movement:** Luxury editorial kết hợp tinh thần showroom kiến trúc đương đại.

**Core Principles:** Tương phản có chủ đích giữa navy sâu và nền ngà ấm; hình ảnh bếp phải là trọng tâm; chi tiết inox thể hiện bằng đường viền sáng, chuyển sắc kim loại và typography chính xác; mỗi cụm nội dung có khoảng thở như một trang catalogue cao cấp.

**Color Philosophy:** Navy MIVIKIT là bề mặt tin cậy, sâu và bảo chứng kỹ thuật. Ruby red dùng tiết chế ở các điểm hành động, đường ký hiệu và chi tiết nhận diện để tạo năng lượng mà không làm mất sự sang trọng. Ivory ấm và kim loại bạc nhạt giữ giao diện sáng, giàu vật liệu và dễ đọc.

**Layout Paradigm:** Bố cục biên tập bất đối xứng, với khung thông tin mảnh chạy dọc bên trái và các mảng hình ảnh lớn lệch trục. Nội dung không bị ép vào các thẻ đồng nhất; thay vào đó, mỗi phân đoạn như một không gian trưng bày riêng.

**Signature Elements:** Các đường line đỏ mảnh như chi tiết bản vẽ kỹ thuật; nhãn số thứ tự theo phong cách catalogue; bề mặt inox xước/texture hạt rất nhẹ phía sau nền sáng.

**Interaction Philosophy:** Chuyển động gọn, chính xác và có độ trễ nhỏ như cơ cấu đóng mở cao cấp. Hover làm ảnh dịch chuyển nhẹ, đường line kéo dài, CTA đổi sắc ruby trong khoảng 180–240ms.

**Animation:** Các khối nội dung xuất hiện bằng opacity và translateY rất ngắn; ảnh có hiệu ứng zoom nhẹ khi hover; chữ tiêu đề không chạy lặp. Luôn tôn trọng `prefers-reduced-motion`.

**Typography System:** Cormorant Garamond cho tiêu đề với dáng serif thanh lịch; Manrope cho thân bài, navigation và thông số để giữ độ hiện đại, rõ ràng. Tiêu đề dùng chữ thường/chữ hoa có kiểm soát và tracking rộng; số liệu dùng Manrope semi-bold.

**Brand Essence:** MIVIKIT là hệ tủ bếp inox thiết kế theo không gian sống dành cho chủ nhà đề cao vẻ đẹp lâu bền và tiêu chuẩn kỹ thuật. **Chính xác, tinh tế, bền vững.**

**Brand Voice:** Điềm tĩnh, chuyên môn, gợi mở thay vì khoa trương. Ví dụ: “Bếp đẹp nhất khi công năng trở thành một phần của kiến trúc.” và “Chạm vào inox chuẩn 304. Cảm nhận một chuẩn sống khác.” Tránh các câu chung chung như “Chào mừng đến với website” hoặc “Bắt đầu ngay hôm nay”.

**Wordmark & Logo:** Giữ nguyên wordmark MIVIKIT do thương hiệu cung cấp. Biểu tượng phụ là một khối chữ M gấp cạnh, gợi mạch gấp inox và bố cục tủ bếp mô-đun; sử dụng làm favicon và điểm nhấn thị giác.

**Signature Brand Color:** MIVIKIT Navy — `#082B5C`.

## Style Decisions

- Các nền sáng có lớp grain inox hoặc line bạc rất nhẹ để cảm giác vật liệu hiện diện xuyên suốt, nhưng không cạnh tranh với nội dung.
- Ruby red chỉ là nét ký kỹ thuật: line mảnh, số catalogue, CTA chính và marker quan trọng.
- Các khu vực lựa chọn sản phẩm vận hành như một spread catalogue kiến trúc, ưu tiên sơ đồ, số thứ tự và lệch trục có kiểm soát thay vì một lưới thẻ đồng đều.
