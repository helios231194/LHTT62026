"use client";

import { useState, useEffect } from "react";
import { useList, useOne, useUpdate, useCreate, useDelete } from "@refinedev/core";
import {
  Globe,
  User,
  Briefcase,
  MessageSquareQuote,
  Calendar,
  Save,
  ExternalLink,
  Plus,
  Edit2,
  Trash2,
  Images,
  Eye,
  Check,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
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
import { ImagePickerDialog } from "@/components/media/image-picker-dialog";

export default function WebsiteContentPage() {
  const [activeTab, setActiveTab] = useState("homepage");
  const [showImagePicker, setShowImagePicker] = useState(false);

  // Homepage Config
  const { result: hpResult, query: hpQuery } = useOne({
    resource: "homepage",
    id: "1",
  });
  const { mutate: updateHomepage, mutation: hpMutation } = useUpdate();

  // Form State for Homepage
  const [heroBadge, setHeroBadge] = useState("");
  const [heroTitle, setHeroTitle] = useState("");
  const [heroSubtitle, setHeroSubtitle] = useState("");
  const [heroCta, setHeroCta] = useState("");
  const [bioName, setBioName] = useState("");
  const [bioTitle, setBioTitle] = useState("");
  const [bioQuote, setBioQuote] = useState("");
  const [bioStory, setBioStory] = useState("");
  const [masterImage, setMasterImage] = useState("");

  const hp = hpResult?.data;

  useEffect(() => {
    if (hp) {
      setHeroBadge(hp.hero_badge || "");
      setHeroTitle(hp.hero_title || "");
      setHeroSubtitle(hp.hero_subtitle || "");
      setHeroCta(hp.hero_cta || "");
      setBioName(hp.bio_name || "");
      setBioTitle(hp.bio_title || "");
      setBioQuote(hp.bio_quote || "");
      setBioStory(hp.bio_story || "");
      setMasterImage(hp.master_image || "");
    }
  }, [hp]);

  const handleSaveHomepage = (e: React.FormEvent) => {
    e.preventDefault();
    updateHomepage(
      {
        resource: "homepage",
        id: "1",
        values: {
          hero_badge: heroBadge,
          hero_title: heroTitle,
          hero_subtitle: heroSubtitle,
          hero_cta: heroCta,
          bio_name: bioName,
          bio_title: bioTitle,
          bio_quote: bioQuote,
          bio_story: bioStory,
          master_image: masterImage,
        },
      },
      {
        onSuccess: () => {
          toast.success("Đã lưu cập nhật nội dung Trang Chủ & Master Linh!");
          hpQuery.refetch();
        },
        onError: (err: any) => {
          toast.error("Lỗi khi cập nhật: " + (err?.message || "Vui lòng thử lại"));
        },
      }
    );
  };

  // Queries
  const { result: personalProductsResult, query: ppQuery } = useList({
    resource: "personal_products",
  });
  const { result: testimonialsResult, query: tmQuery } = useList({
    resource: "testimonials",
  });
  const { result: workshopsResult, query: wsQuery } = useList({
    resource: "workshops",
  });

  // Mutations
  const { mutate: createProduct, mutation: createProdMutation } = useCreate();
  const { mutate: updateProduct, mutation: updateProdMutation } = useUpdate();
  const { mutate: deleteRecord } = useDelete();

  const { mutate: createTestimonial, mutation: createTmMutation } = useCreate();
  const { mutate: updateTestimonial, mutation: updateTmMutation } = useUpdate();

  const { mutate: createWorkshop, mutation: createWsMutation } = useCreate();
  const { mutate: updateWorkshop, mutation: updateWsMutation } = useUpdate();

  // Dialog States
  const [productDialog, setProductDialog] = useState<{ open: boolean; item?: any }>({ open: false });
  const [testimonialDialog, setTestimonialDialog] = useState<{ open: boolean; item?: any }>({ open: false });
  const [workshopDialog, setWorkshopDialog] = useState<{ open: boolean; item?: any }>({ open: false });
  const [deleteConfirm, setDeleteConfirm] = useState<{ resource: string; id: number; name: string } | null>(null);

  // Product Form State
  const [prodName, setProdName] = useState("");
  const [prodPrice, setProdPrice] = useState("");
  const [prodDesc, setProdDesc] = useState("");
  const [prodDuration, setProdDuration] = useState("");
  const [prodFeatures, setProdFeatures] = useState("");

  // Testimonial Form State
  const [tmName, setTmName] = useState("");
  const [tmRole, setTmRole] = useState("");
  const [tmCompany, setTmCompany] = useState("");
  const [tmContent, setTmContent] = useState("");
  const [tmRating, setTmRating] = useState(5);

  // Workshop Form State
  const [wsTitle, setWsTitle] = useState("");
  const [wsDate, setWsDate] = useState("");
  const [wsLocation, setWsLocation] = useState("");
  const [wsDesc, setWsDesc] = useState("");

  const openEditProduct = (prod: any) => {
    setProdName(prod.name || "");
    setProdPrice(prod.price || "");
    setProdDesc(prod.description || "");
    setProdDuration(prod.duration || "");
    setProdFeatures(Array.isArray(prod.features) ? prod.features.join("\n") : prod.features || "");
    setProductDialog({ open: true, item: prod });
  };

  const openCreateProduct = () => {
    setProdName("");
    setProdPrice("");
    setProdDesc("");
    setProdDuration("60 - 90 Phút");
    setProdFeatures("Bản đồ vận mệnh cá nhân\nPhân tích 5 bộ số cốt lõi\nChiến lược hành động 12 tháng");
    setProductDialog({ open: true });
  };

  const handleSaveProduct = (e: React.FormEvent) => {
    e.preventDefault();
    const values = {
      name: prodName,
      price: prodPrice,
      description: prodDesc,
      duration: prodDuration,
      features: prodFeatures.split("\n").map((f) => f.trim()).filter(Boolean),
    };

    if (productDialog.item?.id) {
      updateProduct(
        { resource: "personal_products", id: productDialog.item.id, values },
        {
          onSuccess: () => {
            toast.success("Cập nhật gói dịch vụ thành công!");
            setProductDialog({ open: false });
            ppQuery.refetch();
          },
          onError: (err: any) => {
            toast.error("Lỗi khi cập nhật gói dịch vụ: " + (err?.message || "Vui lòng thử lại"));
          },
        }
      );
    } else {
      createProduct(
        { resource: "personal_products", values },
        {
          onSuccess: () => {
            toast.success("Thêm mới gói dịch vụ thành công!");
            setProductDialog({ open: false });
            ppQuery.refetch();
          },
          onError: (err: any) => {
            toast.error("Lỗi khi thêm mới gói dịch vụ: " + (err?.message || "Vui lòng thử lại"));
          },
        }
      );
    }
  };

  const openEditTestimonial = (tm: any) => {
    setTmName(tm.name || "");
    setTmRole(tm.role || "");
    setTmCompany(tm.company || "");
    setTmContent(tm.content || "");
    setTmRating(tm.rating || 5);
    setTestimonialDialog({ open: true, item: tm });
  };

  const openCreateTestimonial = () => {
    setTmName("");
    setTmRole("Doanh nhân / Học viên");
    setTmCompany("");
    setTmContent("");
    setTmRating(5);
    setTestimonialDialog({ open: true });
  };

  const handleSaveTestimonial = (e: React.FormEvent) => {
    e.preventDefault();
    const values = {
      name: tmName,
      role: tmRole,
      company: tmCompany,
      content: tmContent,
      rating: tmRating,
    };

    if (testimonialDialog.item?.id) {
      updateTestimonial(
        { resource: "testimonials", id: testimonialDialog.item.id, values },
        {
          onSuccess: () => {
            toast.success("Cập nhật đánh giá thành công!");
            setTestimonialDialog({ open: false });
            tmQuery.refetch();
          },
          onError: (err: any) => {
            toast.error("Lỗi khi cập nhật đánh giá: " + (err?.message || "Vui lòng thử lại"));
          },
        }
      );
    } else {
      createTestimonial(
        { resource: "testimonials", values },
        {
          onSuccess: () => {
            toast.success("Thêm đánh giá mới thành công!");
            setTestimonialDialog({ open: false });
            tmQuery.refetch();
          },
          onError: (err: any) => {
            toast.error("Lỗi khi thêm đánh giá mới: " + (err?.message || "Vui lòng thử lại"));
          },
        }
      );
    }
  };

  const openEditWorkshop = (ws: any) => {
    setWsTitle(ws.title || "");
    setWsDate(ws.date || "");
    setWsLocation(ws.location || "");
    setWsDesc(ws.description || "");
    setWorkshopDialog({ open: true, item: ws });
  };

  const openCreateWorkshop = () => {
    setWsTitle("");
    setWsDate("Thứ 7 hàng tuần");
    setWsLocation("Online qua Zoom / Hà Nội");
    setWsDesc("");
    setWorkshopDialog({ open: true });
  };

  const handleSaveWorkshop = (e: React.FormEvent) => {
    e.preventDefault();
    const values = {
      title: wsTitle,
      date: wsDate,
      location: wsLocation,
      description: wsDesc,
    };

    if (workshopDialog.item?.id) {
      updateWorkshop(
        { resource: "workshops", id: workshopDialog.item.id, values },
        {
          onSuccess: () => {
            toast.success("Cập nhật thông tin workshop thành công!");
            setWorkshopDialog({ open: false });
            wsQuery.refetch();
          },
          onError: (err: any) => {
            toast.error("Lỗi khi cập nhật workshop: " + (err?.message || "Vui lòng thử lại"));
          },
        }
      );
    } else {
      createWorkshop(
        { resource: "workshops", values },
        {
          onSuccess: () => {
            toast.success("Thêm workshop mới thành công!");
            setWorkshopDialog({ open: false });
            wsQuery.refetch();
          },
          onError: (err: any) => {
            toast.error("Lỗi khi thêm workshop mới: " + (err?.message || "Vui lòng thử lại"));
          },
        }
      );
    }
  };

  const handleConfirmDelete = () => {
    if (!deleteConfirm) return;
    deleteRecord(
      { resource: deleteConfirm.resource, id: deleteConfirm.id },
      {
        onSuccess: () => {
          toast.success(`Đã xóa "${deleteConfirm.name}" thành công!`);
          setDeleteConfirm(null);
          ppQuery.refetch();
          tmQuery.refetch();
          wsQuery.refetch();
        },
      }
    );
  };

  return (
    <div className="flex flex-col gap-6 p-2 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground flex items-center gap-2">
            <Globe className="size-7 text-primary" />
            Quản Trị Nội Dung Website
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            Điều chỉnh thông tin Master Linh, các gói dịch vụ tư vấn, feedback và lịch sự kiện.
          </p>
        </div>
        <Button
          variant="outline"
          onClick={() => window.open("http://localhost:3000", "_blank")}
          className="gap-2 self-start sm:self-auto"
        >
          <ExternalLink className="size-4" />
          Xem Website Trực Tiếp
        </Button>
      </div>

      {/* Tabs Layout */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full h-auto p-1 bg-muted/60">
          <TabsTrigger value="homepage" className="gap-2 py-2.5">
            <User className="size-4" />
            Trang Chủ & Master Linh
          </TabsTrigger>
          <TabsTrigger value="products" className="gap-2 py-2.5">
            <Briefcase className="size-4" />
            Sản Phẩm & Dịch Vụ
          </TabsTrigger>
          <TabsTrigger value="testimonials" className="gap-2 py-2.5">
            <MessageSquareQuote className="size-4" />
            Đánh Giá Khách Hàng
          </TabsTrigger>
          <TabsTrigger value="workshops" className="gap-2 py-2.5">
            <Calendar className="size-4" />
            Lịch Workshop
          </TabsTrigger>
        </TabsList>

        {/* TAB 1: Homepage & Master Linh */}
        <TabsContent value="homepage" className="space-y-6">
          <form onSubmit={handleSaveHomepage} className="space-y-6">
            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg">Banner Đầu Trang (Hero Section)</CardTitle>
                <CardDescription>Tiêu đề và khẩu hiệu xuất hiện đầu tiên khi truy cập trang chủ</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="heroBadge">Huy Hiệu (Badge)</Label>
                    <Input
                      id="heroBadge"
                      value={heroBadge}
                      onChange={(e) => setHeroBadge(e.target.value)}
                      placeholder="LINH HOA TÂM • HỆ SINH THÁI KHAI VẤN"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="heroCta">Nút Hành Động (CTA Button)</Label>
                    <Input
                      id="heroCta"
                      value={heroCta}
                      onChange={(e) => setHeroCta(e.target.value)}
                      placeholder="Khám Phá Bản Thân Ngay"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="heroTitle">Tiêu Đề Chính (Hero Title)</Label>
                  <Input
                    id="heroTitle"
                    value={heroTitle}
                    onChange={(e) => setHeroTitle(e.target.value)}
                    className="text-base font-semibold"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="heroSubtitle">Mô Tả Phụ (Hero Subtitle)</Label>
                  <Textarea
                    id="heroSubtitle"
                    value={heroSubtitle}
                    onChange={(e) => setHeroSubtitle(e.target.value)}
                    rows={2}
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg">Tiểu Sử & Triết Lý Master Hoàng Mai Linh</CardTitle>
                <CardDescription>Thông tin giới thiệu về người sáng lập và sứ mệnh dẫn dắt</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="bioName">Tên Master</Label>
                    <Input
                      id="bioName"
                      value={bioName}
                      onChange={(e) => setBioName(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bioTitle">Chức Danh / Danh Xưng</Label>
                    <Input
                      id="bioTitle"
                      value={bioTitle}
                      onChange={(e) => setBioTitle(e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="masterImage">Ảnh Chân Dung Master Linh</Label>
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
                    id="masterImage"
                    value={masterImage}
                    onChange={(e) => setMasterImage(e.target.value)}
                  />
                  {masterImage && (
                    <div className="mt-2 w-32 h-32 rounded-xl overflow-hidden border bg-muted">
                      <img src={masterImage} alt="Master Linh" className="w-full h-full object-cover" />
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bioQuote">Câu Nói Tâm Đắc (Quote)</Label>
                  <Input
                    id="bioQuote"
                    value={bioQuote}
                    onChange={(e) => setBioQuote(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bioStory">Câu Chuyện & Hành Trình (Story)</Label>
                  <Textarea
                    id="bioStory"
                    value={bioStory}
                    onChange={(e) => setBioStory(e.target.value)}
                    rows={4}
                  />
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-end">
              <Button type="submit" disabled={hpMutation?.isPending} className="gap-2 font-medium">
                <Save className="size-4" />
                {hpMutation?.isPending ? "Đang lưu..." : "Lưu Thông Tin Trang Chủ"}
              </Button>
            </div>
          </form>
        </TabsContent>

        {/* TAB 2: Products */}
        <TabsContent value="products" className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-semibold">Gói Sản Phẩm & Dịch Vụ Cá Nhân</h3>
              <p className="text-xs text-muted-foreground">Các gói tư vấn 1:1, bản đồ vận mệnh và khóa học</p>
            </div>
            <Button onClick={openCreateProduct} className="gap-2 text-xs">
              <Plus className="size-4" />
              Thêm Gói Dịch Vụ
            </Button>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {ppQuery.isLoading ? (
              <div className="col-span-full py-12 text-center text-sm text-muted-foreground">
                Đang tải danh sách sản phẩm...
              </div>
            ) : (
              personalProductsResult?.data?.map((prod: any) => (
                <Card
                  key={prod.id}
                  className="shadow-sm hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
                  onClick={() => openEditProduct(prod)}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between gap-2">
                      <Badge variant="outline" className="text-xs">
                        Gói {prod.id}
                      </Badge>
                      <span className="font-bold text-primary text-sm">{prod.price || "Liên hệ"}</span>
                    </div>
                    <CardTitle className="text-base mt-2 group-hover:text-primary transition-colors">
                      {prod.name}
                    </CardTitle>
                    <CardDescription className="line-clamp-2">{prod.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3 text-xs">
                    {prod.duration && (
                      <div className="text-muted-foreground">Thời lượng: <span className="font-semibold text-foreground">{prod.duration}</span></div>
                    )}
                    {Array.isArray(prod.features) && prod.features.length > 0 && (
                      <ul className="space-y-1 text-muted-foreground list-disc list-inside">
                        {prod.features.slice(0, 3).map((f: string, i: number) => (
                          <li key={i} className="line-clamp-1">{f}</li>
                        ))}
                      </ul>
                    )}
                    <div className="flex items-center justify-end gap-1 pt-2 border-t" onClick={(e) => e.stopPropagation()}>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="size-7 text-muted-foreground hover:text-primary"
                        onClick={() => openEditProduct(prod)}
                        title="Sửa"
                      >
                        <Edit2 className="size-3.5" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="size-7 text-muted-foreground hover:text-destructive"
                        onClick={() => setDeleteConfirm({ resource: "personal_products", id: prod.id, name: prod.name })}
                        title="Xóa"
                      >
                        <Trash2 className="size-3.5" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </TabsContent>

        {/* TAB 3: Testimonials */}
        <TabsContent value="testimonials" className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-semibold">Đánh Giá Từ Khách Hàng & Học Viên</h3>
              <p className="text-xs text-muted-foreground">Ý kiến nhận xét từ các CEO, quản lý và đối tác</p>
            </div>
            <Button onClick={openCreateTestimonial} className="gap-2 text-xs">
              <Plus className="size-4" />
              Thêm Đánh Giá
            </Button>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {tmQuery.isLoading ? (
              <div className="col-span-full py-12 text-center text-sm text-muted-foreground">
                Đang tải đánh giá...
              </div>
            ) : (
              testimonialsResult?.data?.map((tm: any) => (
                <Card
                  key={tm.id}
                  className="shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
                  onClick={() => openEditTestimonial(tm)}
                >
                  <CardContent className="pt-6 space-y-3">
                    <p className="text-sm italic text-foreground leading-relaxed">
                      &ldquo;{tm.content}&rdquo;
                    </p>
                    <div className="flex items-center justify-between border-t pt-3">
                      <div>
                        <div className="font-bold text-sm text-foreground">{tm.name}</div>
                        <div className="text-xs text-muted-foreground">
                          {tm.role} {tm.company ? `• ${tm.company}` : ""}
                        </div>
                      </div>
                      <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                        <Badge variant="secondary" className="text-xs font-semibold text-amber-600">
                          ★ {tm.rating || 5}.0
                        </Badge>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="size-7 text-muted-foreground hover:text-primary"
                          onClick={() => openEditTestimonial(tm)}
                        >
                          <Edit2 className="size-3.5" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="size-7 text-muted-foreground hover:text-destructive"
                          onClick={() => setDeleteConfirm({ resource: "testimonials", id: tm.id, name: tm.name })}
                        >
                          <Trash2 className="size-3.5" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </TabsContent>

        {/* TAB 4: Workshops */}
        <TabsContent value="workshops" className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-semibold">Lịch Trình Sự Kiện & Workshop</h3>
              <p className="text-xs text-muted-foreground">Lịch các buổi chia sẻ cá nhân và chiến lược</p>
            </div>
            <Button onClick={openCreateWorkshop} className="gap-2 text-xs">
              <Plus className="size-4" />
              Thêm Workshop
            </Button>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {wsQuery.isLoading ? (
              <div className="col-span-full py-12 text-center text-sm text-muted-foreground">
                Đang tải lịch workshop...
              </div>
            ) : (
              workshopsResult?.data?.map((ws: any) => (
                <Card
                  key={ws.id}
                  className="shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
                  onClick={() => openEditWorkshop(ws)}
                >
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary" className="text-xs">{ws.date || "Sắp diễn ra"}</Badge>
                      <span className="text-xs text-muted-foreground">{ws.location || "Online / Zoom"}</span>
                    </div>
                    <CardTitle className="text-base mt-2">{ws.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-xs text-muted-foreground line-clamp-2">{ws.description}</p>
                    <div className="flex items-center justify-end gap-1 pt-2 border-t" onClick={(e) => e.stopPropagation()}>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="size-7 text-muted-foreground hover:text-primary"
                        onClick={() => openEditWorkshop(ws)}
                      >
                        <Edit2 className="size-3.5" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="size-7 text-muted-foreground hover:text-destructive"
                        onClick={() => setDeleteConfirm({ resource: "workshops", id: ws.id, name: ws.title })}
                      >
                        <Trash2 className="size-3.5" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </TabsContent>
      </Tabs>

      {/* Product Create/Edit Dialog */}
      <Dialog open={productDialog.open} onOpenChange={(open) => setProductDialog({ open })}>
        <DialogContent className="max-w-md">
          <form onSubmit={handleSaveProduct}>
            <DialogHeader>
              <DialogTitle>{productDialog.item ? "Chỉnh Sửa Gói Dịch Vụ" : "Thêm Gói Dịch Vụ Mới"}</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 py-3">
              <div className="space-y-2">
                <Label>Tên Gói Sản Phẩm *</Label>
                <Input value={prodName} onChange={(e) => setProdName(e.target.value)} required />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-2">
                  <Label>Giá Hiển Thị</Label>
                  <Input value={prodPrice} onChange={(e) => setProdPrice(e.target.value)} placeholder="3.500.000đ" />
                </div>
                <div className="space-y-2">
                  <Label>Thời Lượng</Label>
                  <Input value={prodDuration} onChange={(e) => setProdDuration(e.target.value)} placeholder="60 Phút" />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Mô Tả Ngắn</Label>
                <Textarea value={prodDesc} onChange={(e) => setProdDesc(e.target.value)} rows={2} />
              </div>
              <div className="space-y-2">
                <Label>Các Tính Năng / Quyền Lợi (Mỗi dòng 1 mục)</Label>
                <Textarea value={prodFeatures} onChange={(e) => setProdFeatures(e.target.value)} rows={3} />
              </div>
            </div>
            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => setProductDialog({ open: false })}>Hủy</Button>
              <Button type="submit" disabled={createProdMutation?.isPending || updateProdMutation?.isPending}>
                {createProdMutation?.isPending || updateProdMutation?.isPending ? "Đang lưu..." : "Lưu Dịch Vụ"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* Testimonial Create/Edit Dialog */}
      <Dialog open={testimonialDialog.open} onOpenChange={(open) => setTestimonialDialog({ open })}>
        <DialogContent className="max-w-md">
          <form onSubmit={handleSaveTestimonial}>
            <DialogHeader>
              <DialogTitle>{testimonialDialog.item ? "Chỉnh Sửa Đánh Giá" : "Thêm Đánh Giá Mới"}</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 py-3">
              <div className="space-y-2">
                <Label>Họ Tên Khách Hàng *</Label>
                <Input value={tmName} onChange={(e) => setTmName(e.target.value)} required />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-2">
                  <Label>Chức Vụ</Label>
                  <Input value={tmRole} onChange={(e) => setTmRole(e.target.value)} placeholder="CEO / Giám đốc" />
                </div>
                <div className="space-y-2">
                  <Label>Doanh Nghiệp</Label>
                  <Input value={tmCompany} onChange={(e) => setTmCompany(e.target.value)} placeholder="Tập đoàn ABC" />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Nội Dung Đánh Giá *</Label>
                <Textarea value={tmContent} onChange={(e) => setTmContent(e.target.value)} rows={4} required />
              </div>
            </div>
            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => setTestimonialDialog({ open: false })}>Hủy</Button>
              <Button type="submit" disabled={createTmMutation?.isPending || updateTmMutation?.isPending}>
                {createTmMutation?.isPending || updateTmMutation?.isPending ? "Đang lưu..." : "Lưu Đánh Giá"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* Workshop Create/Edit Dialog */}
      <Dialog open={workshopDialog.open} onOpenChange={(open) => setWorkshopDialog({ open })}>
        <DialogContent className="max-w-md">
          <form onSubmit={handleSaveWorkshop}>
            <DialogHeader>
              <DialogTitle>{workshopDialog.item ? "Chỉnh Sửa Workshop" : "Thêm Workshop Mới"}</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 py-3">
              <div className="space-y-2">
                <Label>Tên Buổi Workshop *</Label>
                <Input value={wsTitle} onChange={(e) => setWsTitle(e.target.value)} required />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-2">
                  <Label>Thời Gian Tổ Chức</Label>
                  <Input value={wsDate} onChange={(e) => setWsDate(e.target.value)} placeholder="20:00 - Thứ 7" />
                </div>
                <div className="space-y-2">
                  <Label>Địa Điểm / Hình Thức</Label>
                  <Input value={wsLocation} onChange={(e) => setWsLocation(e.target.value)} placeholder="Online Zoom" />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Mô Tả Workshop</Label>
                <Textarea value={wsDesc} onChange={(e) => setWsDesc(e.target.value)} rows={3} />
              </div>
            </div>
            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => setWorkshopDialog({ open: false })}>Hủy</Button>
              <Button type="submit" disabled={createWsMutation?.isPending || updateWsMutation?.isPending}>
                {createWsMutation?.isPending || updateWsMutation?.isPending ? "Đang lưu..." : "Lưu Workshop"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Modal */}
      <AlertDialog open={!!deleteConfirm} onOpenChange={(open) => !open && setDeleteConfirm(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Xác nhận xóa &ldquo;{deleteConfirm?.name}&rdquo;?</AlertDialogTitle>
            <AlertDialogDescription>
              Hành động này sẽ xóa mục này vĩnh viễn khỏi hệ thống quản lý.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Hủy</AlertDialogCancel>
            <AlertDialogAction onClick={handleConfirmDelete} className="bg-destructive text-destructive-foreground">
              Xóa Vĩnh Viễn
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Image Picker Dialog for Master Linh portrait */}
      <ImagePickerDialog
        open={showImagePicker}
        onOpenChange={setShowImagePicker}
        onSelectImage={(url) => setMasterImage(url)}
        currentUrl={masterImage}
      />
    </div>
  );
}
