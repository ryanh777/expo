import { supabase } from '@/utils/supabase';
import { MaterialIcons } from '@expo/vector-icons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { PostgrestError } from '@supabase/supabase-js';
import { router, useLocalSearchParams} from 'expo-router';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function Modal() {
  // const isPresented = router.canGoBack();
  const {barcode} = useLocalSearchParams();
  const [error, setError] = useState<PostgrestError | null>();
  const DUPLICATE_ERROR_MESSAGE = "This barcode has already been saved."

  const saveBarcodeAndGoBack = async () => {
    const { error } = await supabase
      .from('Items')
      .insert({ barcode: +barcode, name: 'Ryan' })
    if (error) {
      setError(error)
    } else {
      goBack()
    }
  }

  const goBack = () => {
    router.navigate('../')
  }

  const Error = () => {
    return (
      <Pressable style={styles.container}>
        <Text>{error && error.code === '23505' ? DUPLICATE_ERROR_MESSAGE : error?.message}</Text>
        <Pressable style={styles.closeButton} onPress={goBack}>
          <Text>Close</Text>
        </Pressable>
      </Pressable>
    )
  }

  const VerifyBarcode = () => {
    return (
      <Pressable style={styles.container}>
        <Text style={styles.text}>{barcode}</Text>
        <View style={styles.buttonRow}>
          <Pressable style={styles.yesButton} onPress={saveBarcodeAndGoBack}>
            <FontAwesome size={36} name="check" color={'green'} />
          </Pressable>
          <Pressable style={styles.noButton} onPress={goBack}>
            <MaterialIcons name="cancel" size={36} color="red" />
          </Pressable>
        </View>
      </Pressable>
    )
  }

  return (
    <Pressable style={styles.modalBackground} onPress={goBack}>
      {error && error.message && error.message.length > 0 ? Error() : VerifyBarcode()}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  modalBackground: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    gap: 20,
    marginVertical: '50%',
    marginHorizontal: '10%',
    borderRadius: 20
  },
  buttonRow: {
    width: '100%',
    justifyContent: 'space-evenly',
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
  closeButton: {
    borderWidth: 3,
    borderRadius: 10,
    borderColor: 'black',
    padding: '8%'
  },
  text: {
    fontSize: 20,
    marginBottom: '10%'
  }
});