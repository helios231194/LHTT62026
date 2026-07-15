'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { Menu, X, ChevronDown } from 'lucide-react';

const navLinks = [
  {
    name: 'Về chúng tôi',
    href: '#',
    dropdown: [
      { name: 'Master Hoàng Mai Linh', href: '/master-hoang-mai-linh', desc: 'Nhà sáng lập & Master Coach' },
      { name: 'Linh Hoa Tâm', href: '/linh-hoa-tam', desc: 'Hệ sinh thái & Thương hiệu' },
      { name: 'Phương pháp Thuật Số Học', href: '/phuong-phap', desc: 'Công cụ phân tích con người' },
      { name: 'Sách "Sức Mạnh Ẩn Sau Con Số"', href: '/sach', desc: 'Trực giác có hệ quy chiếu' },
    ],
  },
  {
    name: 'Giải pháp',
    href: '#',
    dropdown: [
      { name: 'Hồ Sơ Vận Mệnh', href: '/ho-so-van-menh', desc: 'Bản đồ đầu tiên hiểu cấu trúc vận hành cá nhân' },
      { name: 'Giải pháp Lãnh đạo', href: '/giai-phap-lanh-dao', desc: 'CEO, Founder, Lãnh đạo cấp cao' },
      { name: 'Giải pháp Cá nhân', href: '/phat-trien-ban-than', desc: 'Phát triển bản thân & sự nghiệp' },
    ],
  },
  {
    name: 'Workshop',
    href: '#',
    dropdown: [
      { name: 'Workshop Chiến lược', href: '/workshop-chien-luoc', desc: 'Dành cho CEO & Lãnh đạo' },
      { name: 'Workshop Cá nhân', href: '/workshop-ca-nhan', desc: 'Dành cho cá nhân phát triển' },
    ],
  },
  { name: 'Kiến thức', href: '/kien-thuc' },
  { name: 'Cộng đồng', href: '/cong-dong' },
  { name: 'Liên hệ', href: '/lien-he' },
];

