"use client";

import { useState } from "react";
import {
  Images,
  Upload,
  Search,
  Copy,
  ExternalLink,
  Trash2,
  Eye,
  Check,
  Sparkles,
  Download,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { toast } from "sonner";
import { DEFAULT_MEDIA_LIBRARY, type MediaItem } from "@/components/media/image-picker-dialog";

export default function MediaLibraryPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [previewImage, setPreviewImage] = useState<MediaItem | null>(null);

  const [mediaList, setMediaList] = useState<MediaItem[]>(() => {
    const saved = localStorage.getItem("lht_uploaded_media");
    if (saved) {
      try {
        return [...DEFAULT_MEDIA_LIBRARY, ...JSON.parse(saved)];
      } catch (e) {
        return DEFAULT_MEDIA_LIBRARY;
      }
    }
    return DEFAULT_MEDIA_LIBRARY;
  });

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    Array.from(files).forEach((file) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        const dataUrl = event.target?.result as string;
        const newItem: MediaItem = {
          id: `upload_${Date.now()}_${Math.random().toString(36).substring(7)}`,
          title: file.name,
          url: dataUrl,
          category: "uploads",
        };

        setMediaList((prev) => {
          const updated = [newItem, ...prev];
          const uploadsOnly = updated.filter((item) => item.category === "uploads");
          try {
            localStorage.setItem("lht_uploaded_media", JSON.stringify(uploadsOnly.slice(0, 15)));
          } catch (err) {
            console.warn("LocalStorage quota exceeded:", err);
          }
          return updated;
        });

        toast.success(`Đã tải lên ảnh: ${file.name}`);
      };
      reader.readAsDataURL(file);
    });
  };

  const handleCopy = (url: string) => {
    navigator.clipboard.writeText(url);
    toast.success("Đã sao chép đường dẫn hình ảnh!");
  };

  const handleDeleteUpload = (id: string) => {
    setMediaList((prev) => {
      const updated = prev.filter((item) => item.id !== id);
      const uploadsOnly = updated.filter((item) => item.category === "uploads");
      localStorage.setItem("lht_uploaded_media", JSON.stringify(uploadsOnly));
      return updated;
    });
    toast.success("Đã xóa ảnh khỏi danh sách tải lên!");
  };

  const filteredMedia = mediaList.filter((item) => {
    const matchesSearch =
      !searchTerm || item.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      activeCategory === "all" || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="flex flex-col gap-6 p-2 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground flex items-center gap-2">
            <Images className="size-7 text-primary" />
            Thư Viện Hình Ảnh & Media
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            Quản lý toàn bộ kho ảnh MinIO S3 Linh Hoa Tâm, tải ảnh mới và sao chép liên kết phục vụ nội dung website.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <label className="cursor-pointer">
            <input
              type="file"
              accept="image/*"
              multiple
              className="hidden"
              onChange={handleFileUpload}
            />
            <Button type="button" className="gap-2 shadow-sm font-medium pointer-events-none">
              <Upload className="size-4" />
              Tải Ảnh Lên
            </Button>
          </label>
        </div>
      </div>

      {/* Search & Categories Bar */}
      <Card className="shadow-sm">
        <CardContent className="pt-6 space-y-4">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
            <Input
              placeholder="Tìm kiếm hình ảnh trong kho..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9"
            />
          </div>

          <Tabs value={activeCategory} onValueChange={setActiveCategory}>
            <TabsList className="grid grid-cols-3 sm:grid-cols-6 h-auto p-1 bg-muted/60">
              <TabsTrigger value="all" className="py-2 text-xs">Tất Cả ({mediaList.length})</TabsTrigger>
              <TabsTrigger value="master" className="py-2 text-xs">Master Linh</TabsTrigger>
              <TabsTrigger value="workshop" className="py-2 text-xs">Workshop</TabsTrigger>
              <TabsTrigger value="books" className="py-2 text-xs">Sách & Bài Viết</TabsTrigger>
              <TabsTrigger value="feedback" className="py-2 text-xs">Feedback</TabsTrigger>
              <TabsTrigger value="uploads" className="py-2 text-xs">Ảnh Tải Lên</TabsTrigger>
            </TabsList>
          </Tabs>
        </CardContent>
      </Card>

      {/* Media Grid */}
      <Card className="shadow-sm">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-base">
              Kho Ảnh ({filteredMedia.length})
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          {filteredMedia.length === 0 ? (
            <div className="py-16 text-center text-sm text-muted-foreground">
              Không tìm thấy hình ảnh nào. Bấm &ldquo;Tải Ảnh Lên&rdquo; để thêm hình ảnh mới.
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {filteredMedia.map((item) => (
                <div
                  key={item.id}
                  className="group relative rounded-xl border bg-card overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col"
                >
                  <div className="aspect-video bg-muted relative overflow-hidden flex items-center justify-center">
                    <img
                      src={item.url}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = "none";
                      }}
                    />
                    {/* Hover Overlay Actions */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                      <Button
                        size="icon"
                        variant="secondary"
                        className="size-8 rounded-full shadow"
                        onClick={() => setPreviewImage(item)}
                        title="Xem ảnh lớn"
                      >
                        <Eye className="size-4" />
                      </Button>
                      <Button
                        size="icon"
                        variant="secondary"
                        className="size-8 rounded-full shadow"
                        onClick={() => handleCopy(item.url)}
                        title="Sao chép URL"
                      >
                        <Copy className="size-4" />
                      </Button>
                      {item.category === "uploads" && (
                        <Button
                          size="icon"
                          variant="destructive"
                          className="size-8 rounded-full shadow"
                          onClick={() => handleDeleteUpload(item.id)}
                          title="Xóa ảnh"
                        >
                          <Trash2 className="size-4" />
                        </Button>
                      )}
                    </div>
                  </div>

                  <div className="p-3 flex-1 flex flex-col justify-between gap-1">
                    <p className="text-xs font-semibold text-foreground line-clamp-1" title={item.title}>
                      {item.title}
                    </p>
                    <div className="flex items-center justify-between text-[10px] text-muted-foreground pt-1 border-t">
                      <Badge variant="outline" className="text-[9px] py-0 px-1.5 font-normal">
                        {item.category === "master"
                          ? "Master"
                          : item.category === "workshop"
                          ? "Workshop"
                          : item.category === "books"
                          ? "Sách"
                          : item.category === "feedback"
                          ? "Feedback"
                          : "Upload"}
                      </Badge>
                      <button
                        onClick={() => handleCopy(item.url)}
                        className="hover:text-primary transition-colors flex items-center gap-1 font-mono"
                      >
                        <Copy className="size-2.5" />
                        Copy Link
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Lightbox Preview Modal */}
      <Dialog open={!!previewImage} onOpenChange={(open) => !open && setPreviewImage(null)}>
        <DialogContent className="max-w-4xl p-4">
          <DialogHeader>
            <DialogTitle className="text-base truncate">
              {previewImage?.title}
            </DialogTitle>
            <DialogDescription className="text-xs font-mono truncate">
              {previewImage?.url}
            </DialogDescription>
          </DialogHeader>

          {previewImage && (
            <div className="relative aspect-video rounded-xl overflow-hidden bg-black/10 flex items-center justify-center my-2 border">
              <img
                src={previewImage.url}
                alt={previewImage.title}
                className="max-h-[60vh] w-auto object-contain mx-auto"
              />
            </div>
          )}

          <div className="flex items-center justify-between pt-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => previewImage && handleCopy(previewImage.url)}
              className="gap-2 text-xs"
            >
              <Copy className="size-3.5" />
              Sao Chép URL
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => previewImage && window.open(previewImage.url, "_blank")}
              className="gap-2 text-xs"
            >
              <ExternalLink className="size-3.5" />
              Mở Tab Mới
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
