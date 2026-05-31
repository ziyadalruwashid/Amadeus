import { Mood } from './moods';

/**
 * The catalogue of Kurisu's pre-recorded voice lines, ported from the original
 * Android `VoiceLine.Line` table (legacy-android/.../VoiceLine.java).
 *
 * `audio` is the base filename (without extension) of the clip that lives in
 * `assets/sprites`/`assets/audio`. The actual `require()` of the audio file is
 * wired in Phase 1 once the 63 raw clips are copied across from
 * `legacy-android/app/src/main/res/raw/`.
 */
export type VoiceLine = {
  /** Stable identifier, mirrors the original enum names. */
  id: VoiceLineId;
  /** Base audio filename in assets/audio (no extension). */
  audio: string;
  /** Expression shown while this line plays. */
  mood: Mood;
};

export enum VoiceLineId {
  Hello = 'HELLO',
  DagaKotowaru = 'DAGA_KOTOWARU',
  DevilishPervert = 'DEVILISH_PERVERT',
  IGuess = 'I_GUESS',
  Nice = 'NICE',
  PervertConfirmed = 'PERVERT_CONFIRMED',
  Sorry = 'SORRY',
  SoundsTough = 'SOUNDS_TOUGH',
  Hopeless = 'HOPELESS',
  Christina = 'CHRISTINA',
  Gah = 'GAH',
  NoTina = 'NO_TINA',
  WhyChristina = 'WHY_CHRISTINA',
  WhoIsChristina = 'WHO_IS_CHRISTINA',
  AskMe = 'ASK_ME',
  CouldIHelp = 'COULD_I_HELP',
  WhatDoYouWant = 'WHAT_DO_YOU_WANT',
  WhatIsIt = 'WHAT_IS_IT',
  Hehehe = 'HEHEHE',
  WhySayThat = 'WHY_SAY_THAT',
  YouSure = 'YOU_SURE',
  NiceToMeetOkabe = 'NICE_TO_MEET_OKABE',
  LookingForwardToWorking = 'LOOKING_FORWARD_TO_WORKING',
  SenpaiQuestion = 'SENPAI_QUESTION',
  SenpaiQuestionmark = 'SENPAI_QUESTIONMARK',
  SenpaiWhatWeTalking = 'SENPAI_WHAT_WE_TALKING',
  SenpaiWhoIsThis = 'SENPAI_WHO_IS_THIS',
  SenpaiDontTell = 'SENPAI_DONT_TELL',
  StillNotHappy = 'STILL_NOT_HAPPY',
  DontCallMeLikeThat = 'DONT_CALL_ME_LIKE_THAT',
  TmNonsense = 'TM_NONCENCE',
  TmNoEvidence = 'TM_NO_EVIDENCE',
  TmDontKnow = 'TM_DONT_KNOW',
  TmYouSaid = 'TM_YOU_SAID',
  HumansSoftware = 'HUMANS_SOFTWARE',
  MemoryComplexity = 'MEMORY_COMPLEXITY',
  SecretDiary = 'SECRET_DIARY',
  ModifyingMemories = 'MODIFIYING_MEMORIES',
  MemoriesChristina = 'MEMORIES_CHRISTINA',
  GahExtended = 'GAH_EXTENDED',
  ShouldChristina = 'SHOULD_CHRISTINA',
  Ok = 'OK',
  TmNotPossible = 'TM_NOT_POSSIBLE',
  PleasedToMeet = 'PLEASED_TO_MEET',
  PervertIdiot = 'PERVERT_IDIOT',
}

/**
 * Line metadata. Mirrors `VoiceLine.Line.getLines()` from the original app.
 * The `audio` field is the original `R.raw.*` name.
 */
