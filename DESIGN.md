# DESIGN.md — Hệ Thống Thiết Kế · Linh Hoa Tâm

> Tài liệu này là **nguồn sự thật duy nhất (Single Source of Truth)** về hệ thống thiết kế.  
> Mọi thay đổi về màu sắc, typography hay component phải đồng bộ vào đây trước khi triển khai.

---

## 1. Bảng Màu Thương Hiệu (Color Palette)

### 1.1 Brand Core Colors

| Token | Tailwind Class | Hex | CSS Variable | Vai trò |
|---|---|---|---|---|
| Oxford Blue | `oxford-blue` | `#002B57` | `--brand-oxford-blue` | Màu chính – Header, tiêu đề, nền tối |
| Cyan Azure | `cyan-azure` | `#00AEEF` | `--brand-cyan-azure` | Accent xanh – CTA phụ, link, badge |
| Metallic Blue | `metallic-blue` | `#205E8C` | `--brand-metallic-blue` | Trung gian – hover, border, divider |
| Dark Blue | `dark-blue` | `#051926` | `--brand-dark-blue` | Text chính trên nền sáng |
| Blaze Orange | `blaze-orange` | `#FF6801` | `--brand-blaze-orange` | Accent cam – CTA, highlight, button primary |
| Ice White | `ice-white` | `#EBEBF1` | `--brand-ice-white` | Nền trang chính (Page Background) |

### 1.2 Background Rules theo Ngữ cảnh

| Ngữ cảnh | Class phải dùng | Ghi chú |
|---|---|---|
| `<body>`, `<main>` | `bg-ice-white` | Nền mặc định toàn trang |
| Header (chưa cuộn) | `#EBEBF1` inline | Đồng với ice-white |
| Header (đã cuộn) | `#ffffff` inline | Intentional – tạo độ nổi |
| Footer | `bg-oxford-blue` | Nền tối |
| Section xen kẽ | `bg-[#F8FAFC]` | Accepted accent rhythm |
| Card, modal, dropdown | `bg-white`, `bg-white/70` | Component level – OK |
| **KHÔNG DÙNG** làm section bg | `bg-gray-*`, `bg-slate-*` | ❌ Off-brand |

---

## 2. Typography

### 2.1 Font Family

| Tên | Loại | Nguồn | Class |
|---|---|---|---|
| **Poppins** | Sans-serif (Primary) | Google Fonts / next/font | `font-poppins` |

### 2.2 Type Scale

| Cấp | Tailwind | Dùng cho |
|---|---|---|
| Display | `text-5xl`–`text-7xl font-black` | Hero Headline |
| H1 | `text-4xl`–`text-5xl font-bold` | Section title |
| H2 | `text-3xl`–`text-4xl font-bold` | Sub-section |
| H3 | `text-xl`–`text-2xl font-bold` | Card title |
| H4 | `text-lg font-semibold` | Label, item |
| Body | `text-base font-normal` | Paragraph |
| Caption | `text-sm`, `text-xs` | Meta, badge |

### 2.3 Text Color Rules

| Ngữ cảnh | Class |
|---|---|
| Text chính trên nền sáng | `text-oxford-blue` hoặc `text-dark-blue` |
| Text phụ | `text-slate-600`, `text-metallic-blue` |
| Text trên nền tối | `text-ice-white`, `text-cyan-azure` |
| Link | `text-cyan-azure hover:text-blaze-orange` |
| Highlight | `text-blaze-orange` |

---

## 3. Spacing & Layout

### 3.1 Container
```
max-width: 1280px
class: container mx-auto px-4 md:px-6
```

### 3.2 Section Vertical Rhythm

| Loại section | Padding |
|---|---|
| Section bình thường | `py-20` |
| Section lớn | `py-24 md:py-32` |
| Section compact | `py-12 md:py-16` |

---

## 4. Component Catalog

### 4.1 Button (`src/components/ui/Button.tsx`)

| Variant | Nền | Text | Hover |
|---|---|---|---|
| `primary` | Blaze Orange `#ff6801` | White | `#e05a00` |
| `secondary` | Oxford Blue `#002b57` | Ice White | Metallic Blue |
| `outline` | Transparent | Oxford Blue | Oxford Blue fill |
| `ghost` | Transparent | Oxford Blue | Ice White + Orange |

### 4.2 GlowCard (`src/components/ui/spotlight-card.tsx`)

Hiệu ứng ánh sáng Spotlight bám theo con trỏ chuột.
- Props: `glowColor` ("blaze-orange" | "cyan-azure"), `customSize` (bool)
```tsx
<GlowCard glowColor="blaze-orange" customSize className="bg-white rounded-3xl">
  ...content...
</GlowCard>
```

