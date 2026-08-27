"use client";

import { useState } from "react";
import {
  Images,
  Upload,
  Check,
  Search,
  ExternalLink,
  Copy,
  FolderOpen,
  Sparkles,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { toast } from "sonner";

export interface MediaItem {
  id: string;
  title: string;
  url: string;
  category: "master" | "workshop" | "books" | "feedback" | "partners" | "uploads";
}

export const DEFAULT_MEDIA_LIBRARY: MediaItem[] = [
  // Master & Brand
  {
    id: "m1",
    title: "Master Linh - Ảnh Chân Dung Diễn Giả Chính",
    url: "https://minio.agentic.io.vn/linhoatam/assets/speaker-hero.png",
    category: "master",
  },
  {
    id: "m2",
    title: "Master Linh - Tiểu Sử & Bằng Cấp",
    url: "https://minio.agentic.io.vn/linhoatam/assets/speaker-bio.png",
    category: "master",
  },
  {
    id: "m3",
    title: "Master Linh - Chân Dung Khai Vấn Lãnh Đạo",
    url: "https://minio.agentic.io.vn/linhoatam/assets/speaker-cta.png",
    category: "master",
  },
  {
    id: "m4",
    title: "Logo Linh Hoa Tâm",
    url: "https://minio.agentic.io.vn/linhoatam/assets/logo.png",
    category: "master",
  },
  // Workshop & Events
  {
    id: "w1",
    title: "Sự Kiện Diễn Thuyết 1 - CEO Summit",
    url: "https://minio.agentic.io.vn/linhoatam/assets/speaker-event-1.png",
    category: "workshop",
  },
  {
    id: "w2",
    title: "Sự Kiện Diễn Thuyết 2 - Lãnh Đạo Tỉnh Thức",
    url: "https://minio.agentic.io.vn/linhoatam/assets/speaker-event-2.png",
    category: "workshop",
  },
  {
    id: "w3",
    title: "Sự Kiện Diễn Thuyết 3 - Năng Lượng Phong Thủy",
    url: "https://minio.agentic.io.vn/linhoatam/assets/speaker-event-3.png",
    category: "workshop",
  },
  {
    id: "w4",
    title: "Workshop Cá Nhân - Khai Mở Tiềm Năng",
    url: "https://minio.agentic.io.vn/linhoatam/assets/workshop-banner.png",
    category: "workshop",
  },
  // Sách & Ấn phẩm
  {
    id: "b1",
    title: "Bìa Sách Khai Mở Vận Mệnh",
    url: "https://minio.agentic.io.vn/linhoatam/books/sach-cover.png",
    category: "books",
  },
  {
    id: "b2",
    title: "Cảm Nhận Độc Giả Sách 1",
    url: "https://minio.agentic.io.vn/linhoatam/books/feedback-1.jpg",
    category: "books",
  },
  {
    id: "b3",
    title: "Cảm Nhận Độc Giả Sách 2",
    url: "https://minio.agentic.io.vn/linhoatam/books/feedback-2.jpg",
    category: "books",
  },
  // Feedback
  {
    id: "f1",
    title: "Feedback Tin Nhắn Khách Hàng 1",
    url: "https://minio.agentic.io.vn/linhoatam/assets/feedback-chat-1.jpg",
    category: "feedback",
  },
  {
    id: "f2",
    title: "Feedback Tin Nhắn Khách Hàng 2",
    url: "https://minio.agentic.io.vn/linhoatam/assets/feedback-chat-2.jpg",
    category: "feedback",
  },
  // Partners
  {
    id: "p1",
    title: "Đối Tác VTV",
    url: "https://minio.agentic.io.vn/linhoatam/assets/partner-vtv.png",
    category: "partners",
  },
  {
    id: "p2",
    title: "Báo CafeBiz",
    url: "https://minio.agentic.io.vn/linhoatam/assets/partner-cafebiz.png",
    category: "partners",
  },
  {
    id: "p3",
    title: "Báo VietNamNet",
    url: "https://minio.agentic.io.vn/linhoatam/assets/partner-vietnamnet.png",
    category: "partners",
  },
  {
    id: "p4",
    title: "Báo VnExpress",
    url: "https://minio.agentic.io.vn/linhoatam/assets/partner-vnexpress.png",
    category: "partners",
  },
];

interface ImagePickerDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSelectImage: (url: string) => void;
  currentUrl?: string;
}

