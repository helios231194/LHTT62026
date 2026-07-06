'use client';

import { FadeIn } from '@/components/ui/AnimationWrapper';
import { Layers, Activity, Calendar, Compass, BarChart, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

const PROCESS_STEPS = [
  {
    step: '1',
    title: 'Thu thập dữ liệu',
    desc: 'Ngày tháng năm sinh và tên đầy đủ. Đây là dữ liệu gốc để tính toán 7 chỉ số vận mệnh và 12 chỉ số phụ.',
  },
  {
    step: '2',
    title: 'Phân tích 7 chỉ số',
    desc: 'Xây dựng bức tranh toàn diện về cấu trúc vận hành cá nhân: điểm mạnh bẩm sinh, điểm cần phát triển, phong cách hành động và phản ứng dưới áp lực.',
  },
  {
    step: '3',
    title: 'Đối chiếu chu kỳ',
    desc: 'Xác định người đó đang ở pha nào trong chu kỳ 9 năm: khởi tạo, tích lũy, thu hoạch hay tái cấu trúc. Đây là yếu tố quyết định thời điểm hành động.',
  },
  {
    step: '4',
    title: 'Đặt vào bối cảnh',
    desc: 'Kết hợp dữ liệu số với vai trò, giai đoạn doanh nghiệp và tình huống cụ thể. Cùng bộ số, CEO và nhân viên sẽ nhận hai phân tích hoàn toàn khác nhau.',
  },
  {
    step: '5',
    title: 'Xây khung quyết định',
    desc: 'Xác định 3 mục tiêu trọng tâm, 3 hành động cụ thể trong 90 ngày và 1 giới hạn cần thiết lập ngay. Đây là phần có giá trị ứng dụng trực tiếp nhất.',
  },
  {
    step: '6',
    title: 'Bàn giao hồ sơ',
    desc: 'Toàn bộ phân tích được tổng hợp thành tài liệu 100+ trang tham chiếu dài hạn trong họp chiến lược, tuyển dụng và các quyết định quan trọng.',
  },
];

const INDICATORS = [
  {
    name: 'Đường Đời',
    en: 'Life Path',
    q: 'Tôi phát triển theo hướng nào một cách tự nhiên nhất?',
    lead: 'Cách tạo ảnh hưởng hiệu quả nhất với đội ngũ',
    per: 'Con đường sự nghiệp phù hợp với bản chất',
  },
  {
    name: 'Sứ Mệnh',
    en: 'Destiny',
    q: 'Vai trò lớn nhất của tôi trong tổ chức là gì?',
    lead: 'Đặt bản thân đúng vị trí trong cấu trúc doanh nghiệp',
    per: 'Hiểu mình được sinh ra để làm gì',
  },
  {
    name: 'Linh Hồn',
    en: 'Soul Urge',
    q: 'Điều gì thực sự duy trì động lực của tôi?',
    lead: 'Tránh ra quyết định sai khi cạn kiệt nội lực',
    per: 'Biết khi nào cần nạp lại năng lượng',
  },
  {
    name: 'Nhân Cách',
    en: 'Personality',
    q: 'Người khác nhìn thấy tôi như thế nào?',
    lead: 'Xây thương hiệu lãnh đạo nhất quán',
    per: 'Hiểu cách mình được cảm nhận trong quan hệ',
  },
  {
    name: 'Ngày Sinh',
    en: 'Birthday',
    q: 'Năng lực tự nhiên bẩm sinh của tôi là gì?',
    lead: 'Điểm khác biệt thực sự trong quản trị',
    per: 'Phát huy đúng thế mạnh tự nhiên',
  },
  {
    name: 'Thái Độ',
    en: 'Attitude',
    q: 'Tôi phản ứng thế nào khi áp lực tăng cao?',
    lead: 'Kiểm soát phản xạ trong tình huống khủng hoảng',
    per: 'Hiểu mình để không hành động theo cảm tính',
  },
  {
    name: 'Chu Kỳ 9 Năm',
    en: 'Personal Year',
    q: 'Tôi đang ở pha nào trong hành trình?',
    lead: 'Biết 2026 nên mở rộng, giữ lực hay tái cấu trúc',
    per: 'Biết năm này nên tiến hay dừng lại',
  },
];

const COMPARISON = [
  { item: 'Phân tích tính cách', mbti: true, str: true, lht: true },
  { item: 'Điểm mạnh bẩm sinh', mbti: true, str: true, lht: true },
  { item: 'Chu kỳ vận hành theo thời gian', mbti: false, str: false, lht: true, hl: true },
  { item: 'Thời điểm hành động phù hợp', mbti: false, str: false, lht: true, hl: true },
  { item: 'Cá nhân hóa theo vai trò thực tế', mbti: 'Hạn chế', str: 'Hạn chế', lht: true },
  { item: 'Hành động cụ thể sau phân tích', mbti: false, str: false, lht: true },
  { item: 'Dùng được trong quyết định doanh nghiệp', mbti: 'Hạn chế', str: 'Hạn chế', lht: true },
];

export function MethIndicators() {
  return (
    <>
      {/* SECTION 5: CÁCH LINH HOA TÂM ỨNG DỤNG */}
      <section className="py-20 md:py-28 bg-white overflow-hidden relative">
        {/* Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-azure/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <FadeIn direction="up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-cyan-azure font-bold text-sm tracking-wider uppercase mb-2 block">
                CÁCH <span className="whitespace-nowrap">LINH HOA TÂM</span> ỨNG DỤNG VÀO THỰC TẾ
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-oxford-blue mb-6 leading-tight">
                Từ con số đến quyết định: quy trình làm việc thực tế.
              </h2>
              <p className="text-lg text-cyan-azure">
                <span className="whitespace-nowrap font-bold text-blaze-orange">Linh Hoa Tâm</span> không dừng lại ở việc tính số và đưa ra nhận xét. Mỗi buổi làm việc đi theo một quy trình có cấu trúc rõ ràng:
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {PROCESS_STEPS.map((s, i) => (
              <FadeIn key={s.step} direction="up" delay={i * 0.1}>
                <div className="bg-white border hover:border-blaze-orange/30 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 relative group h-full">
                  <div className="absolute top-6 right-8 text-5xl font-black text-gray-100 group-hover:text-blaze-orange/10 transition-colors">
                    {s.step}
                  </div>
                  <h3 className="text-xl font-bold text-oxford-blue mb-4 relative z-10 group-hover:text-blaze-orange transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-cyan-azure leading-relaxed relative z-10 text-sm">
                    {s.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: HỆ THỐNG 7 CHỈ SỐ */}
      <section id="seven-indicators" className="py-20 md:py-28 bg-oxford-blue text-white relative">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn direction="up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-blaze-orange font-bold text-sm tracking-wider uppercase mb-2 block">
                HỆ THỐNG 7 CHỈ SỐ VẬN MỆNH
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Bảy câu hỏi, một bức tranh toàn diện.
              </h2>
              <p className="text-white/80 leading-relaxed text-lg">
                Mỗi chỉ số trả lời một câu hỏi cụ thể về cách một người vận hành. Kết hợp lại, chúng tạo thành một bản đồ nội tại: mô tả bạn là ai và cho thấy bạn nên hành động ra sao trong giai đoạn này của cuộc đời.
              </p>
            </div>
          </FadeIn>

          <div className="overflow-x-auto pb-4">
            <div className="min-w-[900px]">
              <div className="grid grid-cols-12 gap-4 bg-cyan-azure/10 border border-cyan-azure/20 p-5 rounded-xl text-sm font-black uppercase tracking-widest text-cyan-azure mb-4 shadow-sm">
                <div className="col-span-3 pl-4">Chỉ số</div>
                <div className="col-span-3">Câu hỏi trả lời</div>
                <div className="col-span-3">Ứng dụng – Lãnh đạo</div>
                <div className="col-span-3 text-center">Ứng dụng – Cá nhân</div>
              </div>
              
              <div className="space-y-4">
                {INDICATORS.map((indicator, idx) => (
                  <FadeIn key={indicator.name} direction="up" delay={idx * 0.1}>
                    <div className="grid grid-cols-12 gap-4 bg-white/[0.08] hover:bg-white/15 border border-white/10 hover:border-blaze-orange/50 p-5 rounded-xl transition-colors items-center shadow-sm">
                      <div className="col-span-3 pl-4">
                        <div className="font-bold text-blaze-orange text-lg uppercase tracking-wide">{indicator.name}</div>
                        <div className="text-xs text-white/60 font-medium">{indicator.en}</div>
                      </div>
                      <div className="col-span-3 font-bold text-white text-base">
                        {indicator.q}
                      </div>
                      <div className="col-span-3 text-white font-medium text-sm leading-relaxed pr-2">
                        {indicator.lead}
                      </div>
                      <div className="col-span-3 text-white font-bold text-sm bg-cyan-azure/20 border border-cyan-azure/30 p-3 rounded-lg text-center">
                        {indicator.per}
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
          
          <FadeIn direction="up">
            <div className="mt-10 text-center text-white/60">
              <p>→ Ngoài 7 chỉ số chính, hệ thống còn có 12 chỉ số phụ bổ sung chiều sâu phân tích. Toàn bộ 19 chỉ số có trong gói <span className="text-white font-medium">Full 19 Chỉ Số Vận Mệnh</span> tại trang <Link href="/phat-trien-ban-than" className="text-blaze-orange hover:underline font-bold">Giải pháp Cá nhân</Link>.</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 7: SO SÁNH CÔNG CỤ KHÁC */}
      <section className="py-20 md:py-28 bg-ice-white">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn direction="up">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <span className="text-cyan-azure font-bold text-sm tracking-wider uppercase mb-2 block">
                SO SÁNH VỚI CÁC CÔNG CỤ ĐÁNH GIÁ CON NGƯỜI KHÁC
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-oxford-blue mb-6 leading-tight">
                MBTI và DISC đã tốt.<br />Thuật Số Học Ứng Dụng bổ sung điều còn thiếu.
              </h2>
              <p className="text-lg text-cyan-azure leading-relaxed">
                Các công cụ đánh giá phổ biến như MBTI, DISC, StrengthsFinder đều có giá trị. Điểm khác biệt của Thuật Số Học Ứng Dụng nằm ở chiều thứ ba mà các công cụ đó không có: <span className="font-bold text-blaze-orange">yếu tố thời gian</span>.
              </p>
            </div>
          </FadeIn>

          <div className="max-w-5xl mx-auto overflow-x-auto pb-4">
            <div className="min-w-[800px] bg-white border border-gray-200 rounded-2xl shadow-lg">
              <div className="grid grid-cols-12 gap-4 bg-gray-50 border-b border-gray-200 p-6 rounded-t-2xl font-bold text-sm text-dark-blue">
                <div className="col-span-5">Tiêu chí</div>
                <div className="col-span-2 text-center text-gray-500">MBTI / DISC</div>
                <div className="col-span-2 text-center text-gray-500">StrengthsFinder</div>
                <div className="col-span-3 text-center text-blaze-orange">Thuật Số Học – LHT</div>
              </div>
              
              <div className="divide-y divide-gray-100">
                {COMPARISON.map((row, i) => (
                  <div key={i} className={`grid grid-cols-12 gap-4 p-6 items-center ${row.hl ? 'bg-blaze-orange/5' : 'hover:bg-gray-50'} transition-colors`}>
                    <div className="col-span-5 font-medium text-oxford-blue">
                      {row.item}
                    </div>
                    <div className="col-span-2 text-center text-gray-500 font-medium">
                      {row.mbti === true ? 'Có' : row.mbti === false ? 'Không' : row.mbti}
                    </div>
                    <div className="col-span-2 text-center text-gray-500 font-medium">
                      {row.str === true ? 'Có' : row.str === false ? 'Không' : row.str}
                    </div>
                    <div className="col-span-3 text-center flex items-center justify-center font-bold text-oxford-blue">
                      {row.lht === true ? (
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-blaze-orange" />
                          <span>{i === 2 || i === 3 || i === 4 || i === 5 || i === 6 ? (i === 2 ? 'Có, cốt lõi PP' : i === 3 ? 'Có, theo chu kỳ' : i === 4 ? 'Có, điều chỉnh theo vai trò' : i === 5 ? 'Có, 3 hành động' : 'Có, cho NS & đầu tư') : 'Có'}</span>
                        </div>
                      ) : row.lht}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <FadeIn direction="up">
            <div className="mt-8 text-center text-dark-blue font-medium max-w-2xl mx-auto bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              Thuật Số Học bổ sung chiều thời gian mà MBTI và DISC chưa có: giúp bạn biết mình là ai, nên làm gì tiếp theo và vào lúc nào.
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
