import { StyleSheet, Text, View } from 'react-native';

import { AmadeusColors } from '@/constants/amadeus';

/** Subtitle overlay shown beneath Kurisu when "show subtitles" is enabled. */
export function Subtitles({ text }: { text: string | null }) {
  if (!text) return null;
  return (
    <View style={styles.wrap}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    backgroundColor: AmadeusColors.subtitleBg,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 10,
    marginHorizontal: 16,
  },
  text: { color: AmadeusColors.text, fontSize: 16, textAlign: 'center' },
});
