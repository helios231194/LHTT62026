'use client';

import { FadeIn } from '@/components/ui/AnimationWrapper';
import { Target, Search, History } from 'lucide-react';

export function MethOverview() {
  return (
    <section className="py-20 bg-ice-white">
      <div className="container mx-auto px-4 md:px-6">

        {/* SECTION 2: ĐỊNH NGHĨA */}
        <FadeIn direction="up">
          <div className="max-w-4xl mx-auto mb-24">
            <span className="text-blaze-orange font-bold text-sm tracking-wider uppercase mb-2 block">
              THUẬT SỐ HỌC ỨNG DỤNG LÀ GÌ?
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-oxford-blue mb-8">
              Một định nghĩa rõ ràng trước khi đi sâu hơn.
            </h2>
            <div className="prose prose-lg max-w-none text-cyan-azure leading-relaxed">
              <p className="font-medium text-xl text-dark-blue mb-6">
                Thuật Số Học (Numerology) là hệ thống phân tích dựa trên ngày tháng năm sinh và tên của một người. 
                Từ những con số đó, hệ thống xây dựng bức tranh về cấu trúc vận hành nội tại: cách người đó xử lý thông tin, 
                phản ứng dưới áp lực, tìm kiếm động lực và tương tác với môi trường xung quanh.
              </p>
              <p>
                Phần lớn mọi người tiếp cận Thuật Số Học theo hướng dự đoán: số của tôi là bao nhiêu, năm này có tốt không, 
                tháng này nên làm gì. <span className="whitespace-nowrap font-bold text-blaze-orange">Linh Hoa Tâm</span> chọn hướng khác: 
                sử dụng hệ thống này như một công cụ phân tích hành vi và ra quyết định có căn cứ.
              </p>
              <p className="border-l-4 border-blaze-orange pl-4 italic text-dark-blue mt-6">
                Sự khác biệt đó tạo ra toàn bộ giá trị của phương pháp này trong lãnh đạo và cuộc sống thực tế.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* SECTION 3: KHÁC BIỆT */}
        <div className="max-w-5xl mx-auto mb-24">
          <FadeIn direction="up">
            <div className="text-center mb-12">
              <span className="text-blaze-orange font-bold text-sm tracking-wider uppercase mb-2 block">
                KHÁC GÌ VỚI TÂM LINH VÀ BÓI TOÁN
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-oxford-blue leading-tight">
                Câu hỏi quan trọng nhất, và câu trả lời thẳng thắn nhất.
              </h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <FadeIn direction="right" delay={0.1}>
              <div className="bg-white p-8 md:p-10 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] h-full border border-gray-100 relative overflow-hidden group">
                {/* Visual Accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50 rounded-bl-[100px] -mr-8 -mt-8 transition-transform group-hover:scale-110" />
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-oxford-blue mb-6 flex items-center gap-3">
                    <span className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-400">
                      ✗
                    </span>
                    Cách tiếp cận thông thường
                  </h3>
                  <ul className="space-y-4 text-cyan-azure">
                    <li className="flex gap-3">
                      <span className="text-gray-300 mt-1">•</span> 
                      Dự đoán tương lai dựa trên con số
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gray-300 mt-1">•</span>
                      Kết quả mang tính cảm xúc, không kiểm chứng được
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gray-300 mt-1">•</span>
                      Áp dụng chung cho mọi người có cùng bộ số
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gray-300 mt-1">•</span>
                      Không có hành động cụ thể sau buổi làm việc
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gray-300 mt-1">•</span>
                      Tập trung vào điều không thể thay đổi
                    </li>
                  </ul>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.2}>
              <div className="bg-oxford-blue p-8 md:p-10 rounded-2xl shadow-xl h-full border border-metallic-blue relative overflow-hidden group text-white">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blaze-orange/10 rounded-bl-[100px] -mr-8 -mt-8 transition-transform group-hover:scale-110" />
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                    <span className="w-10 h-10 rounded-full bg-blaze-orange flex items-center justify-center text-white">
                      ✓
                    </span>
                    Theo phương pháp <span className="whitespace-nowrap">Linh Hoa Tâm</span>
                  </h3>
                  <ul className="space-y-4 text-white/80">
                    <li className="flex gap-3">
                      <Target className="w-5 h-5 text-blaze-orange shrink-0 mt-0.5" />
                      Phân tích hành vi và cấu trúc vận hành cá nhân
                    </li>
                    <li className="flex gap-3">
                      <Target className="w-5 h-5 text-blaze-orange shrink-0 mt-0.5" />
                      Kết quả đo được bằng quyết định, bằng người, bằng tiền
                    </li>
                    <li className="flex gap-3">
                      <Target className="w-5 h-5 text-blaze-orange shrink-0 mt-0.5" />
                      Cá nhân hóa theo vai trò, giai đoạn và bối cảnh thực tế
                    </li>
                    <li className="flex gap-3">
                      <Target className="w-5 h-5 text-blaze-orange shrink-0 mt-0.5" />
                      3 hành động cụ thể trong 90 ngày sau mỗi buổi làm việc
                    </li>
                    <li className="flex gap-3">
                      <Target className="w-5 h-5 text-blaze-orange shrink-0 mt-0.5" />
                      Tập trung vào điều có thể điều chỉnh và tối ưu ngay hôm nay
                    </li>
                  </ul>
                </div>
              </div>
            </FadeIn>
          </div>

          <FadeIn direction="up" delay={0.3}>
            <div className="mt-10 bg-blaze-orange/5 border border-blaze-orange/20 p-6 rounded-xl text-center max-w-3xl mx-auto shadow-sm">
              <p className="font-bold text-dark-blue">
                Thuật Số Học Ứng Dụng yêu cầu một điều duy nhất: sẵn sàng nhìn thẳng vào cách mình đang vận hành và điều chỉnh nếu cần. Niềm tin siêu nhiên không phải điều kiện.
              </p>
            </div>
          </FadeIn>
        </div>

        {/* SECTION 4: LỊCH SỬ NỀN TẢNG */}
        <div className="max-w-4xl mx-auto">
          <FadeIn direction="up">
            <span className="text-blaze-orange font-bold text-sm tracking-wider uppercase mb-2 block text-center">
              LỊCH SỬ VÀ NỀN TẢNG
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-oxford-blue mb-12 text-center">
              Hệ thống đã được kiểm chứng qua nhiều thế kỷ.
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            <FadeIn direction="up" delay={0.1}>
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto bg-oxford-blue/5 rounded-2xl flex items-center justify-center mb-6 text-oxford-blue group-hover:bg-blaze-orange group-hover:text-white transition-colors duration-300">
                  <History className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-dark-blue mb-3">Pythagoras, Hy Lạp cổ đại</h3>
                <p className="text-cyan-azure text-sm leading-relaxed">
                  Nhà toán học Pythagoras (~580 TCN) là người đặt nền tảng. Ông cho rằng mọi thứ trong vũ trụ đều có thể biểu diễn bằng số, và mỗi con số mang một rung động đặc trưng ảnh hưởng đến thực tại.
                </p>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.2}>
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto bg-oxford-blue/5 rounded-2xl flex items-center justify-center mb-6 text-oxford-blue group-hover:bg-blaze-orange group-hover:text-white transition-colors duration-300">
                  <Search className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-dark-blue mb-3">3 trường phái chính</h3>
                <p className="text-cyan-azure text-sm leading-relaxed">
                  Pythagoras (phương Tây), Kabbalistic (Do Thái) và Chaldean (Babylon cổ). <span className="whitespace-nowrap">Linh Hoa Tâm</span> kết hợp cả ba trường phái cùng với Phong Thủy để phân tích toàn diện.
                </p>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.3}>
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto bg-oxford-blue/5 rounded-2xl flex items-center justify-center mb-6 text-oxford-blue group-hover:bg-blaze-orange group-hover:text-white transition-colors duration-300">
                  <Target className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-dark-blue mb-3">Ứng dụng hiện đại</h3>
                <p className="text-cyan-azure text-sm leading-relaxed">
                  Ngày nay, phương pháp này được ứng dụng trong tư vấn nghề nghiệp, phát triển tổ chức và coaching lãnh đạo như một khung phân tích hành vi con người.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>

      </div>
    </section>
  );
}
