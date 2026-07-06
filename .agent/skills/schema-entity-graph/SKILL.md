---
name: schema-entity-graph
description: >
  Entity-based Schema Graph for personal brand + coaching websites.
  Connects Person, Organization, Service, Course, Event schemas into a
  unified Knowledge Graph that Google uses for entity recognition, rich
  results, and AI Overview citations. Triggers on "schema", "entity",
  "knowledge graph", "rich results", "structured data", "Person schema",
  "Course schema", "Event schema", "Service schema".
allowed-tools: Read, Write, Glob, Grep, Bash
---

# Schema Entity Graph — Personal Brand + Coaching 2025

> **Nguyên lý:** Google không đọc từng trang riêng lẻ. Google xây dựng một **Knowledge Graph** — mạng lưới thực thể (Entity) kết nối với nhau. Nhiệm vụ của chúng ta là **khai báo đúng và đủ** các thực thể này để Google hiểu rõ ai bạn là, bạn làm gì, và tại sao bạn đáng tin.

---

## ENTITY HIERARCHY

```
Organization (Linh Hoa Tâm)
  └── founder → Person (Hoàng Mai Linh)
        ├── author → Book (Sức Mạnh Ẩn Sau Con Số)
        ├── performerIn → Event[] (các buổi diễn giả)
        └── provider → Service[] (Tư vấn CEO, Workshop)
                └── Course[] (chương trình học cụ thể)
```

---

## SCHEMA TYPES & KHI NÀO DÙNG

| Type | Trang | Rich Result |
|---|---|---|
| `LocalBusiness` | layout.tsx (root) | Knowledge Panel |
| `Person` | /master-hoang-mai-linh | Knowledge Panel |
| `Book` | /sach | Book rich result |
| `Service` | /giai-phap-lanh-dao, /phat-trien-ban-than | Không có rich result, nhưng tăng entity clarity |
| `Course` | /workshop-chien-luoc, /workshop-ca-nhan | Course rich result |
| `Event` | /speaker, /webinar | Event rich result |
| `FAQPage` | Workshop, trang dịch vụ | FAQ rich result (snippet mở rộng) |
| `WebPage` + `Speakable` | Trang chủ, /linh-hoa-tam | AI Overview — Google đọc đoạn speakable |
| `BreadcrumbList` | Mọi trang con | Breadcrumb trên SERP |

---

## LAYER 1 — Person Schema Nâng Cao

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://linhhoatam.com/#person-hoang-mai-linh",
  "name": "Hoàng Mai Linh",
  "alternateName": "Master Hoàng Mai Linh",
  "jobTitle": "Chuyên gia Thuật Số Học Ứng Dụng",
  "description": "Hơn 3.500 giờ tham vấn CEO...",
  "url": "https://linhhoatam.com/master-hoang-mai-linh",
  "image": "https://linhhoatam.com/master-avatar.png",
  "sameAs": [
    "https://www.facebook.com/linhhoatam",
    "https://www.tiktok.com/@linhhoatam11"
  ],
  "knowsAbout": ["Thuật Số Học", "Tư vấn CEO", "Numerology"],
  "hasCredential": {
    "@type": "EducationalOccupationalCredential",
    "name": "Doanh nhân tiêu biểu vì cộng đồng"
  },
  "author": {
    "@type": "Book",
    "@id": "https://linhhoatam.com/sach#book",
    "name": "Sức Mạnh Ẩn Sau Con Số",
    "inLanguage": "vi",
    "url": "https://linhhoatam.com/sach"
  },
  "worksFor": {
    "@type": "Organization",
    "@id": "https://linhhoatam.com/#organization"
  }
}
```

---

## LAYER 2 — Course Schema (Workshop)

```json
{
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Workshop Chiến Lược – Thuật Số Học Ứng Dụng Cho Lãnh Đạo",
  "description": "Chương trình workshop chuyên sâu...",
  "url": "https://linhhoatam.com/workshop-chien-luoc",
  "provider": {
    "@type": "Organization",
    "@id": "https://linhhoatam.com/#organization",
    "name": "Linh Hoa Tâm"
  },
  "instructor": {
    "@type": "Person",
    "@id": "https://linhhoatam.com/#person-hoang-mai-linh",
    "name": "Hoàng Mai Linh"
  },
  "educationalLevel": "Professional",
  "teaches": ["Thuật Số Học Ứng Dụng", "Ra quyết định chiến lược", "Lãnh đạo bản thân"],
  "hasCourseInstance": {
    "@type": "CourseInstance",
    "courseMode": "onsite",
    "location": {
      "@type": "Place",
      "name": "TP. Hồ Chí Minh, Việt Nam"
    }
  }
}
```

---

## LAYER 3 — Event Schema (Speaker / Webinar)

```json
{
  "@context": "https://schema.org",
  "@type": "Event",
  "name": "Mời Diễn Giả – Master Hoàng Mai Linh",
  "description": "Đặt lịch mời Master Hoàng Mai Linh...",
  "url": "https://linhhoatam.com/speaker",
  "organizer": {
    "@type": "Organization",
    "@id": "https://linhhoatam.com/#organization"
  },
  "performer": {
    "@type": "Person",
    "@id": "https://linhhoatam.com/#person-hoang-mai-linh",
    "name": "Hoàng Mai Linh"
  },
  "eventAttendanceMode": "https://schema.org/MixedEventAttendanceMode",
  "eventStatus": "https://schema.org/EventScheduled",
  "location": {
    "@type": "Place",
    "name": "Toàn quốc, Việt Nam"
  }
}
```

---

## LAYER 4 — Service Schema

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Tư Vấn Thần Số Học Cho CEO & Lãnh Đạo",
  "description": "Dịch vụ tham vấn chiến lược cá nhân hóa...",
  "url": "https://linhhoatam.com/giai-phap-lanh-dao",
  "provider": {
    "@type": "Organization",
    "@id": "https://linhhoatam.com/#organization"
  },
  "areaServed": { "@type": "Country", "name": "Vietnam" },
  "serviceType": "Business Consulting",
  "audience": {
    "@type": "Audience",
    "audienceType": "CEO, Founder, Lãnh đạo cấp cao"
  }
}
```

