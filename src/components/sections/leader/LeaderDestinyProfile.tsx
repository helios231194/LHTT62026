'use client';

import { FadeIn } from '@/components/ui/AnimationWrapper';
import { Button } from '@/components/ui/Button';
import { FileText, Sparkles, BookOpen, ArrowRight, ShieldAlert, Award } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export function LeaderDestinyProfile() {
  return (
    <section className="py-24 bg-white relative overflow-hidden" id="destiny-profile">
      {/* Decorative BG elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-cyan-azure/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-10 right-0 w-[500px] h-[500px] bg-blaze-orange/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Block - Graphical Representation */}
          <div className="w-full lg:w-5/12">
            <FadeIn direction="left">
              <div className="relative aspect-[4/5] max-w-[400px] mx-auto bg-ice-white rounded-[2.5rem] p-8 border border-slate-200 shadow-2xl flex flex-col justify-between overflow-hidden group hover:border-[#4991ba]/30 transition-all duration-300">
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-azure/10 rounded-full blur-3xl pointer-events-none" />
                
                <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Linh Hoa Tâm • Entry Product</span>
                  <Award className="w-5 h-5 text-blaze-orange" />
                </div>
                
                <div className="my-auto space-y-5 text-center">
                  <span className="inline-block py-1 px-3 bg-[#ff6801]/10 text-xs font-bold text-blaze-orange uppercase rounded-full">
                    SẢN PHẨM KHỞI ĐẦU
                  </span>
                  <h3 className="text-3xl font-black text-oxford-blue leading-tight">
                    HỒ SƠ <br/> VẬN MỆNH
                  </h3>
                  <div className="w-16 h-1 bg-cyan-azure mx-auto rounded-full" />
                  <p className="text-slate-500 text-sm leading-relaxed max-w-xs mx-auto">
                    Tài liệu cá nhân hóa gần 100 trang PDF phân tích sâu 7 chỉ số cốt lõi và chu kỳ cuộc đời dành riêng cho bạn.
                  </p>
                </div>
                
                <div className="border-t border-slate-200 pt-4 flex items-center justify-between text-slate-400 text-xs font-bold">
                  <span>Ship sách in toàn quốc</span>
                  <span>PDF gửi qua Zalo/Email</span>
                </div>
              </div>
            </FadeIn>
          </div>
          
          {/* Right Block - Content & Funnel Info */}
          <div className="w-full lg:w-7/12 space-y-8">
            <FadeIn direction="right">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-blaze-orange/10 border border-blaze-orange/20 text-xs font-bold text-blaze-orange uppercase rounded-full">
                  <Sparkles className="w-3.5 h-3.5" />
                  HỒ SƠ VẬN MỆNH
                </div>
                <h2 className="text-3xl md:text-5xl font-black tracking-tight text-oxford-blue leading-[1.15]">
                  Bước đầu tiên để hiểu mình trước khi ra quyết định.
                </h2>
                <p className="text-slate-500 font-medium text-base md:text-lg leading-relaxed">
                  Trước khi lập Bản đồ Chiến lược 2026 hay tiến hành Tham vấn 1:1, bạn cần hiểu rõ cấu trúc vận hành nội tại của chính mình. Hồ Sơ Vận Mệnh là bản đồ cơ bản đầu tiên giúp bạn thấu suốt điểm mạnh bẩm sinh và chu kỳ đang ở hiện tại.
                </p>
              </div>

              <div className="space-y-4 pt-2">
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-800 border-l-2 border-blaze-orange pl-3">
                  Những giá trị cốt lõi bạn sẽ nhận được:
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-600 font-medium pl-1">
                  <li className="flex items-center gap-2.5">
                    <div className="w-1.5 h-1.5 bg-blaze-orange rounded-full" />
                    <span>Phân tích sâu 7 chỉ số cốt lõi</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <div className="w-1.5 h-1.5 bg-blaze-orange rounded-full" />
                    <span>Chu kỳ cuộc đời và giai đoạn hiện tại</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <div className="w-1.5 h-1.5 bg-blaze-orange rounded-full" />
                    <span>Cảnh báo rủi ro & khuyến nghị Năm cá nhân</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <div className="w-1.5 h-1.5 bg-blaze-orange rounded-full" />
                    <span>Nhận diện điểm mạnh & điểm mù</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row gap-4">
                <Link href="/ho-so-van-menh" className="w-full sm:w-auto">
                  <Button variant="primary" size="lg" className="w-full h-14 font-bold shadow-lg shadow-blaze-orange/20">
                    TÌM HIỂU HỒ SƠ VẬN MỆNH
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link href="/ho-so-van-menh#pricing-section" className="w-full sm:w-auto">
                  <Button variant="outline" size="lg" className="w-full h-14 font-bold border-slate-200 hover:bg-slate-50 text-oxford-blue">
                    ĐẶT MUA COMBO (CHỈ TỪ 680K)
                  </Button>
                </Link>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}
