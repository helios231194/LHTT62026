'use client';
import { FadeIn } from '@/components/ui/AnimationWrapper';

const indicators = [
  {
    name: 'Đường Đời',
    sub: 'Life Path',
    decoded: 'Con đường phát triển tự nhiên, phong cách hành động và bài học lãnh đạo cốt lõi',
    application: 'Xác định cách tạo ảnh hưởng hiệu quả nhất với đội ngũ; hiểu vì sao cùng một cách quản lý lại hiệu quả với người này nhưng không hiệu quả với người kia',
  },
  {
    name: 'Sứ Mệnh',
    sub: 'Destiny / Expression',
    decoded: 'Vai trò lớn nhất trong tổ chức và cách kiến tạo giá trị dài hạn qua công việc',
    application: 'Đặt bản thân đúng vai trong cấu trúc doanh nghiệp; biết nên giữ vai điều hành hay nên chuyển sang vai định hướng',
  },
  {
    name: 'Linh Hồn',
    sub: 'Soul Urge',
    decoded: 'Động lực sâu bên trong, điều gì thật sự duy trì năng lượng và cảm hứng làm việc',
    application: 'Tránh ra quyết định sai khi cạn kiệt động lực nội tại; hiểu khi nào cần nạp lại năng lượng trước khi hành động lớn',
  },
  {
    name: 'Nhân Cách',
    sub: 'Personality',
    decoded: 'Hình ảnh thể hiện ra bên ngoài – cách nhân viên, đối tác và thị trường cảm nhận',
    application: 'Xây thương hiệu lãnh đạo nhất quán; điều chỉnh cách giao tiếp với từng nhóm đối tượng khác nhau',
  },
  {
    name: 'Ngày Sinh',
    sub: 'Birthday',
    decoded: 'Năng lực tự nhiên và điểm mạnh bẩm sinh trong vận hành',
    application: 'Nhận diện điểm khác biệt thực sự trong quản trị; xác định vai trò phù hợp nhất trong ban lãnh đạo',
  },
  {
    name: 'Thái Độ',
    sub: 'Attitude / Subconscious',
    decoded: 'Phong cách phản ứng trước áp lực, khủng hoảng và quyết định khó',
    application: 'Kiểm soát phản xạ trong tình huống cấp bách; tránh ra quyết định cảm tính khi áp lực cao',
  },
  {
    name: 'Chu Kỳ 9 Năm',
    sub: 'Personal Year',
    decoded: 'Giai đoạn hiện tại trong chu kỳ: khởi tạo / tích lũy / thu hoạch / tái cấu trúc',
    application: 'Biết chính xác 2026 là năm nên mở rộng, giữ lực, hay dừng lại để tái cấu trúc',
  },
];

export function LHTIndicators() {
  return (
    <section id="indicators" className="py-20 md:py-32 bg-ice-white">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn direction="up">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-blaze-orange" />
            <span className="text-xs font-bold tracking-[0.25em] text-blaze-orange uppercase">Trụ chuyên môn</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-oxford-blue mb-4 max-w-3xl leading-tight">
            Hệ thống 7 chỉ số vận mệnh – Khung phân tích lãnh đạo của Linh Hoa Tâm
          </h2>
          <p className="text-cyan-azure text-lg max-w-3xl mb-4">
            Phần lớn công cụ đánh giá con người trên thị trường, từ MBTI đến DISC đến StrengthsFinder, cho bạn biết bạn là kiểu người nào. Linh Hoa Tâm đi xa hơn một bước: cho bạn biết kiểu người đó nên hành động ra sao trong giai đoạn cụ thể này của cuộc đời và sự nghiệp.
          </p>
          <p className="text-oxford-blue font-semibold text-base mb-16">
            7 chỉ số vận mệnh không phải để phân loại tính cách. Mỗi chỉ số trả lời một câu hỏi cụ thể trong vận hành.
          </p>
        </FadeIn>

        {/* Table header */}
        <FadeIn direction="up" delay={0.1}>
          <div className="hidden md:grid grid-cols-[180px_1fr_1fr] gap-0 bg-oxford-blue text-white rounded-t-2xl overflow-hidden">
            <div className="px-6 py-4 font-bold text-sm uppercase tracking-wider text-blaze-orange">Chỉ số</div>
            <div className="px-6 py-4 font-bold text-sm uppercase tracking-wider border-l border-white/10">Giải mã được gì</div>
            <div className="px-6 py-4 font-bold text-sm uppercase tracking-wider border-l border-white/10">Ứng dụng trong lãnh đạo</div>
          </div>
        </FadeIn>

        {/* Table rows */}
        <div className="rounded-b-2xl overflow-hidden border border-gray-200 md:border-t-0">
          {indicators.map((item, idx) => (
            <FadeIn key={idx} direction="up" delay={0.1 + idx * 0.07}>
              {/* Desktop row */}
              <div className={`hidden md:grid grid-cols-[180px_1fr_1fr] gap-0 border-t border-gray-200 group hover:bg-blaze-orange/5 transition-colors duration-200 ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/60'}`}>
                <div className="px-6 py-5 border-r border-gray-200">
                  <div className="font-black text-oxford-blue text-base">{item.name}</div>
                  <div className="text-xs text-blaze-orange font-medium mt-0.5">{item.sub}</div>
                </div>
                <div className="px-6 py-5 border-r border-gray-200 text-cyan-azure text-sm leading-relaxed">{item.decoded}</div>
                <div className="px-6 py-5 text-sm text-oxford-blue leading-relaxed">{item.application}</div>
              </div>
              {/* Mobile card */}
              <div className={`md:hidden p-6 border-t border-gray-200 ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/60'}`}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-black text-white bg-blaze-orange px-2 py-0.5 rounded-md">{idx + 1}</span>
                  <div>
                    <div className="font-black text-oxford-blue">{item.name}</div>
                    <div className="text-xs text-blaze-orange">{item.sub}</div>
                  </div>
                </div>
                <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Giải mã</div>
                <p className="text-cyan-azure text-sm leading-relaxed mb-3">{item.decoded}</p>
                <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Ứng dụng</div>
                <p className="text-oxford-blue text-sm leading-relaxed border-l-2 border-blaze-orange pl-3">{item.application}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
