import { supabase } from '@/utils/supabase';
import { router, useLocalSearchParams} from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function Modal() {
  const isPresented = router.canGoBack();
  const {barcode} = useLocalSearchParams();

  const saveBarcodeAndGoBack = async () => {
    const { error } = await supabase
      .from('Items')
      .insert({ barcode: +barcode, name: 'Ryan' })
    console.log(error)
    goBack()
  }

  const goBack = () => {
    router.navigate('../')
  }

  return (
    <View style={styles.container}>
      <Text>{barcode}</Text>
      <Pressable onPress={saveBarcodeAndGoBack}><Text>checkmark</Text></Pressable>
      <Pressable onPress={goBack}><Text>DELETE</Text></Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '80%',
    height: '80%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    gap: 20
  },
});