# HƯỚNG DẪN DEPLOY VÀ VẬN HÀNH WEBSITE LINH HOA TÂM (LHTT62026)

Tài liệu này hướng dẫn chi tiết quy trình triển khai (deploy), cấu hình bộ lưu trữ S3 (MinIO), biến môi trường và xử lý lỗi cho hệ thống website Linh Hoa Tâm.

---

## 📐 1. TỔNG QUAN KIẾN TRÚC

- **Frontend & App Server:** Next.js 14 (App Router, Standalone Mode).
- **Object Storage (S3):** MinIO Object Storage (Bucket: `linhoatam`).
  - **S3 Public Endpoint:** `https://minio.agentic.io.vn/linhoatam`
  - **MinIO Console:** `https://minio-console.apps.agentic.io.vn/browser/linhoatam`
- **Backend CMS (NocoBase):** `https://lht.gun.hmz.one`
- **Nền tảng triển khai:** VPS Dokploy (`103.211.206.31`), chạy bằng Docker Compose.
- **Trang web sản phẩm:** `https://lhtt62026.apps.agentic.io.vn`

---

## 📦 2. CẤU HÌNH MINIO S3 TRÊN NOCOBASE ADMIN

Khi kết nối NocoBase Admin với MinIO để lưu trữ tệp đính kèm, sử dụng các thông số sau:

| Ô Nhập Liệu trên Form NocoBase | Giá Trị Cần Điền / Chọn | Ghi Chú |
| :--- | :--- | :--- |
| **S3 Endpoint** | `https://minio.agentic.io.vn` | Hoặc IP nội bộ `http://103.211.206.31:9000` |
| **Bucket** | `linhoatam` | Bucket chứa toàn bộ asset ảnh & tài liệu |
| **Region** | `us-east-1` | Mặc định |
| **Access Key ID** | `admin` | |
| **Secret Access Key** | `MinioPassword123!` | |
| **Force Path Style** | 🟢 **BẬT (Toggle ON)** | **Bắt buộc bật đối với MinIO** |
| **Ignore SSL Issues** | 🔴 **TẮT (Toggle OFF)** | Môi trường sản xuất đã có HTTPS |

---

## ⚙️ 3. BIẾN MÔI TRƯỜNG (`.env.production` / Dokploy Environment)

File `.env.production` trên server hoặc cấu hình Environment Variables trong Dokploy Dashboard:

```env
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://lhtt62026.apps.agentic.io.vn
NOCOBASE_BASE_URL=https://lht.gun.hmz.one
MINIO_BASE_URL=https://minio.agentic.io.vn/linhoatam
```

---

## 🚀 4. QUY TRÌNH DEPLOY CẬP NHẬT TRÊN VPS (DOKPLOY / DOCKER COMPOSE)

### **Bước 1: SSH vào VPS**
```bash
ssh root@103.211.206.31
```

### **Bước 2: Truy cập thư mục mã nguồn dự án**
```bash
cd /etc/dokploy/applications/lhtt62026/code
```

### **Bước 3: Kéo code mới nhất từ GitHub**
```bash
git pull origin main
```

### **Bước 4: Rebuild và khởi chạy lại Container (Bắt buộc dùng `--no-cache`)**
> ⚠️ **LƯU Ý QUAN TRỌNG:** Phải dùng cờ `--no-cache` để đảm bảo Docker xóa sạch build cache cũ của Next.js, nạp lại đúng `next.config.mjs` và mã nguồn mới nhất.

```bash
docker compose build --no-cache
docker compose up -d
```

### **Bước 5: Kiểm tra trạng thái Container**
```bash
docker compose ps
```
Container `lhtt62026-web` báo trạng thái `Up` (hoặc `running`) là thành công.

---

## 🛠️ 5. CÁC ĐIỂM KỸ THUẬT VÀ XỬ LÝ LỖI (TROUBLESHOOTING)

### 1. **Tải ảnh qua MinIO CDN không bị lỗi Next.js Image Optimization:**
- Trong `next.config.mjs`, cấu hình `unoptimized: true` đã được bật để Next.js trả trực tiếp URL CDN của MinIO mà không chạy qua proxy `/_next/image?url=...` (tránh lỗi `400 Bad Request ("url" parameter is not allowed)`).
- Danh sách `remotePatterns` và `domains` đã khai báo đầy đủ `minio.agentic.io.vn` và `lht.gun.hmz.one`.

### 2. **Hàm xử lý URL đính kèm (`src/lib/nocobase.ts`):**
- Hàm `resolveAttachmentUrl()` tự động bóc tách các định dạng đính kèm (Object, Array, String) từ NocoBase và chuyển đổi các đường dẫn tương đối `/uploads/...` thành URL tuyệt đối `https://minio.agentic.io.vn/linhoatam/...`.
- Các file ảnh tĩnh thuộc thư mục `/public/` (ví dụ: `/LOGO-07.png`, `/herobannerbackground.png`) sẽ giữ nguyên đường dẫn cục bộ để load trực tiếp từ ứng dụng.

### 3. **Kiểm tra nhanh bằng cURL:**
```bash
# Kiểm tra file trên MinIO CDN
curl -s -I "https://minio.agentic.io.vn/linhoatam/hero03-648lwl.png"

# Kiểm tra HTML trang chủ web
curl -s "https://lhtt62026.apps.agentic.io.vn/" | grep -o 'src="[^"]*"' | head -n 10
```

---

*Tài liệu được cập nhật ngày 07/08/2026.*
