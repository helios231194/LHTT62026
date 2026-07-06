'use client';
import { FadeIn } from '@/components/ui/AnimationWrapper';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import Image from 'next/image';

export function LHTBrand() {
  return (
    <section className="relative bg-oxford-blue text-white py-24 md:py-32 min-h-[90vh] flex items-center overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/herobanner/hero01.png"
          alt="Linh Hoa Tâm Brand"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Gradients to ensure text readability while maintaining image mood */}
        <div className="absolute inset-0 bg-oxford-blue/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-oxford-blue/90 via-oxford-blue/70 to-oxford-blue/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-oxford-blue via-transparent to-transparent opacity-80" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Left Column: Sticky Headings & CTAs */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 self-start">
            <FadeIn direction="up">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-px bg-blaze-orange" />
                <span className="text-sm font-bold tracking-[0.25em] text-blaze-orange uppercase">Về Linh Hoa Tâm</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[1.1] tracking-tight">
                LINH HOA TÂM
              </h1>
              <h2 className="text-xl md:text-2xl font-semibold text-white/90 mb-10 leading-snug border-l-4 border-blaze-orange pl-5">
                Numerology for Leaders <br/>
                <span className="text-blaze-orange font-medium text-lg mt-2 block">Thuật Số Học Ứng Dụng Cho Người Lãnh Đạo</span>
              </h2>
            </FadeIn>

            <FadeIn direction="up" delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/giai-phap-lanh-dao">
                  <Button variant="primary" size="lg" className="h-14 px-8 font-bold w-full sm:w-auto">
                    XEM CÁC GÓI DỊCH VỤ
                  </Button>
                </Link>
                <Link href="#indicators">
                  <Button variant="outline" size="lg" className="h-14 px-8 border-white/20 text-white hover:bg-white hover:text-oxford-blue w-full sm:w-auto">
                    Khám phá 7 chỉ số →
                  </Button>
                </Link>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: 3 Highlights in Glass Cards */}
          <div className="lg:col-span-6 lg:col-start-7 space-y-6">
            {[
              { 
                title: 'Đơn vị tiên phong',
                text: 'Linh Hoa Tâm là đơn vị tiên phong tại Việt Nam ứng dụng Thuật Số Học như một công cụ tham vấn chiến lược cho lãnh đạo doanh nghiệp và cá nhân đang đứng trước quyết định lớn.' 
              },
              { 
                title: 'Quy trình cấu trúc 7 chỉ số',
                text: 'Mỗi buổi làm việc là quy trình phân tích cấu trúc: 7 chỉ số vận mệnh được đối chiếu với chu kỳ vận hành thực tế của từng người, từ đó xây dựng khung ra quyết định cụ thể cho sự nghiệp, nhân sự, tài chính và hành động.' 
              },
              { 
                title: 'Kết quả đo lường được',
                text: 'Kết quả đo bằng quyết định rõ hơn, đội ngũ vận hành nhẹ hơn. Với cá nhân: đo bằng sự rõ ràng trong lựa chọn và bước đi phù hợp với đúng giai đoạn của mình.' 
              },
            ].map((item, idx) => (
              <FadeIn key={idx} direction="up" delay={0.3 + (idx * 0.1)}>
                <div className="bg-white/[0.03] backdrop-blur-md border border-white/10 p-8 md:p-10 rounded-3xl hover:bg-white/[0.05] hover:border-blaze-orange/40 transition-all duration-300 group">
                  <div className="flex items-start gap-6">
                    <div className="text-4xl font-black text-blaze-orange/20 group-hover:text-blaze-orange/40 transition-colors">
                      0{idx + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blaze-orange transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-white/70 leading-relaxed text-base md:text-lg">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
