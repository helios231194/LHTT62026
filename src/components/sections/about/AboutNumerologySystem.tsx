'use client';
import { FadeIn } from '@/components/ui/AnimationWrapper';

const indicators = [
  {
    name: 'Đường Đời',
    en: 'Life Path',
    solve: 'Con đường phát triển tự nhiên, phong cách hành động và bài học lãnh đạo cốt lõi',
    apply: 'Xác định cách tạo ảnh hưởng hiệu quả nhất với đội ngũ; hiểu vì sao cùng một cách quản lý lại hiệu quả với người này nhưng không hiệu quả với người kia'
  },
  {
    name: 'Sứ Mệnh',
    en: 'Destiny / Expression',
    solve: 'Vai trò lớn nhất trong tổ chức và cách kiến tạo giá trị dài hạn qua công việc',
    apply: 'Đặt bản thân đúng vai trong cấu trúc doanh nghiệp; biết nên giữ vai điều hành hay nên chuyển sang vai định hướng'
  },
  {
    name: 'Linh Hồn',
    en: 'Soul Urge',
    solve: 'Động lực sâu bên trong, điều gì thật sự duy trì năng lượng và cảm hứng làm việc',
    apply: 'Tránh ra quyết định sai khi cạn kiệt động lực nội tại; hiểu khi nào cần nạp lại năng lượng trước khi hành động lớn'
  },
  {
    name: 'Nhân Cách',
    en: 'Personality',
    solve: 'Hình ảnh thể hiện ra bên ngoài – cách nhân viên, đối tác và thị trường cảm nhận',
    apply: 'Xây thương hiệu lãnh đạo nhất quán; điều chỉnh cách giao tiếp với từng nhóm đối tượng khác nhau'
  },
  {
    name: 'Ngày Sinh',
    en: 'Birthday',
    solve: 'Năng lực tự nhiên và điểm mạnh bẩm sinh trong vận hành',
    apply: 'Nhận diện điểm khác biệt thực sự trong quản trị; xác định vai trò phù hợp nhất trong ban lãnh đạo'
  },
  {
    name: 'Thái Độ',
    en: 'Attitude / Subconscious',
    solve: 'Phong cách phản ứng trước áp lực, khủng hoảng và quyết định khó',
    apply: 'Kiểm soát phản xạ trong tình huống cấp bách; tránh ra quyết định cảm tính khi áp lực cao'
  },
  {
    name: 'Chu Kỳ 9 Năm',
    en: 'Personal Year',
    solve: 'Giai đoạn hiện tại trong chu kỳ: khởi tạo / tích lũy / thu hoạch / tái cấu trúc',
    apply: 'Biết chính xác 2026 là năm nên mở rộng, giữ lực, hay dừng lại để tái cấu trúc'
  }
];

export function AboutNumerologySystem() {
  return (
    <section className="py-24 bg-ice-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <FadeIn direction="up">
            <h2 className="text-3xl md:text-5xl font-bold text-oxford-blue mb-6">
              Hệ thống 7 chỉ số vận mệnh – Khung phân tích lãnh đạo của Linh Hoa Tâm
            </h2>
            <p className="text-lg text-cyan-azure leading-relaxed mb-6">
              Phần lớn công cụ đánh giá con người trên thị trường, từ MBTI đến DISC đến StrengthsFinder, cho bạn biết bạn là kiểu người nào. Linh Hoa Tâm đi xa hơn một bước: cho bạn biết kiểu người đó nên hành động ra sao trong giai đoạn cụ thể này của cuộc đời và sự nghiệp.
            </p>
            <p className="text-lg text-cyan-azure leading-relaxed">
              7 chỉ số vận mệnh <span className="font-bold">không phải để phân loại tính cách</span>. Mỗi chỉ số trả lời một câu hỏi cụ thể trong vận hành, từ cách ra quyết định dưới áp lực đến vai trò phù hợp nhất trong cấu trúc tổ chức, từ thời điểm nên tiến đến thời điểm nên dừng.
            </p>
          </FadeIn>
        </div>

        <div className="overflow-x-auto">
          <FadeIn direction="up" delay={0.2}>
            <table className="w-full text-left bg-white border border-light-gray shadow-md">
              <thead className="bg-oxford-blue text-white">
                <tr>
                  <th className="p-6 font-bold text-lg w-1/4">Chỉ số</th>
                  <th className="p-6 font-bold text-lg w-1/3">Giải mã được gì</th>
                  <th className="p-6 font-bold text-lg">Ứng dụng trong lãnh đạo</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-light-gray">
                {indicators.map((item, idx) => (
                  <tr key={idx} className="hover:bg-ice-white/50 transition-colors">
                    <td className="p-6 align-top">
                      <div className="font-bold text-blaze-orange text-xl">{item.name}</div>
                      <div className="text-sm text-cyan-azure/70 uppercase tracking-widest mt-1">{item.en}</div>
                    </td>
                    <td className="p-6 text-oxford-blue leading-relaxed align-top">{item.solve}</td>
                    <td className="p-6 text-oxford-blue leading-relaxed align-top">{item.apply}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
