'use client';

import { useState, useEffect } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { FadeIn, SlideIn } from '@/components/ui/AnimationWrapper';
import { Button } from '@/components/ui/Button';
import { 
  Check, 
  BookOpen, 
  FileText, 
  Video, 
  ShieldCheck, 
  CheckCircle, 
  Award, 
  Sparkles, 
  ArrowRight, 
  Calendar,
  User,
  Mail,
  Phone,
  MapPin,
  Lock,
  ChevronDown,
  X
} from 'lucide-react';
import Image from 'next/image';
import { createLead, resolveAttachmentUrl } from '@/lib/nocobase';

const videoCourse = [
  {
    num: 1,
    title: 'Hướng dẫn đọc Hồ Sơ Vận Mệnh',
    desc: 'Cách sử dụng hồ sơ đúng trình tự để nhận được giá trị cao nhất: đọc phần tổng quan trước, đánh dấu điểm mạnh và điểm mù, không dán nhãn bản thân.'
  },
  {
    num: 2,
    title: 'Đọc và ứng dụng 7 chỉ số cốt lõi',
    desc: 'Hướng dẫn tra cứu từng chỉ số: Đường Đời, Linh Hồn, Sứ Mệnh, Nhân Cách, Ngày Sinh, Thái Độ, Trung Niên. Cách ghi chú điều đang xuất hiện trong cuộc sống hiện tại.'
  },
  {
    num: 3,
    title: 'Chu kỳ cuộc đời và Năm cá nhân',
    desc: 'Cách đọc phần chu kỳ cuộc đời và năm cá nhân hiện tại. Tập trung vào phần cảnh báo và khuyến nghị hành động, không chỉ đọc phần thuận lợi.'
  },
  {
    num: 4,
    title: 'Thực hành và ứng dụng vào quyết định',
    desc: 'Cách dùng hồ sơ như một cuốn sổ tay phát triển cá nhân: đánh dấu điều muốn cải thiện, điều muốn hành động ngay, và quay lại đọc trong các giai đoạn khác nhau.'
  }
];

