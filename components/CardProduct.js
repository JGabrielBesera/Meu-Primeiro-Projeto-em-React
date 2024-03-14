import {Text, View, StyleSheet} from 'react-native'
import { Image } from 'expo-image'
import H4 from './ui/H4'

const CardProduct = ({product}) => {
  return (
    <View style={styles.card}>
        <View style={styles.photo}>
            <Image
                style={styles.photoImg}
                source={product.photo}
            />
        </View>
        <View>
            <H4>{product.name}</H4>
            <Text style={styles.price}>preço: R${product.price}</Text>
            <Text style={styles.quantity}>quantidade: {product.quantity}</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 300,
        height: 100,
        backgroundColor: '#FFF',
        borderRadius: 20,
        marginVertical: 10,
        marginHorizontal: 10
    },
    photo: {
        marginHorizontal: 10
    },
    photoImg: {
        width: 70,
        height: 70,
        borderRadius: 35
    },
    price: {
        marginTop: 4
    },
    quantity: {
        marginTop: 4
    }
})

export default CardProduct