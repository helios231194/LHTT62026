'use client';
import { FadeIn } from '@/components/ui/AnimationWrapper';
import Link from 'next/link';

const latestPosts = [
  {
    category: 'Năng lượng Lãnh đạo',
    title: 'Năm cá nhân số 4: Thời điểm nên "Sửa chữa hệ thống" thay vì mở rộng',
    desc: 'Bung sức trong năm số 4 mà không quan tâm đến nền tảng chẳng khác nào xây thêm tầng trên một cái móng đang nứt. Lãnh đạo cần lưu ý điều gì?',
    date: '16/03/2026',
    cover: 'Bài viết 1 Placeholder'
  },
  {
    category: 'Đội ngũ & Quản trị',
    title: 'Đừng giao vị trí chốt sale cho người mang đường đời 4',
    desc: 'Mỗi cá nhân có một vùng "sinh thái" làm việc riêng. Bạn đang đặt nhân sự của mình vào đúng sở trường hay bắt cá phải leo cây?',
    date: '14/03/2026',
    cover: 'Bài viết 2 Placeholder'
  },
  {
    category: 'Case study thực tế',
    title: 'Gỡ rối xung đột giữa CEO số 1 và CFO số 7',
    desc: 'Khi tầm nhìn và sự an toàn va chạm nhau trong cùng một dự án. Làm sao để hai con người với hai năng lượng trái ngược tìm được tiếng nói chung?',
    date: '10/03/2026',
    cover: 'Bài viết 3 Placeholder'
  }
];

export function BlogLatest() {
  return (
    <section className="py-24 bg-ice-white border-b border-light-gray/50">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn direction="up">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-oxford-blue">Bài viết mới nhất</h2>
            <Link href="/tat-ca-bai-viet" className="hidden md:inline-block font-bold text-blaze-orange hover:text-oxford-blue transition-colors underline underline-offset-4">
              Xem tất cả →
            </Link>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {latestPosts.map((post, idx) => (
            <FadeIn key={idx} direction="up" delay={idx * 0.1} className={idx === 0 ? "lg:col-span-2 lg:row-span-2" : ""}>
              <div className="bg-white border border-light-gray group hover:shadow-xl transition-shadow h-full flex flex-col cursor-pointer">
                <div className={`bg-light-gray/30 w-full relative overflow-hidden flex items-center justify-center border-b border-light-gray ${idx === 0 ? 'aspect-[16/9] lg:aspect-[2/1]' : 'aspect-video'}`}>
                  <div className="absolute inset-0 bg-oxford-blue/5 group-hover:bg-transparent transition-colors z-10"></div>
                  <span className="text-cyan-azure/40 font-bold uppercase tracking-widest text-sm z-0">
                    {post.cover}
                  </span>
                </div>
                
                <div className={`p-6 md:p-8 flex flex-col flex-grow ${idx === 0 ? 'lg:p-10' : ''}`}>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-blaze-orange bg-blaze-orange/10 px-3 py-1">
                      {post.category}
                    </span>
                    <span className="text-xs font-bold text-cyan-azure">{post.date}</span>
                  </div>
                  
                  <h3 className={`font-bold text-oxford-blue mb-4 group-hover:text-blaze-orange transition-colors ${idx === 0 ? 'text-2xl md:text-4xl leading-tight' : 'text-xl'}`}>
                    {post.title}
                  </h3>
                  
                  <p className={`text-cyan-azure leading-relaxed flex-grow mb-6 font-medium ${idx === 0 ? 'text-lg' : ''}`}>
                    {post.desc}
                  </p>
                  
                  <div className="mt-auto">
                    <span className="text-sm font-bold border-b border-oxford-blue pb-1 text-oxford-blue">ĐỌC TIẾP →</span>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <Link href="/tat-ca-bai-viet" className="inline-block font-bold text-blaze-orange text-lg underline underline-offset-4">
            Xem tất cả bài viết →
          </Link>
        </div>
      </div>
    </section>
  );
}
