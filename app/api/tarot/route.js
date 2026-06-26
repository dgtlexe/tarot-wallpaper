import { ImageResponse } from '@vercel/og';

export const runtime = 'edge';

const BASE = 'https://raw.githubusercontent.com/dgtlexe/tarot-wallpaper/main/Cards-jpg/';

const DECK = [
  // ── MAJOR ARCANA ──────────────────────────────────────────────────────────
  { name:'The Fool',             num:'0',     arcana:'Major Arcana',             img:`${BASE}00-TheFool.jpg`,           up:'new beginnings, innocence, spontaneity, free spirit',            rev:'holding back, recklessness, risk without reward' },
  { name:'The Magician',         num:'I',     arcana:'Major Arcana',             img:`${BASE}01-TheMagician.jpg`,       up:'manifestation, resourcefulness, power, inspired action',          rev:'manipulation, poor planning, untapped talents' },
  { name:'The High Priestess',   num:'II',    arcana:'Major Arcana',             img:`${BASE}02-TheHighPriestess.jpg`,  up:'intuition, sacred knowledge, divine feminine, the subconscious',  rev:'secrets, disconnected from intuition, withdrawal' },
  { name:'The Empress',          num:'III',   arcana:'Major Arcana',             img:`${BASE}03-TheEmpress.jpg`,        up:'femininity, beauty, nature, nurturing, abundance',                rev:'creative block, dependence, smothering' },
  { name:'The Emperor',          num:'IV',    arcana:'Major Arcana',             img:`${BASE}04-TheEmperor.jpg`,        up:'authority, establishment, structure, a father figure',            rev:'domination, excessive control, rigidity' },
  { name:'The Hierophant',       num:'V',     arcana:'Major Arcana',             img:`${BASE}05-TheHierophant.jpg`,     up:'spiritual wisdom, tradition, conformity, institution',            rev:'personal beliefs, freedom, challenging convention' },
  { name:'The Lovers',           num:'VI',    arcana:'Major Arcana',             img:`${BASE}06-TheLovers.jpg`,         up:'love, harmony, relationships, values alignment, choices',         rev:'self-love, disharmony, imbalance, misaligned values' },
  { name:'The Chariot',          num:'VII',   arcana:'Major Arcana',             img:`${BASE}07-TheChariot.jpg`,        up:'control, willpower, success, determination, direction',           rev:'self-discipline lost, opposition, lack of direction' },
  { name:'Strength',             num:'VIII',  arcana:'Major Arcana',             img:`${BASE}08-Strength.jpg`,          up:'strength, courage, patience, control, compassion',               rev:'self-doubt, weakness, insecurity, raw emotion' },
  { name:'The Hermit',           num:'IX',    arcana:'Major Arcana',             img:`${BASE}09-TheHermit.jpg`,         up:'soul-searching, introspection, solitude, inner guidance',        rev:'isolation, loneliness, withdrawal, lost your way' },
  { name:'Wheel of Fortune',     num:'X',     arcana:'Major Arcana',             img:`${BASE}10-WheelOfFortune.jpg`,    up:'good luck, karma, life cycles, destiny, a turning point',        rev:'bad luck, resistance to change, breaking cycles' },
  { name:'Justice',              num:'XI',    arcana:'Major Arcana',             img:`${BASE}11-Justice.jpg`,           up:'justice, fairness, truth, cause and effect, law',                rev:'unfairness, lack of accountability, dishonesty' },
  { name:'The Hanged Man',       num:'XII',   arcana:'Major Arcana',             img:`${BASE}12-TheHangedMan.jpg`,      up:'suspension, restriction, letting go, sacrifice, new perspective', rev:'martyrdom, indecision, delay, resistance to surrender' },
  { name:'Death',                num:'XIII',  arcana:'Major Arcana',             img:`${BASE}13-Death.jpg`,             up:'endings, change, transformation, transition, letting go',        rev:'resistance to change, inability to move on, stagnation' },
  { name:'Temperance',           num:'XIV',   arcana:'Major Arcana',             img:`${BASE}14-Temperance.jpg`,        up:'balance, moderation, patience, purpose, meaning',               rev:'imbalance, excess, self-healing needed, realignment' },
  { name:'The Devil',            num:'XV',    arcana:'Major Arcana',             img:`${BASE}15-TheDevil.jpg`,          up:'shadow self, attachment, addiction, restriction, materialism',   rev:'releasing limiting beliefs, detachment, reclaiming power' },
  { name:'The Tower',            num:'XVI',   arcana:'Major Arcana',             img:`${BASE}16-TheTower.jpg`,          up:'sudden change, upheaval, chaos, revelation, awakening',          rev:'personal transformation, fear of change, averting disaster' },
  { name:'The Star',             num:'XVII',  arcana:'Major Arcana',             img:`${BASE}17-TheStar.jpg`,           up:'hope, faith, purpose, renewal, spirituality, calm',              rev:'faithlessness, discouragement, insecurity, disconnection' },
  { name:'The Moon',             num:'XVIII', arcana:'Major Arcana',             img:`${BASE}18-TheMoon.jpg`,           up:'illusion, fear, the unconscious, confusion, complexity',         rev:'release of fear, repressed emotion, inner confusion lifting' },
  { name:'The Sun',              num:'XIX',   arcana:'Major Arcana',             img:`${BASE}19-TheSun.jpg`,            up:'positivity, fun, warmth, success, vitality, clarity',            rev:'inner child blocked, feeling down, overly optimistic' },
  { name:'Judgement',            num:'XX',    arcana:'Major Arcana',             img:`${BASE}20-Judgement.jpg`,         up:'judgement, rebirth, inner calling, absolution, reflection',      rev:'self-doubt, failure to learn, refusal of self-examination' },
  { name:'The World',            num:'XXI',   arcana:'Major Arcana',             img:`${BASE}21-TheWorld.jpg`,          up:'completion, integration, accomplishment, wholeness, travel',     rev:'incompletion, no closure, stagnation, shortcuts' },

  // ── CUPS ──────────────────────────────────────────────────────────────────
  { name:'Ace of Cups',          arcana:'Minor Arcana · Cups',      img:`${BASE}Cups01.jpg`,      up:'new feelings, intuition, creativity, love beginning, overflow',   rev:'emotional loss, blocked creativity, emptiness' },
  { name:'Two of Cups',          arcana:'Minor Arcana · Cups',      img:`${BASE}Cups02.jpg`,      up:'unified love, partnership, mutual attraction, connection',        rev:'self-love needed, break-up, disharmony, distrust' },
  { name:'Three of Cups',        arcana:'Minor Arcana · Cups',      img:`${BASE}Cups03.jpg`,      up:'celebration, friendship, creativity, community, reunion',         rev:'independence, alone time, overindulgence, gossip' },
  { name:'Four of Cups',         arcana:'Minor Arcana · Cups',      img:`${BASE}Cups04.jpg`,      up:'meditation, contemplation, apathy, reevaluation, boredom',        rev:'retreat, withdrawal, missed opportunity, checking in' },
  { name:'Five of Cups',         arcana:'Minor Arcana · Cups',      img:`${BASE}Cups05.jpg`,      up:'regret, failure, disappointment, pessimism, grief',               rev:'personal setbacks, self-forgiveness, moving on, hope' },
  { name:'Six of Cups',          arcana:'Minor Arcana · Cups',      img:`${BASE}Cups06.jpg`,      up:'revisiting the past, nostalgia, childhood, innocence, joy',       rev:'leaving home, independence, living in the past' },
  { name:'Seven of Cups',        arcana:'Minor Arcana · Cups',      img:`${BASE}Cups07.jpg`,      up:'opportunities, choices, wishful thinking, illusion, fantasy',     rev:'alignment, personal values, clarity, sobriety' },
  { name:'Eight of Cups',        arcana:'Minor Arcana · Cups',      img:`${BASE}Cups08.jpg`,      up:'escape, disillusionment, abandonment, withdrawal, seeking more',  rev:'trying one more time, indecision, aimless drifting' },
  { name:'Nine of Cups',         arcana:'Minor Arcana · Cups',      img:`${BASE}Cups09.jpg`,      up:'contentment, satisfaction, gratitude, wish fulfilled, comfort',   rev:'inner happiness sought, materialism, dissatisfaction' },
  { name:'Ten of Cups',          arcana:'Minor Arcana · Cups',      img:`${BASE}Cups10.jpg`,      up:'harmony, marriage, happiness, alignment, emotional fulfilment',    rev:'misaligned values, broken home, domestic disharmony' },
  { name:'Page of Cups',         arcana:'Minor Arcana · Cups',      img:`${BASE}Cups11.jpg`,      up:'creative opportunities, curiosity, romantic messages, intuition', rev:'emotional immaturity, insecurity, creative block' },
  { name:'Knight of Cups',       arcana:'Minor Arcana · Cups',      img:`${BASE}Cups12.jpg`,      up:'creativity, romance, charm, imagination, following the heart',    rev:'overactive imagination, jealousy, moodiness, unrealistic' },
  { name:'Queen of Cups',        arcana:'Minor Arcana · Cups',      img:`${BASE}Cups13.jpg`,      up:'compassion, calm, comfort, emotional security, intuition',        rev:'martyrdom, insecurity, dependence, emotional manipulation' },
  { name:'King of Cups',         arcana:'Minor Arcana · Cups',      img:`${BASE}Cups14.jpg`,      up:'emotionally balanced, compassionate, diplomatic, wise',           rev:'self-compassion needed, inner feelings suppressed, moodiness' },

  // ── WANDS ─────────────────────────────────────────────────────────────────
  { name:'Ace of Wands',         arcana:'Minor Arcana · Wands',     img:`${BASE}Wands01.jpg`,     up:'inspiration, new opportunities, growth, potential, spark',        rev:'an emerging idea, lack of direction, delays, hesitation' },
  { name:'Two of Wands',         arcana:'Minor Arcana · Wands',     img:`${BASE}Wands02.jpg`,     up:'future planning, progress, decisions, discovery, bold vision',    rev:'fear of unknown, lack of planning, playing it safe' },
  { name:'Three of Wands',       arcana:'Minor Arcana · Wands',     img:`${BASE}Wands03.jpg`,     up:'progress, expansion, foresight, overseas opportunity, growth',    rev:'obstacles, delays, frustration with plans, returning home' },
  { name:'Four of Wands',        arcana:'Minor Arcana · Wands',     img:`${BASE}Wands04.jpg`,     up:'celebration, joy, harmony, relaxation, homecoming, milestone',    rev:'personal celebration, lack of support, transition conflict' },
  { name:'Five of Wands',        arcana:'Minor Arcana · Wands',     img:`${BASE}Wands05.jpg`,     up:'conflict, competition, tension, diversity, disagreement',          rev:'avoiding conflict, respecting differences, tension release' },
  { name:'Six of Wands',         arcana:'Minor Arcana · Wands',     img:`${BASE}Wands06.jpg`,     up:'success, public recognition, progress, self-confidence, victory', rev:'private achievement, self-doubt, fall from grace, ego' },
  { name:'Seven of Wands',       arcana:'Minor Arcana · Wands',     img:`${BASE}Wands07.jpg`,     up:'challenge, competition, protection, perseverance, standing firm', rev:'giving up, overwhelmed, yielding, exhausted from defending' },
  { name:'Eight of Wands',       arcana:'Minor Arcana · Wands',     img:`${BASE}Wands08.jpg`,     up:'movement, fast-paced change, action, alignment, swiftness',       rev:'delays, frustration, resisting change, internal resistance' },
  { name:'Nine of Wands',        arcana:'Minor Arcana · Wands',     img:`${BASE}Wands09.jpg`,     up:'resilience, courage, persistence, test of faith, boundaries',     rev:'inner resources depleted, struggle, overwhelm, paranoia' },
  { name:'Ten of Wands',         arcana:'Minor Arcana · Wands',     img:`${BASE}Wands10.jpg`,     up:'burden, extra responsibility, hard work, completion, endurance',  rev:'doing it all alone, carrying too much, delegate, burnout' },
  { name:'Page of Wands',        arcana:'Minor Arcana · Wands',     img:`${BASE}Wands11.jpg`,     up:'inspiration, ideas, discovery, free spirit, enthusiasm',          rev:'newly formed ideas, redirecting energy, self-limitation' },
  { name:'Knight of Wands',      arcana:'Minor Arcana · Wands',     img:`${BASE}Wands12.jpg`,     up:'energy, passion, inspired action, adventure, fearlessness',       rev:'anger, impulsiveness, recklessness, scattered energy' },
  { name:'Queen of Wands',       arcana:'Minor Arcana · Wands',     img:`${BASE}Wands13.jpg`,     up:'courage, confidence, independence, social butterfly, warmth',     rev:'self-respect, introverted, re-establishing sense of self' },
  { name:'King of Wands',        arcana:'Minor Arcana · Wands',     img:`${BASE}Wands14.jpg`,     up:'natural-born leader, vision, entrepreneur, honour, boldness',     rev:'impulsive, overbearing, unachievable expectations' },

  // ── SWORDS ────────────────────────────────────────────────────────────────
  { name:'Ace of Swords',        arcana:'Minor Arcana · Swords',    img:`${BASE}Swords01.jpg`,    up:'breakthrough, clarity, sharp mind, truth, new idea, justice',     rev:'confusion, brutality, chaos, clouded judgment' },
  { name:'Two of Swords',        arcana:'Minor Arcana · Swords',    img:`${BASE}Swords02.jpg`,    up:'difficult choices, indecision, stalemate, avoidance, truce',      rev:'indecision, confusion, information overload, no right answer' },
  { name:'Three of Swords',      arcana:'Minor Arcana · Swords',    img:`${BASE}Swords03.jpg`,    up:'heartbreak, grief, sorrow, rejection, separation, painful truth',  rev:'optimism, forgiveness, recovery, releasing pain' },
  { name:'Four of Swords',       arcana:'Minor Arcana · Swords',    img:`${BASE}Swords04.jpg`,    up:'rest, restoration, contemplation, passive, recuperation, retreat', rev:'exhaustion, burnout, stagnation, reluctant return' },
  { name:'Five of Swords',       arcana:'Minor Arcana · Swords',    img:`${BASE}Swords05.jpg`,    up:'conflict, tension, winning at all costs, betrayal, hollow victory', rev:'reconciliation, change of strategy, past resentment lingering' },
  { name:'Six of Swords',        arcana:'Minor Arcana · Swords',    img:`${BASE}Swords06.jpg`,    up:'transition, change, rite of passage, moving on, calmer waters',   rev:'emotional baggage, unresolved issues, resisting transition' },
  { name:'Seven of Swords',      arcana:'Minor Arcana · Swords',    img:`${BASE}Swords07.jpg`,    up:'betrayal, deception, getting away with something, stealth',       rev:'imposter syndrome, self-deceit, confessing, coming clean' },
  { name:'Eight of Swords',      arcana:'Minor Arcana · Swords',    img:`${BASE}Swords08.jpg`,    up:'trapped, confined, helpless, victim mentality, self-imposed',     rev:'self-limiting beliefs, inner critic, releasing negative thoughts' },
  { name:'Nine of Swords',       arcana:'Minor Arcana · Swords',    img:`${BASE}Swords09.jpg`,    up:'anxiety, worry, fear, depression, nightmares, self-cruelty',      rev:'inner turmoil, deep-seated fears, releasing worry, healing' },
  { name:'Ten of Swords',        arcana:'Minor Arcana · Swords',    img:`${BASE}Swords10.jpg`,    up:'painful endings, deep wounds, betrayal, crisis, rock bottom',     rev:'recovery, regeneration, resisting an inevitable end, rise' },
  { name:'Page of Swords',       arcana:'Minor Arcana · Swords',    img:`${BASE}Swords11.jpg`,    up:'new ideas, curiosity, thirst for knowledge, vigilance, wit',      rev:'all talk no action, haphazard energy, self-expression blocked' },
  { name:'Knight of Swords',     arcana:'Minor Arcana · Swords',    img:`${BASE}Swords12.jpg`,    up:'ambitious, action-oriented, driven, fast-thinking, direct',       rev:'restless, unfocused, impulsive, burn-out, sharp tongue' },
  { name:'Queen of Swords',      arcana:'Minor Arcana · Swords',    img:`${BASE}Swords13.jpg`,    up:'independent, unbiased judgment, clear boundaries, direct, sharp', rev:'overly emotional, cold, bitter, cruel, clouded perception' },
  { name:'King of Swords',       arcana:'Minor Arcana · Swords',    img:`${BASE}Swords14.jpg`,    up:'mental clarity, intellectual power, authority, truth, integrity', rev:'quiet power, misuse of power, manipulation, tyranny' },

  // ── PENTACLES ─────────────────────────────────────────────────────────────
  { name:'Ace of Pentacles',     arcana:'Minor Arcana · Pentacles', img:`${BASE}Pentacles01.jpg`, up:'new financial opportunity, manifestation, abundance, prosperity', rev:'lost opportunity, lack of planning, scarcity mindset' },
  { name:'Two of Pentacles',     arcana:'Minor Arcana · Pentacles', img:`${BASE}Pentacles02.jpg`, up:'multiple priorities, time management, adaptability, balance',    rev:'over-committed, disorganised, reprioritisation needed' },
  { name:'Three of Pentacles',   arcana:'Minor Arcana · Pentacles', img:`${BASE}Pentacles03.jpg`, up:'teamwork, collaboration, learning, implementation, mastery',     rev:'disharmony, misalignment, working alone, no teamwork' },
  { name:'Four of Pentacles',    arcana:'Minor Arcana · Pentacles', img:`${BASE}Pentacles04.jpg`, up:'saving money, security, conservatism, stability, control',       rev:'over-spending, greed, generosity blocked, self-protection' },
  { name:'Five of Pentacles',    arcana:'Minor Arcana · Pentacles', img:`${BASE}Pentacles05.jpg`, up:'financial loss, poverty, lack mindset, isolation, hardship',     rev:'recovery, charity, improving mindset, finding support' },
  { name:'Six of Pentacles',     arcana:'Minor Arcana · Pentacles', img:`${BASE}Pentacles06.jpg`, up:'giving, receiving, sharing wealth, generosity, charity',         rev:'self-care, unpaid debts, one-sided charity, strings attached' },
  { name:'Seven of Pentacles',   arcana:'Minor Arcana · Pentacles', img:`${BASE}Pentacles07.jpg`, up:'long-term view, sustainable results, perseverance, patience',    rev:'lack of vision, limited reward, impatience, poor returns' },
  { name:'Eight of Pentacles',   arcana:'Minor Arcana · Pentacles', img:`${BASE}Pentacles08.jpg`, up:'apprenticeship, repetition, mastery, skill, diligence',          rev:'self-development needed, perfectionism, misdirected effort' },
  { name:'Nine of Pentacles',    arcana:'Minor Arcana · Pentacles', img:`${BASE}Pentacles09.jpg`, up:'abundance, luxury, self-sufficiency, financial independence',     rev:'self-worth, over-investment in work, living beyond means' },
  { name:'Ten of Pentacles',     arcana:'Minor Arcana · Pentacles', img:`${BASE}Pentacles10.jpg`, up:'wealth, financial security, family, legacy, long-term success',  rev:'financial failure, loneliness, loss of stability, bad investment' },
  { name:'Page of Pentacles',    arcana:'Minor Arcana · Pentacles', img:`${BASE}Pentacles11.jpg`, up:'manifestation, financial opportunity, skill development, ambition', rev:'lack of progress, procrastination, learn from failure' },
  { name:'Knight of Pentacles',  arcana:'Minor Arcana · Pentacles', img:`${BASE}Pentacles12.jpg`, up:'hard work, productivity, routine, conservatism, reliability',    rev:'self-discipline needed, boredom, feeling stuck, perfectionism' },
  { name:'Queen of Pentacles',   arcana:'Minor Arcana · Pentacles', img:`${BASE}Pentacles13.jpg`, up:'nurturing, practical, providing financially, down-to-earth',     rev:'financial independence, self-care, work-home conflict' },
  { name:'King of Pentacles',    arcana:'Minor Arcana · Pentacles', img:`${BASE}Pentacles14.jpg`, up:'wealth, business, leadership, security, discipline, abundance',  rev:'financially inept, obsessed with wealth, stubborn, corruption' },
];

