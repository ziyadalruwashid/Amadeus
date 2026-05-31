# Amadeus rebuild — roadmap & decisions

## Locked decisions

| Area | Decision | Notes |
|------|----------|-------|
| Approach | Clean rebuild, port assets + logic | Original kept in `legacy-android/` |
| Framework | Expo (SDK 56) + dev client | Custom dev client for native modules |
| Language | TypeScript (strict) | |
| Platforms | iOS + Android, **Android first** | |
| UI | expo-router + React Native views | |
| State | Zustand | `src/store/` |
| Secrets | expo-secure-store, bring-your-own | API key & Notion token never bundled |
| Kurisu's voice | Hybrid: real lines for keywords, Claude + TTS for free chat | |
| Claude auth | Bring-your-own Anthropic API key | On-device |
| Notion | Anthropic MCP connector → Notion hosted MCP | BYO token; OAuth fallback if needed |

## Phase 0 — Scaffold ✅ (this commit)

- Expo + TS project at repo root; legacy Android moved to `legacy-android/`.
- Three navigable screens: Launch (`index`), Main, Settings.
- Ported data layer: voice lines, moods, keyword map, local responder + Nullpo egg.
- Feature folders + secure-key helper + settings store.

## Phase 1 — Feature parity port

1. **Asset pipeline**: copy `legacy-android/app/src/main/res/raw/*` → `assets/audio/`,
   sprites → `assets/sprites/`, logo frames → `assets/logo/`. Build a static
   `require()` registry (Metro needs literal requires).
2. **Audio + lip-sync**: implement `features/audio` with expo-audio; timed sprite
   cycling for mouth movement (replaces the Android `Visualizer`).
3. **Sprite rendering**: real frames in `KurisuSprite`, mood → frame set.
4. **Speech recognition**: implement `features/speech` with
   `@react-native-voice/voice`; mic permissions; tap-to-talk + loop mode.
5. **Launch screen**: logo frame animation, "connect" tone, call states.
6. **Settings**: language pickers, persist prefs (AsyncStorage), wire to store.
7. **Alarm** (scoped): evaluate `expo-notifications`/`notifee`; exact-alarm limits.
8. **Localization**: port `legacy-android/.../res/values-*/strings.xml`.

## Phase 2 — Conversational mode (Claude) ⭐

- `features/claude/client.ts`: Anthropic Messages API, streaming, **prompt
  caching** on the system prompt.
- `features/claude/systemPrompt.ts`: Kurisu/Amadeus persona; instruct the model
  to emit a mood tag (`data/moods.ts`) per reply.
- Pipeline: keyword match → real voice line; otherwise → Claude → subtitle + TTS
  + matching mood expression. Conversation memory.
- Settings: secure entry for the Anthropic API key.

## Phase 3 — Notion integration 🔌

- Wire the Anthropic **MCP connector** to Notion's hosted MCP server.
- Settings: secure entry for the Notion token.
- **Validate early**: confirm the hosted MCP accepts a BYO integration token; if
  it requires OAuth, fall back to OAuth or custom Notion REST tools (tool-use).

## Notes / constraints

- Native modules (voice, secure store) need a **dev client**, not Expo Go.
- Lip-sync: no clean cross-platform playback-amplitude API in RN, hence timed
  sprite cycling.
- This is a non-commercial fan project; assets belong to their creators.
