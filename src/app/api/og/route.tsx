import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get('title') ?? 'Linh Hoa Tâm — Thuật Số Học';
  const tag   = searchParams.get('tag')   ?? 'Kiến thức';
  const displayTitle = title.length > 72 ? title.slice(0, 72) + '…' : title;

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          width: '1200px',
          height: '630px',
          backgroundColor: '#002B57',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Subtle right side accent panel */}
        <div style={{
          position: 'absolute',
          top: 0, right: 0,
          width: '380px', height: '630px',
          backgroundColor: '#003570',
          display: 'flex',
        }} />

        {/* Orange vertical stripe */}
        <div style={{
          position: 'absolute',
          top: 0, right: '380px',
          width: '6px', height: '630px',
          backgroundColor: '#FF6801',
          display: 'flex',
        }} />

        {/* Top horizontal bar */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0,
          height: '5px',
          backgroundColor: '#00AEEF',
          display: 'flex',
        }} />

        {/* Watermark circle bottom-left */}
        <div style={{
          position: 'absolute',
          bottom: '-120px', left: '-120px',
          width: '400px', height: '400px',
          borderRadius: '50%',
          border: '2px solid #FF6801',
          opacity: 0.1,
          display: 'flex',
        }} />
        <div style={{
          position: 'absolute',
          bottom: '-60px', left: '-60px',
          width: '280px', height: '280px',
          borderRadius: '50%',
          border: '2px solid #FF6801',
          opacity: 0.08,
          display: 'flex',
        }} />

        {/* ── Left content ──────────────────────── */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '56px 72px',
          width: '814px',
          position: 'relative',
          zIndex: 10 as number,
        }}>

          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{
              width: '42px', height: '42px',
              borderRadius: '10px',
              backgroundColor: '#FF6801',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '22px',
              fontWeight: 900,
              color: '#fff',
            }}>L</div>
            <div style={{
              color: '#EBEBF1',
              fontSize: '18px',
              fontWeight: 700,
              letterSpacing: '1px',
            }}>LINH HOA TÂM</div>
          </div>

          {/* Title + Tag */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* Tag badge */}
            <div style={{
              display: 'flex',
              alignSelf: 'flex-start',
              backgroundColor: '#1a4a7a',
              border: '1px solid #FF6801',
              borderRadius: '100px',
              padding: '5px 18px',
              fontSize: '12px',
              fontWeight: 700,
              color: '#FF6801',
              letterSpacing: '2px',
            }}>
              {tag.toUpperCase()}
            </div>

            {/* Title */}
            <div style={{
              fontSize: '46px',
              fontWeight: 900,
              color: '#EBEBF1',
              lineHeight: 1.25,
              letterSpacing: '-0.5px',
            }}>
              {displayTitle}
            </div>
          </div>

          {/* Footer */}
          <div style={{
            color: '#4d7aab',
            fontSize: '14px',
            fontWeight: 500,
          }}>
            linhhoatam.com · Thuật Số Học Ứng Dụng Cho Người Lãnh Đạo
          </div>
        </div>

        {/* ── Right panel content ───────────────── */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '380px',
          gap: '16px',
          position: 'relative',
          zIndex: 10 as number,
        }}>
          <div style={{
            fontSize: '72px',
            fontWeight: 900,
            color: '#FF6801',
          }}>数</div>
          <div style={{
            fontSize: '13px',
            color: '#4d7aab',
            letterSpacing: '3px',
            fontWeight: 600,
          }}>THUẬT SỐ HỌC</div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