// Deterministic pseudo-random from a seed — ensures same ?t value
// always produces the same card and reversal in both wallpaper + share modes
function seededRandom(seed) {
  const x = Math.sin(seed + 1) * 10000;
  return x - Math.floor(x);
}

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const t = parseInt(searchParams.get('t') || '0');
  const isShare = searchParams.get('share') === 'true';

  // Use seeded random when ?t is present so wallpaper + share card always match
  const rand1 = t ? seededRandom(t) : Math.random();
  const rand2 = t ? seededRandom(t + 99999) : Math.random();

  const card = DECK[Math.floor(rand1 * DECK.length)];
  const reversed = rand2 < 0.5;
  const meaning = reversed ? card.rev : card.up;

  // ── SHARE IMAGE (Instagram Stories 1080×1920) ────────────────────────────
  if (isShare) {
    const W = 1080;
    const H = 1920;

    return new ImageResponse(
      (
        <div
          style={{
            width: W,
            height: H,
            background: '#080808',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontFamily: 'Georgia, "Times New Roman", serif',
            padding: '100px 80px 80px',
            boxSizing: 'border-box',
          }}
        >
          {/* Top: arcana label */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '12px',
            }}
          >
            <div
              style={{
                fontSize: '26px',
                letterSpacing: '0.3em',
                color: '#3a3a3a',
                textTransform: 'uppercase',
                display: 'flex',
              }}
            >
              {card.arcana}{card.num ? `  ·  ${card.num}` : ''}
            </div>
            {reversed && (
              <div
                style={{
                  fontSize: '18px',
                  letterSpacing: '0.4em',
                  color: '#4a3a30',
                  textTransform: 'uppercase',
                  display: 'flex',
                }}
              >
                reversed
              </div>
            )}
          </div>

          {/* Card image */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transform: reversed ? 'rotate(180deg)' : 'rotate(0deg)',
            }}
          >
            <img
              src={card.img}
              width={400}
              height={682}
              style={{
                filter: 'grayscale(100%) brightness(0.75) contrast(1.15)',
                borderRadius: '8px',
                opacity: 0.9,
              }}
            />
          </div>

          {/* Bottom: name + meaning + watermark */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '20px',
              maxWidth: '880px',
              textAlign: 'center',
            }}
          >
            <div
              style={{
                fontSize: '62px',
                color: '#ddd5c4',
                lineHeight: 1.1,
                fontWeight: 'normal',
                letterSpacing: '0.02em',
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
              }}
            >
              {card.name}
            </div>

            <div
              style={{
                width: '50px',
                height: '1px',
                background: '#2a2a2a',
                display: 'flex',
              }}
            />

            <div
              style={{
                fontSize: '26px',
                color: '#555',
                lineHeight: 1.65,
                fontStyle: 'italic',
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
              }}
            >
              {meaning}
            </div>

            {/* Watermark */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                marginTop: '10px',
                opacity: 0.2,
              }}
            >
              <span style={{ color: '#ddd5c4', fontSize: '28px', display: 'flex' }}>✦</span>
              <span style={{ color: '#ddd5c4', fontSize: '36px', display: 'flex' }}>☽</span>
              <span
                style={{
                  color: '#ddd5c4',
                  fontSize: '22px',
                  letterSpacing: '0.25em',
                  textTransform: 'uppercase',
                  display: 'flex',
                }}
              >
                the pull
              </span>
              <span style={{ color: '#ddd5c4', fontSize: '36px', display: 'flex' }}>☾</span>
              <span style={{ color: '#ddd5c4', fontSize: '28px', display: 'flex' }}>✦</span>
            </div>
          </div>
        </div>
      ),
      { width: W, height: H }
    );
  }

  // ── WALLPAPER (existing layout) ──────────────────────────────────────────
  const W = 1179;
  const H = 2556;

  return new ImageResponse(
    (
      <div
        style={{
          width: W,
          height: H,
          background: '#080808',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'Georgia, "Times New Roman", serif',
          padding: '100px 80px',
          boxSizing: 'border-box',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '56px',
            transform: reversed ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
        >
          <img
            src={card.img}
            width={420}
            height={716}
            style={{
              filter: 'grayscale(100%) brightness(0.75) contrast(1.15)',
              borderRadius: '6px',
              opacity: 0.9,
            }}
          />
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '20px',
            maxWidth: '900px',
            textAlign: 'center',
          }}
        >
          {reversed && (
            <div
              style={{
                fontSize: '20px',
                letterSpacing: '0.35em',
                color: '#4a4a4a',
                textTransform: 'uppercase',
                display: 'flex',
              }}
            >
              reversed
            </div>
          )}

          <div
            style={{
              fontSize: '54px',
              color: '#ddd5c4',
              lineHeight: 1.1,
              fontWeight: 'normal',
              letterSpacing: '0.02em',
              display: 'flex',
            }}
          >
            {card.name}
          </div>

          <div
            style={{
              fontSize: '20px',
              color: '#3a3a3a',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              display: 'flex',
            }}
          >
            {card.arcana}{card.num ? `  ·  ${card.num}` : ''}
          </div>

          <div
            style={{
              width: '60px',
              height: '1px',
              background: '#2a2a2a',
              margin: '4px 0',
              display: 'flex',
            }}
          />

          <div
            style={{
              fontSize: '26px',
              color: '#606060',
              lineHeight: 1.6,
              fontStyle: 'italic',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            {meaning}
          </div>
        </div>
      </div>
    ),
    { width: W, height: H }
  );
}
