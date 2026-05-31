import * as SecureStore from 'expo-secure-store';

/**
 * Encrypted on-device storage for the user's own secrets. The app follows a
 * "bring-your-own-key" model — the Anthropic API key and Notion token never
 * leave the device and are never bundled into the app.
 */
export const SecureKey = {
  ClaudeApiKey: 'claude_api_key',
  NotionToken: 'notion_token',
} as const;

export type SecureKeyName = (typeof SecureKey)[keyof typeof SecureKey];

export async function getSecret(key: SecureKeyName): Promise<string | null> {
  return SecureStore.getItemAsync(key);
}

export async function setSecret(key: SecureKeyName, value: string): Promise<void> {
  await SecureStore.setItemAsync(key, value);
}

export async function deleteSecret(key: SecureKeyName): Promise<void> {
  await SecureStore.deleteItemAsync(key);
}

export async function hasSecret(key: SecureKeyName): Promise<boolean> {
  return (await SecureStore.getItemAsync(key)) != null;
}
