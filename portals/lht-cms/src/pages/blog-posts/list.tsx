"use client";

import { useState } from "react";
import { useList, useDelete } from "@refinedev/core";
import { useNavigate } from "react-router";
import {
  Plus,
  Search,
  Edit2,
  Trash2,
  ExternalLink,
  Pin,
  Clock,
  Filter,
  FileText,
  Eye,
  Calendar,
  User,
  Tag,
  Share2,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { toast } from "sonner";

const CATEGORIES = [
  { value: "all", label: "Tất cả chuyên mục" },
  { value: "Hệ điều hành cá nhân", label: "Hệ điều hành cá nhân" },
  { value: "Ra quyết định", label: "Ra quyết định" },
  { value: "Đội ngũ & Nhân sự", label: "Đội ngũ & Nhân sự" },
  { value: "Tài chính & Đầu tư", label: "Tài chính & Đầu tư" },
  { value: "Lãnh đạo & Vận hành", label: "Lãnh đạo & Vận hành" },
];

export default function BlogPostsListPage() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedPost, setSelectedPost] = useState<any | null>(null);
  const [deleteId, setDeleteId] = useState<number | null>(null);

  const { result: postsResult, query: postsQuery } = useList({
    resource: "blog_posts",
    pagination: { mode: "server", currentPage: 1, pageSize: 50 },
    sorters: [{ field: "id", order: "desc" }],
  });

  const { mutate: deletePost } = useDelete();

  const handleDelete = () => {
    if (!deleteId) return;
    deletePost(
      {
        resource: "blog_posts",
        id: deleteId,
      },
      {
        onSuccess: () => {
          toast.success("Đã xóa bài viết thành công!");
          setDeleteId(null);
          postsQuery.refetch();
        },
        onError: () => {
          toast.error("Có lỗi xảy ra khi xóa bài viết.");
          setDeleteId(null);
        },
      }
    );
  };

  const filteredPosts = postsResult?.data?.filter((post: any) => {
    const matchesSearch =
      !searchTerm ||
      post.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.slug?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="flex flex-col gap-6 p-2">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground flex items-center gap-2">
            <FileText className="size-7 text-amber-500" />
            Quản Lý Bài Viết Kiến Thức
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            Tổng hợp và chỉnh sửa các bài viết chuyên sâu về Phong Thủy, Nhân Số Học & Lãnh Đạo Tỉnh Thức.
          </p>
        </div>
        <Button
          onClick={() => navigate("/blog-posts/create")}
          className="gap-2 shadow-sm font-medium self-start sm:self-auto"
        >
          <Plus className="size-4" />
          Tạo Bài Viết Mới
        </Button>
      </div>

      {/* Filters Bar */}
      <Card className="shadow-sm">
        <CardContent className="pt-6">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
              <Input
                placeholder="Tìm kiếm theo tiêu đề hoặc slug..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9"
              />
            </div>
            <div className="w-full sm:w-64">
              <Select
                value={selectedCategory}
                onValueChange={(val: any) => setSelectedCategory(val || "all")}
              >
                <SelectTrigger>
                  <Filter className="size-4 mr-2 text-muted-foreground" />
                  <SelectValue placeholder="Chọn chuyên mục" />
                </SelectTrigger>
                <SelectContent>
                  {CATEGORIES.map((cat) => (
                    <SelectItem key={cat.value} value={cat.value}>
                      {cat.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Blog Posts Table */}
      <Card className="shadow-sm">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-base">
              Danh Sách Bài Viết ({filteredPosts?.length || 0})
            </CardTitle>
            <Button variant="outline" size="sm" onClick={() => postsQuery.refetch()} className="text-xs">
              Làm mới
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          {postsQuery.isLoading ? (
            <div className="py-12 text-center text-sm text-muted-foreground">
              Đang tải danh sách bài viết...
            </div>
          ) : filteredPosts?.length === 0 ? (
            <div className="py-12 text-center text-sm text-muted-foreground">
              Không tìm thấy bài viết nào phù hợp.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-xs uppercase bg-muted/50 text-muted-foreground border-b">
                  <tr>
                    <th className="py-3 px-4">Tiêu đề & Tóm tắt</th>
                    <th className="py-3 px-4">Chuyên mục</th>
                    <th className="py-3 px-4">Thời lượng</th>
                    <th className="py-3 px-4">Trạng thái</th>
                    <th className="py-3 px-4 text-right">Thao tác</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/60">
                  {filteredPosts?.map((post: any) => (
                    <tr
                      key={post.id}
                      className="hover:bg-muted/30 transition-colors cursor-pointer"
                      onClick={() => setSelectedPost(post)}
                    >
                      <td className="py-3.5 px-4 max-w-md">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            {post.is_pinned && (
                              <Badge variant="outline" className="bg-amber-500/10 text-amber-600 border-amber-500/30 gap-1 text-[10px] py-0">
                                <Pin className="size-2.5" /> Ghim
                              </Badge>
                            )}
                            <span className="font-semibold text-foreground hover:text-primary transition-colors line-clamp-1">
                              {post.title}
                            </span>
                          </div>
                          <p className="text-xs text-muted-foreground line-clamp-1">
                            {post.excerpt || "Không có tóm tắt"}
                          </p>
                          <span className="text-[11px] text-muted-foreground/80 font-mono">
                            /kien-thuc/{post.slug}
                          </span>
                        </div>
                      </td>
                      <td className="py-3.5 px-4 whitespace-nowrap">
                        <Badge variant="secondary" className="font-normal text-xs">
                          {post.category || "Kiến thức"}
                        </Badge>
                      </td>
                      <td className="py-3.5 px-4 whitespace-nowrap text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Clock className="size-3" />
                          {post.reading_time || "5 phút"}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 whitespace-nowrap">
                        <Badge
                          variant={post.is_published !== false ? "default" : "outline"}
                          className="text-xs"
                        >
                          {post.is_published !== false ? "Xuất bản" : "Bản nháp"}
                        </Badge>
                      </td>
                      <td className="py-3.5 px-4 text-right whitespace-nowrap" onClick={(e) => e.stopPropagation()}>
                        <div className="flex items-center justify-end gap-1">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="size-8 text-muted-foreground hover:text-primary"
                            onClick={() => setSelectedPost(post)}
                            title="Xem chi tiết nội dung"
                          >
                            <Eye className="size-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="size-8 text-muted-foreground hover:text-foreground"
                            onClick={() => window.open(`http://localhost:3000/kien-thuc/${post.slug}`, "_blank")}
                            title="Mở trên website"
                          >
                            <ExternalLink className="size-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="size-8 text-muted-foreground hover:text-primary"
                            onClick={() => navigate(`/blog-posts/edit/${post.id}`)}
                            title="Chỉnh sửa"
                          >
                            <Edit2 className="size-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="size-8 text-muted-foreground hover:text-destructive"
                            onClick={() => setDeleteId(post.id)}
                            title="Xóa"
                          >
                            <Trash2 className="size-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </CardContent>
      </Card>

      {/* View Post Detail / Preview Modal */}
      <Dialog open={!!selectedPost} onOpenChange={(open) => !open && setSelectedPost(null)}>
        <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto p-6">
          <DialogHeader>
            <div className="flex items-center gap-2 mb-1">
              <Badge variant="secondary" className="text-xs">{selectedPost?.category || "Kiến thức"}</Badge>
              {selectedPost?.is_pinned && (
                <Badge variant="outline" className="bg-amber-500/10 text-amber-600 text-xs">Ghim bài</Badge>
              )}
            </div>
            <DialogTitle className="text-xl sm:text-2xl font-bold leading-snug">
              {selectedPost?.title}
            </DialogTitle>
            <DialogDescription className="flex items-center gap-4 text-xs pt-1">
              <span className="flex items-center gap-1">
                <User className="size-3.5" />
                {selectedPost?.author || "Master Hoàng Mai Linh"}
              </span>
              {selectedPost?.reading_time && (
                <span className="flex items-center gap-1">
                  <Clock className="size-3.5" />
                  {selectedPost.reading_time}
                </span>
              )}
              {selectedPost?.published_at && (
                <span className="flex items-center gap-1">
                  <Calendar className="size-3.5" />
                  {new Date(selectedPost.published_at).toLocaleDateString("vi-VN")}
                </span>
              )}
            </DialogDescription>
          </DialogHeader>

          {selectedPost && (
            <div className="space-y-4 py-2">
              {selectedPost.cover_image && (
                <div className="relative aspect-video rounded-xl overflow-hidden border bg-muted">
                  <img
                    src={selectedPost.cover_image}
                    alt={selectedPost.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {selectedPost.excerpt && (
                <div className="p-3 bg-muted/40 rounded-xl border italic text-sm text-foreground leading-relaxed">
                  &ldquo;{selectedPost.excerpt}&rdquo;
                </div>
              )}

              <div className="border-t pt-4 space-y-2">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Nội Dung Chi Tiết
                </h4>
                <div className="text-sm leading-relaxed whitespace-pre-wrap font-sans text-foreground/90 bg-muted/10 p-4 rounded-xl border">
                  {selectedPost.content || "Chưa có nội dung chi tiết."}
                </div>
              </div>

              {selectedPost.tags && (
                <div className="flex flex-wrap items-center gap-1.5 pt-2">
                  <Tag className="size-3.5 text-muted-foreground mr-1" />
                  {(Array.isArray(selectedPost.tags) ? selectedPost.tags : [selectedPost.tags]).map((t: string, i: number) => (
                    <Badge key={i} variant="outline" className="text-xs font-normal">
                      #{t}
                    </Badge>
                  ))}
                </div>
              )}
            </div>
          )}

          <DialogFooter className="gap-2 sm:gap-0 pt-3 border-t">
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open(`http://localhost:3000/kien-thuc/${selectedPost?.slug}`, "_blank")}
              className="gap-1.5"
            >
              <ExternalLink className="size-3.5" />
              Mở Trên Website
            </Button>
            <Button
              size="sm"
              onClick={() => {
                const id = selectedPost?.id;
                setSelectedPost(null);
                navigate(`/blog-posts/edit/${id}`);
              }}
              className="gap-1.5"
            >
              <Edit2 className="size-3.5" />
              Chỉnh Sửa Bài Viết
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Modal */}
      <AlertDialog open={!!deleteId} onOpenChange={(open) => !open && setDeleteId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Xác nhận xóa bài viết?</AlertDialogTitle>
            <AlertDialogDescription>
              Hành động này sẽ xóa bài viết vĩnh viễn khỏi hệ thống NocoBase CMS. Bài viết sẽ không còn hiển thị trên website.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Hủy</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDelete}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              Xóa Vĩnh Viễn
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
