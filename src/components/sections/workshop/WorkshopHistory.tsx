'use client';
import { FadeIn, SlideIn } from '@/components/ui/AnimationWrapper';
import Image from 'next/image';

const pastWorkshops = [
  {
    title: 'Chu Kỳ Vận Hành Doanh Nghiệp',
    date: 'Tháng 12/2025',
    type: 'Online Zoom',
    image: '/placeholders/workshop1.jpg'
  },
  {
    title: 'Đội Ngũ Tinh Nhuệ',
    date: 'Tháng 11/2025',
    type: 'Online Zoom',
    image: '/placeholders/workshop2.jpg'
  },
  {
    title: 'Quy Luật Năng Lượng Lãnh Đạo',
    date: 'Tháng 9/2025',
    type: 'Offline - TP.HCM',
    image: ''
  },
  {
    title: 'Ra Quyết Định Theo Chu Kỳ 9 Năm',
    date: 'Tháng 8/2025',
    type: 'Online Zoom',
    image: ''
  }
];

export function WorkshopHistory() {
  return (
    <section className="py-24 md:py-32 bg-oxford-blue relative overflow-hidden" id="history">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-cyan-azure/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-blaze-orange/10 blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 justify-between items-start md:items-end mb-12 md:mb-20 text-center md:text-left">
          <SlideIn direction="right" className="w-full md:w-auto">
            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
              Những gì <span className="text-blaze-orange">đã diễn ra.</span>
            </h2>
          </SlideIn>
          <SlideIn direction="left" className="w-full md:w-auto text-left">
            <p className="text-white/60 font-medium max-w-sm text-sm mx-auto md:mx-0">
              Hình ảnh và thông tin của các buổi Workshop Chiến Lược gần nhất được dẫn dắt bởi Master Hoàng Mai Linh.
            </p>
          </SlideIn>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {pastWorkshops.map((ws, idx) => (
            <FadeIn key={idx} direction="up" delay={idx * 0.1}>
              <div className="group cursor-pointer">
                {/* Image / Placeholder */}
                <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden bg-white/5 border border-white/10 mb-6 group-hover:border-blaze-orange/50 transition-colors duration-500">
                  {ws.image ? (
                    <div className="absolute inset-0 flex items-center justify-center p-6 text-center text-white/20 font-bold border-2 border-dashed border-white/10 m-4 rounded-xl">
                      {/* Sub out for next/image when assets are loaded */}
                      <span>[Ảnh Banner Workshop]</span>
                    </div>
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center p-6 text-center text-white/20 font-bold bg-white/5">
                      <span>[Placeholder Khuất]</span>
                    </div>
                  )}
                  {/* Overlay hover effect */}
                  <div className="absolute inset-0 bg-blaze-orange/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none mix-blend-screen" />
                </div>
                
                {/* Content */}
                <div className="px-2">
                  <div className="flex items-center gap-3 text-xs font-bold tracking-wider uppercase mb-3 text-cyan-azure">
                    <span>{ws.date}</span>
                    <span className="w-1 h-1 rounded-full bg-slate-500" />
                    <span>{ws.type}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white leading-snug group-hover:text-blaze-orange transition-colors">
                    {ws.title}
                  </h3>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
