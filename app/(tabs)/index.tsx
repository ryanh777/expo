import { supabase } from "@/utils/supabase";
import { useEffect, useState } from "react";
import { Text, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import { Tables } from "../../database.types";
import Swatch from "@/components/Swatch";
import { usePathname } from "expo-router";

export default function Items() {
	const [barcodes, setBarcodes] = useState<Tables<'Items'>[]>();
	const [loading, setLoading] = useState<boolean>(false);
	const path = usePathname();

	useEffect(() => {
		if (path === '/') {
			loadBarcodes()
		}
	}, [path])

	async function loadBarcodes() {
		setLoading(true);
		const { data, error } = await supabase
			.from('Items')
			.select()

		// await sleep(1000);

		if (data) setBarcodes(data)
		setLoading(false);
	}

	return (
		<SafeAreaView style={styles.container}>
			<ScrollView contentContainerStyle={styles.scrollView}>
				{loading ? 
					<Text>loading</Text> 
						:
					barcodes?.map(barcodeObj => <Swatch key={barcodeObj.id} barcode={barcodeObj.barcode}/>)
				}
			</ScrollView>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	scrollView: {
			width: '100%',
			flexWrap: 'wrap',
			flexDirection: 'row',
			padding: '1%'
	},
});


async function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}