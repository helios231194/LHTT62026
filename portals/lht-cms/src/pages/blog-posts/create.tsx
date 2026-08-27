"use client";

import { useState } from "react";
import { useCreate } from "@refinedev/core";
import { useNavigate } from "react-router";
import {
  ArrowLeft,
  Save,
  Sparkles,
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

function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[đĐ]/g, "d")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

export default function BlogPostCreatePage() {
  const navigate = useNavigate();
  const { mutate: createPost, mutation } = useCreate();

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [autoSlug, setAutoSlug] = useState(true);
  const [category, setCategory] = useState("Hệ điều hành cá nhân");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [coverImage, setCoverImage] = useState("https://minio.agentic.io.vn/linhoatam/assets/speaker-hero.png");
  const [author, setAuthor] = useState("Master Hoàng Mai Linh");
  const [authorRole, setAuthorRole] = useState("Chuyên Gia Khai Vấn & Đọc Bài Tây");
  const [readingTime, setReadingTime] = useState("5 phút đọc");
  const [isPinned, setIsPinned] = useState(false);
  const [isPublished, setIsPublished] = useState(true);
  const [tags, setTags] = useState("Lãnh Đạo, Nhân Số Học, Phong Thủy");
  const [showImagePicker, setShowImagePicker] = useState(false);

  const handleTitleChange = (val: string) => {
    setTitle(val);
    if (autoSlug) {
      setSlug(generateSlug(val));
    }
  };

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

    createPost(
      {
        resource: "blog_posts",
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
          published_at: new Date().toISOString(),
        },
      },
      {
        onSuccess: () => {
          toast.success("Tạo bài viết mới thành công!");
          navigate("/blog-posts");
        },
        onError: (err: any) => {
          toast.error("Lỗi khi tạo bài viết: " + (err?.message || "Vui lòng thử lại"));
        },
      }
    );
  };

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
          <Button
            type="button"
            variant="outline"
            onClick={() => navigate("/blog-posts")}
          >
            Hủy
          </Button>
          <Button type="submit" disabled={mutation?.isPending} className="gap-2 font-medium">
            <Save className="size-4" />
            {mutation?.isPending ? "Đang lưu..." : "Xuất Bản Bài Viết"}
          </Button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Main Content (Left 2 cols) */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle>Nội Dung Bài Viết</CardTitle>
              <CardDescription>Nhập tiêu đề, tóm tắt và nội dung chi tiết dạng Markdown</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Tiêu Đề Bài Viết *</Label>
                <Input
                  id="title"
                  placeholder="Ví dụ: Khai mở nội lực: Chìa khóa vàng giúp bạn tự tin..."
                  value={title}
                  onChange={(e) => handleTitleChange(e.target.value)}
                  className="text-base font-medium"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="slug">Slug Đường Dẫn URL *</Label>
                  <button
                    type="button"
                    onClick={() => setAutoSlug(!autoSlug)}
                    className="text-xs text-primary hover:underline"
                  >
                    {autoSlug ? "Tự động sinh (bật)" : "Tự nhập tay"}
                  </button>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted-foreground font-mono">/kien-thuc/</span>
                  <Input
                    id="slug"
                    placeholder="khai-mo-noi-luc"
                    value={slug}
                    onChange={(e) => {
                      setAutoSlug(false);
                      setSlug(e.target.value);
                    }}
                    className="font-mono text-sm"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="excerpt">Tóm Tắt Ngắn (Excerpt)</Label>
                <Textarea
                  id="excerpt"
                  placeholder="Đoạn văn ngắn 2-3 câu tóm lược bài viết để hiển thị trên thẻ bài viết và mạng xã hội..."
                  value={excerpt}
                  onChange={(e) => setExcerpt(e.target.value)}
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="content">Nội Dung Chi Tiết (Markdown / HTML) *</Label>
                <Textarea
                  id="content"
                  placeholder="Soạn thảo nội dung bài viết ở đây... Bạn có thể dùng định dạng Markdown (# Tiêu đề, **in đậm**, - danh sách, ảnh, trích dẫn)..."
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
                  placeholder="5 phút đọc"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="tags">Thẻ / Tags (Phân cách bằng dấu phẩy)</Label>
                <Input
                  id="tags"
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                  placeholder="Lãnh Đạo, Phong Thủy, Nhân Số Học"
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
                  placeholder="https://minio.agentic.io.vn/linhoatam/..."
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
