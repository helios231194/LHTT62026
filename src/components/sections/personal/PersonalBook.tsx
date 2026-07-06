'use client';
import { FadeIn } from '@/components/ui/AnimationWrapper';
import { Button } from '@/components/ui/Button';
import { BookOpen, CheckCircle, Gift } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

import type { Profile } from '@/lib/nocobase';
import { resolveAttachmentUrl } from '@/lib/nocobase';

interface PersonalBookProps {
  initialProfile?: Profile | null;
}

export function PersonalBook({ initialProfile }: PersonalBookProps) {
  const bookCoverUrl = resolveAttachmentUrl(initialProfile?.book_cover?.[0]?.url);

  return (
    <section className="py-24 md:py-32 bg-ice-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center max-w-7xl mx-auto">
          
          {/* Left Side: Text and Booking info */}
          <div className="lg:w-7/12">
            <FadeIn direction="right">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-px bg-blaze-orange" />
                <span className="text-sm font-bold tracking-[0.25em] text-blaze-orange uppercase">Tự học & Khám phá</span>
              </div>
              <h2 className="text-3xl md:text-5xl lg:text-5xl font-black text-oxford-blue mb-8 leading-[1.2]">
                <span className="text-blaze-orange">Thuật Số Học Ứng Dụng</span> trong tay bạn <br className="hidden md:block"/>
                bắt đầu tự đọc bản đồ của chính mình.
              </h2>
              <p className="text-cyan-azure text-lg font-medium leading-relaxed mb-8">
                <strong>Sức Mạnh Ẩn Sau Con Số</strong> là cuốn sách do Master Hoàng Mai Linh viết, công cụ tự đánh giá 
                hệ điều hành cá nhân cho người muốn hiểu rõ mình trước khi ra quyết định lớn. Phù hợp cho cả 
                người mới bắt đầu tìm hiểu Thuật Số Học lẫn người đã có kiến thức nền muốn đi sâu hơn.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {[
                  'Hiểu rõ tiềm năng bản thân qua chỉ số thuật số học',
                  'Định hướng con đường phát triển phù hợp với bản chất',
                  'Ứng dụng nguyên tắc số học để ra quyết định nhanh hơn',
                  'Kết nối sâu sắc hơn với chính mình'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blaze-orange shrink-0 mt-0.5" />
                    <span className="text-slate-700 font-medium leading-snug">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-cyan-azure/5 mb-10">
                <h4 className="text-xl font-bold text-oxford-blue mb-6 flex items-center gap-2">
                  <Gift className="text-blaze-orange" /> Các combo sách kèm ưu đãi
                </h4>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center py-2 border-b border-gray-50">
                    <span className="font-bold text-oxford-blue">Combo 1</span>
                    <span className="text-slate-600 font-medium text-sm">Khám Phá Bản Thân</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-50">
                    <span className="font-bold text-oxford-blue">Combo 2</span>
                    <span className="text-slate-600 font-medium text-sm">Phát Triển Bản Thân & Đọc Vị Người Khác</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="font-bold text-blaze-orange">Combo 3</span>
                    <span className="text-slate-600 font-medium text-sm">Chuyên Gia Life Coach</span>
                  </div>
                </div>
                <div className="bg-blaze-orange/5 p-4 rounded-xl text-center border border-blaze-orange/10">
                  <span className="text-blaze-orange font-bold font-sm">
                    🎁 Tặng kèm Ebook &quot;Tư Duy Mạnh Mẽ&quot; khi đặt sách hôm nay!
                  </span>
                </div>
              </div>

              <Link href="https://sach.linhhoatam11.vn/" target="_blank" rel="noopener noreferrer">
                <Button variant="primary" size="lg" className="h-16 px-12 font-bold w-full sm:w-auto text-lg rounded-full shadow-lg shadow-blaze-orange/20 hover:-translate-y-1 transition-transform">
                  ĐẶT SÁCH NGAY →
                </Button>
              </Link>
            </FadeIn>
          </div>

          {/* Right Side: Mockup Image or Dynamic Book Cover */}
          <div className="lg:w-5/12 w-full">
            <FadeIn direction="up" delay={0.2}>
              <div className="relative aspect-[4/5] w-full rounded-3xl bg-oxford-blue shadow-2xl overflow-hidden group border-8 border-white flex items-center justify-center">
                {bookCoverUrl ? (
                  <Image
                    src={bookCoverUrl}
                    alt="Sách Sức Mạnh Ẩn Sau Con Số"
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center mix-blend-screen">
                    <BookOpen className="w-32 h-32 text-blaze-orange mb-8 group-hover:scale-110 transition-transform duration-700" />
                    <h3 className="text-4xl font-black text-white mb-4 leading-tight tracking-tight px-4">
                      SỨC MẠNH <br/> ẨN SAU CON SỐ
                    </h3>
                    <div className="w-16 h-1 bg-blaze-orange mx-auto rounded-full mb-6" />
                    <p className="text-white/60 font-bold uppercase tracking-widest text-sm">Master Hoàng Mai Linh</p>
                  </div>
                )}
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}
