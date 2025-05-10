import { supabase } from "@/utils/supabase";
import { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Tables } from "../../database.types";

export default function Items() {
	const [barcodes, setBarcodes] = useState<Tables<'Items'>[]>();
	const [loading, setLoading] = useState<boolean>(false);

	useEffect(() => {
		loadBarcode()
	}, [])

	async function loadBarcode() {
		setLoading(true);
		const { data, error } = await supabase
		.from('Items')
		.select()

		await sleep(1000);

		if (data) setBarcodes(data)
		setLoading(false);
	}

	const barcodesComp = () => barcodes?.map(barcodeObj => <Text key={barcodeObj.id}>{barcodeObj.barcode}</Text>);

	return (
		<View style={styles.container}>
			{loading ? <Text>loading</Text> : barcodesComp()}
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


async function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}