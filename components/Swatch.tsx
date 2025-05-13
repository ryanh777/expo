import { Text, View, StyleSheet } from "react-native";
import { Image } from 'expo-image';

interface swatchProps {
    barcode: number
}

export default function Swatch(props: swatchProps) {
    return (
        <View style={styles.container}>
            <Image
                style={styles.image} 
                source={require('../assets/images/INDIGO-TWEED-2.jpg')} />
            <Text style={styles.text}>{props.barcode}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '46%',
        aspectRatio: 1,
        borderColor: 'black',
        borderRadius: 10,
        padding: 10,
        margin: '2%',
        boxShadow: '0px 0px 3px grey'
    },
    image: {
        flex: 1,
        borderRadius: 10
    },
    text: {
        textAlign: 'center',
        fontSize: 20, 
        marginTop: '5%'
    }
})