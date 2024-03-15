import { View, StyleSheet, Text, FlatList } from 'react-native'
import { useEffect, useState } from 'react'
import H1 from './ui/H1'
import Button from './ui/Button'
import CardUser from './CardUser'
import CardProduct from './CardProduct'



const Body = () => {

  const [products, setProducts] = useState([])
  const [users, setUsers] = useState([])
  const [counter, setCounter] = useState(0)

  const getUsers = async () => {
    try {
      const result = await fetch('https://backend2-ep3w.onrender.com/user');
      const data = await result.json();
      console.log(data);
      setUsers(data.users)
    } catch (error) {
      console.log(error.message)
    }
  }

  const getProducts = async () => {
    try {
      const result = await fetch('https://backend2-ep3w.onrender.com/product');
      const data = await result.json();
      setProducts(data.products)
      console.log(data);
    } catch (error) {
      console.log(error.message)
    }
  }


  useEffect(() => {
    getUsers()
    getProducts()
  }, [])

  return (
    <View style={styles.body}>
      <View  style={styles.Buttons}>
        <Button
          title="Add +2"
          onPress={() => setCounter(counter + 2)}
        />
        <Button
          title='Add +1'
          onPress={() => setCounter(counter + 1)}
        />
        <Text style={{ color: '#FFF' }}>Valor: {counter}</Text>
      </View>
      <View style={styles.listUser}>
        <H1 style={styles.usuariosH1}>Usuários</H1>
        <FlatList
          data={users}
          renderItem={({ item }) => <CardUser user={item} />}
          keyExtractor={item => item.id}
          horizontal={true}
        />
      </View>
      <View style={styles.listProduct}>
        <H1 style={styles.usuariosH1}>Produtos</H1>
        <FlatList
          data={products}
          renderItem={({ item }) => <CardProduct product={item} />}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  body: {
    flex: 3,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  Buttons: {
    marginTop: 30
  },
  usuariosH1: {
    marginTop: 20,
    marginBottom: 20,
    color: "#FFF"
  },
  listUser: {
    height: 200,
    marginBottom: 50
  },
  listProduct: {
    height: 300,
    marginBottom: 50
  }
}
)

export default Body