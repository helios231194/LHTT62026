'use client';
import { FadeIn } from '@/components/ui/AnimationWrapper';
import Link from 'next/link';

const categories = [
  {
    name: 'Năng lượng Lãnh đạo',
    posts: [
      'Áp lực định hình phong cách quyết định của CEO như thế nào?',
      'Cách nhận biết chu kỳ 9 năm của cá nhân và doanh nghiệp có đang đồng pha?'
    ]
  },
  {
    name: 'Đội ngũ & Quản trị',
    posts: [
      '5 bước phân bổ team dự án dựa trên năng lượng cá nhân.',
      'Tại sao không nên để hai người có chỉ số Đường đời số 1 cùng chung một bộ phận?'
    ]
  },
  {
    name: 'Phát triển Cá nhân',
    posts: [
      'Góc nhìn đúng đắn về Đỉnh cao 9 năm đời người.',
      'Sự thật về việc "Thêm chữ vào tên" – đâu là giới hạn của Cải Vận?'
    ]
  },
  {
    name: 'Case Study Thực tế',
    posts: [
      'Hành trình tái cấu trúc Adobus: Từ sự hỗn loạn đến hệ thống rõ ràng.',
      'Câu chuyện của FitStrength: Tăng trưởng chi nhánh từ việc lãnh đạo hiểu rõ bản thân.'
    ]
  }
];

export function BlogCategories() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn direction="up">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-oxford-blue inline-block">Danh mục kiến thức</h2>
            <div className="w-16 h-1 mt-6 bg-blaze-orange"></div>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {categories.map((cat, idx) => (
            <FadeIn key={idx} direction="up" delay={idx * 0.1}>
              <div>
                <div className="flex items-center justify-between border-b pb-4 mb-6 border-light-gray group">
                  <h3 className="text-2xl font-bold text-oxford-blue group-hover:text-blaze-orange transition-colors">
                    {cat.name}
                  </h3>
                  <Link href={`/category/${cat.name.toLowerCase().replace(/ /g, '-')}`} className="text-sm font-bold text-cyan-azure underline underline-offset-4 hidden sm:block">
                    Xem tất cả
                  </Link>
                </div>
                
                <ul className="space-y-6">
                  {cat.posts.map((post, i) => (
                    <li key={i} className="group cursor-pointer">
                      <h4 className="text-lg font-bold text-oxford-blue/90 group-hover:text-blaze-orange transition-colors mb-2 leading-snug">
                        {post}
                      </h4>
                      <Link href="#read" className="text-xs font-bold text-cyan-azure uppercase tracking-wider group-hover:text-oxford-blue transition-colors">
                        Đọc bài viết →
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
