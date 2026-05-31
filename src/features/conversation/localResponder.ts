import {
  FALLBACK_RESPONSES,
  NULLPO_KEYWORD,
  RESPONSE_CATEGORIES,
} from '@/data/keywordMap';
import { VoiceLineId } from '@/data/voiceLines';

/**
 * The original keyword-matching brain, ported from `Amadeus.responseToInput`
 * (legacy-android/.../Amadeus.java).
 *
 * Given recognized text, returns the pre-recorded voice line Kurisu should play,
 * or `null` if nothing matched — the caller then decides whether to fall through
 * to Claude (Phase 2) or to a random fallback line.
 *
 * The "Nullpo" easter egg keeps a running counter: the first few hits get a
 * flustered "GAH", after five it unlocks the special "Leskinen" lines and then
 * loops. Those Leskinen clips are wired when the raw audio is ported (Phase 1),
 * so for now the counter is tracked and surfaced via {@link nullpoCount}.
 */

let nullpoCounter = -1;

export type ResponderResult =
  | { kind: 'line'; line: VoiceLineId }
  | { kind: 'nullpo'; count: number }
  | { kind: 'nomatch' };

function pick<T>(items: T[]): T {
  return items[Math.floor(Math.random() * items.length)];
}

export function respondToInput(rawInput: string): ResponderResult {
  const input = rawInput.toLowerCase();

  if (input.includes(NULLPO_KEYWORD)) {
    nullpoCounter += 1;
    return { kind: 'nullpo', count: nullpoCounter };
  }

  for (const category of RESPONSE_CATEGORIES) {
    if (category.keywords.some((k) => input.includes(k))) {
      return { kind: 'line', line: pick(category.responses) };
    }
  }

  return { kind: 'nomatch' };
}

/** A random "I didn't catch that" style reply. */
export function fallbackLine(): VoiceLineId {
  return pick(FALLBACK_RESPONSES);
}

/** Current Nullpo streak (exposed mainly for tests). */
export function nullpoCount(): number {
  return nullpoCounter;
}

/** Reset the easter-egg counter (used between sessions / in tests). */
export function resetNullpo(): void {
  nullpoCounter = -1;
}
