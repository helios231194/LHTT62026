'use client';
import { useState } from 'react';
import { FadeIn } from '@/components/ui/AnimationWrapper';
import Image from 'next/image';
import { Quote } from 'lucide-react';

import type { Testimonial } from '@/lib/nocobase';
import { resolveAttachmentUrl } from '@/lib/nocobase';
import { useMemo } from 'react';

const defaultTestimonials = [
  {
    name: 'Mr. Trần Trung Nhân',
    title: 'Founder FitStrength / Học viện đào tạo PT',
    image: '/testimonials/Trần Trung Nhân.jpg',
    content: 'Sau 4 năm đồng hành, mỗi lần mở thêm chi nhánh tôi đều ra quyết định dựa trên bản đồ chiến lược cá nhân mà Linh Hoa Tâm xây dựng. Đây là hệ quy chiếu cho những quyết định quan trọng của doanh nghiệp.'
  },
  {
    name: 'Ms. Hoàng Lê Dung',
    title: 'Founder & CEO – Hệ sinh thái Sức khỏe ProCARE',
    image: '/testimonials/Hoàng Lê Dung.jpg',
    content: 'Giá trị lớn nhất tôi nhận được là một khung ra quyết định rõ ràng, giúp tôi nhìn đúng bản chất vấn đề, xác định đâu là ưu tiên chiến lược và tránh những lựa chọn gây hao tổn nguồn lực về sau.'
  },
  {
    name: 'Ms. Thảo Nguyễn',
    title: 'Co-founder & Head of Finance – Aura Capital',
    image: '/testimonials/Thảo Nguyễn.jpg',
    content: 'Làm việc cùng Linh Hoa Tâm giúp tôi đưa ra các quyết định tài chính và vận hành dưới một khung chiến lược rõ ràng, cân đối được tăng trưởng và kiểm soát rủi ro trong giai đoạn mở rộng.'
  },
  {
    name: 'Mr. Nguyễn Thành Huy',
    title: 'Founder SUA Architecture & UY Diamond Jewelry',
    image: '/testimonials/Nguyễn Thành Huy.jpg',
    content: 'Buổi làm việc không tập trung vào lời khuyên ngắn hạn, mà giúp tôi tái định vị cách ra quyết định ở cấp độ chiến lược, đặc biệt trong giai đoạn doanh nghiệp cần mở rộng.'
  },
  {
    name: 'Ms. Phạm Huỳnh Thảo Miên',
    title: 'Founder TNHH Yến Sào SG / Á hậu Đại Dương Doanh Nhân Thế Giới 2026',
    image: '/testimonials/Phạm Huỳnh Thảo Miên.jpg',
    content: 'Cảm ơn Linh Hoa Tâm đã đồng hành cùng tôi nhìn lại toàn bộ hành trình điều hành doanh nghiệp dưới một góc độ chiến lược hơn và xây dựng thương hiệu theo hướng bền vững.'
  },
  {
    name: 'Mr. Đỗ Duy Thanh',
    title: 'CEO – Công ty TNHH Adobus / Founder Hệ thống Dụng cụ cắt kim loại Adobus',
    image: '/testimonials/Đỗ Duy Thanh.jpg',
    content: 'Master Hoàng Mai Linh giúp tôi xác định rõ thời điểm nên đầu tư, thời điểm cần chậm lại và những quyết định không nên làm, tránh được các bước đi tốn kém nhưng không tạo ra giá trị dài hạn.'
  }
];

interface TestimonialsProps {
  initialTestimonials?: Testimonial[];
}

export function Testimonials({ initialTestimonials }: TestimonialsProps) {
  const [hovered, setHovered] = useState<number | null>(null);

  const list = useMemo(() => {
    if (!initialTestimonials || initialTestimonials.length === 0) return defaultTestimonials;
    return initialTestimonials.map((item) => {
      const img = item.image?.[0];
      const coverUrl = resolveAttachmentUrl(img?.url, img?.preview) || '/testimonials/Trần Trung Nhân.jpg';
      const titleText = item.company ? `${item.position} – ${item.company}` : item.position;
      return {
        name: item.name,
        title: titleText,
        image: coverUrl,
        content: item.quote
      };
    });
  }, [initialTestimonials]);



  return (
    <section className="py-20 md:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn direction="up">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-oxford-blue mb-6 text-balance">
              Khách hàng đã luận giải cùng Linh Hoa Tâm chia sẻ.
            </h2>
            <p className="text-lg text-cyan-azure max-w-3xl mx-auto text-pretty">
              Những chia sẻ dưới đây đến từ các lãnh đạo đã làm việc trực tiếp 1:1 và trong workshop chiến lược:
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((item, index) => (
            <FadeIn key={index} direction="up" delay={index * 0.08}>
              <div
                className="bg-ice-white border border-gray-200 rounded-2xl overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-default"
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Profile header */}
                <div className="flex items-center gap-4 p-6 pb-4 border-b border-gray-100">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0 ring-2 ring-blaze-orange/20">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                  </div>
                  <div className="min-w-0">
                    <div className="font-bold text-oxford-blue text-base leading-tight truncate">{item.name}</div>
                    <div className="text-xs text-cyan-azure mt-1 leading-snug line-clamp-2">{item.title}</div>
                  </div>
                </div>

                {/* Quote */}
                <div className="p-6 flex flex-col flex-grow">
                  <Quote className={`hidden md:block w-8 h-8 mb-3 transition-colors duration-300 ${hovered === index ? 'text-blaze-orange' : 'text-gray-200'}`} />
                  <p className="text-oxford-blue/90 text-sm leading-relaxed flex-grow italic text-pretty">
                    {item.content}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
