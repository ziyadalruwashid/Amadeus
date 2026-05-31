import { router } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Switch, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AmadeusColors } from '@/constants/amadeus';
import { useSettingsStore } from '@/store/useSettingsStore';

/**
 * Settings — the RN port of `SettingsActivity`/`preferences.xml`, plus the new
 * integration toggles. Secure key entry (Claude / Notion) and the language
 * pickers are wired to real storage in later phases; the subtitle/vibrate
 * toggles already drive the live Zustand store.
 */
export default function SettingsScreen() {
  const { showSubtitles, setShowSubtitles, vibrate, setVibrate, hasClaudeKey, hasNotionToken } =
    useSettingsStore();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Settings</Text>
        <Pressable onPress={() => router.back()}>
          <Text style={styles.done}>Done</Text>
        </Pressable>
      </View>

      <ScrollView contentContainerStyle={styles.body}>
        <Section title="App">
          <Row label="Show subtitles">
            <Switch value={showSubtitles} onValueChange={setShowSubtitles} />
          </Row>
          <Row label="Vibrate on alarm">
            <Switch value={vibrate} onValueChange={setVibrate} />
          </Row>
        </Section>

        <Section title="Conversation (Claude)">
          <Row label="Anthropic API key">
            <Text style={styles.value}>{hasClaudeKey ? 'Configured' : 'Not set'}</Text>
          </Row>
          <Text style={styles.note}>Phase 2 — bring your own key, stored encrypted on-device.</Text>
        </Section>

        <Section title="Notion">
          <Row label="Notion token">
            <Text style={styles.value}>{hasNotionToken ? 'Configured' : 'Not set'}</Text>
          </Row>
          <Text style={styles.note}>Phase 3 — Kurisu reads/writes your Notion via Claude.</Text>
        </Section>
      </ScrollView>
    </SafeAreaView>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <View style={styles.card}>{children}</View>
    </View>
  );
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <View style={styles.row}>
      <Text style={styles.label}>{label}</Text>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: AmadeusColors.background },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  title: { color: AmadeusColors.text, fontSize: 22, fontWeight: '700' },
  done: { color: AmadeusColors.accent, fontSize: 16 },
  body: { padding: 16, gap: 24 },
  section: { gap: 8 },
  sectionTitle: { color: AmadeusColors.textDim, fontSize: 13, textTransform: 'uppercase', letterSpacing: 1 },
  card: { backgroundColor: AmadeusColors.panel, borderRadius: 12, overflow: 'hidden' },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 16,
  },
  label: { color: AmadeusColors.text, fontSize: 16 },
  value: { color: AmadeusColors.textDim, fontSize: 15 },
  note: { color: AmadeusColors.textDim, fontSize: 12, paddingHorizontal: 4 },
});
