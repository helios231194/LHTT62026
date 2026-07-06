'use client';
import { FadeIn, SlideIn } from '@/components/ui/AnimationWrapper';
import { Button } from '@/components/ui/Button';
import { Globe } from '@/components/ui/cobe-globe';
import { ArrowRight, MapPin } from 'lucide-react';
import Link from 'next/link';

// Representatives across the world — connected to Vietnam hub
const worldMarkers = [
  // Vietnam (hub)
  { id: 'hanoi',     location: [21.0285, 105.8542] as [number, number], label: 'Hà Nội' },
  { id: 'hcm',       location: [10.8231, 106.6297] as [number, number], label: 'TP.HCM' },
  { id: 'danang',    location: [16.0544, 108.2022] as [number, number], label: 'Đà Nẵng' },
  // Asia Pacific
  { id: 'tokyo',     location: [35.6762, 139.6503] as [number, number], label: 'Tokyo' },
  { id: 'seoul',     location: [37.5665, 126.9780] as [number, number], label: 'Seoul' },
  { id: 'singapore', location: [1.3521, 103.8198] as [number, number], label: 'Singapore' },
  { id: 'sydney',    location: [-33.8688, 151.2093] as [number, number], label: 'Sydney' },
  // Europe
  { id: 'paris',     location: [48.8566, 2.3522] as [number, number], label: 'Paris' },
  { id: 'london',    location: [51.5074, -0.1278] as [number, number], label: 'London' },
  { id: 'berlin',    location: [52.5200, 13.4050] as [number, number], label: 'Berlin' },
  // Americas
  { id: 'la',        location: [34.0522, -118.2437] as [number, number], label: 'Los Angeles' },
  { id: 'nyc',       location: [40.7128, -74.0060] as [number, number], label: 'New York' },
  // Middle East & Africa
  { id: 'dubai',     location: [25.2048, 55.2708] as [number, number], label: 'Dubai' },
];

const worldArcs = [
  { id: 'vn-tokyo',     from: [16.0544, 108.2022] as [number, number], to: [35.6762, 139.6503] as [number, number] },
  { id: 'vn-seoul',     from: [21.0285, 105.8542] as [number, number], to: [37.5665, 126.9780] as [number, number] },
  { id: 'vn-sg',        from: [10.8231, 106.6297] as [number, number], to: [1.3521, 103.8198] as [number, number] },
  { id: 'vn-dubai',     from: [16.0544, 108.2022] as [number, number], to: [25.2048, 55.2708] as [number, number] },
  { id: 'vn-paris',     from: [21.0285, 105.8542] as [number, number], to: [48.8566, 2.3522] as [number, number] },
  { id: 'vn-london',    from: [10.8231, 106.6297] as [number, number], to: [51.5074, -0.1278] as [number, number] },
  { id: 'vn-la',        from: [16.0544, 108.2022] as [number, number], to: [34.0522, -118.2437] as [number, number] },
  { id: 'vn-nyc',       from: [21.0285, 105.8542] as [number, number], to: [40.7128, -74.0060] as [number, number] },
  { id: 'vn-sydney',    from: [10.8231, 106.6297] as [number, number], to: [-33.8688, 151.2093] as [number, number] },
  { id: 'paris-nyc',    from: [48.8566, 2.3522] as [number, number], to: [40.7128, -74.0060] as [number, number] },
  { id: 'sg-sydney',    from: [1.3521, 103.8198] as [number, number], to: [-33.8688, 151.2093] as [number, number] },
  { id: 'dubai-london', from: [25.2048, 55.2708] as [number, number], to: [51.5074, -0.1278] as [number, number] },
];

export function RepresentHero() {
  return (
    <section className="bg-oxford-blue text-white pt-24 pb-24 md:pt-32 md:pb-32 relative overflow-hidden">
      {/* Decorative gradient glowing orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-azure/20 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />
      <div className="absolute -bottom-32 left-0 w-[600px] h-[600px] bg-blaze-orange/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.15] mix-blend-overlay pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left: Text content */}
          <div className="w-full lg:w-3/5">
            <SlideIn direction="right">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blaze-orange/20 text-blaze-orange rounded-full text-xs font-bold tracking-[0.15em] uppercase mb-8 border border-blaze-orange/30 shadow-[0_0_20px_rgba(255,107,0,0.2)]">
                <span className="w-2 h-2 rounded-full bg-blaze-orange animate-pulse" />
                Mở rộng mạng lưới toàn quốc
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-black mb-6 leading-[1.15] text-white">
                Trở thành Master <br/>Thuật Số Học Ứng Dụng.
                <span className="block text-2xl md:text-3xl lg:text-4xl mt-4 font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-azure to-white/90 leading-tight">
                  Xây sự nghiệp tại chính địa bàn của bạn.
                </span>
              </h1>
              
              <p className="text-white/80 text-lg md:text-xl font-medium leading-relaxed max-w-2xl mb-12 border-l-4 border-blaze-orange pl-6">
                Đây là cơ hội sở hữu một sự nghiệp có vị thế, mang lại thu nhập thực và tạo giá trị lâu dài cho cộng đồng tại chính tỉnh/thành phố nơi bạn đang sống.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-5">
                <Link href="#dang-ky" className="w-full sm:w-auto block">
                  <Button variant="primary" size="lg" className="w-full h-16 px-8 text-lg font-bold rounded-xl shadow-[0_0_30px_rgba(255,107,0,0.3)] hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(255,107,0,0.5)] transition-all duration-300">
                    ĐĂNG KÝ TÌM HIỂU NGAY
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                
                <Link href="#danh-sach-tdd" className="w-full sm:w-auto block group">
                  <div className="h-16 px-8 rounded-xl border-2 border-cyan-azure/30 bg-cyan-azure/10 flex items-center justify-center gap-3 text-white font-bold hover:bg-cyan-azure/20 hover:border-cyan-azure transition-all duration-300 whitespace-nowrap">
                    <MapPin className="w-5 h-5 group-hover:-translate-y-1 transition-transform text-cyan-azure" />
                    Tìm Trưởng Đại Diện gần tôi nhất
                  </div>
                </Link>
              </div>
            </SlideIn>
          </div>

          {/* Right: Interactive Globe */}
          <div className="w-full lg:w-2/5 relative">
            <FadeIn direction="left" delay={0.2}>
              <div className="relative max-w-[500px] mx-auto">
                {/* Ambient glow behind globe */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-azure/25 via-transparent to-blaze-orange/15 blur-[80px] scale-110 pointer-events-none" />
                
                {/* Globe component — auto-rotating, no drag interaction */}
                <Globe
                  markers={worldMarkers}
                  arcs={worldArcs}
                  className="w-full pointer-events-none"
                  baseColor={[0.88, 0.92, 1.0]}
                  markerColor={[0.286, 0.569, 0.729]}
                  arcColor={[1.0, 0.408, 0.004]}
                  glowColor={[0.50, 0.75, 1.0]}
                  dark={1}
                  mapBrightness={4.5}
                  markerSize={0.04}
                  markerElevation={0.01}
                  arcWidth={0.6}
                  arcHeight={0.35}
                  speed={0.005}
                  theta={0.3}
                  diffuse={1.0}
                  mapSamples={16000}
                />
              </div>
            </FadeIn>
          </div>
          
        </div>
      </div>
    </section>
  );
}
