/**
 * Voice-line playback + lip-sync driver (Phase 1).
 *
 * Replaces the original Android `Amadeus.speak()` which used MediaPlayer plus the
 * `Visualizer` API to swap sprite frames by amplitude. RN has no clean
 * cross-platform playback-amplitude API, so the planned approach is timed sprite
 * cycling: play the clip via `expo-audio` and cycle the mood's frames on an
 * interval while `isPlaying`, settling on the closed-mouth frame on completion.
 */
import type { Mood } from '@/data/moods';

export type SpeakHandle = {
  stop: () => void;
};

export type LipSyncFrameCb = (frameIndex: number) => void;

// TODO(Phase 1): implement playVoiceLine(audio, mood, onFrame) with expo-audio.
export type PlayVoiceLine = (
  audio: string,
  mood: Mood,
  onFrame: LipSyncFrameCb,
) => Promise<SpeakHandle>;
