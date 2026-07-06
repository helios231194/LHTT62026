'use client';
import { FadeIn } from '@/components/ui/AnimationWrapper';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { CheckCircle, ArrowRight, Star } from 'lucide-react';
import { useMemo } from 'react';
import type { BusinessProduct } from '@/lib/nocobase';

// Fallback data if NocoBase is unavailable
const FALLBACK_PRODUCTS = [
  {
    id: 'ban-do',
    badge: null as string | null,
    name: 'Bản đồ Chiến lược 2026',
    tagline: 'Dành cho CEO & Founder',
    price: '3.800.000 VND',
    description: 'PDF cá nhân hóa hoàn toàn theo tên và ngày sinh. Tài liệu tham chiếu chiến lược trong suốt năm 2026.',
    href: '/giai-phap-lanh-dao',
    features: [
      '7 chỉ số lãnh đạo cốt lõi',
      'Chu kỳ vận hành toàn năm 2026',
      'Lộ trình 4 trụ cột chiến lược',
      'Phân tích điểm mạnh & rủi ro',
      'Dùng trong họp chiến lược, tuyển dụng, đầu tư',
    ],
    ctaLabel: 'Nhận bản đồ ngay',
    theme: 'light' as 'light' | 'dark',
  },
  {
    id: 'tu-van',
    badge: '★ ĐƯỢC CHỌN NHIỀU NHẤT',
    name: 'Tham vấn 1:1',
    tagline: 'Coaching chiến lược chuyên sâu',
    price: 'Từ 6.800.000 VND',
    description: 'Ba gói tham vấn cá nhân hóa. Phân tích quyết định thực tế, theo dõi triển khai theo từng giai đoạn.',
    href: '/giai-phap-lanh-dao',
    features: [
      'Gói Nền Tảng – 1 buổi chuyên sâu',
      'Gói Cố Vấn 90 Ngày – theo dõi liên tục',
      'Gói Đội Ngũ – phân tích cả team',
      'Phân tích 7 chỉ số ra quyết định',
      'Hỗ trợ sau buổi làm việc qua Zalo',
    ],
    ctaLabel: 'Đặt lịch tham vấn',
    theme: 'dark' as 'light' | 'dark',
  },
  {
    id: 'file',
    badge: null as string | null,
    name: 'Workshop Chiến lược Nhóm',
    tagline: 'Dành cho đội ngũ lãnh đạo',
    price: 'Từ 20.000.000 VND',
    description: 'Workshop chuyên sâu phân tích toàn bộ đội ngũ C-Suite, xây dựng bản đồ vận hành nhóm.',
    href: '/workshop-chien-luoc',
    features: [
      'Phân tích 7 chỉ số cho từng thành viên',
      'Bản đồ vận hành nhóm',
      'Phân công vai trò tối ưu',
      'Chu kỳ ra quyết định nhóm',
      'Tài liệu sau workshop',
    ],
    ctaLabel: 'Yêu cầu báo giá',
    theme: 'light' as 'light' | 'dark',
  },
];

interface FeaturedProductsProps {
  products?: BusinessProduct[];
}

export function FeaturedProducts({ products: initialProducts }: FeaturedProductsProps) {
  const products = useMemo(() => {
    if (!initialProducts || initialProducts.length === 0) return FALLBACK_PRODUCTS;
    // Lấy tối đa 3 sản phẩm nổi bật
    return initialProducts.slice(0, 3).map((svc) => ({
      id: svc.slug || String(svc.id),
      badge: svc.badge || null,
      name: svc.name,
      tagline: svc.tagline || '',
      price: svc.price || 'Liên hệ',
      description: svc.description || '',
      href: svc.href || '/giai-phap-lanh-dao',
      features: svc.benefits
        ? svc.benefits.split('|').map((f) => f.trim()).filter(Boolean)
        : [],
      ctaLabel: svc.cta_label || 'Xem chi tiết',
      theme: (svc.theme || 'light') as 'light' | 'dark',
    }));
  }, [initialProducts]);

  return (
    <section className="py-20 md:py-32 bg-ice-white">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn direction="up">
          <div className="text-center mb-16">
            <span className="inline-block py-1.5 px-4 mb-4 text-xs font-bold tracking-widest text-blaze-orange bg-blaze-orange/10 uppercase rounded-full">
              DỊCH VỤ
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-oxford-blue mb-4">
              Ba cấp độ đồng hành – một nền tảng
            </h2>
            <p className="text-lg text-cyan-azure max-w-2xl mx-auto">
              Từ tài liệu cá nhân hóa đến tham vấn chiến lược chuyên sâu – mỗi cấp độ phù hợp với một giai đoạn quyết định khác nhau.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {products.map((product, idx) => (
            <FadeIn key={product.id} direction="up" delay={idx * 0.12}>
              <div className={`relative flex flex-col h-full rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group ${
                product.theme === 'dark'
                  ? 'bg-oxford-blue text-white shadow-xl'
                  : 'bg-white text-oxford-blue border border-gray-200'
              }`}>
                {/* Featured badge */}
                {product.badge && (
                  <div className="absolute -top-0 left-0 right-0 flex justify-center">
                    <div className="bg-blaze-orange text-white px-6 py-1.5 text-xs font-bold tracking-wider uppercase flex items-center gap-1.5">
                      <Star className="w-3 h-3 fill-white" />
                      {product.badge}
                    </div>
                  </div>
                )}

                <div className={`p-8 flex flex-col flex-grow ${product.badge ? 'pt-10' : ''}`}>
                  {/* Header */}
                  <div className="mb-6">
                    <div className={`text-xs font-bold tracking-widest uppercase mb-3 ${
                      product.theme === 'dark' ? 'text-blaze-orange' : 'text-blaze-orange'
                    }`}>
                      {product.tagline}
                    </div>
                    <h3 className={`text-2xl font-bold mb-3 leading-tight ${
                      product.theme === 'dark' ? 'text-white' : 'text-oxford-blue'
                    }`}>
                      {product.name}
                    </h3>
                    <p className={`text-sm leading-relaxed ${
                      product.theme === 'dark' ? 'text-white/70' : 'text-cyan-azure'
                    }`}>
                      {product.description}
                    </p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8 flex-grow">
                    {product.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm">
                        <CheckCircle className={`w-4.5 h-4.5 shrink-0 mt-0.5 ${
                          product.theme === 'dark' ? 'text-blaze-orange' : 'text-blaze-orange'
                        }`} style={{ width: 18, height: 18 }} />
                        <span className={product.theme === 'dark' ? 'text-white/80' : 'text-oxford-blue/80'}>
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Price + CTA */}
                  <div className={`border-t pt-6 mt-auto ${
                    product.theme === 'dark' ? 'border-white/20' : 'border-gray-200'
                  }`}>
                    <div className={`text-2xl font-bold mb-4 ${
                      product.theme === 'dark' ? 'text-white' : 'text-oxford-blue'
                    }`}>
                      {product.price}
                    </div>
                    <Link href={product.href} className="block">
                      {product.theme === 'dark' ? (
                        <Button variant="primary" className="w-full group-hover:shadow-lg transition-shadow flex items-center justify-center gap-2">
                          {product.ctaLabel}
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      ) : (
                        <Button variant="secondary" className="w-full flex items-center justify-center gap-2">
                          {product.ctaLabel}
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      )}
                    </Link>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
