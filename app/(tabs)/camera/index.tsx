import { CameraView, useCameraPermissions, BarcodeScanningResult } from 'expo-camera';
import { usePathname, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function Scan() {
  const [permission, requestPermission] = useCameraPermissions();
  const [isFocused, setIsFocused] = useState<boolean>(true);
  const router = useRouter();
  const path = usePathname()

  useEffect(() => path === '/camera' ? setIsFocused(true) : setIsFocused(false), [path])

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={styles.message}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  const barCodeScanned = (scanningResult: BarcodeScanningResult) => {
    if (isFocused) {
      router.navigate({ pathname: '/camera/modal', params: {barcode: scanningResult.data} })
    }
  }

  return (
    <SafeAreaView style={styles.container}>
        <CameraView style={styles.camera} onBarcodeScanned={barCodeScanned} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
  },
});