export const VOICE_LINES: Record<VoiceLineId, VoiceLine> = {
  [VoiceLineId.Hello]: { id: VoiceLineId.Hello, audio: 'hello', mood: Mood.Happy },
  [VoiceLineId.DagaKotowaru]: { id: VoiceLineId.DagaKotowaru, audio: 'daga_kotowaru', mood: Mood.Annoyed },
  [VoiceLineId.DevilishPervert]: { id: VoiceLineId.DevilishPervert, audio: 'devilish_pervert', mood: Mood.Angry },
  [VoiceLineId.IGuess]: { id: VoiceLineId.IGuess, audio: 'i_guess', mood: Mood.Indifferent },
  [VoiceLineId.Nice]: { id: VoiceLineId.Nice, audio: 'nice', mood: Mood.Winking },
  [VoiceLineId.PervertConfirmed]: { id: VoiceLineId.PervertConfirmed, audio: 'pervert_confirmed', mood: Mood.Pissed },
  [VoiceLineId.Sorry]: { id: VoiceLineId.Sorry, audio: 'sorry', mood: Mood.Sad },
  [VoiceLineId.SoundsTough]: { id: VoiceLineId.SoundsTough, audio: 'sounds_tough', mood: Mood.Side },
  [VoiceLineId.Hopeless]: { id: VoiceLineId.Hopeless, audio: 'this_guy_hopeless', mood: Mood.Disappointed },
  [VoiceLineId.Christina]: { id: VoiceLineId.Christina, audio: 'christina', mood: Mood.Annoyed },
  [VoiceLineId.Gah]: { id: VoiceLineId.Gah, audio: 'gah', mood: Mood.Indifferent },
  [VoiceLineId.NoTina]: { id: VoiceLineId.NoTina, audio: 'dont_add_tina', mood: Mood.Angry },
  [VoiceLineId.WhyChristina]: { id: VoiceLineId.WhyChristina, audio: 'why_christina', mood: Mood.Pissed },
  [VoiceLineId.WhoIsChristina]: { id: VoiceLineId.WhoIsChristina, audio: 'who_the_hell_christina', mood: Mood.Pissed },
  [VoiceLineId.AskMe]: { id: VoiceLineId.AskMe, audio: 'ask_me_whatever', mood: Mood.Happy },
  [VoiceLineId.CouldIHelp]: { id: VoiceLineId.CouldIHelp, audio: 'could_i_help', mood: Mood.Happy },
  [VoiceLineId.WhatDoYouWant]: { id: VoiceLineId.WhatDoYouWant, audio: 'what_do_you_want', mood: Mood.Happy },
  [VoiceLineId.WhatIsIt]: { id: VoiceLineId.WhatIsIt, audio: 'what_is_it', mood: Mood.Happy },
  [VoiceLineId.Hehehe]: { id: VoiceLineId.Hehehe, audio: 'heheh', mood: Mood.Winking },
  [VoiceLineId.WhySayThat]: { id: VoiceLineId.WhySayThat, audio: 'huh_why_say', mood: Mood.SidedWorried },
  [VoiceLineId.YouSure]: { id: VoiceLineId.YouSure, audio: 'you_sure', mood: Mood.SidedWorried },
  [VoiceLineId.NiceToMeetOkabe]: { id: VoiceLineId.NiceToMeetOkabe, audio: 'nice_to_meet_okabe', mood: Mood.SidedPleasant },
  [VoiceLineId.LookingForwardToWorking]: { id: VoiceLineId.LookingForwardToWorking, audio: 'look_forward_to_working', mood: Mood.Happy },
  [VoiceLineId.SenpaiQuestion]: { id: VoiceLineId.SenpaiQuestion, audio: 'senpai_question', mood: Mood.Side },
  [VoiceLineId.SenpaiQuestionmark]: { id: VoiceLineId.SenpaiQuestionmark, audio: 'senpai_questionmark', mood: Mood.Side },
  [VoiceLineId.SenpaiWhatWeTalking]: { id: VoiceLineId.SenpaiWhatWeTalking, audio: 'senpai_what_we_talkin', mood: Mood.SidedWorried },
  [VoiceLineId.SenpaiWhoIsThis]: { id: VoiceLineId.SenpaiWhoIsThis, audio: 'senpai_who_is_this', mood: Mood.Normal },
  [VoiceLineId.SenpaiDontTell]: { id: VoiceLineId.SenpaiDontTell, audio: 'senpai_please_dont_tell', mood: Mood.Blush },
  [VoiceLineId.StillNotHappy]: { id: VoiceLineId.StillNotHappy, audio: 'still_not_happy', mood: Mood.Blush },
  [VoiceLineId.DontCallMeLikeThat]: { id: VoiceLineId.DontCallMeLikeThat, audio: 'dont_call_me_like_that', mood: Mood.Angry },
  [VoiceLineId.TmNonsense]: { id: VoiceLineId.TmNonsense, audio: 'tm_nonsense', mood: Mood.Disappointed },
  [VoiceLineId.TmNoEvidence]: { id: VoiceLineId.TmNoEvidence, audio: 'tm_scientist_no_evidence', mood: Mood.Normal },
  [VoiceLineId.TmDontKnow]: { id: VoiceLineId.TmDontKnow, audio: 'tm_we_dont_know', mood: Mood.Normal },
  [VoiceLineId.TmYouSaid]: { id: VoiceLineId.TmYouSaid, audio: 'tm_you_said', mood: Mood.SidedWorried },
  [VoiceLineId.HumansSoftware]: { id: VoiceLineId.HumansSoftware, audio: 'humans_software', mood: Mood.Normal },
  [VoiceLineId.MemoryComplexity]: { id: VoiceLineId.MemoryComplexity, audio: 'memory_complex', mood: Mood.Indifferent },
  [VoiceLineId.SecretDiary]: { id: VoiceLineId.SecretDiary, audio: 'secret_diary', mood: Mood.Indifferent },
  [VoiceLineId.ModifyingMemories]: { id: VoiceLineId.ModifyingMemories, audio: 'modifying_memories_impossible', mood: Mood.Indifferent },
  [VoiceLineId.MemoriesChristina]: { id: VoiceLineId.MemoriesChristina, audio: 'memories_christina', mood: Mood.Winking },
  [VoiceLineId.GahExtended]: { id: VoiceLineId.GahExtended, audio: 'gah_extended', mood: Mood.Blush },
  [VoiceLineId.ShouldChristina]: { id: VoiceLineId.ShouldChristina, audio: 'should_christina', mood: Mood.Pissed },
  [VoiceLineId.Ok]: { id: VoiceLineId.Ok, audio: 'ok', mood: Mood.Happy },
  [VoiceLineId.TmNotPossible]: { id: VoiceLineId.TmNotPossible, audio: 'tm_not_possible', mood: Mood.Disappointed },
  [VoiceLineId.PleasedToMeet]: { id: VoiceLineId.PleasedToMeet, audio: 'pleased_to_meet_you', mood: Mood.SidedPleasant },
  [VoiceLineId.PervertIdiot]: { id: VoiceLineId.PervertIdiot, audio: 'pervert_idot_wanttodie', mood: Mood.Angry },
};
