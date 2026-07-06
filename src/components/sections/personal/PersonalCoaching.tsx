'use client';
import { FadeIn } from '@/components/ui/AnimationWrapper';
import { Button } from '@/components/ui/Button';
import { PhoneCall, X, User, Phone, Mail, Calendar, FileText, CheckCircle2, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useMemo } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { GlowCard } from '@/components/ui/spotlight-card';

import type { PersonalProduct } from '@/lib/nocobase';
import { resolveAttachmentUrl, createLead } from '@/lib/nocobase';

const PLACEHOLDER = '/images/placeholder-800x800.svg';

interface PersonalCoachingProps {
  initialProducts?: PersonalProduct[];
}

export function PersonalCoaching({ initialProducts }: PersonalCoachingProps) {
  const [activeModal, setActiveModal] = useState<'details' | 'booking' | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<PersonalProduct | null>(null);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', birthDate: '', notes: '' });

  // Map products list from props or default to empty list
  const products = useMemo(() => {
    return initialProducts || [];
  }, [initialProducts]);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedProduct) return;
    
    const leadData = {
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      source: 'coaching_ca_nhan',
      package: selectedProduct.name,
      message: formData.notes
    };

    const extraDetails = {
      'Gói dịch vụ': selectedProduct.name,
      'Ngày sinh (dương lịch)': formData.birthDate,
      'Nhu cầu / Ghi chú': formData.notes
    };

    const success = await createLead(leadData, extraDetails);
    if (success) {
      setIsSubmitted(true);
    } else {
      alert('Gửi thông tin thất bại. Vui lòng liên hệ trực tiếp qua số hotline.');
    }
  };

  const handleClose = () => {
    setActiveModal(null);
    setSelectedProduct(null);
    setIsSubmitted(false);
    setFormData({ name: '', phone: '', email: '', birthDate: '', notes: '' });
  };

  // Convert pipe-separated benefits string to array
  const getBenefitsArray = (benefitsStr?: string) => {
    if (!benefitsStr) return [];
    return benefitsStr.split('|').filter(b => b.trim());
  };

  return (
    <section className="py-24 md:py-32 bg-[#F8FAFC] relative" id="coaching">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <FadeIn direction="up">
          <div className="text-center max-w-4xl mx-auto mb-16 md:mb-24">
            <h2 className="text-3xl md:text-5xl font-black text-oxford-blue mb-6 leading-tight">
              Dịch vụ coaching 1:1 chuyên sâu <br className="hidden md:block"/>
              <span className="text-blaze-orange">dành riêng cho từng nhu cầu cụ thể</span>
            </h2>
            <div className="w-16 h-1.5 bg-blaze-orange mx-auto rounded-full mb-8" />
            <p className="text-cyan-azure text-lg font-medium max-w-3xl mx-auto leading-relaxed">
              Mỗi buổi coaching 1:1 được dẫn dắt trực tiếp bởi Master Hoàng Mai Linh. Hình thức online qua Zoom hoặc gặp mặt trực tiếp tại văn phòng.{' '}
              <strong>Tặng kèm:</strong> File ghi âm, File lá số PDF, Sổ ghi chú và Biểu mẫu hành động cụ thể.
            </p>
          </div>
        </FadeIn>

        {/* Dynamic products list from NocoBase */}
        <div className="max-w-7xl mx-auto">
          {products.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {products.map((svc, idx) => (
                <FadeIn key={svc.id} direction="up" delay={idx * 0.1}>
                  <GlowCard
                    customSize
                    glowColor="blaze-orange"
                    className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-xl shadow-cyan-azure/5 hover:-translate-y-2 transition-transform duration-300 flex flex-col group p-0 relative h-full"
                  >
                    {/* Badge */}
                    {svc.badge && (
                      <span className="absolute top-4 left-4 z-10 px-3 py-1 bg-blaze-orange text-white text-xs font-bold rounded-full shadow-md uppercase tracking-wider">
                        {svc.badge}
                      </span>
                    )}

                    {/* Square Placeholder Image */}
                    <div className="relative w-full aspect-[4/3] overflow-hidden bg-slate-100 flex items-center justify-center">
                      <Image
                        src={resolveAttachmentUrl(svc.image?.[0]?.url) || PLACEHOLDER}
                        alt={svc.name}
                        fill
                        className="object-cover opacity-80"
                        unoptimized
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent" />
                      <div className="absolute bottom-4 left-6 text-white font-title font-bold text-lg drop-shadow-md">
                        {svc.tagline || 'Gói phát triển'}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-grow justify-between gap-4">
                      <div>
                        <h4 className="text-xl font-bold text-oxford-blue leading-snug mb-2">{svc.name}</h4>
                        <p className="text-sm text-slate-500 line-clamp-3 mb-3">{svc.description}</p>
                        <div className="text-lg font-black text-blaze-orange">{svc.price || 'Liên hệ'}</div>
                      </div>

                      <div className="space-y-3">
                        <Button
                          variant="primary"
                          className="w-full font-bold h-12 shadow-md"
                          onClick={() => {
                            setSelectedProduct(svc);
                            setActiveModal('booking');
                          }}
                        >
                          {svc.cta_label || 'ĐĂNG KÝ NGAY'}
                        </Button>
                        <button
                          onClick={() => {
                            setSelectedProduct(svc);
                            setActiveModal('details');
                          }}
                          className="w-full text-center text-sm font-bold text-cyan-azure hover:text-blaze-orange transition-colors py-1"
                        >
                          Xem chi tiết quyền lợi →
                        </button>
                      </div>
                    </div>
                  </GlowCard>
                </FadeIn>
              ))}
            </div>
          ) : (
            <div className="text-center text-slate-400 py-12">Không tìm thấy gói coaching nào. Vui lòng thêm sản phẩm cá nhân trong NocoBase.</div>
          )}
        </div>

        {/* CTA Block */}
        <FadeIn direction="up" delay={0.2}>
          <div className="mt-24 max-w-4xl mx-auto bg-oxford-blue text-white rounded-[2.5rem] p-10 md:p-14 text-center shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay pointer-events-none" />
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-blaze-orange/20 blur-[100px] rounded-full pointer-events-none" />
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-6">
                <PhoneCall className="w-8 h-8 text-blaze-orange" />
              </div>
              <h3 className="text-2xl md:text-4xl font-black mb-4">Chưa biết chọn gói nào?</h3>
              <p className="text-white/80 text-lg md:text-xl font-medium max-w-2xl mx-auto mb-10 leading-relaxed">
                Mỗi người có một nhu cầu và giai đoạn khác nhau. Liên hệ trực tiếp để được tư vấn chọn dịch vụ phù hợp nhất – hoàn toàn miễn phí.
              </p>
              <Link href="/lien-he">
                <Button variant="primary" size="lg" className="h-16 px-10 font-bold text-lg rounded-full">
                  LIÊN HỆ TƯ VẤN MIỄN PHÍ
                </Button>
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* ── MODAL SYSTEM ──────────────────────────────────── */}
      <AnimatePresence>
        {activeModal && selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={handleClose}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              className="bg-white text-oxford-blue rounded-3xl w-full max-w-xl overflow-hidden shadow-2xl relative flex flex-col max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 text-slate-500 hover:text-oxford-blue transition-colors z-10"
                aria-label="Đóng"
              >
                <X className="w-6 h-6" />
              </button>

              {activeModal === 'details' ? (
                /* ── DETAILS MODAL ──────────────────────────────── */
                <div className="flex flex-col h-full overflow-y-auto custom-scroll">
                  <div className="p-8 flex flex-col gap-6">
                    <div>
                      <span className="text-xs font-bold tracking-widest text-blaze-orange uppercase">
                        {selectedProduct.tagline || 'CHI TIẾT GÓI DỊCH VỤ'}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-black text-oxford-blue mt-1">
                        {selectedProduct.name}
                      </h3>
                      <div className="text-xl font-black text-blaze-orange mt-2">{selectedProduct.price || 'Liên hệ'}</div>
                    </div>

                    <div className="text-slate-600 leading-relaxed text-sm md:text-base">
                      {selectedProduct.description}
                    </div>

                    {/* Benefits List */}
                    {getBenefitsArray(selectedProduct.benefits).length > 0 && (
                      <div className="bg-[#F8FAFC] rounded-2xl p-6 border border-slate-100 flex flex-col gap-4">
                        <h4 className="font-bold text-oxford-blue text-sm uppercase tracking-wider">
                          Quyền lợi đi kèm:
                        </h4>
                        <ul className="space-y-2.5 text-sm text-slate-700">
                          {getBenefitsArray(selectedProduct.benefits).map((b, idx) => (
                            <li key={idx} className="flex items-start gap-2.5">
                              <CheckCircle2 className="w-5 h-5 text-blaze-orange shrink-0 mt-0.5" />
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <Button
                      variant="primary"
                      className="w-full font-bold h-14 text-base mt-2 shadow-xl shadow-blaze-orange/20"
                      onClick={() => setActiveModal('booking')}
                    >
                      {selectedProduct.cta_label || 'ĐĂNG KÝ GÓI NÀY NGAY'}
                    </Button>
                  </div>
                </div>
              ) : (
                /* ── BOOKING FORM ──────────────────────────────── */
                <div className="p-8 overflow-y-auto custom-scroll">
                  {isSubmitted ? (
                    <div className="flex flex-col items-center justify-center text-center py-10 gap-6">
                      <div className="w-20 h-20 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center shadow-lg shadow-emerald-500/10">
                        <CheckCircle className="w-12 h-12" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-black text-oxford-blue mb-2">Đăng ký thành công!</h3>
                        <p className="text-slate-500 max-w-sm mx-auto text-sm leading-relaxed">
                          Cảm ơn bạn đã quan tâm. Chúng tôi đã ghi nhận thông tin đăng ký gói{' '}
                          <strong>{selectedProduct.name}</strong> của bạn. Master Hoàng Mai Linh và đội ngũ
                          sẽ liên hệ lại trong vòng 24 giờ làm việc.
                        </p>
                      </div>
                      <Button variant="secondary" className="px-8" onClick={handleClose}>
                        Đóng cửa sổ
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleFormSubmit} className="flex flex-col gap-5">
                      <div>
                        <span className="text-xs font-bold tracking-widest text-blaze-orange uppercase">
                          ĐĂNG KÝ TƯ VẤN &amp; ĐẶT LỊCH
                        </span>
                        <h3 className="text-xl md:text-2xl font-black text-oxford-blue mt-1">
                          {selectedProduct.name}
                        </h3>
                        <p className="text-slate-400 text-xs mt-1">
                          Vui lòng để lại thông tin chính xác để nhận tư vấn chi tiết từ đội ngũ.
                        </p>
                      </div>

                      <div className="space-y-4">
                        <div className="flex flex-col gap-1.5">
                          <label className="text-xs font-bold text-oxford-blue uppercase tracking-wider flex items-center gap-1.5">
                            <User className="w-3.5 h-3.5 text-slate-400" />
                            Họ và tên <span className="text-blaze-orange">*</span>
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="Nguyễn Văn A"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blaze-orange/20 focus:border-blaze-orange transition-all"
                          />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="flex flex-col gap-1.5">
                            <label className="text-xs font-bold text-oxford-blue uppercase tracking-wider flex items-center gap-1.5">
                              <Phone className="w-3.5 h-3.5 text-slate-400" />
                              Số điện thoại <span className="text-blaze-orange">*</span>
                            </label>
                            <input
                              type="tel"
                              required
                              placeholder="0967xxxxxx"
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blaze-orange/20 focus:border-blaze-orange transition-all"
                            />
                          </div>

                          <div className="flex flex-col gap-1.5">
                            <label className="text-xs font-bold text-oxford-blue uppercase tracking-wider flex items-center gap-1.5">
                              <Mail className="w-3.5 h-3.5 text-slate-400" />
                              Email <span className="text-blaze-orange">*</span>
                            </label>
                            <input
                              type="email"
                              required
                              placeholder="example@gmail.com"
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blaze-orange/20 focus:border-blaze-orange transition-all"
                            />
                          </div>
                        </div>

                        <div className="flex flex-col gap-1.5">
                          <label className="text-xs font-bold text-oxford-blue uppercase tracking-wider flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5 text-slate-400" />
                            Ngày tháng năm sinh (Dương lịch) <span className="text-blaze-orange">*</span>
                          </label>
                          <input
                            type="date"
                            required
                            value={formData.birthDate}
                            onChange={(e) => setFormData({ ...formData, birthDate: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blaze-orange/20 focus:border-blaze-orange transition-all"
                          />
                        </div>

                        <div className="flex flex-col gap-1.5">
                          <label className="text-xs font-bold text-oxford-blue uppercase tracking-wider flex items-center gap-1.5">
                            <FileText className="w-3.5 h-3.5 text-slate-400" />
                            Ghi chú / Nhu cầu cụ thể của bạn
                          </label>
                          <textarea
                            rows={3}
                            placeholder="Nhập ghi chú hoặc vấn đề bạn cần giải quyết..."
                            value={formData.notes}
                            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blaze-orange/20 focus:border-blaze-orange transition-all resize-none"
                          />
                        </div>
                      </div>

                      <Button
                        type="submit"
                        variant="primary"
                        className="w-full font-bold h-14 text-base mt-2 shadow-xl shadow-blaze-orange/20"
                      >
                        HOÀN TẤT ĐĂNG KÝ ĐẶT LỊCH
                      </Button>
                    </form>
                  )}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
