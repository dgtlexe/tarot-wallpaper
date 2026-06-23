import { ImageResponse } from 'next/og';

export const runtime = 'edge';

function getLabyrinthosSlug(cardName, cardType) {
  let slug = cardName.toLowerCase().replace(/\s+/g, '-');
  // Minor arcana names like "Two of Cups" need "the-" prefix
  // Major arcana already have "The" in name, or are just e.g. "Justice"
  if (cardType && cardType.includes('minor') && !slug.startsWith('the-')) {
    slug = 'the-' + slug;
  }
  return slug + '-tarot-card-meaning-luminous-spirit-tarot-deck';
}

async function getCardImageUrl(slug) {
  try {
    const url = `https://labyrinthos.co/blogs/learn-tarot-with-labyrinthos-academy/${slug}`;
    const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
    if (!res.ok) return null;
    const html = await res.text();
    // Extract og:image URL
    const match = html.match(/https:\/\/labyrinthos\.co\/cdn\/shop\/articles\/[^"'\s]+\.jpg[^"'\s]*/);
    return match ? match[0].replace(/&amp;/g, '&') : null;
  } catch {
    return null;
  }
}

async function fetchImageAsBase64(url) {
  try {
    const res = await fetch(url);
    if (!res.ok) return null;
    const buffer = await res.arrayBuffer();
    const bytes = new Uint8Array(buffer);
    let binary = '';
    const chunkSize = 8192;
    for (let i = 0; i < bytes.length; i += chunkSize) {
      binary += String.fromCharCode(...bytes.subarray(i, i + chunkSize));
    }
    return 'data:image/jpeg;base64,' + btoa(binary);
  } catch {
    return null;
  }
}

export async function GET() {
  try {
    // 1. Fetch random card
    const cardRes = await fetch('https://tarotapi.dev/api/v1/cards/random?n=1', {
      cache: 'no-store',
    });
    const cardData = await cardRes.json();
    const card = cardData.cards[0];

    const name = card.name;
    const arcana = card.type?.toUpperCase() || '';
    const reversed = Math.random() < 0.5;
    const meaning = reversed
      ? (card.meaning_rev?.split('.')[0]?.trim() || card.meaning_up?.split('.')[0]?.trim() || '')
      : (card.meaning_up?.split('.')[0]?.trim() || '');

    // 2. Fetch card image from Labyrinthos
    const slug = getLabyrinthosSlug(name, card.type);
    const imageUrl = await getCardImageUrl(slug);
    const cardImage = imageUrl ? await fetchImageAsBase64(imageUrl) : null;

    // 3. Render wallpaper
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
          padding: '80px 80px',
          gap: '0',
        }}
      >
        {/* Card image */}
        {cardImage ? (
          <div
            style={{
              display: 'flex',
              marginBottom: '56px',
              transform: reversed ? 'rotate(180deg)' : 'none',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 0 80px rgba(255,255,255,0.04)',
            }}
          >
            <img
              src={cardImage}
              style={{
                width: '460px',
                height: '460px',
                objectFit: 'contain',
                display: 'flex',
                backgroundColor: '#ffffff',
              }}
            />
          </div>
        ) : (
          // Fallback top accent
          <div
            style={{
              width: '40px',
              height: '2px',
              backgroundColor: '#4a3f35',
              marginBottom: '48px',
              display: 'flex',
            }}
          />
        )}

        {/* Reversed label */}
        {reversed && (
          <div
            style={{
              color: '#6b5c50',
              fontSize: '20px',
              letterSpacing: '6px',
              fontFamily: 'serif',
              marginBottom: '20px',
              display: 'flex',
            }}
          >
            REVERSED
          </div>
        )}

        {/* Arcana type */}
        <div
          style={{
            color: '#4a3f35',
            fontSize: '22px',
            letterSpacing: '7px',
            textTransform: 'uppercase',
            fontFamily: 'serif',
            marginBottom: '24px',
            display: 'flex',
          }}
        >
          {arcana}
        </div>

        {/* Card name */}
        <div
          style={{
            color: '#e8dcc8',
            fontSize: '80px',
            fontWeight: '700',
            textAlign: 'center',
            fontFamily: 'serif',
            lineHeight: '1.1',
            marginBottom: '48px',
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
            marginBottom: '40px',
            display: 'flex',
          }}
        />

        {/* Meaning */}
        <div
          style={{
            color: '#4a4a4a',
            fontSize: '28px',
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
