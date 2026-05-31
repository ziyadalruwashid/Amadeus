/**
 * Speech recognition wrapper (Phase 1/2).
 *
 * Wraps `@react-native-voice/voice` behind a small interface so screens don't
 * depend on the native module directly. Replaces the original Android
 * `SpeechRecognizer` usage in MainActivity.
 *
 * Requires a custom dev client (not Expo Go) and microphone permission
 * (RECORD_AUDIO on Android, NSMicrophoneUsageDescription / NSSpeechRecognition
 * on iOS).
 */
export type SpeechResult = { transcript: string };

export type SpeechRecognizer = {
  start(lang: string): Promise<void>;
  stop(): Promise<void>;
  onResult(cb: (r: SpeechResult) => void): () => void;
  onError(cb: (e: unknown) => void): () => void;
};

// TODO(Phase 1): implement with @react-native-voice/voice.
