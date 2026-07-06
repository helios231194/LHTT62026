'use client';

import { FadeIn } from '@/components/ui/AnimationWrapper';
import { Button } from '@/components/ui/Button';
import { BookOpen, Phone, Mail, Award, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function BookDetails() {
  return (
    <>
      {/* SECTION 7: VỀ TÁC GIẢ */}
      <section className="py-20 md:py-28 bg-ice-white relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              
              <FadeIn direction="right">
                <div className="relative aspect-[3/4] w-full max-w-md mx-auto lg:mx-0 rounded-2xl overflow-hidden shadow-2xl">
                  {/* Tác giả Placeholder - Using user specified path or placeholder */}
                  <Image
                    src="/master/master-profile.jpg"
                    alt="Master Hoàng Mai Linh"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-oxford-blue/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-bold text-white mb-1">Hoàng Mai Linh</h3>
                    <p className="text-white/80 text-sm">Master Coach Thuật Số Học Ứng Dụng</p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn direction="left">
                <div>
                  <span className="text-blaze-orange font-bold text-sm tracking-wider uppercase mb-2 block">
                    VỀ TÁC GIẢ
                  </span>
                  <h2 className="text-3xl md:text-5xl font-bold text-oxford-blue mb-6 leading-tight">
                    Hệ thống hóa từ hơn 3.500<br/>giờ quan sát thực tế.
                  </h2>
                  <div className="prose prose-lg max-w-none text-cyan-azure mb-8 leading-relaxed">
                    <p>
                      <span className="font-bold text-dark-blue">Hoàng Mai Linh</span> là nhà tham vấn chiến lược và nghiên cứu Thuật Số Học Ứng Dụng với hơn 3.500 giờ làm việc trực tiếp cùng CEO, Founder và lãnh đạo cấp cao.
                    </p>
                    <p>
                      Cuốn sách <span className="font-bold text-blaze-orange">Sức Mạnh Ẩn Sau Con Số</span> được viết từ quan sát thực tế qua hàng nghìn buổi tham vấn. Đây là phần kiến thức nền mà Master dùng để xây bản đồ vận hành cho khách hàng, được hệ thống lại thành ngôn ngữ mà bất kỳ ai cũng có thể đọc và tự ứng dụng.
                    </p>
                    <blockquote className="border-l-4 border-blaze-orange pl-6 py-2 my-6 bg-white shadow-sm rounded-r-xl italic text-oxford-blue font-medium">
                      &quot;Xuất phát từ khát khao giúp từng người nhận ra giá trị của họ trên cuộc đời này, tôi bắt đầu nghiên cứu và hệ thống hóa công cụ này để mọi người có thể tận dụng điểm mạnh của chính mình trong công việc và cuộc sống. Mục tiêu là thay đổi tư duy của thế hệ trẻ Việt Nam, dẫn dắt họ đi đúng với hồ sơ số để từng cá nhân trở nên tốt hơn về thân, tâm và trí.&quot;
                    </blockquote>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-8">
                    <div>
                      <div className="text-3xl font-black text-blaze-orange mb-1">3.500+</div>
                      <div className="text-xs text-dark-blue font-bold uppercase tracking-wider">Giờ coaching<br/>thực chiến</div>
                    </div>
                    <div>
                      <div className="text-3xl font-black text-blaze-orange mb-1">2.000+</div>
                      <div className="text-xs text-dark-blue font-bold uppercase tracking-wider">Khách hàng<br/>thành công</div>
                    </div>
                    <div>
                      <div className="text-3xl font-black text-blaze-orange mb-1">1 tỷ+</div>
                      <div className="text-xs text-dark-blue font-bold uppercase tracking-wider">Đóng góp<br/>cộng đồng</div>
                    </div>
                  </div>

                  <Link href="/master-hoang-mai-linh">
                    <Button variant="outline" className="h-12 border-oxford-blue text-oxford-blue hover:bg-oxford-blue hover:text-white font-bold transition-all px-8">
                      XEM HỒ SƠ ĐẦY ĐỦ
                    </Button>
                  </Link>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: XEM THỬ NỘI DUNG (IFRAME FLIPBOOK) */}
      <section className="py-20 md:py-28 bg-white overflow-hidden relative">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <FadeIn direction="up">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-cyan-azure font-bold text-sm tracking-wider uppercase mb-2 block">
                XEM THỬ NỘI DUNG
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-oxford-blue mb-6">
                Đọc thử trước khi quyết định.
              </h2>
              <p className="text-lg text-cyan-azure">
                Lướt xem trực tiếp ngay bên dưới. Không cần tải về hay đăng ký.
              </p>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <div className="max-w-5xl mx-auto bg-gray-50 p-4 md:p-8 rounded-3xl border border-gray-200 shadow-xl overflow-hidden aspect-[16/10] md:aspect-video relative">
              {/* This iframe points to a generic flipbook URL, replace with actual if provided */}
              <iframe 
                src="https://heyzine.com/api/flipbook.html" 
                className="w-full h-full border-0 rounded-xl shadow-inner bg-white"
                allowFullScreen
                scrolling="no"
                sandbox="allow-scripts allow-same-origin allow-popups"
                title="Sức Mạnh Ẩn Sau Con Số - Đọc Thử"
              ></iframe>
              <div className="absolute inset-x-0 bottom-0 h-1/4 pointer-events-none bg-gradient-to-t from-gray-50 via-gray-50/50 to-transparent flex items-end justify-center pb-8 opacity-0 hover:opacity-100 transition-opacity">
                <a href="https://sach.linhhoatam11.vn/" target="_blank" rel="noopener noreferrer">
                  <Button variant="primary" className="shadow-xl shadow-blaze-orange/20 font-bold pointer-events-auto">
                    MUA SÁCH ĐẦY ĐỦ →
                  </Button>
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>



      {/* SECTION 10: CTA CUỐI TRANG */}
      <section className="py-24 bg-blaze-orange relative overflow-hidden text-center text-white">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/20 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <FadeIn direction="up">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight max-w-4xl mx-auto">
              Cuốn sách tốt nhất<br className="md:hidden" /> là cuốn bạn đọc ngay hôm nay.
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl mx-auto font-medium">
              Ưu đãi dành cho 100 khách hàng đầu tiên. Tặng kèm Ebook <span className="font-bold">Tư Duy Mạnh Mẽ</span> khi đặt bất kỳ combo nào.
            </p>
            
            <a href="https://sach.linhhoatam11.vn/" target="_blank" rel="noopener noreferrer" className="inline-block mb-10">
              <Button variant="outline" size="lg" className="h-16 px-12 text-xl font-black bg-white text-blaze-orange border-white hover:bg-transparent hover:text-white shadow-2xl transform hover:scale-105 transition-all w-full sm:w-auto">
                ĐẶT SÁCH NGAY
              </Button>
            </a>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/80 font-medium">
              <Link href="/giai-phap-lanh-dao" className="hover:text-white hover:underline transition-colors flex items-center gap-1">
                Xem dịch vụ tham vấn 1:1 <ArrowRight className="w-4 h-4"/>
              </Link>
              <span className="hidden sm:block opacity-30">•</span>
              <Link href="/phuong-phap" className="hover:text-white hover:underline transition-colors flex items-center gap-1">
                Xem phương pháp Thuật Số Học <ArrowRight className="w-4 h-4"/>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
