'use client';
import { FadeIn } from '@/components/ui/AnimationWrapper';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { Users, TrendingUp, Award } from 'lucide-react';

export function RepresentativeSection() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-oxford-blue via-oxford-blue to-metallic-blue text-white overflow-hidden relative">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blaze-orange rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-azure rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <FadeIn direction="up">
            <div className="text-center mb-12">
              <span className="inline-block py-1.5 px-4 mb-6 text-xs font-bold tracking-wider text-blaze-orange bg-blaze-orange/10 uppercase rounded-full">
                CƠ HỘI HỢP TÁC
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                <span className="whitespace-nowrap">Linh Hoa Tâm</span> đang mở rộng mạng lưới<br />
                <span className="text-blaze-orange">Trưởng Đại Diện</span> toàn quốc.
              </h2>
              <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                Trở thành Master Thuật Số Học Ứng Dụng tại địa bàn của bạn. Xây dựng sự nghiệp với thu nhập 100 đến 500 triệu/tháng, có vị thế trong xã hội và đóng góp giá trị thực cho cộng đồng.
              </p>
            </div>
          </FadeIn>

          {/* Benefits */}
          <FadeIn direction="up" delay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-colors">
                <TrendingUp className="w-10 h-10 text-blaze-orange mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Thu nhập hấp dẫn</h3>
                <p className="text-white/70 text-sm">100 – 500 triệu/tháng từ tham vấn và đào tạo</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-colors">
                <Award className="w-10 h-10 text-blaze-orange mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Vị thế xã hội</h3>
                <p className="text-white/70 text-sm">Trở thành chuyên gia được công nhận tại địa phương</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-colors">
                <Users className="w-10 h-10 text-blaze-orange mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Đóng góp cộng đồng</h3>
                <p className="text-white/70 text-sm">Giúp cá nhân và doanh nghiệp ra quyết định đúng</p>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.3}>
            <div className="text-center">
              <Link href="/truong-dai-dien">
                <Button variant="primary" size="lg" className="h-14 px-10 text-lg font-bold shadow-lg hover:shadow-xl transition-shadow">
                  TÌM HIỂU VỀ TRƯỞNG ĐẠI DIỆN
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
