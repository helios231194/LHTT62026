'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Download, Calendar } from 'lucide-react';
import type { Profile } from '@/lib/nocobase';
import { resolveAttachmentUrl } from '@/lib/nocobase';

interface MasterHeroProps {
  initialProfile?: Profile | null;
}

export function MasterHero({ initialProfile }: MasterHeroProps) {
  return (
    <section className="relative min-h-[90vh] bg-oxford-blue overflow-hidden flex items-center">
      {/* Background image right panel */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-[52%]">
        <Image
          src={resolveAttachmentUrl(initialProfile?.avatar?.[0]?.url) || "/herobanner/hero03.png"}
          alt="Master Hoàng Mai Linh"
          fill
          priority
          className="object-contain object-right"
          sizes="(max-width: 1024px) 100vw, 52vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-oxford-blue via-oxford-blue/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-oxford-blue/60 via-transparent to-transparent" />
      </div>

      {/* Decorative line */}
      <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-blaze-orange/30 to-transparent" />

      <div className="relative z-10 container mx-auto px-4 md:px-6 py-24">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-px bg-blaze-orange" />
            <span className="text-xs font-bold tracking-[0.25em] text-blaze-orange uppercase">Nhà sáng lập Linh Hoa Tâm</span>
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-none tracking-tight">
            Master<br />
            <span className="text-blaze-orange">Hoàng</span><br />
            Mai Linh
          </h1>

          {/* Sub-title tags */}
          <div className="flex flex-wrap items-center gap-2 mb-10">
            {['Nhà tham vấn chiến lược', 'Đào tạo lãnh đạo', 'Thuật Số Học Ứng Dụng'].map((tag, i) => (
              <span key={i} className="text-white/70 text-sm font-medium px-3 py-1 border border-white/20 rounded-full backdrop-blur-sm">
                {tag}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-4">
            <Link href="/giai-phap-lanh-dao">
              <Button variant="primary" size="lg" className="h-14 px-8 font-bold w-full sm:w-auto flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                ĐẶT LỊCH THAM VẤN 1:1
              </Button>
            </Link>
            <a href="https://drive.google.com/file/d/1tpicvbqavsWWXpkL6a4QOO4yZTpRM1Zt/view?usp=share_link" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="h-14 px-8 border-2 border-white/50 text-white hover:bg-white hover:text-oxford-blue w-full flex items-center justify-center gap-2 backdrop-blur-sm">
                <Download className="w-5 h-5" />
                Tải Credential (PDF)
              </Button>
            </a>
            <Link href="/speaker" className="inline-flex items-center justify-center h-14 px-4 text-white/60 hover:text-blaze-orange transition-colors font-medium">
              Mời Speaker →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
