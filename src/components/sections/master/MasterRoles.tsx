'use client';
import { FadeIn } from '@/components/ui/AnimationWrapper';
import { Briefcase, TrendingUp, Mic, BookOpen } from 'lucide-react';

const roles = [
  {
    icon: Briefcase,
    number: '01',
    title: 'Chuyên gia tham vấn',
    content: 'Hơn 3.500 giờ tham vấn 1:1 trực tiếp với CEO, Founder và lãnh đạo cấp cao. Lĩnh vực tập trung: quyết định chiến lược về thời điểm mở rộng, tái cấu trúc đội ngũ và phân bổ nguồn lực.',
    highlight: 'Mỗi buổi làm việc kết thúc bằng 3 hành động cụ thể trong 90 ngày, không phải lý thuyết.',
  },
  {
    icon: TrendingUp,
    number: '02',
    title: 'Cố vấn chiến lược',
    content: 'Xây bản đồ vận hành dài hạn cho doanh nghiệp dựa trên chu kỳ cá nhân của người đứng đầu và chu kỳ tổ chức. Đã làm việc với doanh nghiệp từ 5 đến 200 nhân sự trong các ngành F&B, sản xuất, tài chính, bất động sản, công nghệ.',
    highlight: 'Đồng thời đồng hành với cá nhân đang đứng trước quyết định lớn về sự nghiệp, đầu tư và hướng đi cuộc đời.',
  },
  {
    icon: Mic,
    number: '03',
    title: 'Đào tạo & Diễn giả',
    content: 'Diễn giả tại Prudential Vietnam, Shinhan Life, Forbes Women Vietnam. Đồng hành cùng trường Đại học Kinh tế Quốc dân và Đại học Ngân hàng TP.HCM.',
    highlight: 'Chuyên đề: Quy Luật Năng Lượng & Ra Quyết Định – Đội Ngũ Tinh Nhuệ 2026 – Chu Kỳ Vận Hành Doanh Nghiệp.',
  },
  {
    icon: BookOpen,
    number: '04',
    title: 'Tác giả',
    content: 'Tác giả sách Sức Mạnh Ẩn Sau Con Số – công cụ tự đánh giá hệ điều hành cá nhân dành cho người muốn hiểu rõ mình trước khi ra quyết định lớn.',
    highlight: 'Cuốn sách được viết cho cả lãnh đạo doanh nghiệp lẫn cá nhân đang tìm hướng đi phù hợp với bản chất của mình.',
  },
];

export function MasterRoles() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn direction="up">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-blaze-orange" />
            <span className="text-xs font-bold tracking-[0.25em] text-blaze-orange uppercase">Vai trò chuyên môn</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-oxford-blue mb-16 max-w-2xl leading-tight">
            Những gì Master Hoàng Mai Linh làm và đã làm.
          </h2>
        </FadeIn>

        {/* 2×2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {roles.map((role, idx) => {
            const Icon = role.icon;
            return (
              <FadeIn key={idx} direction="up" delay={idx * 0.1}>
                <div className="p-8 border border-gray-200 rounded-2xl flex flex-col hover:shadow-lg hover:border-blaze-orange/30 transition-all duration-300 group min-h-[260px]">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-blaze-orange/10 flex items-center justify-center group-hover:bg-blaze-orange transition-colors duration-300 shrink-0">
                      <Icon className="w-6 h-6 text-blaze-orange group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <div className="text-xs font-black text-gray-300 leading-none mb-1">{role.number}</div>
                      <h3 className="text-xl font-bold text-oxford-blue leading-tight">{role.title}</h3>
                    </div>
                  </div>
                  <p className="text-cyan-azure leading-relaxed text-base mb-4 flex-1">{role.content}</p>
                  <p className="text-sm font-semibold text-oxford-blue border-l-2 border-blaze-orange pl-4 leading-relaxed">
                    {role.highlight}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
