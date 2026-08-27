import { defineAppRoutes } from "@nocobase/portal-sdk/routing";
import { LayoutDashboard, Newspaper, Users, Globe, Images } from "lucide-react";

// Disable default demo routes so only Linh Hoa Tam CMS items appear in sidebar
export const registryRoutesEnabled = false;

// Register business resources and routes
export const appRoutes = defineAppRoutes([
  {
    name: "dashboard",
    path: "/dashboard",
    lazy: () => import("./pages/dashboard"),
    resource: {
      meta: {
        label: "Tổng Quan",
        priority: 1,
        icon: <LayoutDashboard className="size-4" />,
        description: "Bảng điều khiển tổng quan và thống kê",
      },
    },
  },
  {
    name: "blog_posts",
    path: "/blog-posts",
    lazy: () => import("./pages/blog-posts/list"),
    resource: {
      meta: {
        label: "Bài Viết Kiến Thức",
        priority: 2,
        icon: <Newspaper className="size-4" />,
        description: "Quản lý bài viết blog và chuyên mục kiến thức",
        canCreate: true,
      },
    },
    children: [
      {
        name: "blog_posts.create",
        path: "create",
        resourceAction: "create",
        lazy: () => import("./pages/blog-posts/create"),
      },
      {
        name: "blog_posts.edit",
        path: "edit/:id",
        resourceAction: "edit",
        lazy: () => import("./pages/blog-posts/edit"),
      },
    ],
  },
  {
    name: "leads",
    path: "/leads",
    lazy: () => import("./pages/leads/list"),
    resource: {
      meta: {
        label: "CRM Khách Hàng (Leads)",
        priority: 3,
        icon: <Users className="size-4" />,
        description: "Quản lý danh sách khách hàng đăng ký tư vấn",
      },
    },
  },
  {
    name: "website_content",
    path: "/website-content",
    lazy: () => import("./pages/website-content"),
    resource: {
      meta: {
        label: "Nội Dung Website",
        priority: 4,
        icon: <Globe className="size-4" />,
        description: "Quản lý thông tin trang chủ, dịch vụ, testimonials, workshop",
      },
    },
  },
  {
    name: "media",
    path: "/media",
    lazy: () => import("./pages/media"),
    resource: {
      meta: {
        label: "Thư Viện Hình Ảnh",
        priority: 5,
        icon: <Images className="size-4" />,
        description: "Quản lý kho ảnh MinIO S3, tải lên và sao chép liên kết hình ảnh",
      },
    },
  },
]);
