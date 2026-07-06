'use client';

import { FadeIn } from '@/components/ui/AnimationWrapper';
import { Button } from '@/components/ui/Button';
import { Book, Gift, Users, Award, Ticket, Check } from 'lucide-react';

const COMBOS = [
  {
    id: 'combo1',
    name: 'Khám Phá Bản Thân',
    target: 'Dành cho người muốn bắt đầu hành trình hiểu mình qua Thuật Số Học.',
    items: [
      'Sách Sức Mạnh Ẩn Sau Con Số',
      'Ebook Tư Duy Mạnh Mẽ (tặng kèm)',
    ],
    highlight: false,
    cta: 'ĐẶT COMBO 1',
    btnVariant: 'outline',
  },
  {
    id: 'combo2',
    name: 'Phát Triển Bản Thân\nvà Đọc Vị Người Khác',
    target: 'Dành cho người muốn áp dụng Thuật Số Học vào giao tiếp, quản lý và đọc vị người xung quanh.',
    items: [
      'Sách Sức Mạnh Ẩn Sau Con Số',
      'Tài liệu đọc vị chuyên sâu',
      'Ebook Tư Duy Mạnh Mẽ (tặng kèm)',
    ],
    highlight: false,
    cta: 'ĐẶT COMBO 2',
    btnVariant: 'outline',
  },
  {
    id: 'combo3',
    name: 'Chuyên Gia Life Coach',
    target: 'Dành cho người muốn đi sâu vào chuyên môn Thuật Số Học để tự ứng dụng và hỗ trợ người khác.',
    items: [
      'Sách Sức Mạnh Ẩn Sau Con Số',
      'Tài liệu chuyên sâu Life Coach',
      'Workshop Online Bí Mật Vận Mệnh',
      'Voucher Coaching + Jewelry 1.100.000đ (110 khách đầu tiên)',
      'Ebook Tư Duy Mạnh Mẽ (tặng kèm)',
    ],
    highlight: true,
    cta: 'ĐẶT COMBO 3',
    btnVariant: 'primary',
  },
];

export function BookCombos() {
  return (
    <section className="py-24 bg-oxford-blue text-white relative flex justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-oxford-blue to-dark-blue" />
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-blaze-orange/10 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 w-full">
        <FadeIn direction="up">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <span className="text-blaze-orange font-bold text-sm tracking-wider uppercase mb-2 block animate-pulse">
              QUÀ TẶNG ĐẶC BIỆT
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Chọn combo phù hợp với mục tiêu của bạn.
            </h2>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed font-medium">
              Ưu đãi dành cho 100 khách hàng đầu tiên đặt sách.<br className="hidden md:block"/>Tặng kèm Ebook <span className="text-blaze-orange font-bold">Tư Duy Mạnh Mẽ</span> khi đặt bất kỳ combo nào.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto items-stretch">
          {COMBOS.map((combo, idx) => (
            <FadeIn key={combo.id} direction="up" delay={idx * 0.1}>
              <div className={`relative h-full flex flex-col p-8 rounded-3xl transition-transform hover:-translate-y-2 border ${
                combo.highlight 
                  ? 'bg-gradient-to-b from-blaze-orange/20 to-transparent border-blaze-orange/50 text-white shadow-2xl shadow-blaze-orange/10' 
                  : 'bg-white/5 border-white/10 text-white backdrop-blur-sm'
              }`}>
                {combo.highlight && (
                  <div className="absolute -top-4 inset-x-0 flex justify-center">
                    <span className="bg-blaze-orange text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg flex items-center gap-1">
                      <Award className="w-4 h-4" /> ĐÁNG MUA NHẤT
                    </span>
                  </div>
                )}
                
                <h3 className="text-2xl font-black mb-4 whitespace-pre-line text-white">
                  {combo.name}
                </h3>
                
                <p className={`text-sm mb-8 leading-relaxed ${
                  combo.highlight ? 'text-white/90' : 'text-white/70'
                }`}>
                  {combo.target}
                </p>
                
                <div className="space-y-4 flex-1 mb-8">
                  {combo.items.map((item, i) => (
                    <div key={i} className="flex gap-3">
                      <div className={`mt-0.5 shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
                        combo.highlight ? 'bg-blaze-orange text-white' : 'bg-white/10 text-blaze-orange'
                      }`}>
                        <Check className="w-3 h-3 font-bold" />
                      </div>
                      <span className="text-sm font-medium text-white/90">
                        {item.includes('1.100.000đ') ? (
                          <span>
                            Voucher Coaching + Jewelry <span className="font-bold text-blaze-orange">1.100.000đ</span> <span className="text-xs opacity-70">(110 khách đầu tiên)</span>
                          </span>
                        ) : item.includes('(tặng kèm)') ? (
                          <span>
                            {item.replace(' (tặng kèm)', '')} <span className="text-blaze-orange font-bold text-xs">[TẶNG KÈM]</span>
                          </span>
                        ) : (
                          item
                        )}
                      </span>
                    </div>
                  ))}
                </div>
                
                <a href="https://sach.linhhoatam11.vn/" target="_blank" rel="noopener noreferrer" className="mt-auto block">
                  <Button 
                    variant={combo.btnVariant as any} 
                    className={`w-full h-14 font-bold tracking-wider ${
                      combo.highlight ? 'shadow-xl shadow-blaze-orange/20' : 'border-2 border-white/20 text-white hover:bg-white hover:text-oxford-blue'
                    }`}
                  >
                    {combo.cta}
                  </Button>
                </a>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
