"use client";

import { useState } from "react";
import { useList, useDelete, useCreate, useUpdate } from "@refinedev/core";
import {
  Users,
  Search,
  Phone,
  Mail,
  Trash2,
  Eye,
  Download,
  Plus,
  Save,
  CheckCircle2,
  Clock,
  MessageSquare,
  Sparkles,
  UserCheck,
  TrendingUp,
  Tag,
  AlertCircle,
  ExternalLink,
  DollarSign,
  ArrowUpDown,
  Filter,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
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

export const LEAD_STATUSES: Record<
  string,
  { label: string; color: string; badgeVariant: "default" | "secondary" | "destructive" | "outline" }
> = {
  new: { label: "Mới tiếp nhận", color: "bg-blue-500/10 text-blue-600 border-blue-200", badgeVariant: "default" },
  contacted: { label: "Đã liên hệ", color: "bg-amber-500/10 text-amber-600 border-amber-200", badgeVariant: "secondary" },
  consulting: { label: "Đang tư vấn", color: "bg-purple-500/10 text-purple-600 border-purple-200", badgeVariant: "secondary" },
  won: { label: "Đã chốt hợp đồng", color: "bg-emerald-500/10 text-emerald-600 border-emerald-200", badgeVariant: "default" },
  lost: { label: "Không tiềm năng", color: "bg-slate-500/10 text-slate-600 border-slate-200", badgeVariant: "outline" },
};

export const PACKAGES = [
  "Khai Vấn 1:1 Cùng Master Linh",
  "Hồ Sơ Vận Mệnh Pythagoras",
  "Cố Vấn & Tái Cấu Trúc Doanh Nghiệp",
  "Workshop Khai Mở Tiềm Năng",
  "Tư Vấn Tổng Quát",
];

export default function LeadsListPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedLead, setSelectedLead] = useState<any | null>(null);
  const [deleteId, setDeleteId] = useState<number | null>(null);
  const [showCreateModal, setShowCreateModal] = useState(false);

  // Edit / Notes state inside detail dialog
  const [editStatus, setEditStatus] = useState("");
  const [editNotes, setEditNotes] = useState("");
  const [editAssigned, setEditAssigned] = useState("");
  const [editValue, setEditValue] = useState("");

  // Form state for creating new lead
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPackage, setNewPackage] = useState(PACKAGES[0]);
  const [newMessage, setNewMessage] = useState("");
  const [newSource, setNewSource] = useState("Nhập thủ công");
  const [newStatus, setNewStatus] = useState("new");
  const [newPriority, setNewPriority] = useState("medium");
  const [newAssigned, setNewAssigned] = useState("Master Hoàng Mai Linh");
  const [newValue, setNewValue] = useState("");
  const [newNotes, setNewNotes] = useState("");

  const { result: leadsResult, query: leadsQuery } = useList({
    resource: "leads",
    pagination: { mode: "server", currentPage: 1, pageSize: 200 },
    sorters: [{ field: "id", order: "desc" }],
  });

  const { mutate: createLead, mutation: createMutation } = useCreate();
  const { mutate: updateLead, mutation: updateMutation } = useUpdate();
  const { mutate: deleteLead } = useDelete();

  const leads = leadsResult?.data || [];

  // Metrics calculation
  const totalCount = leads.length;
  const newCount = leads.filter((l: any) => !l.status || l.status === "new").length;
  const inProgressCount = leads.filter(
    (l: any) => l.status === "contacted" || l.status === "consulting"
  ).length;
  const wonCount = leads.filter((l: any) => l.status === "won" || l.status === "converted").length;

  const filteredLeads = leads.filter((lead: any) => {
    // Status filter
    if (statusFilter !== "all") {
      const currentStatus = lead.status || "new";
      if (statusFilter === "new" && currentStatus !== "new") return false;
      if (statusFilter === "contacted" && currentStatus !== "contacted") return false;
      if (statusFilter === "consulting" && currentStatus !== "consulting") return false;
      if (statusFilter === "won" && currentStatus !== "won" && currentStatus !== "converted") return false;
      if (statusFilter === "lost" && currentStatus !== "lost") return false;
    }

    // Search term filter
    if (!searchTerm.trim()) return true;
    const term = searchTerm.toLowerCase();
    return (
      lead.name?.toLowerCase().includes(term) ||
      lead.phone?.toLowerCase().includes(term) ||
      lead.email?.toLowerCase().includes(term) ||
      lead.package?.toLowerCase().includes(term) ||
      lead.message?.toLowerCase().includes(term) ||
      lead.notes?.toLowerCase().includes(term) ||
      lead.assigned_to?.toLowerCase().includes(term)
    );
  });

  const handleOpenDetail = (lead: any) => {
    setSelectedLead(lead);
    setEditStatus(lead.status || "new");
    setEditNotes(lead.notes || "");
    setEditAssigned(lead.assigned_to || "Master Hoàng Mai Linh");
    setEditValue(lead.value ? String(lead.value) : "");
  };

  const handleQuickStatusUpdate = (leadId: number, status: string) => {
    updateLead(
      {
        resource: "leads",
        id: leadId,
        values: { status },
      },
      {
        onSuccess: () => {
          toast.success(`Đã cập nhật trạng thái sang: ${LEAD_STATUSES[status]?.label || status}`);
          leadsQuery.refetch();
          if (selectedLead && selectedLead.id === leadId) {
            setSelectedLead({ ...selectedLead, status });
            setEditStatus(status);
          }
        },
        onError: (err: any) => {
          toast.error("Lỗi khi cập nhật trạng thái: " + (err?.message || "Vui lòng thử lại"));
        },
      }
    );
  };

  const handleSaveLeadDetails = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedLead) return;

    updateLead(
      {
        resource: "leads",
        id: selectedLead.id,
        values: {
          status: editStatus,
          notes: editNotes,
          assigned_to: editAssigned,
          value: editValue ? Number(editValue) : null,
        },
      },
      {
        onSuccess: () => {
          toast.success("Đã cập nhật thông tin lead thành công!");
          setSelectedLead({
            ...selectedLead,
            status: editStatus,
            notes: editNotes,
            assigned_to: editAssigned,
            value: editValue ? Number(editValue) : null,
          });
          leadsQuery.refetch();
        },
        onError: (err: any) => {
          toast.error("Lỗi khi lưu thông tin: " + (err?.message || "Vui lòng thử lại"));
        },
      }
    );
  };

  const handleCreateLead = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName.trim() && !newPhone.trim()) {
      toast.error("Vui lòng nhập họ tên hoặc số điện thoại");
      return;
    }

    createLead(
      {
        resource: "leads",
        values: {
          name: newName.trim(),
          phone: newPhone.trim(),
          email: newEmail.trim(),
          package: newPackage,
          message: newMessage.trim(),
          source: newSource,
          status: newStatus,
          priority: newPriority,
          assigned_to: newAssigned,
          value: newValue ? Number(newValue) : null,
          notes: newNotes.trim(),
          createdAt: new Date().toISOString(),
        },
      },
      {
        onSuccess: () => {
          toast.success("Thêm mới thông tin khách hàng thành công!");
          setShowCreateModal(false);
          setNewName("");
          setNewPhone("");
          setNewEmail("");
          setNewMessage("");
          setNewValue("");
          setNewNotes("");
          leadsQuery.refetch();
        },
        onError: (err: any) => {
          toast.error("Lỗi khi thêm khách hàng: " + (err?.message || "Vui lòng thử lại"));
        },
      }
    );
  };

  const handleDelete = () => {
    if (!deleteId) return;
    deleteLead(
      {
        resource: "leads",
        id: deleteId,
      },
      {
        onSuccess: () => {
          toast.success("Đã xóa thông tin lead thành công!");
          setDeleteId(null);
          if (selectedLead && selectedLead.id === deleteId) {
            setSelectedLead(null);
          }
          leadsQuery.refetch();
        },
        onError: () => {
          toast.error("Có lỗi xảy ra khi xóa lead.");
          setDeleteId(null);
        },
      }
    );
  };

  const handleExportCSV = () => {
    if (leads.length === 0) {
      toast.error("Không có dữ liệu để xuất");
      return;
    }
    const sanitizeCsvCell = (val: any) => {
      const str = String(val ?? "").replace(/"/g, '""');
      if (/^[=+\-@\t\r]/.test(str)) {
        return `"'${str}"`;
      }
      return `"${str}"`;
    };

    const headers = [
      "ID",
      "Họ Tên",
      "Số Điện Thoại",
      "Email",
      "Gói Quan Tâm",
      "Trạng Thái",
      "Chuyên Gia Phụ Trách",
      "Giá Trị (VNĐ)",
      "Nội Dung Yêu Cầu",
      "Ghi Chú Tư Vấn",
      "Nguồn",
      "Ngày Đăng Ký",
    ];

    const rows = leads.map((l: any) => [
      l.id,
      sanitizeCsvCell(l.name),
      sanitizeCsvCell(l.phone),
      sanitizeCsvCell(l.email),
      sanitizeCsvCell(l.package),
      sanitizeCsvCell(LEAD_STATUSES[l.status]?.label || l.status || "Mới tiếp nhận"),
      sanitizeCsvCell(l.assigned_to),
      sanitizeCsvCell(l.value),
      sanitizeCsvCell(l.message),
      sanitizeCsvCell(l.notes),
      sanitizeCsvCell(l.source),
      sanitizeCsvCell(l.createdAt),
    ]);

    const csvContent =
      "data:text/csv;charset=utf-8,\uFEFF" +
      [headers.join(","), ...rows.map((row: any[]) => row.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `LHT_CRM_Leads_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast.success("Đã tải xuống file CSV danh sách khách hàng!");
  };

  return (
    <div className="flex flex-col gap-6 p-2">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-600 text-xs font-semibold mb-1">
            <Sparkles className="size-3" />
            NocoBase CRM • Linh Hoa Tâm
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground flex items-center gap-2">
            <Users className="size-7 text-blue-500" />
            CRM Leads & Khách Hàng Tiềm Năng
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            Theo dõi, phân loại và quản lý quy trình tư vấn khách hàng từ website Linh Hoa Tâm.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Button onClick={() => setShowCreateModal(true)} className="gap-2 shadow-sm font-medium">
            <Plus className="size-4" />
            Thêm Khách Hàng Mới
          </Button>
          <Button variant="outline" size="sm" onClick={handleExportCSV} className="gap-2 text-xs">
            <Download className="size-3.5" />
            Xuất Excel (CSV)
          </Button>
          <Button variant="outline" size="sm" onClick={() => leadsQuery.refetch()} className="text-xs">
            Làm mới
          </Button>
        </div>
      </div>

      {/* Mini KPI Summary Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        <Card
          onClick={() => setStatusFilter("all")}
          className={`cursor-pointer transition-all hover:border-primary/50 ${
            statusFilter === "all" ? "ring-2 ring-primary/20 border-primary" : ""
          }`}
        >
          <CardContent className="p-4 flex items-center justify-between">
            <div>
              <p className="text-xs font-medium text-muted-foreground">Tổng Leads</p>
              <h3 className="text-xl font-bold mt-0.5">{totalCount}</h3>
            </div>
            <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-600">
              <Users className="size-5" />
            </div>
          </CardContent>
        </Card>

        <Card
          onClick={() => setStatusFilter("new")}
          className={`cursor-pointer transition-all hover:border-blue-400/50 ${
            statusFilter === "new" ? "ring-2 ring-blue-500/20 border-blue-500" : ""
          }`}
        >
          <CardContent className="p-4 flex items-center justify-between">
            <div>
              <p className="text-xs font-medium text-muted-foreground">Chờ Xử Lý (Mới)</p>
              <h3 className="text-xl font-bold mt-0.5 text-blue-600">{newCount}</h3>
            </div>
            <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-600">
              <AlertCircle className="size-5" />
            </div>
          </CardContent>
        </Card>

        <Card
          onClick={() => setStatusFilter("consulting")}
          className={`cursor-pointer transition-all hover:border-purple-400/50 ${
            statusFilter === "consulting" ? "ring-2 ring-purple-500/20 border-purple-500" : ""
          }`}
        >
          <CardContent className="p-4 flex items-center justify-between">
            <div>
              <p className="text-xs font-medium text-muted-foreground">Đang Tư Vấn</p>
              <h3 className="text-xl font-bold mt-0.5 text-purple-600">{inProgressCount}</h3>
            </div>
            <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-600">
              <Clock className="size-5" />
            </div>
          </CardContent>
        </Card>

        <Card
          onClick={() => setStatusFilter("won")}
          className={`cursor-pointer transition-all hover:border-emerald-400/50 ${
            statusFilter === "won" ? "ring-2 ring-emerald-500/20 border-emerald-500" : ""
          }`}
        >
          <CardContent className="p-4 flex items-center justify-between">
            <div>
              <p className="text-xs font-medium text-muted-foreground">Đã Chốt Hợp Đồng</p>
              <h3 className="text-xl font-bold mt-0.5 text-emerald-600">{wonCount}</h3>
            </div>
            <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-600">
              <CheckCircle2 className="size-5" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filter & Search Bar */}
      <Card className="shadow-sm">
        <CardContent className="p-4 flex flex-col md:flex-row items-center gap-3">
          <div className="relative flex-1 w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
            <Input
              placeholder="Tìm kiếm theo Tên, SĐT, Email, Gói quan tâm, Ghi chú..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9"
            />
          </div>

          <div className="flex items-center gap-2 w-full md:w-auto">
            <Select value={statusFilter} onValueChange={(val: string | null) => setStatusFilter(val || "all")}>
              <SelectTrigger className="w-[170px]">
                <SelectValue placeholder="Lọc trạng thái" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tất cả trạng thái</SelectItem>
                <SelectItem value="new">🔵 Mới tiếp nhận</SelectItem>
                <SelectItem value="contacted">🟡 Đã liên hệ</SelectItem>
                <SelectItem value="consulting">🟣 Đang tư vấn</SelectItem>
                <SelectItem value="won">🟢 Đã chốt hợp đồng</SelectItem>
                <SelectItem value="lost">⚪ Không tiềm năng</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Leads Table */}
      <Card className="shadow-sm">
        <CardHeader className="py-4 px-6 border-b flex flex-row items-center justify-between">
          <div>
            <CardTitle className="text-base font-semibold">
              Danh Sách Khách Hàng ({filteredLeads.length})
            </CardTitle>
            <CardDescription className="text-xs mt-0.5">
              Click vào hàng để xem chi tiết, cập nhật tiến độ tư vấn hoặc thêm ghi chú.
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          {leadsQuery.isLoading ? (
            <div className="py-16 text-center text-sm text-muted-foreground">
              Đang tải danh sách khách hàng từ NocoBase...
            </div>
          ) : filteredLeads.length === 0 ? (
            <div className="py-16 text-center text-sm text-muted-foreground">
              {searchTerm || statusFilter !== "all"
                ? "Không tìm thấy khách hàng nào phù hợp với bộ lọc."
                : "Chưa có dữ liệu khách hàng đăng ký."}
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-xs uppercase bg-muted/40 text-muted-foreground border-b">
                  <tr>
                    <th className="py-3 px-4">Họ Tên & Liên Hệ</th>
                    <th className="py-3 px-4">Gói Quan Tâm</th>
                    <th className="py-3 px-4">Trạng Thái</th>
                    <th className="py-3 px-4">Chuyên Gia Phụ Trách</th>
                    <th className="py-3 px-4">Ngày Đăng Ký</th>
                    <th className="py-3 px-4 text-right">Thao Tác</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/60">
                  {filteredLeads.map((lead: any) => {
                    const statusInfo = LEAD_STATUSES[lead.status || "new"] || LEAD_STATUSES.new;
                    return (
                      <tr
                        key={lead.id}
                        className="hover:bg-muted/40 transition-colors cursor-pointer"
                        onClick={() => handleOpenDetail(lead)}
                      >
                        {/* Name & Contact */}
                        <td className="py-3.5 px-4">
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <span className="font-semibold text-foreground hover:text-primary transition-colors">
                                {lead.name || "Khách ẩn danh"}
                              </span>
                              {lead.priority === "high" && (
                                <span className="inline-flex items-center px-1.5 py-0.2 rounded text-[10px] font-medium bg-red-500/10 text-red-600 border border-red-200">
                                  VIP / Gấp
                                </span>
                              )}
                            </div>
                            <div
                              className="flex items-center gap-3 text-xs text-muted-foreground"
                              onClick={(e) => e.stopPropagation()}
                            >
                              {lead.phone && (
                                <a
                                  href={`tel:${lead.phone}`}
                                  className="flex items-center gap-1 hover:text-primary transition-colors"
                                  title="Gọi điện"
                                >
                                  <Phone className="size-3" />
                                  {lead.phone}
                                </a>
                              )}
                              {lead.phone && (
                                <a
                                  href={`https://zalo.me/${lead.phone.replace(/[^0-9]/g, "")}`}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="text-[11px] font-semibold text-blue-600 hover:underline"
                                  title="Mở Zalo"
                                >
                                  Zalo
                                </a>
                              )}
                              {lead.email && (
                                <a
                                  href={`mailto:${lead.email}`}
                                  className="flex items-center gap-1 hover:text-primary transition-colors"
                                  title="Gửi Email"
                                >
                                  <Mail className="size-3" />
                                  {lead.email}
                                </a>
                              )}
                            </div>
                          </div>
                        </td>

                        {/* Package */}
                        <td className="py-3.5 px-4">
                          <Badge variant="secondary" className="font-medium text-xs">
                            {lead.package || "Tư vấn tổng quát"}
                          </Badge>
                          {lead.value ? (
                            <div className="text-xs font-semibold text-emerald-600 mt-1 flex items-center gap-0.5">
                              <DollarSign className="size-3" />
                              {Number(lead.value).toLocaleString("vi-VN")} đ
                            </div>
                          ) : null}
                        </td>

                        {/* Status with Quick Select */}
                        <td className="py-3.5 px-4" onClick={(e) => e.stopPropagation()}>
                          <Select
                            value={lead.status || "new"}
                            onValueChange={(val: string) => handleQuickStatusUpdate(lead.id, val)}
                          >
                            <SelectTrigger className="h-8 text-xs font-medium w-[145px]">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="new">🔵 Mới tiếp nhận</SelectItem>
                              <SelectItem value="contacted">🟡 Đã liên hệ</SelectItem>
                              <SelectItem value="consulting">🟣 Đang tư vấn</SelectItem>
                              <SelectItem value="won">🟢 Đã chốt HĐ</SelectItem>
                              <SelectItem value="lost">⚪ Không tiềm năng</SelectItem>
                            </SelectContent>
                          </Select>
                        </td>

                        {/* Assigned Consultant */}
                        <td className="py-3.5 px-4 whitespace-nowrap text-xs text-muted-foreground">
                          {lead.assigned_to || "Chưa phân công"}
                        </td>

                        {/* Created Date */}
                        <td className="py-3.5 px-4 whitespace-nowrap text-xs text-muted-foreground">
                          {lead.createdAt ? new Date(lead.createdAt).toLocaleString("vi-VN") : "Vừa xong"}
                        </td>

                        {/* Actions */}
                        <td className="py-3.5 px-4 text-right whitespace-nowrap" onClick={(e) => e.stopPropagation()}>
                          <div className="flex items-center justify-end gap-1">
                            <Button
                              variant="ghost"
                              size="icon"
                              className="size-8 text-muted-foreground hover:text-primary"
                              onClick={() => handleOpenDetail(lead)}
                              title="Xem chi tiết & Ghi chú"
                            >
                              <Eye className="size-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="size-8 text-muted-foreground hover:text-destructive"
                              onClick={() => setDeleteId(lead.id)}
                              title="Xóa lead"
                            >
                              <Trash2 className="size-4" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Detail / Edit Lead Modal */}
      <Dialog open={!!selectedLead} onOpenChange={(open) => !open && setSelectedLead(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          {selectedLead && (
            <form onSubmit={handleSaveLeadDetails}>
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2 text-xl">
                  <Users className="size-5 text-primary" />
                  Hồ Sơ Khách Hàng #{selectedLead.id}: {selectedLead.name}
                </DialogTitle>
                <DialogDescription>
                  Thông tin đăng ký tư vấn và lịch sử trao đổi của khách hàng.
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-4 py-4">
                {/* Contact Banner */}
                <div className="bg-muted/40 p-4 rounded-xl space-y-3 border">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <span className="text-xs text-muted-foreground block">Họ và Tên:</span>
                      <span className="font-bold text-foreground text-sm">{selectedLead.name || "Khách ẩn danh"}</span>
                    </div>
                    <div>
                      <span className="text-xs text-muted-foreground block">Gói Dịch Vụ Quan Tâm:</span>
                      <Badge variant="secondary" className="mt-0.5">{selectedLead.package || "Tư vấn"}</Badge>
                    </div>
                    <div>
                      <span className="text-xs text-muted-foreground block">Số Điện Thoại:</span>
                      <div className="flex items-center gap-2 mt-0.5">
                        <a href={`tel:${selectedLead.phone}`} className="font-semibold text-primary text-sm hover:underline">
                          {selectedLead.phone || "Chưa cung cấp"}
                        </a>
                        {selectedLead.phone && (
                          <a
                            href={`https://zalo.me/${selectedLead.phone.replace(/[^0-9]/g, "")}`}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center text-xs font-semibold px-2 py-0.5 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                          >
                            Zalo Chat
                          </a>
                        )}
                      </div>
                    </div>
                    <div>
                      <span className="text-xs text-muted-foreground block">Email:</span>
                      <a href={`mailto:${selectedLead.email}`} className="font-semibold text-primary text-sm hover:underline block mt-0.5">
                        {selectedLead.email || "Chưa cung cấp"}
                      </a>
                    </div>
                    <div>
                      <span className="text-xs text-muted-foreground block">Nguồn Đăng Ký:</span>
                      <span className="text-xs font-mono font-medium">{selectedLead.source || "Website Form"}</span>
                    </div>
                    <div>
                      <span className="text-xs text-muted-foreground block">Thời Gian Tạo:</span>
                      <span className="text-xs text-muted-foreground">
                        {selectedLead.createdAt ? new Date(selectedLead.createdAt).toLocaleString("vi-VN") : "N/A"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Customer Message */}
                <div className="space-y-1.5">
                  <Label className="text-xs font-semibold text-foreground flex items-center gap-1.5">
                    <MessageSquare className="size-3.5 text-muted-foreground" />
                    Nội dung yêu cầu từ Website:
                  </Label>
                  <div className="bg-muted/20 p-3.5 rounded-lg border text-sm text-foreground/90 whitespace-pre-wrap leading-relaxed">
                    {selectedLead.message || "Khách hàng không để lại lời nhắn chi tiết."}
                  </div>
                </div>

                {/* Management Editable Section */}
                <div className="border-t pt-4 space-y-4">
                  <h4 className="text-sm font-semibold text-foreground flex items-center gap-1.5">
                    <UserCheck className="size-4 text-primary" />
                    Cập Nhật Tiến Độ & Ghi Chú Tư Vấn
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="space-y-1.5">
                      <Label htmlFor="editStatus" className="text-xs">Trạng Thái Xử Lý</Label>
                      <Select value={editStatus} onValueChange={(val: string | null) => setEditStatus(val || "new")}>
                        <SelectTrigger id="editStatus" className="text-xs">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="new">🔵 Mới tiếp nhận</SelectItem>
                          <SelectItem value="contacted">🟡 Đã liên hệ</SelectItem>
                          <SelectItem value="consulting">🟣 Đang tư vấn</SelectItem>
                          <SelectItem value="won">🟢 Đã chốt hợp đồng</SelectItem>
                          <SelectItem value="lost">⚪ Không tiềm năng</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="editAssigned" className="text-xs">Chuyên Gia Phụ Trách</Label>
                      <Input
                        id="editAssigned"
                        value={editAssigned}
                        onChange={(e) => setEditAssigned(e.target.value)}
                        placeholder="Master Hoàng Mai Linh..."
                        className="text-xs"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="editValue" className="text-xs">Giá Trị Hợp Đồng (VNĐ)</Label>
                      <Input
                        id="editValue"
                        type="number"
                        value={editValue}
                        onChange={(e) => setEditValue(e.target.value)}
                        placeholder="Ví dụ: 5000000"
                        className="text-xs"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="editNotes" className="text-xs">Ghi Chú Nội Bộ / Lịch Sử Trao Đổi</Label>
                    <Textarea
                      id="editNotes"
                      value={editNotes}
                      onChange={(e) => setEditNotes(e.target.value)}
                      placeholder="Ghi chú về nhu cầu cụ thể của khách hàng, lịch hẹn tư vấn tiếp theo, tiến độ thanh toán..."
                      rows={3}
                      className="text-xs"
                    />
                  </div>
                </div>
              </div>

              <DialogFooter className="gap-2 sm:gap-0">
                <div className="flex items-center gap-2 mr-auto">
                  {selectedLead?.phone && (
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(`tel:${selectedLead.phone}`)}
                      className="gap-1.5 text-xs text-emerald-600"
                    >
                      <Phone className="size-3.5" />
                      Gọi Điện
                    </Button>
                  )}
                </div>
                <Button type="button" variant="outline" onClick={() => setSelectedLead(null)}>
                  Đóng
                </Button>
                <Button type="submit" disabled={updateMutation?.isPending} className="gap-2">
                  <Save className="size-4" />
                  {updateMutation?.isPending ? "Đang lưu..." : "Lưu Thay Đổi"}
                </Button>
              </DialogFooter>
            </form>
          )}
        </DialogContent>
      </Dialog>

      {/* Create Lead Modal */}
      <Dialog open={showCreateModal} onOpenChange={setShowCreateModal}>
        <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
          <form onSubmit={handleCreateLead}>
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <Plus className="size-5 text-primary" />
                Thêm Khách Hàng Tiềm Năng Mới
              </DialogTitle>
              <DialogDescription>
                Thêm khách hàng liên hệ trực tiếp qua điện thoại, hotline hoặc giới thiệu offline
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-3.5 py-3">
              <div className="space-y-1.5">
                <Label htmlFor="newName" className="text-xs font-semibold">Họ và Tên *</Label>
                <Input
                  id="newName"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  placeholder="Ví dụ: Nguyễn Thị Hương"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <Label htmlFor="newPhone" className="text-xs font-semibold">Số Điện Thoại *</Label>
                  <Input
                    id="newPhone"
                    value={newPhone}
                    onChange={(e) => setNewPhone(e.target.value)}
                    placeholder="0912345678"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="newEmail" className="text-xs">Email</Label>
                  <Input
                    id="newEmail"
                    value={newEmail}
                    onChange={(e) => setNewEmail(e.target.value)}
                    placeholder="khachhang@gmail.com"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <Label className="text-xs font-semibold">Gói Dịch Vụ Quan Tâm</Label>
                <Select value={newPackage} onValueChange={(val: string | null) => setNewPackage(val || PACKAGES[0])}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {PACKAGES.map((pkg) => (
                      <SelectItem key={pkg} value={pkg}>
                        {pkg}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <Label className="text-xs">Trạng Thái Ban Đầu</Label>
                  <Select value={newStatus} onValueChange={(val: string | null) => setNewStatus(val || "new")}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="new">🔵 Mới tiếp nhận</SelectItem>
                      <SelectItem value="contacted">🟡 Đã liên hệ</SelectItem>
                      <SelectItem value="consulting">🟣 Đang tư vấn</SelectItem>
                      <SelectItem value="won">🟢 Đã chốt HĐ</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-1.5">
                  <Label className="text-xs">Mức Độ Ưu Tiên</Label>
                  <Select value={newPriority} onValueChange={(val: string | null) => setNewPriority(val || "medium")}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="high">🔴 Cao (VIP / Gấp)</SelectItem>
                      <SelectItem value="medium">🟡 Trung bình</SelectItem>
                      <SelectItem value="low">⚪ Thấp</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <Label className="text-xs">Nguồn Khách Hàng</Label>
                  <Input
                    value={newSource}
                    onChange={(e) => setNewSource(e.target.value)}
                    placeholder="Hotline / Giới thiệu..."
                  />
                </div>
                <div className="space-y-1.5">
                  <Label className="text-xs">Giá Trị Ước Tính (VNĐ)</Label>
                  <Input
                    type="number"
                    value={newValue}
                    onChange={(e) => setNewValue(e.target.value)}
                    placeholder="5000000"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="newMessage" className="text-xs">Nội Dung Yêu Cầu Ban Đầu</Label>
                <Textarea
                  id="newMessage"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Khách muốn tư vấn gói Khai vấn 1:1, muốn đặt lịch vào cuối tuần..."
                  rows={2}
                />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="newNotes" className="text-xs">Ghi Chú Nội Bộ</Label>
                <Textarea
                  id="newNotes"
                  value={newNotes}
                  onChange={(e) => setNewNotes(e.target.value)}
                  placeholder="Ghi chú nhân viên tiếp nhận..."
                  rows={2}
                />
              </div>
            </div>

            <DialogFooter className="gap-2 sm:gap-0">
              <Button type="button" variant="outline" onClick={() => setShowCreateModal(false)}>
                Hủy
              </Button>
              <Button type="submit" disabled={createMutation?.isPending} className="gap-2">
                <Save className="size-4" />
                {createMutation?.isPending ? "Đang lưu..." : "Lưu Khách Hàng"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Modal */}
      <AlertDialog open={!!deleteId} onOpenChange={(open) => !open && setDeleteId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Xác nhận xóa khách hàng này?</AlertDialogTitle>
            <AlertDialogDescription>
              Hành động này sẽ xóa thông tin liên hệ của khách hàng khỏi hệ thống CRM NocoBase.
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