export default function HoSoVanMenhPage() {
  const [profile, setProfile] = useState<any>(null);
  const [activeCombo, setActiveCombo] = useState<'standard' | 'premium' | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    birthName: '',
    birthDate: '',
    address: '',
    notes: ''
  });

  useEffect(() => {
    fetch('/api/profile')
      .then(res => res.json())
      .then(data => {
        if (data?.data) setProfile(data.data);
      })
      .catch(err => console.error('Error fetching profile:', err));
  }, []);

  const destinyCoverUrl = profile?.destiny_pdf_cover?.[0]
    ? resolveAttachmentUrl(profile.destiny_pdf_cover[0])
    : null;

  const handleOpenRegister = (combo: 'standard' | 'premium') => {
    setActiveCombo(combo);
    setIsSubmitted(false);
  };

  const handleCloseRegister = () => {
    setActiveCombo(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const comboLabel = activeCombo === 'standard' ? 'COMBO VẬN MỆNH TIÊU CHUẨN (680K)' : 'COMBO VẬN MỆNH CAO CẤP (980K)';
    
    const leadData = {
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      source: 'dang_ky_ho_so_van_menh',
      package: comboLabel,
      message: `Khách hàng đăng ký gói: ${comboLabel}`
    };

    const extraDetails = {
      'Gói lựa chọn': comboLabel,
      'Họ tên khai sinh': formData.birthName,
      'Ngày sinh (dương lịch)': formData.birthDate,
      'Địa chỉ nhận sách in': formData.address,
      'Lời nhắn / Ghi chú': formData.notes || 'Không có'
    };

    const success = await createLead(leadData, extraDetails);
    setIsSubmitting(false);
    if (success) {
      setIsSubmitted(true);
      setFormData({
        name: '',
        phone: '',
        email: '',
        birthName: '',
        birthDate: '',
        address: '',
        notes: ''
      });
    } else {
      alert('Đăng ký đặt combo thất bại. Vui lòng liên hệ trực tiếp hotline để được hỗ trợ.');
    }
  };

  return (
    <>
      <Header />
      <main className="min-h-screen pt-16 bg-ice-white text-oxford-blue">
        
        {/* HERO SECTION */}
        <section className="relative py-20 md:py-32 overflow-hidden bg-oxford-blue text-white">
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay pointer-events-none" />
          <div className="absolute top-0 right-0 w-1/2 h-full bg-cyan-azure/10 blur-[150px] mix-blend-screen pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blaze-orange/10 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />
          
          <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-6xl text-center">
            <FadeIn direction="up">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold tracking-widest text-cyan-azure uppercase mb-8 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-blaze-orange animate-pulse" />
                SẢN PHẨM PHỄU CHIẾN LƯỢC
              </span>
              
              <h1 className="text-4xl md:text-6xl font-black mb-8 leading-[1.15] text-balance">
                Hồ Sơ Vận Mệnh
              </h1>
              
              <p className="text-lg md:text-2xl text-cyan-azure font-semibold max-w-3xl mx-auto mb-6 leading-relaxed">
                Bước đầu tiên để hiểu mình trước khi ra quyết định chiến lược.
              </p>
              
              <p className="text-left md:text-center text-sm md:text-lg text-white/70 max-w-3xl mx-auto leading-relaxed mb-12">
                Hồ Sơ Vận Mệnh là tài liệu phân tích cá nhân hóa được xây dựng riêng theo ngày tháng năm sinh và tên của bạn. 
                Đây là bản đồ đầu tiên để hiểu cấu trúc vận hành nội tại, điểm mạnh bẩm sinh và chu kỳ đang ở hiện tại, trước khi đi sâu vào tham vấn chiến lược.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => {
                    const el = document.getElementById('pricing-section');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  variant="primary" 
                  size="lg" 
                  className="px-8 h-16 text-base font-bold shadow-xl shadow-blaze-orange/20"
                >
                  XEM GÓI COMBO ĐẶT SÁCH & HỒ SƠ
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* FEATURES DETAIL */}
        <section className="py-24 bg-white relative">
          <div className="container mx-auto px-4 md:px-6 max-w-6xl">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              
              {/* Left Mockup View */}
              <div className="w-full lg:w-5/12 relative aspect-[3/4] rounded-[2rem] border border-slate-200 overflow-hidden shadow-2xl flex items-center justify-center bg-white group hover:border-[#4991ba]/30 transition-all duration-300">
                {destinyCoverUrl ? (
                  <img 
                    src={destinyCoverUrl}
                    alt="Hồ Sơ Vận Mệnh" 
                    className="w-full h-full object-cover transform-gpu hover:scale-105 transition-transform duration-700 ease-out"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col justify-between p-8 bg-slate-50 relative">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-azure/10 rounded-full blur-2xl pointer-events-none" />
                    <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                      <span className="text-xs font-bold text-slate-400 tracking-wider">LINH HOA TÂM 2026</span>
                      <Award className="w-5 h-5 text-blaze-orange" />
                    </div>
                    
                    <div className="my-auto space-y-6 text-center">
                      <span className="inline-block py-1 px-3 bg-[#4991ba]/10 text-xs font-bold text-[#4991ba] uppercase rounded-full">Hồ sơ cá nhân hóa</span>
                      <h3 className="text-3xl font-black text-oxford-blue">HỒ SƠ VẬN MỆNH</h3>
                      <div className="w-16 h-1 bg-blaze-orange mx-auto rounded-full" />
                      <p className="text-left text-slate-500 text-sm max-w-xs mx-auto leading-relaxed">
                        Được thiết kế để làm cuốn cẩm nang sử dụng nhiều lần qua các giai đoạn cuộc sống, giúp định hình quyết định và phản chiếu hành động, không phải là tài liệu đọc một lần rồi cất đi.
                      </p>
                    </div>
                    
                    <div className="border-t border-slate-200 pt-4 flex items-center justify-between text-slate-400 text-xs font-semibold">
                      <span>Quy mô: ~100 trang PDF</span>
                      <span>Mã số: LHT-DESTINY</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Right Descriptions */}
              <div className="w-full lg:w-7/12 space-y-8">
                <FadeIn direction="right">
                  <div className="space-y-4">
                    <h2 className="text-3xl md:text-4xl font-black tracking-tight text-oxford-blue">
                      Hồ Sơ Vận Mệnh bao gồm những gì?
                    </h2>
                    <p className="text-slate-500 font-medium">
                      Tài liệu phân tích chuyên sâu được cá nhân hóa hoàn toàn cho cuộc đời bạn:
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                    
                    <div className="flex gap-4 items-start p-5 bg-ice-white rounded-2xl border border-slate-200/50">
                      <div className="w-10 h-10 bg-cyan-azure/10 rounded-xl flex items-center justify-center shrink-0 text-cyan-azure">
                        <FileText className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-oxford-blue mb-1">Phân tích 7 chỉ số cốt lõi</h4>
                        <p className="text-xs text-slate-500 leading-relaxed">
                          Luận giải chuyên sâu: Đường Đời, Linh Hồn, Sứ Mệnh, Nhân Cách, Ngày Sinh, Thái Độ, Trung Niên.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start p-5 bg-ice-white rounded-2xl border border-slate-200/50">
                      <div className="w-10 h-10 bg-cyan-azure/10 rounded-xl flex items-center justify-center shrink-0 text-cyan-azure">
                        <Calendar className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-oxford-blue mb-1">Chu kỳ cuộc đời</h4>
                        <p className="text-xs text-slate-500 leading-relaxed">
                          Định vị chu kỳ lớn của cuộc đời và phân tích chi tiết giai đoạn hiện tại đang diễn ra.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start p-5 bg-ice-white rounded-2xl border border-slate-200/50">
                      <div className="w-10 h-10 bg-cyan-azure/10 rounded-xl flex items-center justify-center shrink-0 text-cyan-azure">
                        <Award className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-oxford-blue mb-1">Năm cá nhân hiện tại</h4>
                        <p className="text-xs text-slate-500 leading-relaxed">
                          Cung cấp những thuận lợi, cảnh báo rủi ro và các khuyến nghị hành động thiết thực.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start p-5 bg-ice-white rounded-2xl border border-slate-200/50">
                      <div className="w-10 h-10 bg-cyan-azure/10 rounded-xl flex items-center justify-center shrink-0 text-cyan-azure">
                        <Sparkles className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-oxford-blue mb-1">Điểm mạnh & Điểm mù</h4>
                        <p className="text-xs text-slate-500 leading-relaxed">
                          Nhìn rõ điểm mạnh thiên bẩm chưa được khai thác, cũng như điểm mù cần đặc biệt lưu ý.
                        </p>
                      </div>
                    </div>

                  </div>

                  <div className="p-6 bg-blaze-orange/5 border border-blaze-orange/10 rounded-2xl flex items-start gap-4 mt-6">
                    <BookOpen className="w-6 h-6 text-blaze-orange shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-oxford-blue mb-1">Thiết kế để làm cẩm nang đồng hành</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Hồ Sơ Vận Mệnh của Linh Hoa Tâm nhấn mạnh: Hồ sơ được thiết kế để sử dụng nhiều lần qua các giai đoạn cuộc sống, giúp định hình quyết định và phản chiếu hành động, không phải là tài liệu đọc một lần rồi cất đi.
                      </p>
                    </div>
                  </div>
                </FadeIn>
              </div>

            </div>
          </div>
        </section>

        {/* PACKAGE PRICING SECTION */}
        <section className="py-24 bg-ice-white border-t border-slate-200/60" id="pricing-section">
          <div className="container mx-auto px-4 md:px-6 max-w-6xl">
            
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-oxford-blue mb-4">
                Chọn Gói Hồ Sơ Của Bạn
              </h2>
              <p className="text-cyan-azure text-base font-semibold">
                Sản phẩm phễu cung cấp tài sản tri thức kết hợp sách in và cẩm nang số.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
              
              {/* COMBO TIÊU CHUẨN */}
              <div className="bg-white border border-slate-200 rounded-[2rem] p-8 flex flex-col justify-between shadow-xl relative hover:border-[#4991ba]/30 transition-all duration-300 group">
                <div className="space-y-6">
                  <div>
                    <span className="inline-block py-1 px-3 bg-slate-100 text-slate-500 text-xs font-bold uppercase rounded-full tracking-wider mb-3">
                      COMBO VẬN MỆNH TIÊU CHUẨN
                    </span>
                    <h3 className="text-2xl font-black text-oxford-blue">Hồ Sơ Vận Mệnh Tiêu Chuẩn</h3>
                  </div>
                  
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl md:text-4xl font-black text-[#4991ba]">680.000 VNĐ</span>
                  </div>
                  
                  <div className="w-full h-px bg-slate-100" />
                  
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3 text-sm font-semibold text-slate-600">
                      <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                      <span>Sách in &quot;Sức Mạnh Ẩn Sau Con Số&quot; – ship tận nhà</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm font-semibold text-slate-600">
                      <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                      <span>File PDF Hồ Sơ Vận Mệnh chi tiết gần 100 trang – gửi qua Email/Zalo</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-8">
                  <Button 
                    onClick={() => handleOpenRegister('standard')}
                    variant="outline" 
                    size="lg" 
                    className="w-full h-14 font-bold border-[#4991ba] text-[#4991ba] hover:bg-[#4991ba] hover:text-white"
                  >
                    ĐẶT COMBO TIÊU CHUẨN
                  </Button>
                </div>
              </div>

              {/* COMBO CAO CẤP */}
              <div className="bg-white border-2 border-blaze-orange rounded-[2rem] p-8 flex flex-col justify-between shadow-2xl relative transform md:-translate-y-2 hover:shadow-blaze-orange/10 transition-all duration-300 group">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blaze-orange text-white px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase">
                  KHUYÊN DÙNG - SẢN PHẨM CHỦ LỰC ★
                </div>
                
                <div className="space-y-6">
                  <div className="pt-2">
                    <span className="inline-block py-1 px-3 bg-blaze-orange/10 text-blaze-orange text-xs font-bold uppercase rounded-full tracking-wider mb-3">
                      COMBO VẬN MỆNH CAO CẤP
                    </span>
                    <h3 className="text-2xl font-black text-oxford-blue">Hồ Sơ Vận Mệnh Cao Cấp + Video</h3>
                  </div>
                  
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl md:text-4xl font-black text-blaze-orange">980.000 VNĐ</span>
                  </div>
                  
                  <div className="w-full h-px bg-slate-100" />
                  
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3 text-sm font-semibold text-slate-600">
                      <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                      <span>Sách in &quot;Sức Mạnh Ẩn Sau Con Số&quot; – ship tận nhà</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm font-semibold text-slate-600">
                      <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                      <span>File PDF Hồ Sơ Vận Mệnh 100 trang – gửi qua Email/Zalo</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm font-bold text-oxford-blue">
                      <Check className="w-5 h-5 text-blaze-orange shrink-0 mt-0.5" />
                      <span>Quyền truy cập Bộ 4 Video độc quyền hướng dẫn tự tra cứu và thực hành</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-8">
                  <Button 
                    onClick={() => handleOpenRegister('premium')}
                    variant="primary" 
                    size="lg" 
                    className="w-full h-14 font-bold shadow-lg shadow-blaze-orange/20"
                  >
                    ĐẶT COMBO CAO CẤP
                  </Button>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* VIDEO COURSE DETAILS SECTION */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6 max-w-5xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-oxford-blue mb-4">
                Chi tiết Bộ 4 Video độc quyền
              </h2>
              <p className="text-left md:text-center text-slate-500 text-sm max-w-xl mx-auto font-medium">
                Dành riêng cho khách hàng sở hữu <strong>Combo Cao Cấp</strong>. Giúp bạn tự tra cứu, giải mã và ứng dụng sâu rộng hồ sơ vào công việc thực tế.
              </p>
            </div>

            <div className="border border-slate-200 rounded-3xl overflow-hidden shadow-xl bg-ice-white/30">
              <div className="divide-y divide-slate-200">
                {videoCourse.map((video) => (
                  <div key={video.num} className="p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start hover:bg-white transition-colors duration-200">
                    <div className="w-12 h-12 bg-blaze-orange/10 rounded-xl flex items-center justify-center shrink-0 text-blaze-orange font-black text-lg">
                      #{video.num}
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-lg font-bold text-oxford-blue flex items-center gap-2">
                        <Video className="w-4.5 h-4.5 text-slate-400" />
                        {video.title}
                      </h4>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {video.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="text-center mt-12 text-xs font-semibold text-slate-500 flex items-center justify-center gap-2">
              <ShieldCheck className="w-4 h-4 text-green-500" />
              <span>Sau khi mua Combo: Email tự động gửi PDF Hồ Sơ Vận Mệnh + link truy cập video trong vòng 24 giờ. Sách in được ship trong 3 đến 5 ngày làm việc.</span>
            </div>
          </div>
        </section>

        {/* REGISTRATION MODAL FORM */}
        {activeCombo && (
          <div className="fixed inset-0 z-[10000] bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 md:p-6 overflow-hidden text-oxford-blue">
            <div className="bg-white rounded-3xl max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative border border-slate-100 flex flex-col p-8 animate-in fade-in duration-200">
              
              <button 
                onClick={handleCloseRegister}
                className="absolute top-4 right-4 p-2 bg-slate-50 hover:bg-slate-100 rounded-full transition-colors"
              >
                <X className="w-4.5 h-4.5 text-slate-400" />
              </button>

              {isSubmitted ? (
                <div className="text-center py-10 flex flex-col items-center gap-6">
                  <div className="w-20 h-20 rounded-full bg-green-50 text-green-500 flex items-center justify-center shadow-lg">
                    <CheckCircle className="w-12 h-12" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-oxford-blue mb-2">Đăng ký thành công!</h3>
                    <p className="text-slate-500 max-w-sm mx-auto text-sm leading-relaxed">
                      Cảm ơn bạn đã đặt mua **{activeCombo === 'standard' ? 'Combo Tiêu Chuẩn' : 'Combo Cao Cấp'}**. 
                      Bộ phận chăm sóc của Linh Hoa Tâm sẽ liên hệ xác nhận qua số điện thoại/Zalo trong thời gian sớm nhất.
                    </p>
                  </div>
                  <Button variant="secondary" className="px-8" onClick={handleCloseRegister}>
                    Đóng cửa sổ
                  </Button>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <span className="text-xs font-bold text-blaze-orange tracking-widest uppercase block mb-1">
                      {activeCombo === 'standard' ? 'COMBO VẬN MỆNH TIÊU CHUẨN' : 'COMBO VẬN MỆNH CAO CẤP'}
                    </span>
                    <h3 className="text-xl md:text-2xl font-black text-oxford-blue">
                      Đặt Mua Hồ Sơ Vận Mệnh
                    </h3>
                    <p className="text-slate-400 text-xs leading-relaxed mt-1">
                      Vui lòng điền thông tin chính xác. Họ tên khai sinh và ngày sinh (dương lịch) rất quan trọng để xây dựng hồ sơ luận giải chính xác.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-600 block">Họ và tên người nhận sách *</label>
                      <input 
                        type="text" 
                        required
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blaze-orange/20"
                        placeholder="Nguyễn Văn A"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-600 block">Số điện thoại *</label>
                        <input 
                          type="tel" 
                          required
                          value={formData.phone}
                          onChange={e => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blaze-orange/20"
                          placeholder="09xxxxxxxx"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-600 block">Email nhận PDF *</label>
                        <input 
                          type="email" 
                          required
                          value={formData.email}
                          onChange={e => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blaze-orange/20"
                          placeholder="email@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-600 block">Họ tên khai sinh đầy đủ *</label>
                        <input 
                          type="text" 
                          required
                          value={formData.birthName}
                          onChange={e => setFormData({ ...formData, birthName: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blaze-orange/20"
                          placeholder="VD: NGUYỄN VĂN A"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-600 block">Ngày sinh (Dương lịch) *</label>
                        <input 
                          type="text" 
                          required
                          value={formData.birthDate}
                          onChange={e => setFormData({ ...formData, birthDate: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blaze-orange/20"
                          placeholder="DD/MM/YYYY"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-600 block">Địa chỉ nhận sách in tận nhà *</label>
                      <input 
                        type="text" 
                        required
                        value={formData.address}
                        onChange={e => setFormData({ ...formData, address: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blaze-orange/20"
                        placeholder="Số nhà, Tên đường, Phường/Xã, Quận/Huyện, Tỉnh/Thành phố"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block">Ghi chú thêm (tùy chọn)</label>
                      <textarea 
                        rows={2}
                        value={formData.notes}
                        onChange={e => setFormData({ ...formData, notes: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blaze-orange/20 resize-none"
                        placeholder="Nhập yêu cầu đặc biệt..."
                      />
                    </div>
                  </div>

                  <div className="pt-2">
                    <Button 
                      type="submit" 
                      variant="primary" 
                      disabled={isSubmitting}
                      className="w-full h-14 text-base font-bold shadow-xl shadow-blaze-orange/20"
                    >
                      {isSubmitting ? 'ĐANG GỬI ĐĂNG KÝ...' : `HOÀN TẤT ĐẶT COMBO ${activeCombo === 'standard' ? '680K' : '980K'}`}
                    </Button>
                  </div>
                </form>
              )}

            </div>
          </div>
        )}

      </main>
      <Footer />
    </>
  );
}
