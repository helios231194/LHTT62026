import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hồ Sơ Vận Mệnh | Linh Hoa Tâm – Tài liệu Phân tích Cá nhân hóa',
  description: 'Hồ Sơ Vận Mệnh là tài liệu phân tích cá nhân hóa gần 100 trang theo tên và ngày sinh. Phân tích 7 chỉ số cốt lõi, chu kỳ cuộc đời và năm cá nhân. Bước đầu tiên để hiểu mình trước khi ra quyết định chiến lược.',
  openGraph: {
    title: 'Hồ Sơ Vận Mệnh – Tài liệu Phân tích Cá nhân hóa | Linh Hoa Tâm',
    description: 'Tài liệu phân tích cá nhân hóa gần 100 trang: 7 chỉ số cốt lõi, chu kỳ cuộc đời, điểm mạnh & điểm mù. Bước đầu để ra quyết định đúng.',
    type: 'website',
    locale: 'vi_VN',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Hồ Sơ Vận Mệnh – Linh Hoa Tâm',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hồ Sơ Vận Mệnh – Tài liệu Cá nhân hóa | Linh Hoa Tâm',
    description: 'Phân tích 7 chỉ số cốt lõi, chu kỳ cuộc đời, điểm mạnh & điểm mù theo ngày sinh của bạn.',
    images: ['/og-image.png'],
  },
};

export default function HoSoVanMenhLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
