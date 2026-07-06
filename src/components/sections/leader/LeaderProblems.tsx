'use client';
import { FadeIn } from '@/components/ui/AnimationWrapper';
import { AlertTriangle, UserX, BrainCircuit } from 'lucide-react';

const problems = [
  {
    icon: AlertTriangle,
    title: 'MỞ RỘNG SAI THỜI ĐIỂM',
    desc: 'Có đủ tiền, có kế hoạch, nhưng mở rộng vào đúng giai đoạn cá nhân đang ở đáy chu kỳ. Kết quả: mất 6–12 tháng để phục hồi.',
  },
  {
    icon: UserX,
    title: 'GIỮ SAI NGƯỜI TRONG VAI QUAN TRỌNG',
    desc: 'Người đó không tồi - chỉ đang ở sai vị trí. Chi phí cơ hội từ 1 quyết định nhân sự sai cấp quản lý: 200–500 triệu.',
  },
  {
    icon: BrainCircuit,
    title: 'RA QUYẾT ĐỊNH KHI CHƯA HIỂU CHÍNH MÌNH',
    desc: 'Khi áp lực tăng, phản xạ mặc định của mỗi người khác nhau. Người đẩy nhanh để xả căng. Người trì hoãn vì sợ sai. Cả hai đều trả giá.',
  },
];

export function LeaderProblems() {
  return (
    <section className="py-24 md:py-32 bg-ice-white relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <FadeIn direction="up">
          <div className="text-center max-w-4xl mx-auto mb-16 md:mb-24">
            <h2 className="text-3xl md:text-5xl font-black text-oxford-blue leading-[1.2]">
              Hầu hết CEO đều gặp đúng <br className="hidden md:block"/>
              <span className="text-blaze-orange">3 vấn đề này:</span>
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {problems.map((prob, idx) => {
            const Icon = prob.icon;
            return (
              <FadeIn key={idx} direction="up" delay={idx * 0.15}>
                <div className="bg-white rounded-3xl p-8 md:p-10 h-full shadow-lg shadow-cyan-azure/5 border border-slate-100 hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden group">
                  {/* Decorative Number */}
                  <div className="absolute -right-4 -top-8 text-[8rem] font-black text-slate-50 group-hover:text-blaze-orange/5 transition-colors duration-300 pointer-events-none select-none">
                    0{idx + 1}
                  </div>
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-blaze-orange/10 flex items-center justify-center mb-8 group-hover:bg-blaze-orange group-hover:text-white transition-colors duration-300 text-blaze-orange">
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-black text-oxford-blue mb-4 tracking-tight leading-snug uppercase">
                      {prob.title}
                    </h3>
                    <div className="w-10 h-1 bg-blaze-orange rounded-full mb-6" />
                    <p className="text-slate-600 leading-relaxed text-lg">
                      {prob.desc}
                    </p>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
