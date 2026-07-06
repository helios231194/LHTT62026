'use client';

import { FadeIn } from '@/components/ui/AnimationWrapper';
import { Button } from '@/components/ui/Button';
import { HelpCircle, ChevronRight, Layers, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const FAQS = [
  {
    q: 'Thuật Số Học có phải là khoa học không?',
    a: 'Thuật Số Học là một hệ thống triết học về con người, tương tự nhiều công cụ tâm lý học ứng dụng được dùng trong coaching và phát triển tổ chức. Giá trị của nó nằm ở tính ứng dụng thực tế và kết quả đo được sau mỗi buổi làm việc.',
  },
  {
    q: 'Nếu tôi không tin vào Thuật Số Học thì có dùng được không?',
    a: 'Hoàn toàn được. Cách tiếp cận của Linh Hoa Tâm không yêu cầu niềm tin. Chỉ cần bạn sẵn sàng nhìn thẳng vào kết quả phân tích và cân nhắc xem nó có phản ánh đúng cách bạn đang vận hành hay không. Nhiều khách hàng CEO bắt đầu với sự hoài nghi và thấy giá trị thực tế sau buổi làm việc.',
  },
  {
    q: 'Hai người sinh cùng ngày sẽ có bản phân tích giống nhau không?',
    a: 'Không. Cùng ngày sinh nhưng khác tên, khác vai trò và khác giai đoạn cuộc đời sẽ cho ra hai phân tích khác nhau hoàn toàn. Đây là điểm then chốt của cá nhân hóa trong phương pháp của Linh Hoa Tâm.',
  },
  {
    q: 'Kết quả phân tích có thể thay đổi theo thời gian không?',
    a: 'Các chỉ số cốt lõi như Đường Đời hay Sứ Mệnh được tính từ ngày sinh nên giữ nguyên suốt cuộc đời. Nhưng Chu Kỳ 9 Năm thay đổi mỗi năm – đây là lý do tại sao cùng một người nhưng phân tích năm 2025 và năm 2026 sẽ khác nhau về thời điểm hành động và ưu tiên trọng tâm.',
  },
  {
    q: 'Thuật Số Học có thể thay thế tư vấn tâm lý hoặc coaching truyền thống không?',
    a: 'Thuật Số Học và coaching tâm lý bổ sung cho nhau. Thuật Số Học cung cấp nền tảng dữ liệu về cấu trúc vận hành cá nhân. Coaching đi sâu vào hành vi và cảm xúc. Linh Hoa Tâm sử dụng Thuật Số Học như một công cụ trong quy trình tham vấn, kết hợp cùng các phương pháp khác để cho kết quả toàn diện hơn.',
  },
  {
    q: 'Mất bao lâu để thấy kết quả thực tế?',
    a: 'Với gói Nền Tảng 90 phút, bạn nhận được hành động cụ thể ngay cuối buổi. Nhiều khách hàng áp dụng được ngay trong tuần đầu. Kết quả dài hạn như quyết định nhân sự hay thời điểm đầu tư thường rõ hơn trong 3 đến 6 tháng theo dõi.',
  },
];

const LEVELS = [
  {
    level: '1',
    name: 'Hiểu bản thân',
    desc: 'Phân tích 7 chỉ số vận mệnh để xây bức tranh toàn diện: điểm mạnh bẩm sinh, điểm cần phát triển, phong cách ra quyết định và phản ứng dưới áp lực.',
    target: 'Cá nhân và lãnh đạo ở mọi giai đoạn.',
  },
  {
    level: '2',
    name: 'Hành động đúng thời điểm',
    desc: 'Kết hợp phân tích cá nhân với chu kỳ 9 năm để xác định thời điểm mở rộng, giữ lực hay tái cấu trúc. Đây là lớp giá trị tạo ra sự khác biệt so với các công cụ đánh giá tính cách thông thường.',
    target: 'Lãnh đạo doanh nghiệp cần ra quyết định chiến lược.',
  },
  {
    level: '3',
    name: 'Xây dựng đội ngũ',
    desc: 'Phân tích bản đồ năng lượng của cả nhóm lãnh đạo: ai phù hợp vai nào, khi nào nên phân quyền, khi nào cần can thiệp trực tiếp. Phân vai đúng từ đầu tránh được xung đột về sau.',
    target: 'Ban lãnh đạo 3 đến 7 người.',
  },
];

export function MethApplication() {
  return (
    <>
      {/* SECTION 8: FAQ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <FadeIn direction="up">
            <div className="text-center mb-16">
              <span className="text-blaze-orange font-bold text-sm tracking-wider uppercase mb-2 block animate-pulse">
                CÂU HỎI THƯỜNG GẶP
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-oxford-blue mb-6">
                Những băn khoăn phổ biến nhất, <br/>được trả lời thẳng thắn.
              </h2>
            </div>
          </FadeIn>

          <div className="space-y-6">
            {FAQS.map((faq, i) => (
              <FadeIn key={i} direction="up" delay={i * 0.1}>
                <div className="bg-ice-white/50 p-6 md:p-8 rounded-2xl border border-gray-100 hover:border-blaze-orange/30 transition-colors">
                  <h3 className="text-xl font-bold text-oxford-blue mb-4 flex gap-3 items-start">
                    <HelpCircle className="w-6 h-6 text-blaze-orange shrink-0 mt-0.5" />
                    <span>{faq.q}</span>
                  </h3>
                  <p className="text-cyan-azure leading-relaxed pl-9">
                    {faq.a}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: 3 CẤP ĐỘ ỨNG DỤNG */}
      <section className="py-20 md:py-28 bg-oxford-blue text-white overflow-hidden relative">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-cyan-azure/10 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <FadeIn direction="up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-blaze-orange font-bold text-sm tracking-wider uppercase mb-2 block">
                HƠN 3.500 GIỜ THỰC HÀNH
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Những gì đã được kiểm chứng.
              </h2>
              <p className="text-lg text-white/80 leading-relaxed">
                Qua hơn 3.500 giờ làm việc trực tiếp với CEO, Founder và cá nhân từ nhiều ngành, <span className="whitespace-nowrap font-bold text-blaze-orange">Linh Hoa Tâm</span> đã phát triển một quy trình ứng dụng Thuật Số Học vào thực tế theo 3 cấp độ:
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6">
            {LEVELS.map((col, idx) => (
              <FadeIn key={col.level} direction="up" delay={idx * 0.1}>
                <div className="bg-white/5 border border-white/10 p-8 rounded-2xl h-full flex flex-col hover:bg-white/10 hover:border-blaze-orange/50 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-blaze-orange text-white font-black text-xl flex items-center justify-center rounded-xl shadow-lg">
                      {col.level}
                    </div>
                    <h3 className="text-xl font-bold text-white">{col.name}</h3>
                  </div>
                  <p className="text-white/70 leading-relaxed mb-8 flex-1">
                    {col.desc}
                  </p>
                  <div className="mt-auto bg-black/20 p-4 rounded-xl border-l-2 border-blaze-orange">
                    <span className="block text-xs uppercase text-white/50 font-bold mb-1 tracking-wider">Dành cho:</span>
                    <span className="font-medium text-white/90">{col.target}</span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10: CTA */}
      <section className="py-24 bg-blaze-orange relative overflow-hidden text-white">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-overlay pointer-events-none" />
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-white/20 blur-[80px] rounded-full" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <FadeIn direction="up">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-black mb-12">
                Hiểu phương pháp rồi.<br/>Bước tiếp theo là trải nghiệm.
              </h2>

              <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {/* CTA 1 */}
                <div className="bg-white/10 p-6 md:p-8 rounded-2xl backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all flex flex-col h-full items-center text-center group">
                  <h3 className="text-xl font-bold mb-3">Bắt đầu từ file 450k</h3>
                  <p className="text-white/80 mb-6 text-sm flex-1">
                    File Hồ Sơ Số Vận Mệnh phân tích 7 chỉ số cơ bản. Điểm khởi đầu tốt nhất nếu bạn muốn tự trải nghiệm trước.
                  </p>
                  <Link href="/phat-trien-ban-than" className="w-full">
                    <Button variant="outline" size="lg" className="w-full h-12 border-white text-dark-blue bg-white hover:bg-white/90 font-bold whitespace-nowrap">
                      NHẬN FILE LUẬN GIẢI
                    </Button>
                  </Link>
                </div>

                {/* CTA 2 PROMINENT */}
                <div className="bg-white p-6 md:p-8 rounded-2xl shadow-2xl border-4 border-white/50 hover:scale-105 transition-transform flex flex-col h-full items-center text-center relative z-10">
                  <span className="absolute -top-4 bg-oxford-blue text-white text-xs font-bold py-1 px-4 rounded-full uppercase tracking-wider">
                    ★ PHỔ BIẾN NHẤT
                  </span>
                  <h3 className="text-xl font-bold text-oxford-blue mb-3">Tham vấn 1:1 chuyên sâu</h3>
                  <p className="text-cyan-azure mb-6 text-sm flex-1">
                    Làm việc trực tiếp với Master Hoàng Mai Linh để xây bản đồ cá nhân hóa hoàn toàn cho bạn và doanh nghiệp.
                  </p>
                  <Link href="/giai-phap-lanh-dao" className="w-full">
                    <Button variant="primary" size="lg" className="w-full h-12 font-bold whitespace-nowrap text-white">
                      ĐẶT LỊCH THAM VẤN
                    </Button>
                  </Link>
                </div>

                {/* CTA 3 */}
                <div className="bg-white/10 p-6 md:p-8 rounded-2xl backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all flex flex-col h-full items-center text-center group">
                  <h3 className="text-xl font-bold mb-3">Tham gia workshop</h3>
                  <p className="text-white/80 mb-6 text-sm flex-1">
                    Trải nghiệm phương pháp qua buổi workshop trực tiếp trước khi quyết định dịch vụ phù hợp.
                  </p>
                  <Link href="/workshop-chien-luoc" className="w-full">
                    <Button variant="primary" size="lg" className="w-full h-12 bg-oxford-blue text-white hover:bg-cyan-azure font-bold border-none whitespace-nowrap">
                      XEM LỊCH WORKSHOP
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="mt-12 pt-12 border-t border-white/20 flex flex-wrap justify-center gap-6">
                <Link href="/linh-hoa-tam" className="font-medium hover:underline flex items-center gap-1">
                  Về hệ sinh thái Linh Hoa Tâm <ChevronRight className="w-4 h-4" />
                </Link>
                <Link href="/master-hoang-mai-linh" className="font-medium hover:underline flex items-center gap-1">
                  Gặp gỡ Master Hoàng Mai Linh <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