export function ImagePickerDialog({
  open,
  onOpenChange,
  onSelectImage,
  currentUrl,
}: ImagePickerDialogProps) {
  const [selectedUrl, setSelectedUrl] = useState<string>(currentUrl || "");
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [customUrl, setCustomUrl] = useState("");
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
    const file = e.target.files?.[0];
    if (!file) return;

    // Convert to base64 or object URL for local storage demo
    const reader = new FileReader();
    reader.onload = (event) => {
      const dataUrl = event.target?.result as string;
      const newItem: MediaItem = {
        id: `upload_${Date.now()}`,
        title: file.name,
        url: dataUrl,
        category: "uploads",
      };

      const updated = [newItem, ...mediaList];
      setMediaList(updated);
      setSelectedUrl(dataUrl);

      // Save custom uploads
      const uploadsOnly = updated.filter((item) => item.category === "uploads");
      try {
        localStorage.setItem("lht_uploaded_media", JSON.stringify(uploadsOnly.slice(0, 15)));
      } catch (err) {
        console.warn("LocalStorage quota exceeded:", err);
      }

      toast.success("Đã tải ảnh lên thư viện thành công!");
    };
    reader.readAsDataURL(file);
  };

  const filteredMedia = mediaList.filter((item) => {
    const matchesSearch =
      !searchTerm || item.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      activeCategory === "all" || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const handleConfirm = () => {
    const finalUrl = customUrl.trim() || selectedUrl;
    if (!finalUrl) {
      toast.error("Vui lòng chọn hoặc nhập đường dẫn ảnh");
      return;
    }
    onSelectImage(finalUrl);
    onOpenChange(false);
    toast.success("Đã áp dụng hình ảnh!");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[85vh] flex flex-col p-6">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-lg">
            <Images className="size-5 text-primary" />
            Thư Viện Hình Ảnh & Media Linh Hoa Tâm
          </DialogTitle>
          <DialogDescription>
            Chọn ảnh có sẵn từ hệ thống MinIO S3 hoặc tải ảnh mới từ máy tính của bạn
          </DialogDescription>
        </DialogHeader>

        {/* Filter and Upload Header */}
        <div className="flex flex-col sm:flex-row items-center gap-3 py-2">
          <div className="relative flex-1 w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
            <Input
              placeholder="Tìm kiếm hình ảnh theo tên..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9 h-9"
            />
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <label className="cursor-pointer">
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileUpload}
              />
              <Button type="button" variant="outline" size="sm" className="gap-2 pointer-events-none text-xs">
                <Upload className="size-3.5" />
                Tải Ảnh Mới
              </Button>
            </label>
          </div>
        </div>

        {/* Categories Tabs */}
        <Tabs value={activeCategory} onValueChange={setActiveCategory} className="flex-1 flex flex-col overflow-hidden">
          <TabsList className="grid grid-cols-6 h-8 p-0.5 bg-muted/60 text-xs">
            <TabsTrigger value="all" className="text-[11px] py-1">Tất cả</TabsTrigger>
            <TabsTrigger value="master" className="text-[11px] py-1">Master Linh</TabsTrigger>
            <TabsTrigger value="workshop" className="text-[11px] py-1">Workshop</TabsTrigger>
            <TabsTrigger value="books" className="text-[11px] py-1">Sách</TabsTrigger>
            <TabsTrigger value="feedback" className="text-[11px] py-1">Feedback</TabsTrigger>
            <TabsTrigger value="uploads" className="text-[11px] py-1">Đã tải lên</TabsTrigger>
          </TabsList>

          {/* Image Grid Gallery */}
          <div className="flex-1 overflow-y-auto mt-3 pr-1 min-h-[300px]">
            {filteredMedia.length === 0 ? (
              <div className="py-16 text-center text-sm text-muted-foreground">
                Không tìm thấy hình ảnh nào. Bạn có thể bấm &ldquo;Tải Ảnh Mới&rdquo; để thêm ảnh.
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {filteredMedia.map((item) => {
                  const isSelected = selectedUrl === item.url;
                  return (
                    <div
                      key={item.id}
                      onClick={() => {
                        setSelectedUrl(item.url);
                        setCustomUrl("");
                      }}
                      className={`group relative rounded-xl border overflow-hidden cursor-pointer transition-all ${
                        isSelected
                          ? "ring-2 ring-primary border-primary shadow-md"
                          : "hover:border-primary/50 hover:shadow-sm"
                      }`}
                    >
                      <div className="aspect-video bg-muted/50 relative overflow-hidden flex items-center justify-center">
                        <img
                          src={item.url}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          onError={(e) => {
                            (e.target as HTMLElement).style.display = "none";
                          }}
                        />
                        {isSelected && (
                          <div className="absolute inset-0 bg-primary/20 backdrop-blur-[1px] flex items-center justify-center">
                            <div className="p-1.5 rounded-full bg-primary text-primary-foreground shadow-sm">
                              <Check className="size-4" />
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="p-2 bg-card">
                        <p className="text-[11px] font-medium text-foreground line-clamp-1">
                          {item.title}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </Tabs>

        {/* Custom URL Input Field */}
        <div className="pt-3 border-t space-y-1.5">
          <div className="flex items-center gap-2">
            <Input
              placeholder="Hoặc dán trực tiếp URL ảnh ngoài (https://...)"
              value={customUrl || selectedUrl}
              onChange={(e) => {
                setCustomUrl(e.target.value);
                setSelectedUrl(e.target.value);
              }}
              className="text-xs font-mono"
            />
            {selectedUrl && (
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="size-8 shrink-0"
                onClick={() => {
                  navigator.clipboard.writeText(selectedUrl);
                  toast.success("Đã sao chép link ảnh vào bộ nhớ tạm!");
                }}
                title="Sao chép liên kết ảnh"
              >
                <Copy className="size-4" />
              </Button>
            )}
          </div>
        </div>

        <DialogFooter className="gap-2 sm:gap-0 pt-2">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Hủy
          </Button>
          <Button onClick={handleConfirm} className="gap-1.5">
            <Check className="size-4" />
            Chọn Hình Ảnh Này
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
