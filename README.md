# Amadeus

A cross-platform (iOS + Android) rebuild of the **Amadeus** app from
*Steins;Gate 0* — an interactive AI companion of Kurisu Makise. You talk to her,
she listens, reacts with facial expressions, and replies in her own voice.

This is a ground-up rewrite of the original Android app (Java) in
**React Native + Expo + TypeScript**, with new AI capabilities layered on top.

> The original Android project is preserved under [`legacy-android/`](./legacy-android)
> as the source of the audio clips, sprites, and reference behaviour.

## Stack

- **Expo** (SDK 56) + **expo-router** + **React Native** 0.85 / React 19
- **TypeScript** (strict)
- **Zustand** for state, **expo-secure-store** for on-device secrets
- **expo-audio** (voice-line playback), **expo-speech** (TTS)

## Roadmap

| Phase | What | Status |
|------|------|--------|
| 0 | Modern Expo/TS scaffold, asset pipeline, ported data layer | ✅ in progress |
| 1 | Feature-parity port: launch/main/settings screens, voice recognition, audio playback + lip-sync, sprite moods, alarm | ⬜ |
| 2 | **Conversational mode** — Claude roleplays Kurisu; hybrid voice (real lines + TTS); mood-driven expressions; bring-your-own API key | ⬜ |
| 3 | **Notion integration** — Kurisu reads/writes Notion via the Anthropic MCP connector | ⬜ |

See [`docs/ROADMAP.md`](./docs/ROADMAP.md) for the detailed plan and decisions.

## What's already here (Phase 0)

- Modern Expo + TypeScript project with the three core screens navigable
  (Launch → Main → Settings).
- The original "brain" ported to typed data:
  - `src/data/voiceLines.ts` — all 45 voice lines + moods
  - `src/data/keywordMap.ts` — keyword → response categories
  - `src/data/moods.ts` — the 14 expressions
  - `src/features/conversation/localResponder.ts` — keyword matcher + Nullpo easter egg
- Feature scaffolding for `claude/`, `notion/`, `speech/`, `audio/`, plus
  secure-key storage and the settings store.

The Main screen has tappable phrase chips so the ported keyword responder is
testable before voice input and audio are wired in Phase 1.

## Develop

```bash
npm install
npx expo start        # then press i / a, or scan with a dev client
```

> Native modules (voice recognition, secure store) require a **custom dev
> client**, not Expo Go. Build one with `npx expo run:android` / `run:ios` or EAS.

## Credits

Original Amadeus app by [Yink](https://github.com/Yink) and contributors — see
[`legacy-android`](./legacy-android) and the credits in its history. Voice lines
and assets belong to their respective creators (Steins;Gate / 5pb. / MAGES.).
This is a non-commercial fan project.