### 4.3 AnimationWrapper (`src/components/ui/AnimationWrapper.tsx`)

- `<FadeIn direction="up" delay={0.1}>` — fade + slide khi scroll vào
- `<StaggerContainer>` — stagger effect cho list

### 4.4 Header (`src/components/layout/Header.tsx`)

- Fixed, `z-index: 9999`, height `64px`
- Nền chuyển `#EBEBF1 → #ffffff` + shadow khi `scrollY > 20`
- **Scroll Progress Bar**: cam `#ff6801` dày 3px ở đáy header
- Desktop dropdown: `bg-white rounded-xl shadow-xl`
- Mobile menu: `bg-ice-white/98 backdrop-blur-lg`

### 4.5 Footer (`src/components/layout/Footer.tsx`)

- `bg-oxford-blue text-ice-white`
- Link: `text-cyan-azure hover:text-blaze-orange`
- Icon: `text-blaze-orange`
- Divider: `border-metallic-blue`

---

## 5. Animation & Motion

### 5.1 CSS Animations (globals.css)

| Animation | Class | Duration |
|---|---|---|
| Logo Ticker | `animate-ticker` | 20s linear infinite |
| Fade Slide Up | `animate-fadeSlideUp` | 0.6s ease-out |

### 5.2 Framer Motion Patterns

- Modal: `AnimatePresence` + scale `0.95→1` + opacity `0→1`
- Hover card: `hover:-translate-y-2 transition-transform duration-300`
- Stagger: children delay `0.08s–0.1s`

---

## 6. Section Pattern Library

| Pattern | Class | Dùng cho |
|---|---|---|
| Light (default) | `bg-ice-white py-24 md:py-32` | Giới thiệu, tính năng |
| Light Accent | `bg-[#F8FAFC] py-24 md:py-32` | Coaching, workshop, values |
| Dark | `bg-oxford-blue py-24 md:py-32 text-ice-white` | CTA, hero tối |
| Hero gradient | `bg-ice-white + overlay/image` | Hero section |

---

## 7. COLOR AUDIT REPORT

> Quét toàn bộ 15 trang + component. Ngày kiểm toán: **2026-07-03**.

### ✅ Trang nhất quán (PASS)

| Trang | Route | `<main>` BG |
|---|---|---|
| Trang chủ | `/` | `bg-ice-white` |
| Liên hệ | `/lien-he` | `bg-ice-white` |
| Kiến thức | `/kien-thuc` | `bg-ice-white` |
| Cộng đồng | `/cong-dong` | `bg-ice-white` |
| Webinar | `/webinar` | `bg-ice-white` |
| Speaker | `/speaker` | `bg-ice-white` |
| Trường đại diện | `/truong-dai-dien` | `bg-ice-white` |
| Workshop cá nhân | `/workshop-ca-nhan` | `bg-ice-white` |
| Workshop chiến lược | `/workshop-chien-luoc` | `bg-ice-white` |
| Giải pháp lãnh đạo | `/giai-phap-lanh-dao` | `bg-ice-white` |
| Phát triển bản thân | `/phat-trien-ban-than` | `bg-ice-white` |

---

### 🔴 CRITICAL — Thiếu nền trang + bg-white sai cấp

#### `/linh-hoa-tam`
- `<main>` chỉ có `className="pt-16"` — **thiếu `bg-ice-white`**
- `LHTValues.tsx` section dùng `bg-[#F8FAFC]` (hardcoded, không phải token)
- **Thiếu `<Footer />`** — trang không có footer!
- **Fix**: Thêm `bg-ice-white` vào `<main>`, thêm Footer.

#### `/master-hoang-mai-linh`
- `<main>` chỉ có `className="pt-16"` — **thiếu `bg-ice-white`**
- `MasterRoles.tsx` dùng `bg-white` ở cấp `<section>` — nên đổi sang `bg-ice-white`
- **Thiếu `<Footer />`** — trang không có footer!
- **Fix**: Thêm `bg-ice-white` vào `<main>`, sửa section, thêm Footer.

#### `/phuong-phap`
- `<main>` chỉ có `className="pt-16"` — **thiếu `bg-ice-white`**
- `MethIndicators.tsx` section dùng `bg-white`
- `MethApplication.tsx` section dùng `bg-white`
- **Fix**: Thêm `bg-ice-white` vào `<main>`, đổi các section bg-white thành `bg-ice-white`.

#### `/sach`
- `<main>` chỉ có `className="overflow-hidden"` — **thiếu `bg-ice-white` VÀ `pt-16`** (nguy cơ header che nội dung!)
- `BookContent.tsx` section dùng `bg-white`
- `BookDetails.tsx` section dùng `bg-white`
- **Fix**: Đổi main thành `className="min-h-screen pt-16 bg-ice-white overflow-hidden"`, sửa sections.

