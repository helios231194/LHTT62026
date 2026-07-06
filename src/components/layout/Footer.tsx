import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-oxford-blue text-ice-white py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          <div className="col-span-1 lg:col-span-1">
            <h3 className="text-2xl font-bold mb-6 text-ice-white">
              LINH HOA TÂM<span className="text-blaze-orange">.</span>
            </h3>
            <p className="text-cyan-azure leading-relaxed mb-6">
              Thuật Số Học Ứng Dụng Cho Người Lãnh Đạo. Đồng hành cùng CEO, Founder và cá nhân trên hành trình ra quyết định đúng thời điểm.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-ice-white">Về chúng tôi</h4>
            <ul className="space-y-4">
              <li><Link href="/master-hoang-mai-linh" className="text-cyan-azure hover:text-blaze-orange transition-colors">Về Master Hoàng Mai Linh</Link></li>
              <li><Link href="/linh-hoa-tam" className="text-cyan-azure hover:text-blaze-orange transition-colors">Về Linh Hoa Tâm</Link></li>
              <li><Link href="/kien-thuc" className="text-cyan-azure hover:text-blaze-orange transition-colors">Kiến thức</Link></li>
              <li><Link href="/cong-dong" className="text-cyan-azure hover:text-blaze-orange transition-colors">Cộng đồng Lãnh đạo</Link></li>
              <li><Link href="#" className="text-cyan-azure hover:text-blaze-orange transition-colors">Đối tác</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-ice-white">Giải pháp &amp; Dịch vụ</h4>
            <ul className="space-y-4">
              <li><Link href="/giai-phap-lanh-dao" className="text-cyan-azure hover:text-blaze-orange transition-colors">Giải pháp Lãnh đạo</Link></li>
              <li><Link href="/phat-trien-ban-than" className="text-cyan-azure hover:text-blaze-orange transition-colors">Giải pháp Cá nhân</Link></li>
              <li><Link href="/workshop-chien-luoc" className="text-cyan-azure hover:text-blaze-orange transition-colors">Workshop Chiến lược</Link></li>
              <li><Link href="/workshop-ca-nhan" className="text-cyan-azure hover:text-blaze-orange transition-colors">Workshop Cá nhân</Link></li>
              <li><Link href="/speaker" className="text-cyan-azure hover:text-blaze-orange transition-colors">Mời Speaker</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-ice-white">Liên hệ</h4>
            <ul className="space-y-4 text-cyan-azure">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blaze-orange shrink-0 mt-0.5" />
                <span>78/1 Phan Đình Phùng, Phú Thọ Hòa, Tân Phú, TP.HCM</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blaze-orange shrink-0" />
                <span>0967 623 456 | 0918 683 139</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blaze-orange shrink-0" />
                <span>linhhoatam11@gmail.com</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-metallic-blue mt-12 pt-8 flex flex-col md:flex-row items-center justify-between text-cyan-azure text-sm">
          <p>&copy; {new Date().getFullYear()} Linh Hoa Tâm. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-4 mt-4 md:mt-0">
            <Link href="/lien-he" className="hover:text-blaze-orange transition-colors">Liên hệ</Link>
            <span className="text-metallic-blue">|</span>
            <Link href="/chinh-sach-bao-mat" className="hover:text-blaze-orange transition-colors">Chính sách bảo mật</Link>
            <span className="text-metallic-blue">|</span>
            <Link href="/dieu-khoan-dich-vu" className="hover:text-blaze-orange transition-colors">Điều khoản dịch vụ</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
