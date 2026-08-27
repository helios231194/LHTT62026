"use client";

import { useList } from "@refinedev/core";
import { useNavigate } from "react-router";
import {
  Users,
  Newspaper,
  Briefcase,
  MessageSquareQuote,
  ArrowUpRight,
  TrendingUp,
  Clock,
  Sparkles,
  Phone,
  Mail,
  PlusCircle,
  ExternalLink,
  CheckCircle2,
  AlertCircle,
  DollarSign,
  Activity,
  Globe,
  Database,
  ArrowRight,
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { LEAD_STATUSES } from "../leads/list";

export default function DashboardPage() {
  const navigate = useNavigate();

  // Queries
  const { result: leadsResult, query: leadsQuery } = useList({
    resource: "leads",
    pagination: { mode: "server", currentPage: 1, pageSize: 100 },
    sorters: [{ field: "id", order: "desc" }],
  });

  const { result: blogResult, query: blogQuery } = useList({
    resource: "blog_posts",
    pagination: { mode: "server", currentPage: 1, pageSize: 5 },
    sorters: [{ field: "id", order: "desc" }],
  });

  const { result: personalProductsResult } = useList({
    resource: "personal_products",
  });

  const { result: businessProductsResult } = useList({
    resource: "business_products",
  });

  const { result: testimonialsResult } = useList({
    resource: "testimonials",
  });

  const leads = leadsResult?.data || [];
  const totalLeads = leads.length;

  const newLeadsCount = leads.filter((l: any) => !l.status || l.status === "new").length;
  const contactedCount = leads.filter((l: any) => l.status === "contacted").length;
  const consultingCount = leads.filter((l: any) => l.status === "consulting").length;
  const wonCount = leads.filter((l: any) => l.status === "won" || l.status === "converted").length;
  const lostCount = leads.filter((l: any) => l.status === "lost").length;

  // Calculate won deal value
  const totalWonValue = leads
    .filter((l: any) => (l.status === "won" || l.status === "converted") && l.value)
    .reduce((sum: number, l: any) => sum + Number(l.value || 0), 0);

  const totalBlogs = blogResult?.total ?? blogResult?.data?.length ?? 0;
  const totalProducts =
    (personalProductsResult?.total ?? personalProductsResult?.data?.length ?? 0) +
    (businessProductsResult?.total ?? businessProductsResult?.data?.length ?? 0);
  const totalTestimonials = testimonialsResult?.total ?? testimonialsResult?.data?.length ?? 0;

  // Recent leads (top 5)
  const recentLeads = leads.slice(0, 5);

  return (
    <div className="flex flex-col gap-6 p-2">
      {/* Header Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600/10 via-amber-500/10 to-background p-6 border border-border/60">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 text-xs font-semibold mb-2 border border-blue-200/50">
              <Sparkles className="size-3.5" />
              NocoBase CMS & CRM • linhhoatam.apps.agentic.io.vn
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Tổng Quan Hệ Thống Quản Trị Linh Hoa Tâm
            </h1>
            <p className="text-sm text-muted-foreground mt-1 max-w-2xl">
              Hệ thống quản lý khách hàng tiềm năng (Leads CRM), xuất bản bài viết kiến thức và cấu hình dữ liệu website Master Hoàng Mai Linh.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2.5">
            <Button
              onClick={() => navigate("/leads")}
              className="gap-2 shadow-sm font-medium bg-blue-600 hover:bg-blue-700 text-white"
            >
              <Users className="size-4" />
              Quản Lý Leads
            </Button>
            <Button
              onClick={() => navigate("/blog-posts/create")}
              variant="outline"
              className="gap-2 shadow-sm font-medium"
            >
              <PlusCircle className="size-4" />
              Viết Bài Mới
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => window.open("http://localhost:3000", "_blank")}
              title="Xem Website"
              className="size-9 border"
            >
              <ExternalLink className="size-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* KPI Stats Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {/* Total Leads */}
        <Card
          onClick={() => navigate("/leads")}
          className="hover:shadow-md transition-all cursor-pointer hover:border-blue-500/40"
        >
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Tổng Khách Hàng (Leads)
            </CardTitle>
            <div className="p-2 rounded-xl bg-blue-500/10 text-blue-600">
              <Users className="size-5" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{leadsQuery.isLoading ? "..." : totalLeads}</div>
            <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
              <span className="font-semibold text-blue-600">{newLeadsCount} mới</span> chờ liên hệ
            </p>
          </CardContent>
        </Card>

        {/* Won Deals / Total Value */}
        <Card
          onClick={() => navigate("/leads")}
          className="hover:shadow-md transition-all cursor-pointer hover:border-emerald-500/40"
        >
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Hợp Đồng Đã Chốt
            </CardTitle>
            <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-600">
              <CheckCircle2 className="size-5" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-emerald-600">
              {leadsQuery.isLoading ? "..." : wonCount}
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              {totalWonValue > 0
                ? `${totalWonValue.toLocaleString("vi-VN")} đ doanh số`
                : "Tỷ lệ chốt tư vấn"}
            </p>
          </CardContent>
        </Card>

        {/* Blog Posts */}
        <Card
          onClick={() => navigate("/blog-posts")}
          className="hover:shadow-md transition-all cursor-pointer hover:border-amber-500/40"
        >
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Bài Viết Kiến Thức
            </CardTitle>
            <div className="p-2 rounded-xl bg-amber-500/10 text-amber-600">
              <Newspaper className="size-5" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{blogQuery.isLoading ? "..." : totalBlogs}</div>
            <p className="text-xs text-muted-foreground mt-1">
              Bài viết đã đăng trên chuyên mục Blog
            </p>
          </CardContent>
        </Card>

        {/* Products & Testimonials */}
        <Card
          onClick={() => navigate("/website-content")}
          className="hover:shadow-md transition-all cursor-pointer hover:border-purple-500/40"
        >
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Sản Phẩm & Đánh Giá
            </CardTitle>
            <div className="p-2 rounded-xl bg-purple-500/10 text-purple-600">
              <Briefcase className="size-5" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalProducts} gói</div>
            <p className="text-xs text-muted-foreground mt-1">
              {totalTestimonials} đánh giá học viên & đối tác
            </p>
          </CardContent>
        </Card>
      </div>

      {/* CRM Leads Pipeline Status Breakdown */}
      <Card className="shadow-sm">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-base font-semibold flex items-center gap-2">
                <Activity className="size-4 text-blue-500" />
                Tiến Trình Phễu Tư Vấn Leads (CRM Pipeline)
              </CardTitle>
              <CardDescription className="text-xs mt-0.5">
                Phân bố trạng thái các khách hàng đăng ký qua hệ thống
              </CardDescription>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => navigate("/leads")}
              className="text-xs gap-1"
            >
              Xem chi tiết CRM
              <ArrowRight className="size-3" />
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-200/50">
              <span className="text-xs text-blue-700 font-medium block">🔵 Mới Tiếp Nhận</span>
              <span className="text-2xl font-bold text-blue-800">{newLeadsCount}</span>
            </div>
            <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-200/50">
              <span className="text-xs text-amber-700 font-medium block">🟡 Đã Liên Hệ</span>
              <span className="text-2xl font-bold text-amber-800">{contactedCount}</span>
            </div>
            <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-200/50">
              <span className="text-xs text-purple-700 font-medium block">🟣 Đang Tư Vấn</span>
              <span className="text-2xl font-bold text-purple-800">{consultingCount}</span>
            </div>
            <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-200/50">
              <span className="text-xs text-emerald-700 font-medium block">🟢 Đã Chốt HĐ</span>
              <span className="text-2xl font-bold text-emerald-800">{wonCount}</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-500/10 border border-slate-200/50 col-span-2 sm:col-span-1">
              <span className="text-xs text-slate-700 font-medium block">⚪ Không Tiềm Năng</span>
              <span className="text-2xl font-bold text-slate-800">{lostCount}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Main Sections: Recent Leads & Recent Blog Posts */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Recent Leads */}
        <Card className="shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-3">
            <div>
              <CardTitle className="text-base font-semibold">Khách Hàng Mới Nhất</CardTitle>
              <CardDescription className="text-xs">
                Danh sách khách hàng vừa để lại thông tin tư vấn
              </CardDescription>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate("/leads")}
              className="gap-1 text-xs"
            >
              Xem tất cả
              <ArrowUpRight className="size-3.5" />
            </Button>
          </CardHeader>
          <CardContent>
            {leadsQuery.isLoading ? (
              <div className="py-8 text-center text-sm text-muted-foreground">Đang tải danh sách...</div>
            ) : recentLeads.length === 0 ? (
              <div className="py-8 text-center text-sm text-muted-foreground">
                Chưa có khách hàng đăng ký mới.
              </div>
            ) : (
              <div className="divide-y divide-border/60">
                {recentLeads.map((lead: any) => {
                  const statusInfo = LEAD_STATUSES[lead.status || "new"] || LEAD_STATUSES.new;
                  return (
                    <div
                      key={lead.id}
                      onClick={() => navigate("/leads")}
                      className="py-3 flex items-start justify-between gap-3 cursor-pointer hover:bg-muted/30 rounded-lg px-2 -mx-2 transition-colors"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-sm text-foreground">
                            {lead.name || "Khách ẩn danh"}
                          </span>
                          <span
                            className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium border ${statusInfo.color}`}
                          >
                            {statusInfo.label}
                          </span>
                        </div>
                        <div className="flex items-center gap-3 text-xs text-muted-foreground">
                          {lead.phone && (
                            <span className="flex items-center gap-1">
                              <Phone className="size-3" />
                              {lead.phone}
                            </span>
                          )}
                          {lead.package && (
                            <Badge variant="outline" className="text-[10px] py-0">
                              {lead.package}
                            </Badge>
                          )}
                        </div>
                        {lead.message && (
                          <p className="text-xs text-muted-foreground line-clamp-1 italic">
                            &ldquo;{lead.message}&rdquo;
                          </p>
                        )}
                      </div>
                      <span className="text-[11px] text-muted-foreground whitespace-nowrap">
                        {lead.createdAt ? new Date(lead.createdAt).toLocaleDateString("vi-VN") : "Vừa xong"}
                      </span>
                    </div>
                  );
                })}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Recent Blog Posts */}
        <Card className="shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-3">
            <div>
              <CardTitle className="text-base font-semibold">Bài Viết Mới Xuất Bản</CardTitle>
              <CardDescription className="text-xs">
                Các bài viết gần nhất trên chuyên mục Blog Kiến Thức
              </CardDescription>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate("/blog-posts")}
              className="gap-1 text-xs"
            >
              Xem tất cả
              <ArrowUpRight className="size-3.5" />
            </Button>
          </CardHeader>
          <CardContent>
            {blogQuery.isLoading ? (
              <div className="py-8 text-center text-sm text-muted-foreground">Đang tải bài viết...</div>
            ) : blogResult?.data?.length === 0 ? (
              <div className="py-8 text-center text-sm text-muted-foreground">
                Chưa có bài viết nào.
              </div>
            ) : (
              <div className="divide-y divide-border/60">
                {blogResult?.data?.map((post: any) => (
                  <div
                    key={post.id}
                    onClick={() => navigate(`/blog-posts/edit/${post.id}`)}
                    className="py-3 flex items-start justify-between gap-3 cursor-pointer hover:bg-muted/30 rounded-lg px-2 -mx-2 transition-colors"
                  >
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold text-foreground line-clamp-1 hover:text-primary">
                        {post.title}
                      </h4>
                      <p className="text-xs text-muted-foreground line-clamp-1">
                        {post.excerpt || "Không có tóm tắt"}
                      </p>
                      <div className="flex items-center gap-2 text-[11px] text-muted-foreground">
                        <Badge variant="outline" className="text-[10px] py-0">
                          {post.category || "Kiến thức"}
                        </Badge>
                        {post.read_time && (
                          <span className="flex items-center gap-1">
                            <Clock className="size-3" />
                            {post.read_time} phút
                          </span>
                        )}
                      </div>
                    </div>
                    <Badge
                      variant={post.status === "published" || post.is_published !== false ? "default" : "secondary"}
                      className="text-[10px]"
                    >
                      {post.status === "published" || post.is_published !== false ? "Đã đăng" : "Bản nháp"}
                    </Badge>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
