---
name: seo-ymyl-eeat
description: >
  Your Money or Your Life (YMYL) & E-E-A-T Optimization for consulting,
  Numerology, and personal brand coaching. Addresses quality rater guidelines,
  author profiles, citation trust, transparency signals, and editorial policies.
allowed-tools: Read, Write, Glob, Grep, Bash
---

# YMYL & E-E-A-T Optimization for Coaching & Consulting

> **Triết lý cốt lõi:** Thuật số học, thần số học, tham vấn chiến lược cho CEO thuộc danh mục nhạy cảm ảnh hưởng đến tương lai, sự nghiệp và tài chính (YMYL - Your Money or Your Life). Google quét cực kỳ nghiêm ngặt các trang này để chống tin giả, lừa đảo. Bạn cần chứng minh độ tin cậy tuyệt đối.

---

## 1. YMYL & E-E-A-T Checklist

### 1.1 Tác giả (Author Authority)
- [ ] **Trang Profile tác giả riêng biệt:** `/master-hoang-mai-linh` là cực kỳ quan trọng.
- [ ] **Liên kết SameAs:** Trỏ từ schema cá nhân tới các tài khoản mạng xã hội chính thức và sách đã xuất bản.
- [ ] **Trích dẫn thành tựu thực tế:** Hơn 3.500 giờ tham vấn, các đối tác lớn (Prudential, Forbes Women).

### 1.2 Minh bạch thương hiệu (Brand Transparency)
- [ ] **Chính sách bảo mật (Privacy Policy):** Bắt buộc phải có trang `/chinh-sach-bao-mat` rõ ràng.
- [ ] **Điều khoản dịch vụ (Terms of Service):** Trang `/dieu-khoan-dich-vu` quy định rõ quyền lợi.
- [ ] **Chính sách hoàn tiền/đổi trả:** Rõ ràng đối với dịch vụ tham vấn và đặt lịch.
- [ ] **Thông tin pháp lý:** Mã số thuế, giấy đăng ký kinh doanh, địa chỉ thực tế (NAP).

### 1.3 Chất lượng nội dung (Editorial Quality)
- [ ] **Ghi rõ ngày cập nhật:** `dateModified` trong schema và hiển thị ngày cập nhật trên UI bài viết.
- [ ] **Editorial Policy:** Quy trình kiểm duyệt nội dung (ai viết, ai duyệt).
- [ ] **Nguồn dẫn chứng khoa học:** Trích dẫn nguồn sách, nghiên cứu thay vì chỉ phán đoán chủ quan.

---

## 2. Cách vá mã nguồn Next.js chuẩn YMYL

### 2.1 Hiển thị ngày cập nhật cuối cùng (Freshness Signal)

Thay vì chỉ hiển thị ngày xuất bản (`published_at`), Google đánh giá rất cao việc cập nhật nội dung (`updated_at` / `dateModified`).

```typescript
// Trong UI bài viết:
const dateModifiedStr = article.updatedAt 
  ? new Date(article.updatedAt).toLocaleDateString('vi-VN')
  : dateStr;

// Hiển thị trên giao diện:
<span>Cập nhật ngày: {dateModifiedStr}</span>
```

### 2.2 Trang Chính sách bảo mật & Điều khoản dịch vụ
Tất cả các form thu thập thông tin khách hàng (Leads) bắt buộc phải có liên kết đến trang Bảo mật ở chân trang để Google Ads/Google Search đánh giá an toàn.

---

## 3. Đo lường & Giám sát

- **Search Console:** Kiểm tra lỗi sitemap, lỗi AMP (nếu có), lỗi bảo mật.
- **EEAT Audit:** Rà soát định kỳ xem có tuyên bố quá mức, mê tín dị đoan, cam kết 100% tài lộc (Google cực ghét) hay không. Thay vào đó hãy dùng ngôn từ khoa học, mang tính định hướng, tham vấn.