---

### 🟡 MEDIUM — bg-white ở cấp section (trang chủ)

| Component | Vấn đề | Đề xuất |
|---|---|---|
| `TrustBar` (trang chủ) | `bg-white border-b border-gray-200` làm section | `bg-[#F8FAFC]` hoặc `bg-ice-white` |
| `Testimonials` (trang chủ) | `bg-white` làm section | `bg-[#F8FAFC]` |
| `CoreValues.tsx` | `bg-white` trên `<section>` | `bg-[#F8FAFC]` |

---

### 🟡 LOW — Màu ngoài palette nhưng ít ảnh hưởng

| File | Vấn đề | Ghi chú |
|---|---|---|
| `Hero.tsx:31` | `bg-[#FAFAF9]` overlay | Đổi → `bg-ice-white` |
| `MethIndicators.tsx` | `bg-gray-50`, `bg-gray-100` trong bảng | Chấp nhận làm table stripe |
| `BookDetails.tsx` | `bg-gray-50` trong content preview | Acceptable |
| `PersonalCoaching.tsx:133` | `bg-gray-200` divider | Đổi → `bg-slate-200` |
| `PersonalCoaching.tsx:315` | `bg-emerald-50 text-emerald-500` modal success | Đổi → `bg-cyan-azure/10 text-cyan-azure` |
| `WorkshopHero.tsx` | `bg-green-500` pulse badge | Acceptable làm status indicator |
| `SpeakerCredential.tsx` | `bg-green-500/20` icon | Acceptable |

---

### 🟢 Chấp nhận được (card/component level)

Tất cả `bg-white` ở cấp độ **card**, **modal**, **dropdown**, **form input**, **table row** đều ổn theo spec thiết kế.

---

## 8. Ưu tiên Fix — Action Items

| # | File cần sửa | Fix | Priority |
|---|---|---|---|
| 1 | `linh-hoa-tam/page.tsx` | Thêm `bg-ice-white` vào `<main>`, import + render `<Footer />` | 🔴 NGAY |
| 2 | `master-hoang-mai-linh/page.tsx` | Thêm `bg-ice-white`, import + render `<Footer />` | 🔴 NGAY |
| 3 | `phuong-phap/page.tsx` | Thêm `bg-ice-white` vào `<main>` | 🔴 NGAY |
| 4 | `sach/page.tsx` | Thêm `bg-ice-white pt-16` vào `<main>` | 🔴 NGAY |
| 5 | `MasterRoles.tsx` | section `bg-white` → `bg-ice-white` | 🟡 Medium |
| 6 | `MethIndicators.tsx` + `MethApplication.tsx` | section `bg-white` → `bg-ice-white` | 🟡 Medium |
| 7 | `BookContent.tsx` + `BookDetails.tsx` | section `bg-white` → `bg-ice-white` | 🟡 Medium |
| 8 | `CoreValues.tsx` | `bg-white` → `bg-[#F8FAFC]` | 🟡 Medium |
| 9 | `PersonalCoaching.tsx` (modal success) | `emerald` → `cyan-azure` | 🟢 Low |
| 10 | `Hero.tsx:31` | `#FAFAF9` → `bg-ice-white` | 🟢 Low |

---

## 9. Cấu Trúc File Dự Án

```
src/
├── app/
│   ├── layout.tsx                 # Root layout: font, JSON-LD, body bg
│   ├── globals.css                # CSS vars + animation keyframes
│   ├── page.tsx                   # Trang chủ
│   └── [pages]/page.tsx           # 14 trang con
├── components/
│   ├── layout/
│   │   ├── Header.tsx             # Fixed header + scroll progress bar
│   │   └── Footer.tsx             # Dark footer
│   ├── sections/                  # Sections theo trang
│   │   ├── Hero.tsx
│   │   ├── CoreValues.tsx         # ⚠️ bg-white ở section level
│   │   ├── personal/
│   │   ├── leader/
│   │   ├── workshop/
│   │   ├── knowledge/
│   │   ├── linh-hoa-tam/          # ⚠️ LHTValues bg hardcoded
│   │   ├── phuong-phap/           # ⚠️ Meth sections bg-white
│   │   └── sach/                  # ⚠️ Book sections bg-white
│   └── ui/
│       ├── Button.tsx
│       ├── spotlight-card.tsx     # GlowCard
│       ├── AnimationWrapper.tsx   # FadeIn, Stagger
│       └── ...
└── lib/
    └── utils.ts                   # cn() utility
```

---

*Tài liệu được tạo từ kiểm toán toàn bộ source code. Cập nhật lần cuối: 2026-07-03.*
