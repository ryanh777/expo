import { View, Text, StyleSheet } from "react-native";

export default function Items() {
	return (
		<View style={styles.container}>
			<Text>something</Text>
		</View>
	)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
});