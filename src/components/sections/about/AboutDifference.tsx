'use client';
import { FadeIn } from '@/components/ui/AnimationWrapper';
import { X, Check } from 'lucide-react';

const comparisons = [
  {
    feature: 'Phương pháp phân tích',
    market: 'Chỉ dừng ở việc tính số – đưa ra nhận xét tổng quan.',
    lht: 'Luận giải kết hợp chiến lược hành động & coaching thực tế.',
  },
  {
    feature: 'Đo lường kết quả',
    market: 'Kết quả là cảm xúc, không thể kiểm tra được.',
    lht: '3 hành động cụ thể trong 90 ngày – kiểm tra và đo được.',
  },
  {
    feature: 'Mức độ cá nhân hóa',
    market: 'Không phân biệt CEO với nhân viên bình thường.',
    lht: '7 chỉ số được luận giải riêng theo vai trò lãnh đạo cụ thể.',
  },
  {
    feature: 'Đồng hành triển khai',
    market: 'Không có theo dõi sau buổi làm việc.',
    lht: 'Hỗ trợ triển khai 30 ngày + phiên check-in định kỳ.',
  },
  {
    feature: 'Hệ thống tài liệu',
    market: 'Không có tài liệu chiến lược để tham chiếu.',
    lht: 'PDF 100+ trang – dùng trực tiếp trong họp chiến lược.',
  },
  {
    feature: 'Trọng tâm giải quyết',
    market: 'Tập trung vào dự đoán tương lai.',
    lht: 'Tập trung vào: ra quyết định tốt hơn ngay trong hiện tại.',
  },
];

export function AboutDifference() {
  return (
    <section className="py-24 md:py-32 bg-ice-white relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <FadeIn direction="up">
          <div className="text-center max-w-4xl mx-auto mb-16 md:mb-24">
            <h2 className="text-3xl md:text-5xl font-black text-oxford-blue mb-6 leading-tight">
              Sự khác biệt của <br className="md:hidden" /><span className="text-blaze-orange">Linh Hoa Tâm</span>
            </h2>
            <div className="w-16 h-1.5 bg-blaze-orange mx-auto rounded-full mb-8" />
            <p className="text-cyan-azure text-lg font-medium max-w-2xl mx-auto">
              Không chỉ là luận giải những con số. Chúng tôi cung cấp công cụ sắc bén giúp người lãnh đạo 
              ra quyết định chính xác dựa trên tính quy luật của hệ thống.
            </p>
          </div>
        </FadeIn>

        <div className="max-w-6xl mx-auto">
          {/* Table Header */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-0 bg-oxford-blue text-white rounded-t-3xl overflow-hidden shadow-xl">
            <div className="hidden md:block md:col-span-4 p-6 lg:p-8 font-black text-lg text-white/70 uppercase tracking-widest border-r border-white/10">
              Tiêu chí
            </div>
            <div className="md:col-span-4 p-6 lg:p-8 text-center border-b md:border-b-0 md:border-r border-white/10">
              <span className="font-bold text-lg text-white/70 uppercase tracking-widest block mb-1">Thị trường</span>
              <span className="text-sm font-medium text-white/50">Các đơn vị Số học thông thường</span>
            </div>
            <div className="md:col-span-4 p-6 lg:p-8 text-center bg-blaze-orange">
              <span className="font-black text-xl text-white uppercase tracking-widest block mb-1">Linh Hoa Tâm</span>
              <span className="text-sm font-bold text-white/80">Numerology for Leaders</span>
            </div>
          </div>

          {/* Table Body */}
          <div className="bg-white rounded-b-3xl shadow-xl shadow-cyan-azure/5 overflow-hidden border border-gray-100 border-t-0">
            {comparisons.map((item, idx) => (
              <FadeIn key={idx} direction="up" delay={idx * 0.1}>
                <div className={`grid grid-cols-1 md:grid-cols-12 gap-0 border-b border-gray-100 last:border-0 ${idx % 2 === 0 ? 'bg-slate-50' : 'bg-white'}`}>
                  
                  {/* Feature Name */}
                  <div className="md:col-span-4 p-6 lg:p-8 font-bold text-oxford-blue flex items-center bg-white md:bg-transparent border-b md:border-b-0 md:border-r border-gray-100">
                    {item.feature}
                  </div>

                  {/* Market Column */}
                  <div className="md:col-span-4 p-6 lg:p-8 text-slate-500 font-medium flex items-center md:border-r border-gray-100 gap-3 border-b md:border-b-0 bg-slate-50/50">
                    <X className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                    <span>{item.market}</span>
                  </div>

                  {/* Linh Hoa Tam Column */}
                  <div className="md:col-span-4 p-6 lg:p-8 text-oxford-blue font-bold flex items-center gap-3 bg-blaze-orange/5">
                    <Check className="w-6 h-6 text-blaze-orange shrink-0 mt-0.5" />
                    <span>{item.lht}</span>
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
