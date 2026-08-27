# 🎨 DESIGN SPECIFICATION - BRAND DESIGN SYSTEM

> **Brand Name:** Linh Hoa Tâm (LHT)  
> **Brand Position:** Hệ sinh thái Cố vấn Strategy & Thuật Số Học Ứng Dụng Cho Nhà Lãnh Đạo & Doanh Chủ  
> **Version:** 2026.1  

---

## 🎨 1. BẢNG MÀU THƯƠNG HIỆU (COLOR SYSTEM & DESIGN TOKENS)

### **Mã Màu Chuẩn (Hex & Tailwind CSS Classes):**

| Tên Màu | Mã Hex | Tailwind Class | Vai Trò & Ứng Dụng |
| :--- | :--- | :--- | :--- |
| **Oxford Blue** | `#0B132B` | `bg-oxford-blue` / `text-oxford-blue` | **Màu nền tối / Header / Footer** (Đại diện cho uy tín, độ sâu tri thức & quản trị) |
| **Blaze Orange** | `#FF5722` | `bg-blaze-orange` / `text-blaze-orange` | **Màu nhấn thương hiệu (Brand Accent / CTA)** (Năng lượng, bứt phá, nhiệt huyết) |
| **Ice White** | `#F8FAFC` | `bg-ice-white` / `text-ice-white` | **Màu nền sáng** (Thanh thoát, hiện đại, tối ưu khả năng đọc) |
| **Cyan Azure** | `#4991BA` | `bg-cyan-azure` / `text-cyan-azure` | **Màu phụ trợ** (Dùng cho Badge, Subtitle, Icon và điểm nhấn công nghệ) |
| **Champagne Gold**| `#D4AF37` | `bg-gold` / `text-gold` | **Điểm nhấn cao cấp (VIP)** (Huy hiệu chứng nhận, gói tư vấn cao cấp) |

### **Khai Báo CSS Variables (`globals.css`):**
```css
:root {
  /* Brand Palette */
  --color-oxford-blue: #0B132B;
  --color-blaze-orange: #FF5722;
  --color-ice-white: #F8FAFC;
  --color-cyan-azure: #4991BA;
  --color-gold: #D4AF37;
  
  /* Text Colors */
  --text-main: #0B132B;
  --text-muted: #64748B;
  --text-inverse: #F8FAFC;

  /* Typography Fonts */
  --font-title: 'Playfair Display', Georgia, serif;
  --font-body: 'Inter', system-ui, -apple-system, sans-serif;
}
```

> 🚫 **Quy tắc cấm (Purple Ban):** Không sử dụng tông màu tím/violet mặc định để tránh tạo cảm giác bói toán hay mê tín.

---

## 🔤 2. HỆ THỐNG PHÔNG CHỮ (TYPOGRAPHY SYSTEM)

### **Google Fonts CDN Link:**
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,600;0,700;1,600&display=swap" rel="stylesheet">
```

### **Phân Vai Font Chữ:**
1. **Title / Headings (H1, H2, H3):** `Playfair Display` (`font-title`)  
   *Phong cách:* Cổ điển, khí chất, sang trọng, uy nghiêm.
2. **Body / Subtitles / Navigation:** `Inter` (`font-body`)  
   *Phong cách:* Tối giản, hiện đại, sắc nét trên mọi loại màn hình.

### **Bảng Phân Cấp Kích Thước Chữ (Typography Scale):**

| Cấp Độ | Kích Thước (Desktop) | Kích Thước (Mobile) | Font Weight | Ứng Dụng |
| :--- | :--- | :--- | :--- | :--- |
| **H1 Hero** | `3.5rem` (56px) | `2.25rem` (36px) | Bold (700) | Tiêu đề Hero chính |
| **H2 Section** | `2.5rem` (40px) | `1.75rem` (28px) | Bold (700) | Tiêu đề các phần chính |
| **H3 Card** | `1.375rem` (22px) | `1.125rem` (18px) | SemiBold (600) | Tên sản phẩm, thẻ dịch vụ |
| **Body Large** | `1.125rem` (18px) | `1.0rem` (16px) | Regular (400) | Đoạn văn mở đầu, Sapo |
| **Body Main** | `1.0rem` (16px) | `0.9375rem` (15px)| Regular (400) | Nội dung chi tiết |
| **Small / Badge**| `0.875rem` (14px) | `0.8125rem` (13px)| Medium (500) | Nhãn Tag, Badge, Footer Link |

---

## 🖼️ 3. LINK LOGO & HỆ THỐNG ASSET HÌNH ẢNH (MEDIA ASSETS)

### **1. Logo Chính Thức:**
- **Local Path (Tải nhanh từ thư mục `public`):**  
  `/LOGO-07.png`
- **Link tuyệt đối MinIO CDN:**  
  `https://minio.agentic.io.vn/linhoatam/LOGO-07.png`

### **2. MinIO S3 Object Storage CDN Server:**
- **Base Bucket CDN URL:**  
  `https://minio.agentic.io.vn/linhoatam/`
- **MinIO Web Console:**  
  `https://minio-console.apps.agentic.io.vn/browser/linhoatam`

### **3. Đường Dẫn Các Asset Hình Ảnh Nổi Bật:**
- **Hero Banner Background:** `/herobannerbackground.png`
- **Master Hoàng Mai Linh (Avatar Hero):** `https://minio.agentic.io.vn/linhoatam/hero03-648lwl.png`
- **Hình Bìa Sách "Sức Mạnh Ẩn Sau Con Số":** `https://minio.agentic.io.vn/linhoatam/1784020906703-BanoL.png`
- **Placeholder Mặc Định (800x800):** `/images/placeholder-800x800.svg`

---

## 📐 4. QUY TẮC BỐ CỤC & TƯƠNG TÁC (LAYOUT & INTERACTION RULES)

1. **Tỷ Lệ Bất Đối Xứng (Asymmetric Tension):**
   - Không chia bố cục 50/50 đều tăm tắp. Sử dụng tỷ lệ **60/40** hoặc **70/30** để tạo chiều sâu thị giác.
2. **Khoảng Thở (Whitespace Standard):**
   - Khoảng cách giữa các phần (`py-20` / `py-28`) từ **80px - 112px** trên Desktop và **48px - 64px** trên Mobile.
3. **Bo Góc (Border Radius Strategy):**
   - Thẻ nội dung / Card: `rounded-2xl` (16px) kèm viền nhẹ `border border-slate-100`.
   - Nút bấm (CTA Button): `rounded-full` hoặc `rounded-xl`.
4. **Hiệu Ứng Hover & Animation:**
   - Nút CTA: Trôi nhẹ lên trên `hover:-translate-y-0.5` kèm bóng đổ cam `shadow-lg shadow-orange-500/20`.
   - Card sản phẩm: `hover:-translate-y-1.5 transition-all duration-300 shadow-xl`.
