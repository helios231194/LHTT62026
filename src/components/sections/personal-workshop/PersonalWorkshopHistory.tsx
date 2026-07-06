'use client';
import { FadeIn, SlideIn } from '@/components/ui/AnimationWrapper';
import Image from 'next/image';

const pastWorkshops = [
  {
    title: 'Thuật Số Học Để Hiểu & Dạy Con Đúng Cách',
    date: '14.06.2025',
    type: 'Online Zoom',
    image: '/placeholders/workshop-kid.jpg'
  },
  {
    title: '3 Bí Mật Hóa Giải Mâu Thuẫn Hôn Nhân',
    date: '21.06.2025',
    type: 'Online Zoom',
    image: '/placeholders/workshop-marriage.jpg'
  },
  {
    title: 'Mật Mã Thịnh Vượng – Khai Mở Tần Số Giàu Có',
    date: '31.05.2025',
    type: 'Online Zoom',
    image: '/placeholders/workshop-wealth.jpg'
  },
  {
    title: 'Bắt Lực Mâu Thuẫn – Tái Hợp Hạnh Phúc',
    date: '24.05.2025',
    type: 'Online Zoom',
    image: '/placeholders/workshop-family.jpg'
  }
];

export function PersonalWorkshopHistory() {
  return (
    <section className="py-24 md:py-32 bg-oxford-blue relative overflow-hidden" id="history">
      <div className="absolute top-0 left-0 w-1/3 h-full bg-cyan-azure/10 blur-[150px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-1/3 h-1/2 bg-blaze-orange/10 blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row gap-8 justify-between items-end mb-16 md:mb-20">
          <SlideIn direction="right">
            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight text-balance">
              Workshop <span className="text-cyan-azure">đã diễn ra.</span>
            </h2>
          </SlideIn>
          <SlideIn direction="left">
            <p className="text-white/60 font-medium max-w-sm text-sm text-pretty">
              Trực quan các chương trình Workshop chia sẻ về kỹ năng quản lý gia đình, hôn nhân và bản thân được ghi lại.
            </p>
          </SlideIn>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {pastWorkshops.map((ws, idx) => (
            <FadeIn key={idx} direction="up" delay={idx * 0.1}>
              <div className="group cursor-pointer">
                {/* Image Placeholder intended to be replaced with real banners */}
                <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden bg-white/5 border border-white/10 mb-6 group-hover:border-cyan-azure/50 transition-colors duration-500">
                  <div className="absolute inset-0 flex items-center justify-center p-6 text-center text-white/20 font-bold border-2 border-dashed border-white/10 m-4 rounded-xl">
                    <span>Banner<br/>{ws.title.substring(0, 15)}...</span>
                  </div>
                  {/* Overlay hover effect */}
                  <div className="absolute inset-0 bg-cyan-azure/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none mix-blend-screen" />
                </div>
                
                {/* Content */}
                <div className="px-2">
                  <div className="flex items-center gap-3 text-xs font-bold tracking-wider uppercase mb-3 text-blaze-orange">
                    <span>{ws.date}</span>
                    <span className="w-1 h-1 rounded-full bg-slate-500" />
                    <span>{ws.type}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white leading-snug group-hover:text-cyan-azure transition-colors text-balance">
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
