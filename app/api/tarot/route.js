import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET() {
  try {
    const res = await fetch('https://tarotapi.dev/api/v1/cards/random?n=1', {
      cache: 'no-store',
    });
    const data = await res.json();
    const card = data.cards[0];

    const name = card.name;
    const arcana = card.type?.toUpperCase() || '';
    const meaning = card.meaning_up?.split('.')[0]?.trim() || '';

    return new ImageResponse(
      <div
        style={{
          width: '1179px',
          height: '2556px',
          backgroundColor: '#080808',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '120px 100px',
        }}
      >
        {/* Top accent */}
        <div
          style={{
            width: '40px',
            height: '2px',
            backgroundColor: '#4a3f35',
            marginBottom: '48px',
            display: 'flex',
          }}
        />

        {/* Arcana label */}
        <div
          style={{
            color: '#4a3f35',
            fontSize: '24px',
            letterSpacing: '8px',
            textTransform: 'uppercase',
            fontFamily: 'serif',
            marginBottom: '32px',
            display: 'flex',
          }}
        >
          {arcana}
        </div>

        {/* Card name */}
        <div
          style={{
            color: '#e8dcc8',
            fontSize: '88px',
            fontWeight: '700',
            textAlign: 'center',
            fontFamily: 'serif',
            lineHeight: '1.1',
            marginBottom: '56px',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {name}
        </div>

        {/* Divider */}
        <div
          style={{
            width: '40px',
            height: '1px',
            backgroundColor: '#2a2a2a',
            marginBottom: '48px',
            display: 'flex',
          }}
        />

        {/* Meaning */}
        <div
          style={{
            color: '#4a4a4a',
            fontSize: '30px',
            textAlign: 'center',
            fontFamily: 'serif',
            lineHeight: '1.6',
            fontStyle: 'italic',
            maxWidth: '820px',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {meaning}
        </div>
      </div>,
      {
        width: 1179,
        height: 2556,
      }
    );
  } catch (e) {
    return new Response('Failed to generate wallpaper', { status: 500 });
  }
}
