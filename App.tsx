import { Button, Column, Host, Text } from '@expo/ui';
import { StyleSheet, View } from 'react-native';

// The app has chosen a dark theme while the operating system is in light mode.
export default function App() {
  return (
    <View style={styles.screen}>
      <Host colorScheme="dark" style={styles.host}>
	<Column spacing={12}>
	  <Text testID="universal-text">Universal Text inside a dark Host</Text>
	  <Button label="Button inside the same Host" onPress={() => {}} />
	</Column>
      </Host>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#0b0f14' },
  host: { padding: 24 },
});
