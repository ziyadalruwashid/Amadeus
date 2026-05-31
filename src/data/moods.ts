/**
 * Kurisu's facial expressions. Ported from the original Android
 * `VoiceLine.Mood` class (legacy-android/.../VoiceLine.java).
 *
 * Each mood maps to a set of sprite frames. In the original app a mood was an
 * AnimationDrawable (frame 0 = mouth closed, frames 1-2 = mouth open) driven by
 * playback amplitude. In the RN rebuild a mood resolves to an array of image
 * sources in `assets/sprites/` and the lip-sync driver cycles the frames.
 *
 * Sprites are wired up in Phase 1 (asset port); this is the canonical list.
 */
export enum Mood {
  Happy = 'happy',
  Pissed = 'pissed',
  Annoyed = 'annoyed',
  Angry = 'angry',
  Blush = 'blush',
  Side = 'side',
  Sad = 'sad',
  Normal = 'normal',
  Sleepy = 'sleepy',
  Winking = 'winking',
  Disappointed = 'disappointed',
  Indifferent = 'indifferent',
  SidedPleasant = 'sided_pleasant',
  SidedWorried = 'sided_worried',
}

/**
 * Claude returns one of these mood tags with each conversational reply so we can
 * animate the matching expression. Keep this list in sync with {@link Mood}.
 */
export const MOOD_TAGS: readonly Mood[] = Object.values(Mood);
