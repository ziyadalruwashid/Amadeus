import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { KurisuSprite } from '@/components/KurisuSprite';
import { Subtitles } from '@/components/Subtitles';
import { AmadeusColors } from '@/constants/amadeus';
import { Mood } from '@/data/moods';
import { fallbackLine, respondToInput } from '@/features/conversation/localResponder';
import { VOICE_LINES } from '@/data/voiceLines';
import { useSettingsStore } from '@/store/useSettingsStore';

/**
 * Main screen — the RN port of `MainActivity`. Tap Kurisu to talk (speech
 * recognition, Phase 1), long-press for "loop" mode. A text box is included so
 * the keyword/Claude pipeline is testable before voice recognition is wired.
 *
 * Right now it runs the ported local keyword responder and shows which voice
 * line *would* play; audio playback + lip-sync arrive in Phase 1, Claude in
 * Phase 2.
 */
export default function MainScreen() {
  const showSubtitles = useSettingsStore((s) => s.showSubtitles);
  const [mood, setMood] = useState<Mood>(Mood.Happy);
  const [subtitle, setSubtitle] = useState<string | null>('Hello. Nice to meet you.');

  function handleInput(text: string) {
    const result = respondToInput(text);
    if (result.kind === 'nullpo') {
      setMood(Mood.Indifferent);
      setSubtitle(`GAH! (nullpo streak: ${result.count})`);
      return;
    }
    const lineId = result.kind === 'line' ? result.line : fallbackLine();
    const line = VOICE_LINES[lineId];
    setMood(line.mood);
    // Phase 2 will route non-matches to Claude instead of a fallback line.
    setSubtitle(`▶ ${line.audio}  ·  mood: ${line.mood}`);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Pressable
        style={styles.spriteArea}
        onPress={() => handleInput('hello')}
        onLongPress={() => handleInput('christina')}>
        <KurisuSprite mood={mood} />
      </Pressable>

      {showSubtitles && <Subtitles text={subtitle} />}

      <View style={styles.demoRow}>
        {['hello', 'christina', 'time machine', 'nullpo', 'nice body', 'random'].map((w) => (
          <Pressable key={w} style={styles.chip} onPress={() => handleInput(w)}>
            <Text style={styles.chipText}>{w}</Text>
          </Pressable>
        ))}
      </View>
      <Text style={styles.hint}>
        Tap a phrase to test the ported keyword responder. Voice input lands in Phase 1.
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: AmadeusColors.background },
  spriteArea: { flex: 1 },
  demoRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    paddingHorizontal: 16,
    paddingTop: 16,
    justifyContent: 'center',
  },
  chip: {
    backgroundColor: AmadeusColors.panel,
    borderColor: AmadeusColors.accentDim,
    borderWidth: 1,
    borderRadius: 18,
    paddingVertical: 8,
    paddingHorizontal: 14,
  },
  chipText: { color: AmadeusColors.text, fontSize: 14 },
  hint: {
    color: AmadeusColors.textDim,
    fontSize: 12,
    textAlign: 'center',
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
});
