import { VoiceLineId } from './voiceLines';

/**
 * Keyword → response mapping, ported from `Amadeus.responseInputMap`
 * (legacy-android/.../Amadeus.java). When recognized speech contains one of a
 * category's keywords, Kurisu replies with a random line from that category.
 *
 * Keywords below are the English set. Other recognition languages resolve their
 * keywords through the localization layer (Phase 1) — the original looked these
 * up via `R.string.*` per locale.
 */
export type ResponseCategory = {
  /** Lower-cased substrings to match against recognized input. */
  keywords: string[];
  /** Candidate replies; one is chosen at random. */
  responses: VoiceLineId[];
};

export const RESPONSE_CATEGORIES: ResponseCategory[] = [
  {
    keywords: ['christina'],
    responses: [
      VoiceLineId.Christina,
      VoiceLineId.WhyChristina,
      VoiceLineId.ShouldChristina,
      VoiceLineId.NoTina,
    ],
  },
  {
    keywords: ['the zombie', 'celeb'],
    responses: [VoiceLineId.DontCallMeLikeThat],
  },
  {
    keywords: ['@channel', 'kurigohan', 'kamehameha'],
    responses: [VoiceLineId.SenpaiDontTell, VoiceLineId.StillNotHappy],
  },
  {
    keywords: ['salieri', 'maho', 'hiyajo'],
    responses: [
      VoiceLineId.SenpaiQuestion,
      VoiceLineId.SenpaiWhatWeTalking,
      VoiceLineId.SenpaiQuestionmark,
      VoiceLineId.SenpaiWhoIsThis,
    ],
  },
  {
    keywords: ['time machine', 'time travel', 'sern', 'cern'],
    responses: [
      VoiceLineId.TmNonsense,
      VoiceLineId.TmYouSaid,
      VoiceLineId.TmNoEvidence,
      VoiceLineId.TmDontKnow,
      VoiceLineId.TmNotPossible,
    ],
  },
  {
    keywords: ['memory', 'amadeus', 'science'],
    responses: [
      VoiceLineId.HumansSoftware,
      VoiceLineId.MemoryComplexity,
      VoiceLineId.SecretDiary,
      VoiceLineId.ModifyingMemories,
      VoiceLineId.MemoriesChristina,
    ],
  },
  {
    keywords: ['hello', 'good morning', 'konnichiwa', 'good evening'],
    responses: [
      VoiceLineId.Hello,
      VoiceLineId.NiceToMeetOkabe,
      VoiceLineId.PleasedToMeet,
      VoiceLineId.LookingForwardToWorking,
    ],
  },
  {
    keywords: ['nice body', 'hot', 'sexy', 'boobies', 'oppai'],
    responses: [
      VoiceLineId.DevilishPervert,
      VoiceLineId.PervertConfirmed,
      VoiceLineId.PervertIdiot,
    ],
  },
  {
    keywords: ['robotics', 'antimatter'],
    responses: [VoiceLineId.Hehehe],
  },
];

/** Said when nothing matches — ported from the original fallback bundle. */
export const FALLBACK_RESPONSES: VoiceLineId[] = [
  VoiceLineId.AskMe,
  VoiceLineId.WhatDoYouWant,
  VoiceLineId.WhatIsIt,
  VoiceLineId.Hehehe,
  VoiceLineId.WhySayThat,
  VoiceLineId.YouSure,
];

/** Spoken on app open. */
export const GREETING = VoiceLineId.Hello;

/** Spoken when speech recognition errors out. */
export const RECOGNITION_ERROR_RESPONSE = VoiceLineId.Sorry;

/** Keyword that drives the "Nullpo / GAH" running easter egg. */
export const NULLPO_KEYWORD = 'nullpo';