---

## LAYER 5 — Speakable Schema (AI Overviews)

Thêm vào trang chủ và /linh-hoa-tam để Google/AI có thể trích dẫn:

```json
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Linh Hoa Tâm – Thuật Số Học Ứng Dụng",
  "url": "https://linhhoatam.com",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": ["h1", ".hero-description", ".key-stats"]
  },
  "about": {
    "@type": "Person",
    "@id": "https://linhhoatam.com/#person-hoang-mai-linh"
  }
}
```

---

## LAYER 6 — @id Linking (Entity Graph)

**Quan trọng nhất:** Dùng `@id` để liên kết các schema với nhau thay vì lặp lại dữ liệu:

```
// WRONG: Lặp lại thông tin Person trong mỗi schema
"provider": { "@type": "Person", "name": "Hoàng Mai Linh", "url": "..." }

// CORRECT: Tham chiếu @id duy nhất
"provider": { "@id": "https://linhhoatam.com/#person-hoang-mai-linh" }
```

Điều này giúp Google nhận ra đây là **cùng một thực thể** trên mọi trang.

---

## LAYER 7 — FAQPage Schema (tăng CTR từ SERP)

Thêm vào trang Workshop, Speaker, Dịch vụ:

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Thuật Số Học Ứng Dụng khác gì so với xem bói?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Thuật Số Học Ứng Dụng là phương pháp phân tích định lượng dựa trên ngày sinh..."
      }
    },
    {
      "@type": "Question",
      "name": "Workshop phù hợp với ai?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Phù hợp với CEO, Founder, Quản lý cấp trung đang tìm kiếm..."
      }
    }
  ]
}
```

---

## Checklist Schema Graph

| Entity | @id đã khai báo | Liên kết với | Status |
|---|---|---|---|
| Organization | `#organization` | Person (founder) | |
| Person | `#person-hoang-mai-linh` | Organization, Book | |
| Book | `#book` | Person (author) | |
| Course (Workshop CL) | `/workshop-chien-luoc#course` | Organization, Person | |
| Course (Workshop CN) | `/workshop-ca-nhan#course` | Organization, Person | |
| Event (Speaker) | `/speaker#event` | Organization, Person | |
| Service (Lãnh đạo) | `/giai-phap-lanh-dao#service` | Organization | |
| Service (Cá nhân) | `/phat-trien-ban-than#service` | Organization | |
