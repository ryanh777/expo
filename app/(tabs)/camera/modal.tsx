import { supabase } from '@/utils/supabase';
import { MaterialIcons } from '@expo/vector-icons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { router, useLocalSearchParams} from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function Modal() {
  // const isPresented = router.canGoBack();
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
      <Text style={styles.text}>{barcode}</Text>
      <View style={styles.buttonRow}>
        <Pressable style={styles.yesButton} onPress={saveBarcodeAndGoBack}>
          <FontAwesome size={28} name="check" color={'green'} />
        </Pressable>
        <Pressable style={styles.noButton} onPress={goBack}>
          <MaterialIcons name="cancel" size={24} color="red" />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    gap: 20,
    marginVertical: '30%',
    marginHorizontal: '10%',
    borderRadius: 20
  },
  buttonRow: {
    flexDirection: 'row',
    gap: '8%'
  },
  yesButton: {
    borderWidth: 3,
    borderRadius: 10,
    borderColor: 'green',
    padding: '8%'
  },
  noButton: {
    borderWidth: 3,
    borderRadius: 10,
    borderColor: 'red',
    padding: '8%'
  },
  text: {
    fontSize: 20,
    marginBottom: '5%'
  }
});