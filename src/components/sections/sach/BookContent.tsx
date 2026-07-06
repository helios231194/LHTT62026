'use client';

import { FadeIn } from '@/components/ui/AnimationWrapper';
import { Button } from '@/components/ui/Button';
import { Target, Users, Key, Clock, BookOpen, UserCheck, Calendar } from 'lucide-react';
import Link from 'next/link';

export function BookContent() {
  return (
    <>
      {/* SECTION 3: NỘI DUNG CUỐN SÁCH */}
      <section id="book-content" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn direction="up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-blaze-orange font-bold text-sm tracking-wider uppercase mb-2 block">
                NỘI DUNG TRỌNG TÂM
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-oxford-blue mb-6">
                Ba điều bạn sẽ có sau khi đọc xong.
              </h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
            <FadeIn direction="up" delay={0.1}>
              <div className="bg-ice-white/50 border border-gray-100 hover:border-blaze-orange/30 p-8 rounded-2xl h-full transition-all group">
                <div className="w-14 h-14 bg-oxford-blue/5 rounded-full flex items-center justify-center text-oxford-blue group-hover:bg-blaze-orange group-hover:text-white transition-colors mb-6">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-oxford-blue mb-4">Tấm gương nội lực</h3>
                <p className="text-cyan-azure leading-relaxed">
                  Hiểu rõ phong cách lãnh đạo của mình qua hệ thống phân tích Pythagoras. Biết tại sao mình nóng vội trong quyết định hay hay do dự khi chịu áp lực. Từ đó <span className="font-bold text-dark-blue">quản trị cảm xúc</span> và ra quyết định khách quan hơn.
                </p>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.2}>
              <div className="bg-ice-white/50 border border-gray-100 hover:border-blaze-orange/30 p-8 rounded-2xl h-full transition-all group">
                <div className="w-14 h-14 bg-oxford-blue/5 rounded-full flex items-center justify-center text-oxford-blue group-hover:bg-blaze-orange group-hover:text-white transition-colors mb-6">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-oxford-blue mb-4">Công cụ đọc vị</h3>
                <p className="text-cyan-azure leading-relaxed">
                  Nhìn thấy tiềm năng và phong cách làm việc của từng người qua bộ số. Biết ai phù hợp vai trò sáng tạo linh hoạt, ai phù hợp vai trò quy trình và chi tiết. <span className="font-bold text-dark-blue">Đặt đúng người vào đúng vị trí</span> từ đầu.
                </p>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.3}>
              <div className="bg-ice-white/50 border border-gray-100 hover:border-blaze-orange/30 p-8 rounded-2xl h-full transition-all group">
                <div className="w-14 h-14 bg-oxford-blue/5 rounded-full flex items-center justify-center text-oxford-blue group-hover:bg-blaze-orange group-hover:text-white transition-colors mb-6">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-oxford-blue mb-4">La bàn thời điểm</h3>
                <p className="text-cyan-azure leading-relaxed">
                  Hiểu chu kỳ 9 năm để biết năm nào nên mở rộng quy mô, năm nào cần củng cố nội lực, năm nào phù hợp đầu tư mạo hiểm. <span className="font-bold text-dark-blue">Hành động đúng thời điểm</span> thay vì chỉ dựa vào nỗ lực.
                </p>
              </div>
            </FadeIn>
          </div>

          <FadeIn direction="up" delay={0.4}>
            <div className="bg-oxford-blue max-w-4xl mx-auto rounded-xl p-8 shadow-lg text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay" />
              <p className="text-white/90 text-lg md:text-xl font-medium leading-relaxed italic relative z-10">
                Tác giả Hoàng Mai Linh viết về quy luật vận động của năng lượng, xác suất thống kê và tâm lý học hành vi. Những thứ đang hiện hữu trong từng quyết định của doanh nghiệp, được hệ thống lại thành <span className="text-blaze-orange font-bold">công cụ có thể đọc và dùng ngay</span>.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 6: VÌ SAO CẦN ĐỌC TRƯỚC */}
      <section className="py-20 md:py-28 bg-ice-white relative">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-white rounded-full blur-[100px] pointer-events-none" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <FadeIn direction="up">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <span className="text-cyan-azure font-bold text-sm tracking-wider uppercase mb-2 block">
                TỐI ƯU HIỆU QUẢ THAM VẤN
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-oxford-blue mb-8 leading-tight">
                Một buổi làm việc 1:1 sẽ sâu hơn gấp đôi khi bạn đã đọc sách trước.
              </h2>
              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 text-cyan-azure text-lg leading-relaxed text-left max-w-3xl mx-auto">
                <p className="mb-4">
                  Cuốn sách xây nền tảng kiến thức về Thuật Số Học Ứng Dụng. Khi bạn đã hiểu các khái niệm cơ bản, buổi tham vấn 1:1 với Master sẽ đi thẳng vào <span className="font-bold text-dark-blue">phân tích tình huống thực tế của bạn</span> thay vì mất thời gian giải thích từ đầu.
                </p>
                <p className="italic text-gray-500 border-l-4 border-blaze-orange pl-4 bg-gray-50/50 p-2">
                  &quot;Nhiều khách hàng đọc sách trước rồi mới đặt lịch tham vấn. Họ đến với bộ câu hỏi rõ hơn, nhận được câu trả lời sâu hơn và áp dụng được nhanh hơn.&quot;
                </p>
              </div>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <FadeIn direction="right" delay={0.1}>
              <div className="bg-white border-2 border-blaze-orange/20 p-8 rounded-2xl h-full flex flex-col hover:shadow-xl transition-shadow relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-blaze-orange/5 rounded-bl-[100px] -mr-4 -mt-4 transition-transform group-hover:scale-110" />
                <h3 className="text-2xl font-bold text-dark-blue mb-6 flex items-center gap-3 relative z-10">
                  <BookOpen className="w-6 h-6 text-blaze-orange" />
                  Đọc sách trước
                </h3>
                <ul className="space-y-4 mb-8 flex-1 text-cyan-azure relative z-10">
                  <li className="flex items-start gap-3">
                    <span className="text-blaze-orange mt-0.5">✓</span>
                    Hiểu khung lý thuyết và 7 chỉ số cơ bản
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blaze-orange mt-0.5">✓</span>
                    Tự nhận diện sơ bộ bộ số của mình
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blaze-orange mt-0.5">✓</span>
                    Chuẩn bị câu hỏi cụ thể cho buổi tham vấn
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blaze-orange mt-0.5">✓</span>
                    Tiết kiệm thời gian giải thích cơ bản
                  </li>
                </ul>
                <div className="mt-auto relative z-10">
                  <a href="https://sach.linhhoatam11.vn/" target="_blank" rel="noopener noreferrer">
                    <Button variant="primary" className="w-full text-base font-bold shadow-lg h-12">
                      ĐẶT SÁCH NGAY →
                    </Button>
                  </a>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.2}>
              <div className="bg-oxford-blue text-white border-2 border-transparent p-8 rounded-2xl h-full flex flex-col hover:shadow-xl hover:shadow-oxford-blue/20 transition-shadow relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-bl-[100px] -mr-4 -mt-4 transition-transform group-hover:scale-110" />
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 relative z-10">
                  <UserCheck className="w-6 h-6 text-cyan-azure" />
                  Tham vấn 1:1 chuyên sâu
                </h3>
                <ul className="space-y-4 mb-8 flex-1 text-white/80 relative z-10">
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-azure mt-0.5 font-bold">✓</span>
                    Phân tích chuyên sâu theo vai trò và bối cảnh
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-azure mt-0.5 font-bold">✓</span>
                    Xây bản đồ quyết định cá nhân hóa hoàn toàn
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-azure mt-0.5 font-bold">✓</span>
                    3 hành động cụ thể trong 90 ngày
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-azure mt-0.5 font-bold">✓</span>
                    PDF 100 trang tham chiếu dài hạn
                  </li>
                </ul>
                <div className="mt-auto relative z-10">
                  <Link href="/giai-phap-lanh-dao">
                    <Button variant="outline" className="w-full text-base border-white text-white hover:bg-white hover:text-oxford-blue font-bold h-12 backdrop-blur-sm">
                      XEM DỊCH VỤ THAM VẤN →
                    </Button>
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
