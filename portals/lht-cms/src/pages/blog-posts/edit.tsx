"use client";

import { useState, useEffect } from "react";
import { useOne, useUpdate } from "@refinedev/core";
import { useParams, useNavigate } from "react-router";
import {
  ArrowLeft,
  Save,
  ExternalLink,
  Images,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { ImagePickerDialog } from "@/components/media/image-picker-dialog";

const CATEGORIES = [
  { value: "Hệ điều hành cá nhân", slug: "he-dieu-hanh-ca-nhan" },
  { value: "Ra quyết định", slug: "ra-quyet-dinh" },
  { value: "Đội ngũ & Nhân sự", slug: "doi-ngu-nhan-su" },
  { value: "Tài chính & Đầu tư", slug: "tai-chinh-dau-tu" },
  { value: "Lãnh đạo & Vận hành", slug: "lanh-dao-van-hanh" },
];

export default function BlogPostEditPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { result: postResult, query: postQuery } = useOne({
    resource: "blog_posts",
    id: id as string,
  });

  const { mutate: updatePost, mutation } = useUpdate();

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [category, setCategory] = useState("Hệ điều hành cá nhân");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [author, setAuthor] = useState("Master Hoàng Mai Linh");
  const [authorRole, setAuthorRole] = useState("Chuyên Gia Khai Vấn & Đọc Bài Tây");
  const [readingTime, setReadingTime] = useState("5 phút đọc");
  const [isPinned, setIsPinned] = useState(false);
  const [isPublished, setIsPublished] = useState(true);
  const [tags, setTags] = useState("");
  const [showImagePicker, setShowImagePicker] = useState(false);

  const post = postResult?.data;

  useEffect(() => {
    if (post) {
      setTitle(post.title || "");
      setSlug(post.slug || "");
      setCategory(post.category || "Hệ điều hành cá nhân");
      setExcerpt(post.excerpt || "");
      setContent(post.content || "");
      setCoverImage(post.cover_image || "");
      setAuthor(post.author || "Master Hoàng Mai Linh");
      setAuthorRole(post.author_role || "Chuyên Gia Khai Vấn & Đọc Bài Tây");
      setReadingTime(post.reading_time || "5 phút đọc");
      setIsPinned(!!post.is_pinned);
      setIsPublished(post.is_published !== false);
      setTags(Array.isArray(post.tags) ? post.tags.join(", ") : post.tags || "");
    }
  }, [post]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) {
      toast.error("Vui lòng nhập tiêu đề bài viết.");
      return;
    }
    if (!slug.trim()) {
      toast.error("Vui lòng nhập slug bài viết.");
      return;
    }

    const selectedCat = CATEGORIES.find((c) => c.value === category);

    updatePost(
      {
        resource: "blog_posts",
        id: id as string,
        values: {
          title,
          slug,
          excerpt,
          content,
          category,
          category_slug: selectedCat?.slug || "kien-thuc",
          author,
          author_role: authorRole,
          reading_time: readingTime,
          cover_image: coverImage,
          is_pinned: isPinned,
          is_published: isPublished,
          tags: tags.split(",").map((t) => t.trim()).filter(Boolean),
        },
      },
      {
        onSuccess: () => {
          toast.success("Cập nhật bài viết thành công!");
          navigate("/blog-posts");
        },
        onError: (err: any) => {
          toast.error("Lỗi khi cập nhật bài viết: " + (err?.message || "Vui lòng thử lại"));
        },
      }
    );
  };

  if (postQuery.isLoading) {
    return (
      <div className="py-20 text-center text-sm text-muted-foreground">
        Đang tải thông tin bài viết...
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-2 max-w-5xl mx-auto">
      {/* Top Navigation */}
      <div className="flex items-center justify-between gap-4">
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={() => navigate("/blog-posts")}
          className="gap-2"
        >
          <ArrowLeft className="size-4" />
          Quay lại danh sách
        </Button>
        <div className="flex items-center gap-3">
          {slug && (
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => window.open(`http://localhost:3000/kien-thuc/${slug}`, "_blank")}
              className="gap-1.5"
            >
              <ExternalLink className="size-3.5" />
              Xem trên Web
            </Button>
          )}
          <Button
            type="button"
            variant="outline"
            onClick={() => navigate("/blog-posts")}
          >
            Hủy
          </Button>
          <Button type="submit" disabled={mutation?.isPending} className="gap-2 font-medium">
            <Save className="size-4" />
            {mutation?.isPending ? "Đang lưu..." : "Lưu Thay Đổi"}
          </Button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Main Content (Left 2 cols) */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle>Chỉnh Sửa Bài Viết</CardTitle>
              <CardDescription>Cập nhật nội dung, tiêu đề và tóm tắt</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Tiêu Đề Bài Viết *</Label>
                <Input
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="text-base font-medium"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="slug">Slug Đường Dẫn URL *</Label>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted-foreground font-mono">/kien-thuc/</span>
                  <Input
                    id="slug"
                    value={slug}
                    onChange={(e) => setSlug(e.target.value)}
                    className="font-mono text-sm"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="excerpt">Tóm Tắt Ngắn (Excerpt)</Label>
                <Textarea
                  id="excerpt"
                  value={excerpt}
                  onChange={(e) => setExcerpt(e.target.value)}
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="content">Nội Dung Chi Tiết (Markdown / HTML) *</Label>
                <Textarea
                  id="content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  rows={15}
                  className="font-mono text-sm leading-relaxed"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar Meta Info (Right 1 col) */}
        <div className="space-y-6">
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="text-base">Thiết Lập Xuất Bản</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Trạng Thái Xuất Bản</Label>
                  <p className="text-xs text-muted-foreground">Hiển thị trực tiếp trên web</p>
                </div>
                <Switch checked={isPublished} onCheckedChange={setIsPublished} />
              </div>

              <div className="flex items-center justify-between border-t pt-4">
                <div className="space-y-0.5">
                  <Label>Ghim Lên Đầu</Label>
                  <p className="text-xs text-muted-foreground">Ưu tiên bài viết nổi bật</p>
                </div>
                <Switch checked={isPinned} onCheckedChange={setIsPinned} />
              </div>

              <div className="space-y-2 border-t pt-4">
                <Label>Chuyên Mục</Label>
                <Select value={category} onValueChange={(val: any) => setCategory(val || "Hệ điều hành cá nhân")}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {CATEGORIES.map((cat) => (
                      <SelectItem key={cat.slug} value={cat.value}>
                        {cat.value}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="readingTime">Thời Lượng Đọc</Label>
                <Input
                  id="readingTime"
                  value={readingTime}
                  onChange={(e) => setReadingTime(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="tags">Thẻ / Tags (Phân cách bằng dấu phẩy)</Label>
                <Input
                  id="tags"
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-base">Ảnh Bìa & Tác Giả</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="coverImage">Ảnh Bìa Bài Viết</Label>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowImagePicker(true)}
                    className="h-7 text-xs text-primary gap-1 px-2"
                  >
                    <Images className="size-3.5" />
                    Chọn Từ Thư Viện
                  </Button>
                </div>
                <Input
                  id="coverImage"
                  value={coverImage}
                  onChange={(e) => setCoverImage(e.target.value)}
                />
                {coverImage && (
                  <div className="relative aspect-video rounded-lg overflow-hidden border mt-2 bg-muted">
                    <img
                      src={coverImage}
                      alt="Preview"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = "none";
                      }}
                    />
                  </div>
                )}
              </div>

              <div className="space-y-2 border-t pt-4">
                <Label htmlFor="author">Tác Giả</Label>
                <Input
                  id="author"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="authorRole">Chức Danh Tác Giả</Label>
                <Input
                  id="authorRole"
                  value={authorRole}
                  onChange={(e) => setAuthorRole(e.target.value)}
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Image Picker Modal */}
      <ImagePickerDialog
        open={showImagePicker}
        onOpenChange={setShowImagePicker}
        onSelectImage={(url) => setCoverImage(url)}
        currentUrl={coverImage}
      />
    </form>
  );
}
