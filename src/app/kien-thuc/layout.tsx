import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tin tức & Góc chia sẻ | Linh Hoa Tâm',
  description: 'Cập nhật những bài viết mới nhất, kiến thức chuyên sâu và các chia sẻ giá trị về phát triển bản thân từ Linh Hoa Tâm.',
  openGraph: {
    title: 'Tin tức & Góc chia sẻ | Linh Hoa Tâm',
    description: 'Cập nhật những bài viết mới nhất, kiến thức chuyên sâu và các chia sẻ giá trị về phát triển bản thân từ Linh Hoa Tâm.',
    type: 'website',
  }
};

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>;
}
