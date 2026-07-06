'use client';
import { FadeIn } from '@/components/ui/AnimationWrapper';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { X, Check } from 'lucide-react';

const rows = [
  { market: 'Tính số và đưa ra nhận xét tổng quan', lht: '3 hành động 90 ngày, kiểm tra được' },
  { market: 'Kết quả là nhận thức, không đo được', lht: 'Luận giải gắn với quyết định chiến lược cụ thể' },
  { market: 'Áp dụng chung cho mọi đối tượng', lht: 'Cá nhân hóa theo vai trò, giai đoạn, ngành' },
  { market: 'Không theo dõi sau buổi làm việc', lht: 'Hỗ trợ triển khai và check-in định kỳ' },
  { market: 'Tập trung vào dự đoán tương lai', lht: 'Tập trung vào ra quyết định tốt hơn ngay hôm nay' },
  { market: 'Dừng ở cá nhân', lht: 'Mở rộng sang đội ngũ và tổ chức' },
];

export function LHTDifference() {
  return (
    <section className="py-20 md:py-32 bg-ice-white">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn direction="up">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-blaze-orange" />
            <span className="text-xs font-bold tracking-[0.25em] text-blaze-orange uppercase">Sự khác biệt</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-oxford-blue mb-4 max-w-3xl leading-tight">
            Tại sao Linh Hoa Tâm khác biệt?
          </h2>
          <p className="text-cyan-azure text-lg max-w-3xl mb-16">
            Trên thị trường có nhiều đơn vị làm về Thần Số Học. Điều tạo ra sự khác biệt của Linh Hoa Tâm không nằm ở phương pháp tính, mà nằm ở <strong className="text-oxford-blue">giải pháp thực sau đó</strong>.
          </p>
        </FadeIn>

        <FadeIn direction="up" delay={0.1}>
          <div className="max-w-4xl mx-auto overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
            {/* Table header */}
            <div className="grid grid-cols-2">
              <div className="bg-gray-100 px-6 py-4 text-sm font-bold text-gray-500 uppercase tracking-wider border-r border-gray-200">
                Thị trường
              </div>
              <div className="bg-oxford-blue px-6 py-4 text-sm font-bold text-blaze-orange uppercase tracking-wider">
                Linh Hoa Tâm
              </div>
            </div>

            {/* Rows */}
            {rows.map((row, idx) => (
              <div key={idx} className={`grid grid-cols-2 border-t border-gray-200 group hover:bg-blaze-orange/5 transition-colors ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/70'}`}>
                <div className="px-6 py-5 border-r border-gray-200 flex items-start gap-3">
                  <X className="w-4 h-4 text-gray-400 mt-0.5 shrink-0" />
                  <span className="text-sm text-gray-500 leading-relaxed">{row.market}</span>
                </div>
                <div className="px-6 py-5 flex items-start gap-3">
                  <Check className="w-4 h-4 text-blaze-orange mt-0.5 shrink-0" />
                  <span className="text-sm text-oxford-blue font-semibold leading-relaxed">{row.lht}</span>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* CTA */}
        <FadeIn direction="up" delay={0.25}>
          <div className="text-center mt-12">
            <Link href="/giai-phap-lanh-dao">
              <Button variant="primary" size="lg" className="h-14 px-10 font-bold text-base">
                XEM CÁC GÓI DỊCH VỤ →
              </Button>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
