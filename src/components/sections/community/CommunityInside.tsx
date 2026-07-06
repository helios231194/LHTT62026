'use client';
import { FadeIn } from '@/components/ui/AnimationWrapper';

const agenda = [
  {
    day: 'Thứ 2',
    title: 'Dự báo Năng lượng & Hành động Tuần',
    desc: 'Master Hoàng Mai Linh trực tiếp phân tích dòng năng lượng chung của tuần mới và hướng dẫn các bước đi có lợi nhất.'
  },
  {
    day: 'Thứ 4',
    title: 'Case Study Thực chiến',
    desc: 'Gỡ rối các tình huống thực tế của thành viên: Mâu thuẫn nhân sự, Chọn thời điểm ra mắt sản phẩm, Xử lý bế tắc trong công việc.'
  },
  {
    day: 'Thứ 6',
    title: 'Q&A với Master Hoàng Mai Linh',
    desc: 'Thành viên đặt câu hỏi ẩn danh hoặc trực tiếp, Master sẽ giải đáp dựa trên góc nhìn Thuật Số Học Ứng Dụng.'
  },
  {
    day: 'Thứ 7 / CN',
    title: 'Chia sẻ Kiến thức Chuyên sâu',
    desc: 'Các bài viết dài phân tích chi tiết ý nghĩa của từng chỉ số, cách tự tính và áp dụng cho bản thân và người xung quanh.'
  }
];

export function CommunityInside() {
  return (
    <section className="py-24 bg-ice-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <FadeIn direction="up">
            <h2 className="text-3xl md:text-5xl font-bold text-oxford-blue mb-6">Bên trong Cộng đồng có gì?</h2>
            <div className="w-24 h-1 bg-blaze-orange mx-auto"></div>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {agenda.map((item, idx) => (
            <FadeIn key={idx} direction="up" delay={idx * 0.1}>
              <div className="bg-white border border-light-gray p-8 h-full flex gap-6 hover:border-blaze-orange transition-colors duration-300">
                <div className="shrink-0 w-20 text-center border-r border-light-gray/50 pr-6 hidden sm:block">
                  <span className="block font-black text-oxford-blue text-lg uppercase tracking-wider">{item.day}</span>
                </div>
                <div>
                  <h3 className="text-blaze-orange font-bold text-sm uppercase tracking-widest sm:hidden mb-2">{item.day}</h3>
                  <h4 className="text-xl font-bold text-oxford-blue mb-3">{item.title}</h4>
                  <p className="text-cyan-azure leading-relaxed font-medium text-lg">
                    {item.desc}
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
