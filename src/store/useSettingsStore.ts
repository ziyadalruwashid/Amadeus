import { create } from 'zustand';

/**
 * App-wide user preferences. Mirrors the original `SharedPreferences` keys from
 * the Android app (show_subtitles, recognition_lang, lang, vibrate, …) plus the
 * new RN-only settings for the Claude and Notion integrations.
 *
 * Persistence (AsyncStorage for prefs, expo-secure-store for secrets) is wired
 * in a later phase via `hydrateSettings()`; for now this is the in-memory shape.
 */
export type RecognitionLang = 'ja-JP' | 'en-US' | 'ru-RU' | 'de-DE' | 'fr-FR';

export type SettingsState = {
  showSubtitles: boolean;
  vibrate: boolean;
  /** Language the speech recognizer listens for. */
  recognitionLang: RecognitionLang;
  /** UI / app language (BCP-47-ish, e.g. "en", "ja", "zh-rTW"). */
  appLang: string;
  /** Whether the user has configured a Claude API key (the key itself lives in secure storage). */
  hasClaudeKey: boolean;
  /** Whether the user has configured a Notion token (token lives in secure storage). */
  hasNotionToken: boolean;

  setShowSubtitles: (v: boolean) => void;
  setVibrate: (v: boolean) => void;
  setRecognitionLang: (v: RecognitionLang) => void;
  setAppLang: (v: string) => void;
  setHasClaudeKey: (v: boolean) => void;
  setHasNotionToken: (v: boolean) => void;
};

export const useSettingsStore = create<SettingsState>((set) => ({
  showSubtitles: false,
  vibrate: false,
  recognitionLang: 'ja-JP',
  appLang: 'en',
  hasClaudeKey: false,
  hasNotionToken: false,

  setShowSubtitles: (showSubtitles) => set({ showSubtitles }),
  setVibrate: (vibrate) => set({ vibrate }),
  setRecognitionLang: (recognitionLang) => set({ recognitionLang }),
  setAppLang: (appLang) => set({ appLang }),
  setHasClaudeKey: (hasClaudeKey) => set({ hasClaudeKey }),
  setHasNotionToken: (hasNotionToken) => set({ hasNotionToken }),
}));
