'use client';
import { FadeIn, SlideIn } from '@/components/ui/AnimationWrapper';
import { Globe } from '@/components/ui/cobe-globe';

// Vietnam cities & Southeast Asia partners
const markers = [
  { id: 'hanoi', location: [21.0285, 105.8542] as [number, number], label: 'Hà Nội' },
  { id: 'hcm', location: [10.8231, 106.6297] as [number, number], label: 'TP.HCM' },
  { id: 'danang', location: [16.0544, 108.2022] as [number, number], label: 'Đà Nẵng' },
  { id: 'cantho', location: [10.0341, 105.7902] as [number, number], label: 'Cần Thơ' },
  { id: 'haiphong', location: [20.8449, 106.6881] as [number, number], label: 'Hải Phòng' },
  { id: 'nhatrang', location: [12.2388, 109.1967] as [number, number], label: 'Nha Trang' },
  { id: 'buonmathuot', location: [12.6667, 108.0500] as [number, number], label: 'Buôn Ma Thuột' },
];

const arcs = [
  {
    id: 'hanoi-hcm',
    from: [21.0285, 105.8542] as [number, number],
    to: [10.8231, 106.6297] as [number, number],
  },
  {
    id: 'hcm-danang',
    from: [10.8231, 106.6297] as [number, number],
    to: [16.0544, 108.2022] as [number, number],
  },
  {
    id: 'hanoi-danang',
    from: [21.0285, 105.8542] as [number, number],
    to: [16.0544, 108.2022] as [number, number],
  },
];

const stats = [
  { value: '63', label: 'Tỉnh / Thành phố', suffix: '+' },
  { value: '2000', label: 'Khách hàng phục vụ', suffix: '+' },
  { value: '500K', label: 'Lượt theo dõi MXH', suffix: '+' },
];

// Brand colors from tailwind.config.ts
// oxford-blue: #002b57  → normalized: [0, 0.169, 0.341]
// cyan-azure:  #4991ba  → normalized: [0.286, 0.569, 0.729]
// blaze-orange:#ff6801  → normalized: [1, 0.408, 0.004]

export function RepresentGlobe() {
  return (
    <section className="py-24 bg-oxford-blue text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.08] mix-blend-overlay pointer-events-none" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-cyan-azure/10 rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blaze-orange/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        {/* Header */}
        <SlideIn direction="up">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-azure/20 text-cyan-azure rounded-full text-xs font-bold tracking-[0.15em] uppercase mb-8 border border-cyan-azure/30">
              <span className="w-2 h-2 rounded-full bg-cyan-azure animate-pulse" />
              Mạng lưới toàn quốc
            </div>
            <h2 className="text-3xl md:text-5xl font-black leading-[1.2] mb-6">
              Kết nối Trưởng Đại Diện<br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-azure to-blaze-orange">
                {' '}trên khắp Việt Nam.
              </span>
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
              Hệ thống Trưởng Đại Diện của Linh Hoa Tâm đang mở rộng liên tục tại 63 tỉnh thành.
              Kéo để khám phá bản đồ mạng lưới đang phát triển.
            </p>
            <div className="w-16 h-1 bg-blaze-orange mx-auto rounded-full mt-6" />
          </div>
        </SlideIn>

        {/* Main content: Globe + Stats */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Globe */}
          <FadeIn direction="right" delay={0.1} className="w-full lg:w-1/2">
            <div className="relative max-w-[520px] mx-auto">
              {/* Glow ring behind globe */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-azure/30 via-transparent to-blaze-orange/20 blur-[60px] scale-110 pointer-events-none" />
              {/* Outer decorative ring */}
              <div className="absolute inset-[-2px] rounded-full border border-cyan-azure/20 pointer-events-none" />

              <Globe
                markers={markers}
                arcs={arcs}
                className="w-full"
                // Oxford-blue (#002b57) tinted map base
                baseColor={[0.85, 0.91, 1.0]}
                // Cyan-azure marker color (#4991ba)
                markerColor={[0.286, 0.569, 0.729]}
                // Blaze-orange arcs (#ff6801)
                arcColor={[1.0, 0.408, 0.004]}
                // Soft blue-white glow
                glowColor={[0.55, 0.78, 1.0]}
                dark={1}
                mapBrightness={4}
                markerSize={0.04}
                markerElevation={0.01}
                arcWidth={0.8}
                arcHeight={0.3}
                speed={0.004}
                theta={0.25}
                diffuse={1.2}
                mapSamples={16000}
              />

              {/* Drag hint */}
              <p className="text-center text-white/40 text-xs mt-4 tracking-widest uppercase font-medium">
                ↕↔ Kéo để xoay địa cầu
              </p>
            </div>
          </FadeIn>

          {/* Stats + description */}
          <FadeIn direction="left" delay={0.2} className="w-full lg:w-1/2">
            <div className="space-y-8">
              {/* Stats grid */}
              <div className="grid grid-cols-3 gap-4">
                {stats.map((stat, idx) => (
                  <div
                    key={idx}
                    className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 text-center hover:bg-white/10 hover:border-cyan-azure/40 transition-all duration-300"
                  >
                    <div className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-cyan-azure">
                      {stat.value}
                      <span className="text-blaze-orange">{stat.suffix}</span>
                    </div>
                    <div className="text-white/60 text-xs font-medium mt-1 leading-tight">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Network description */}
              <div className="space-y-5">
                {[
                  {
                    icon: '🌐',
                    title: 'Phủ sóng 63 tỉnh thành',
                    desc: 'Mạng lưới Trưởng Đại Diện đang được mở rộng liên tục tại tất cả tỉnh thành trên toàn quốc, tạo sức mạnh địa phương cho toàn hệ thống.'
                  },
                  {
                    icon: '🔗',
                    title: 'Kết nối & hỗ trợ lẫn nhau',
                    desc: 'Các Trưởng Đại Diện cùng chia sẻ kinh nghiệm, tài nguyên và cơ hội hợp tác trong một cộng đồng chuyên nghiệp có mentor trực tiếp từ Founder.'
                  },
                  {
                    icon: '⚡',
                    title: 'Độc quyền theo địa bàn',
                    desc: 'Mỗi tỉnh thành chỉ có một Trưởng Đại Diện chính thức — đảm bảo vị thế độc quyền tuyệt đối và không có cạnh tranh nội bộ.'
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex gap-4 p-5 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/8 hover:border-cyan-azure/30 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-azure/30 to-blaze-orange/20 flex items-center justify-center text-lg shrink-0 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-1 text-sm">{item.title}</h3>
                      <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
