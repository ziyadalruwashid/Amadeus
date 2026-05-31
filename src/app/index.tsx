import { router } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AmadeusColors } from '@/constants/amadeus';

/**
 * Launch / "incoming call" screen — the RN port of the original
 * `LaunchActivity`. Connect → main screen, gear → settings.
 *
 * The animated logo (logo1..logo39 frames) and the alarm "incoming call" state
 * are ported in Phase 1 once assets land; this is the navigable shell.
 */
export default function LaunchScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Pressable
        accessibilityLabel="Settings"
        style={styles.gear}
        onPress={() => router.push('/settings')}>
        <Text style={styles.gearText}>⚙</Text>
      </Pressable>

      <View style={styles.logoWrap}>
        <View style={styles.logoPlaceholder}>
          <Text style={styles.logoText}>AMADEUS</Text>
        </View>
        <Text style={styles.status}>Incoming call…</Text>
      </View>

      <View style={styles.actions}>
        <Pressable
          style={[styles.button, styles.cancel]}
          onPress={() => router.push('/')}>
          <Text style={styles.buttonText}>Cancel</Text>
        </Pressable>
        <Pressable
          style={[styles.button, styles.connect]}
          onPress={() => router.push('/main')}>
          <Text style={styles.buttonText}>Connect</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: AmadeusColors.background, padding: 24 },
  gear: { position: 'absolute', top: 56, right: 24, padding: 8 },
  gearText: { color: AmadeusColors.textDim, fontSize: 26 },
  logoWrap: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: 18 },
  logoPlaceholder: {
    width: 180,
    height: 180,
    borderRadius: 90,
    borderWidth: 2,
    borderColor: AmadeusColors.accent,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoText: { color: AmadeusColors.accent, fontSize: 22, letterSpacing: 3, fontWeight: '700' },
  status: { color: AmadeusColors.textDim, fontSize: 16 },
  actions: { flexDirection: 'row', gap: 16, paddingBottom: 24 },
  button: { flex: 1, paddingVertical: 18, borderRadius: 14, alignItems: 'center' },
  connect: { backgroundColor: AmadeusColors.accentDim },
  cancel: { backgroundColor: AmadeusColors.panel },
  buttonText: { color: AmadeusColors.text, fontSize: 17, fontWeight: '600' },
});
