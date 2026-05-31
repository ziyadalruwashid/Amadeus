# Claude conversational mode (Phase 2)

Turns Kurisu into a real conversational assistant.

**Flow:** user speech/text → if a keyword matches, play the original pre-recorded
voice line (see `features/conversation/localResponder.ts`); otherwise send the
message to Claude with a Kurisu system prompt. Claude returns a reply **plus a
mood tag** (one of `data/moods.ts`) so we animate the right expression. The reply
is shown as a subtitle and spoken via TTS (`expo-speech`).

**Auth:** bring-your-own Anthropic API key, stored encrypted on-device via
`features/secureKeys.ts` (`SecureKey.ClaudeApiKey`). Never bundled.

**To build here:**
- `client.ts` — Anthropic Messages API client (streaming), with prompt caching on
  the system prompt.
- `systemPrompt.ts` — the Kurisu/Amadeus persona + instruction to emit a mood tag.
- `conversation.ts` — message history / memory management.

The Notion integration (Phase 3) plugs in here via the Anthropic MCP connector.
