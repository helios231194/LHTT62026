'use client';

import { FadeIn } from '@/components/ui/AnimationWrapper';
import { Button } from '@/components/ui/Button';
import { FileText, Sparkles, BookOpen, ArrowRight, ShieldAlert, Award } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

import { resolveAttachmentUrl } from '@/lib/nocobase';

interface LeaderDestinyProfileProps {
  initialDestinyProfile?: any;
}

export function LeaderDestinyProfile({ initialDestinyProfile }: LeaderDestinyProfileProps) {
  const coverUrl = resolveAttachmentUrl(initialDestinyProfile?.cover_image?.[0]?.url) || '/uploads/1784020906703-BanoL.png';

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
              <div className="relative aspect-[3/4] max-w-[380px] mx-auto rounded-[2rem] overflow-hidden shadow-2xl bg-white border border-slate-100 group flex items-center justify-center">
                <img 
                  src={coverUrl}
                  alt="Hồ Sơ Vận Mệnh" 
                  className="w-full h-full object-cover transform-gpu hover:scale-105 transition-transform duration-700 ease-out"
                />
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
