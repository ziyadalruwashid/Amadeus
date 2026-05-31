import { StyleSheet, Text, View } from 'react-native';

import { AmadeusColors } from '@/constants/amadeus';
import { Mood } from '@/data/moods';

/**
 * Renders Kurisu's current expression. In Phase 1 this swaps real sprite frames
 * (mouth-closed vs mouth-open) driven by the lip-sync driver in
 * `features/audio`. For now it shows a labelled placeholder so the screen is
 * navigable before the sprite assets are ported.
 */
export function KurisuSprite({ mood, frameIndex = 0 }: { mood: Mood; frameIndex?: number }) {
  return (
    <View style={styles.wrap}>
      <View style={styles.placeholder}>
        <Text style={styles.kanji}>紅莉栖</Text>
        <Text style={styles.mood}>{mood}</Text>
        <Text style={styles.frame}>frame {frameIndex}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  placeholder: {
    width: 240,
    height: 360,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: AmadeusColors.accentDim,
    backgroundColor: AmadeusColors.panel,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  kanji: { color: AmadeusColors.accent, fontSize: 40, fontWeight: '700' },
  mood: { color: AmadeusColors.text, fontSize: 16 },
  frame: { color: AmadeusColors.textDim, fontSize: 12 },
});
