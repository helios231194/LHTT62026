'use client';

import { FadeIn } from '@/components/ui/AnimationWrapper';
import { Button } from '@/components/ui/Button';
import { BookOpen, Target, Users, Key, ArrowDown } from 'lucide-react';
import Link from 'next/link';

export function BookHero() {
  return (
    <>
      {/* SECTION 1: HERO */}
      <section className="relative w-full min-h-[90vh] flex items-center bg-oxford-blue text-white overflow-hidden pt-20">
        <div className="absolute inset-0 bg-oxford-blue" />
        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-blaze-orange/15 to-transparent opacity-60 pointer-events-none" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 py-12 md:py-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="flex-1 text-center lg:text-left">
              <FadeIn direction="up">
                <span className="inline-block py-1.5 px-4 mb-6 bg-blaze-orange/10 border border-blaze-orange/20 rounded-full text-sm font-bold tracking-[0.2em] text-blaze-orange uppercase">
                  SÁCH THUẬT SỐ HỌC ỨNG DỤNG
                </span>
              </FadeIn>

              <FadeIn direction="up" delay={0.1}>
                <h1 className="text-4xl md:text-6xl lg:text-[4rem] font-black leading-[1.1] text-white mb-6">
                  Sức Mạnh Ẩn Sau Con Số:
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blaze-orange to-[#ff9b50] text-3xl md:text-5xl block mt-4 line-clamp-2">
                    khi trực giác lãnh đạo có một hệ quy chiếu khoa học.
                  </span>
                </h1>
              </FadeIn>

              <FadeIn direction="up" delay={0.2}>
                <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
                  Cuốn sách của tác giả Hoàng Mai Linh về Thuật Số Học Ứng Dụng dành cho lãnh đạo doanh nghiệp, cá nhân và bất kỳ ai muốn hiểu rõ mình trước khi ra quyết định quan trọng.
                </p>
              </FadeIn>

              <FadeIn direction="up" delay={0.3}>
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <a href="https://sach.linhhoatam11.vn/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                    <Button variant="primary" size="lg" className="h-16 px-10 text-xl font-bold shadow-xl shadow-blaze-orange/20 w-full sm:w-auto hover:scale-105 transition-transform">
                      ĐẶT SÁCH NGAY
                    </Button>
                  </a>
                  <Link href="#book-content" className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors py-4">
                    <span className="text-base font-medium">Xem thêm về nội dung sách</span>
                    <ArrowDown className="w-4 h-4 animate-bounce" />
                  </Link>
                </div>
              </FadeIn>
            </div>

            {/* Book Image */}
            <FadeIn direction="left" delay={0.2} className="flex-1 w-full max-w-sm lg:max-w-md mx-auto">
              <div className="relative aspect-[3/4] w-full shadow-2xl rounded-2xl overflow-hidden group perspective-1000 border border-white/10">
                <div className="absolute inset-x-8 -bottom-8 bg-black/50 blur-2xl h-8 rounded-[100%] transition-all duration-500" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=800" 
                  alt="Sách Sức Mạnh Ẩn Sau Con Số" 
                  className="w-full h-full object-cover transform-gpu hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* SECTION 4: THÔNG TIN SÁCH (Placed in a neat banner after hero) */}
      <div className="bg-dark-blue border-b border-white/5 relative z-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-8">
            <div className="text-center">
              <p className="text-white/50 text-xs font-bold uppercase tracking-wider mb-1">Tác giả</p>
              <p className="text-white font-medium">Hoàng Mai Linh</p>
            </div>
            <div className="text-center border-l border-white/10">
              <p className="text-white/50 text-xs font-bold uppercase tracking-wider mb-1">Thể loại</p>
              <p className="text-white font-medium">Phát triển bản thân</p>
            </div>
            <div className="text-center border-l border-white/10">
              <p className="text-white/50 text-xs font-bold uppercase tracking-wider mb-1">Hình thức</p>
              <p className="text-white font-medium">Sách in / Flipbook</p>
            </div>
            <div className="text-center border-l border-white/10">
              <p className="text-white/50 text-xs font-bold uppercase tracking-wider mb-1">Dành riêng</p>
              <p className="text-white font-medium">Lãnh đạo & Cá nhân</p>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 2: CUỐN SÁCH DÀNH CHO AI */}
      <section className="py-20 bg-ice-white">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn direction="up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-cyan-azure font-bold text-sm tracking-wider uppercase mb-2 block">
                NHỮNG AI CẦN ĐỌC
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-oxford-blue">
                Bạn sẽ thấy mình trong đây.
              </h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <FadeIn direction="up" delay={0.1}>
              <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow group h-full">
                <div className="w-14 h-14 bg-oxford-blue/5 rounded-xl flex items-center justify-center text-oxford-blue mb-6 group-hover:bg-oxford-blue group-hover:text-white transition-colors">
                  <Users className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-oxford-blue mb-4">Lãnh đạo và doanh nhân</h3>
                <ul className="space-y-4 text-cyan-azure leading-relaxed list-disc pl-5">
                  <li className="pl-1"><span className="font-bold text-dark-blue">CEO, Founder và Giám đốc</span> đang muốn hiểu rõ phong cách lãnh đạo của mình và tại sao cùng một quyết định lại cho kết quả khác nhau vào các thời điểm khác nhau.</li>
                  <li className="pl-1"><span className="font-bold text-dark-blue">Nhà quản lý nhân sự</span> muốn có thêm lăng kính để nhìn người và đặt đúng người vào đúng vai trò.</li>
                </ul>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.2}>
              <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow group h-full">
                <div className="w-14 h-14 bg-blaze-orange/10 rounded-xl flex items-center justify-center text-blaze-orange mb-6 group-hover:bg-blaze-orange group-hover:text-white transition-colors">
                  <Key className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-oxford-blue mb-4">Cá nhân cần định hướng</h3>
                <ul className="space-y-4 text-cyan-azure leading-relaxed list-disc pl-5">
                  <li className="pl-1"><span className="font-bold text-dark-blue">Người ở ngã rẽ sự nghiệp</span> và muốn hiểu rõ mình phù hợp với hướng đi nào trước khi quyết định.</li>
                  <li className="pl-1"><span className="font-bold text-dark-blue">Cha mẹ</span> muốn hiểu con sâu hơn để đồng hành đúng cách theo bản chất tự nhiên của trẻ.</li>
                  <li className="pl-1">Bất kỳ ai muốn <span className="font-bold text-blaze-orange">tự đọc bản đồ của mình</span> trước khi gặp Master trực tiếp.</li>
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
