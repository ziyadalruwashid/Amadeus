# Notion integration (Phase 3)

Lets Kurisu read and write the user's Notion in conversation mode ("add this to
my notes", "what's on my todo list?").

**Approach:** the Anthropic **MCP connector** — Claude connects directly to
Notion's hosted MCP server, so the app writes almost no Notion glue code.

**Auth:** bring-your-own Notion token, stored encrypted on-device via
`features/secureKeys.ts` (`SecureKey.NotionToken`).

> ⚠️ Open item to validate early: Notion's *hosted* MCP server is built around an
> OAuth handshake. We need to confirm it accepts a plain bring-your-own
> integration token. If it requires full OAuth, fall back to either (a) the OAuth
> flow or (b) custom Notion REST tools driven by Claude tool-use (works with a
> simple token). The rest of the design is unaffected either way.
