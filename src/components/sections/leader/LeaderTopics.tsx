'use client';
import { FadeIn } from '@/components/ui/AnimationWrapper';
import { Button } from '@/components/ui/Button';
import { Mic2, Users, Building2 } from 'lucide-react';
import Link from 'next/link';

const topics = [
  {
    icon: Mic2,
    title: 'Quy Luật Năng Lượng & Ra Quyết Định',
    desc: 'Phân tích 7 chỉ số lãnh đạo cốt lõi và chu kỳ 9 năm. Định hướng chính xác thời điểm vàng để mở rộng, củng cố hoặc tái cấu trúc.'
  },
  {
    icon: Users,
    title: 'Workshop "Đội Ngũ Tinh Nhuệ 2026"',
    desc: 'Thiết kế riêng cho Ban lãnh đạo 3-7 người. Kết quả thiết thực: Bản Đồ Năng Lượng Nhóm, phân vai chiến lược và Thỏa Thuận Làm Việc Chung 2026.'
  },
  {
    icon: Building2,
    title: 'Chuyên đề Nội bộ Doanh nghiệp',
    desc: 'Xây dựng khung ra quyết định cho lãnh đạo cấp cao, tối ưu quản trị nhân sự theo phong cách tự nhiên, giảm thiểu cảm tính, gia tăng tính hệ thống.'
  }
];

export function LeaderTopics() {
  return (
    <section className="py-16 md:py-20 bg-ice-white relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <FadeIn direction="up">
          <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-10 h-px bg-blaze-orange" />
              <span className="text-sm font-bold tracking-[0.25em] text-cyan-azure uppercase">Diễn giả chiến lược</span>
              <div className="w-10 h-px bg-blaze-orange" />
            </div>
            
            <h2 className="text-3xl md:text-5xl font-black text-oxford-blue mb-6 leading-tight">
              Chuyên đề <span className="text-blaze-orange">Lãnh đạo</span>
            </h2>
            <p className="text-cyan-azure text-lg font-medium max-w-2xl mx-auto mb-8">
              Chuỗi chuyên đề chiến lược được thiết kế riêng theo hệ thống Thuật Số Học Ứng Dụng dành cho CEO và đội ngũ hạt nhân.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {topics.map((item, idx) => {
            const Icon = item.icon;
            return (
              <FadeIn key={idx} direction="up" delay={idx * 0.1}>
                <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-lg shadow-cyan-azure/5 border border-slate-100 h-full flex flex-col group hover:-translate-y-2 hover:shadow-2xl hover:border-blaze-orange/30 transition-all duration-300">
                  <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 mb-6 group-hover:bg-blaze-orange group-hover:border-blaze-orange transition-colors duration-500">
                    <Icon className="w-8 h-8 text-oxford-blue group-hover:text-white transition-colors duration-500" />
                  </div>
                  <h3 className="text-xl font-bold text-oxford-blue mb-4 leading-tight group-hover:text-blaze-orange transition-colors duration-300">
                    {item.title}
                  </h3>
                  <div className="w-8 h-1 bg-blaze-orange/30 rounded-full mb-6 group-hover:bg-blaze-orange transition-colors duration-300" />
                  <p className="text-slate-600 leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn direction="up" delay={0.4}>
          <div className="text-center">
            <Link href="/speaker">
              <Button variant="primary" size="lg" className="h-16 px-12 font-bold text-lg rounded-full shadow-xl shadow-blaze-orange/20 hover:shadow-blaze-orange/40 hover:-translate-y-1 transition-all duration-300">
                MỜI MASTER ĐẾN CHIA SẺ VÀ CỐ VẤN
              </Button>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
