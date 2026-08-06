# 🎨 DESIGN SPECIFICATION - LINH HOA TÂM (LHT)

> **Brand Vision:** Linh Hoa Tâm - Thuật Số Học Ứng Dụng Thực Chiến Cho Nhà Lãnh Đạo & Doanh Chủ  
> **Lead Strategist & Expert:** Master Hoàng Mai Linh  
> **Version:** 2026.1  

---

🤖 **Applying knowledge of `@[frontend-specialist]`...**

---

## 🏛️ 1. DESIGN PHILOSOPHY & BRAND IDENTITY

Linh Hoa Tâm không đại diện cho bói toán hay mê tín dị đoan. Thương hiệu đứng ở giao điểm giữa **Tri thức Cổ xưa (Ancient Wisdom)** và **Quản trị Hiện đại (Modern Management)**.

### **Core Brand Pillars:**
1. **Thực Chiến & Khoa Học:** Mọi luận giải đều hướng tới tính ứng dụng trong công việc, sự nghiệp, nhân sự và quản trị.
2. **Sang Trọng & Tinh Tế:** Sử dụng ngôn ngữ thiết kế tối giản, cao cấp, lấy độ tương phản mạnh và typography chuẩn mực làm điểm tựa.
3. **Chạm Cảm Xúc & Truyền Cảm Hứng:** Sử dụng visual depth, hình ảnh chân thực của Master Hoàng Mai Linh và animation chuyển động mượt mà.

---

## 🎨 2. COLOR SYSTEM & DESIGN TOKENS

### **Primary Color Palette (Purple Ban Strictly Enforced 🚫):**
- **Oxford Blue (`#0B132B` / `bg-oxford-blue`):** Màu chủ đạo đại diện cho sự sâu sắc, uy tín, tri thức và chiều sâu quản trị.
- **Blaze Orange (`#FF5722` / `text-blaze-orange`):** Màu điểm nhấn thương hiệu (Brand Accent), đại diện cho năng lượng, sự bứt phá và nhiệt huyết.
- **Ice White (`#F8FAFC` / `bg-ice-white`):** Nền sáng chuẩn mực giúp nổi bật nội dung và mang lại sự thanh thoát.
- **Cyan Azure (`#4991BA` / `text-cyan-azure`):** Màu phụ trợ cho các badge, icon và điểm nhấn công nghệ.
- **Champagne Gold (`#D4AF37` / `text-gold`):** Điểm nhấn sang trọng cho các chứng nhận, huy hiệu VIP và gói dịch vụ cao cấp.

```css
/* Core Design Tokens */
:root {
  --color-oxford-blue: #0B132B;
  --color-blaze-orange: #FF5722;
  --color-ice-white: #F8FAFC;
  --color-cyan-azure: #4991BA;
  --color-gold: #D4AF37;
  --font-title: 'Playfair Display', Georgia, serif;
  --font-body: 'Inter', system-ui, sans-serif;
}
```

---

## 🔤 3. TYPOGRAPHY SYSTEM

- **Headings (H1, H2, H3):** Playfair Display (`font-title`) - Đem lại khí chất cổ điển, uy nghiêm và sang trọng.
- **Body & Subtitles:** Inter (`font-body`) - Đảm bảo độ đọc tối ưu trên mọi màn hình di động & máy tính.

| Level | Size | Weight | Usage |
|---|---|---|---|
| **H1 Hero** | 2.75rem - 3.75rem | Bold (700) | Hero Headline |
| **H2 Section** | 2.0rem - 2.5rem | Bold (700) | Tên mục lớn |
| **H3 Card Header** | 1.25rem - 1.5rem | SemiBold (600) | Tên sản phẩm, thẻ dịch vụ |
| **Body Text** | 1.0rem (16px) | Regular (400) | Nội dung chi tiết |
| **Small Badge** | 0.875rem (14px) | Medium (500) | Thẻ phân loại, Tagline |

---

## 📐 4. LAYOUT & TOPOLOGICAL RULES

### **Layout Principles:**
1. **Asymmetric Tension (Bất đối xứng):** Tránh bố cục 50/50 nhàm chán. Sử dụng tỷ lệ 60/40 hoặc 70/30 để tạo nhịp điệu thị giác.
2. **Whitespace (Khoảng thở):** Khoảng cách giữa các section luôn từ 80px - 120px trên Desktop và 48px - 64px trên Mobile.
3. **Card Radius Strategy:**
   - Thẻ dịch vụ / sản phẩm: `rounded-2xl` (16px) kết hợp viền mảnh `border border-slate-100`.
   - Nút bấm (CTA): `rounded-full` hoặc `rounded-xl` tạo cảm giác hiện đại, dễ tương tác.

---

## ✨ 5. ANIMATIONS & MICRO-INTERACTIONS

1. **Scroll Entrance Animations:**
   - Sử dụng hiệu ứng `fade-in-up` với `stagger-delay` cho các danh sách thẻ bài viết và sản phẩm.
2. **Hover Feedback:**
   - Thẻ sản phẩm: `hover:-translate-y-1.5 transition-all duration-300 shadow-xl hover:shadow-2xl`.
   - Nút bấm CTA: Hiệu ứng `scale-105` và đổ bóng cam `shadow-orange-500/25`.
3. **TikTok Embed Integration:**
   - Khung phát TikTok dạng Blockquote chạy script nhúng động, hiển thị card thông tin kênh `@linhhoatam11` với thiết kế màu `bg-ice-white` và badge `blaze-orange`.

---

## 📦 6. CORE PRODUCTS & CONTENT MAPPING

### **Phễu Sản Phẩm Chiến Lược: Hồ Sơ Vận Mệnh (`/ho-so-van-menh`)**
- **Combo Tiêu Chuẩn (680.000 VNĐ):** File luận giải chi tiết 100+ trang + Định hướng sự nghiệp 2026.
- **Combo Cao Cấp (980.000 VNĐ):** File luận giải + Buổi tham vấn 1:1 cùng Chuyên gia + Kế hoạch hành động 12 tháng.

---

## 🛡️ 7. PERFORMANCE & SEO MANDATE

- **Core Web Vitals:** LCP < 2.5s, CLS = 0, FID/INP < 100ms.
- **Image Optimization:** 100% hình ảnh hiển thị qua `resolveAttachmentUrl()` đảm bảo mã HTTP 200 OK.
- **SEO & GEO Ready:** Đã tích hợp Schema.org, OpenGraph, Canonical URLs và Twitter Cards.

---

*Tài liệu này là tiêu chuẩn thiết kế chính thức được áp dụng trên toàn bộ codebase website Linh Hoa Tâm.*