const HEADER_HEIGHT = 64; // px, matches h-16

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [logoUrl, setLogoUrl] = useState('/LOGO-07.png');

  useEffect(() => {
    fetch('/api/admin/config?tab=homepage')
      .then(res => res.json())
      .then(payload => {
        const dbLogo = payload.data?.logo?.[0]?.url;
        if (dbLogo) {
          setLogoUrl(dbLogo);
        }
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const handleDropdownEnter = (name: string) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setActiveDropdown(name);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  const closeAll = () => {
    setMobileMenuOpen(false);
    setMobileDropdown(null);
  };

  return (
    <>
      {/* ── HEADER BAR ─────────────────────────────────────── */}
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: `${HEADER_HEIGHT}px`,
          zIndex: 9999,
          backgroundColor: isScrolled ? '#ffffff' : '#EBEBF1',
          boxShadow: isScrolled ? '0 1px 8px rgba(0,0,0,0.12)' : 'none',
          borderBottom: isScrolled ? '1px solid rgba(0,174,239,0.2)' : '1px solid transparent',
          transition: 'background-color 0.3s, box-shadow 0.3s',
        }}
      >
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '0 16px',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Logo */}
          <Link href="/" onClick={closeAll} style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
            <div style={{ position: 'relative', width: '160px', height: '40px' }}>
              <Image
                src={logoUrl}
                alt="Linh Hoa Tâm Logo"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => link.dropdown && handleDropdownEnter(link.name)}
                onMouseLeave={() => link.dropdown && handleDropdownLeave()}
              >
                {link.dropdown ? (
                  <button
                    className={cn(
                      'flex items-center gap-1 text-sm font-medium px-3 py-2 rounded-lg transition-colors whitespace-nowrap',
                      activeDropdown === link.name
                        ? 'text-blaze-orange bg-blaze-orange/5'
                        : 'text-dark-blue hover:text-blaze-orange'
                    )}
                    onClick={() => setActiveDropdown(activeDropdown === link.name ? null : link.name)}
                  >
                    {link.name}
                    <ChevronDown
                      className={cn('w-4 h-4 transition-transform duration-200', activeDropdown === link.name && 'rotate-180')}
                    />
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    className="text-sm font-medium px-3 py-2 rounded-lg text-dark-blue hover:text-blaze-orange transition-colors block whitespace-nowrap"
                  >
                    {link.name}
                  </Link>
                )}

                {/* Desktop Dropdown */}
                {link.dropdown && (
                  <div
                    className={cn(
                      'absolute top-full left-1/2 -translate-x-1/2 pt-2 transition-all duration-200',
                      activeDropdown === link.name
                        ? 'opacity-100 visible translate-y-0'
                        : 'opacity-0 invisible -translate-y-2'
                    )}
                  >
                    <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-2 min-w-[280px]">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="flex flex-col gap-0.5 px-4 py-3 rounded-lg hover:bg-blaze-orange/5 transition-colors group"
                          onClick={() => setActiveDropdown(null)}
                        >
                          <span className="text-sm font-semibold text-dark-blue group-hover:text-blaze-orange transition-colors">
                            {item.name}
                          </span>
                          <span className="text-xs text-cyan-azure">{item.desc}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden xl:block shrink-0">
            <Link href="/giai-phap-lanh-dao">
              <Button variant="primary" size="sm" className="text-sm font-bold whitespace-nowrap">
                Tham vấn chiến lược 1:1
              </Button>
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            style={{ padding: '8px', cursor: 'pointer', background: 'none', border: 'none', color: '#002b57', zIndex: 10001 }}
            className="xl:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Đóng menu' : 'Mở menu'}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        {/* Scroll Progress Bar */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: `${scrollProgress}%`,
            height: '3px',
            backgroundColor: '#ff6801', // Blaze Orange
            transition: 'width 0.1s ease-out',
            zIndex: 10000,
          }}
        />
      </header>

      {/* ── MOBILE MENU OVERLAY ────────────────────────────── */}
      {/* Use translateY instead of opacity/visibility to avoid Android render bugs */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: '#EBEBF1',
          zIndex: 9998,
          overflowY: 'auto',
          transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(-100%)',
          transition: 'transform 0.3s ease-in-out',
          paddingTop: `${HEADER_HEIGHT}px`,
        }}
        className="xl:hidden"
      >
        <div style={{ padding: '16px 24px 32px' }}>
          {navLinks.map((link) => (
            <div key={link.name}>
              {link.dropdown ? (
                <>
                  <button
                    className="flex items-center justify-between w-full py-3 px-4 text-lg font-medium text-oxford-blue hover:text-blaze-orange transition-colors rounded-lg"
                    onClick={() => setMobileDropdown(mobileDropdown === link.name ? null : link.name)}
                  >
                    {link.name}
                    <ChevronDown
                      className={cn('w-5 h-5 transition-transform duration-200', mobileDropdown === link.name && 'rotate-180')}
                    />
                  </button>
                  <div
                    style={{
                      overflow: 'hidden',
                      maxHeight: mobileDropdown === link.name ? '500px' : '0',
                      transition: 'max-height 0.3s ease-in-out',
                    }}
                  >
                    <div className="pl-4 pb-2 space-y-1">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block py-2.5 px-4 rounded-lg hover:bg-blaze-orange/5 transition-colors"
                          onClick={closeAll}
                        >
                          <span className="font-medium text-dark-blue block">{item.name}</span>
                          <span className="block text-sm text-cyan-azure mt-0.5">{item.desc}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <Link
                  href={link.href}
                  className="block py-3 px-4 text-lg font-medium text-oxford-blue hover:text-blaze-orange transition-colors rounded-lg"
                  onClick={closeAll}
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}

          {/* Mobile CTA */}
          <div style={{ marginTop: '24px', paddingLeft: '16px', paddingRight: '16px' }}>
            <Link href="/giai-phap-lanh-dao" onClick={closeAll}>
              <Button variant="primary" size="lg" className="w-full h-14 text-lg font-bold">
                Tham vấn chiến lược 1:1
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
