import { router, useLocalSearchParams} from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function Modal() {
  const isPresented = router.canGoBack();
  const {something} = useLocalSearchParams();

  const func = () => {
    console.log("something: " + something)
    // console.log("can go back: ", router.canGoBack())
    // router.navigate('../')
  }

  return (
    <View style={styles.container}>
      <Text>{something}</Text>
      <Pressable onPress={func}>
        <Text>go back</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
});