import React from 'react'
import tailwind from 'tailwind-rn'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  ToastAndroid
}
  from 'react-native'
import Constants from 'expo-constants'
import { StatusBar } from 'expo-status-bar';
import { images, icons, COLORS, SIZES } from '../constants'
import { CartCard } from '../components'

import { useDispatch, useSelector } from 'react-redux'
import { addDeleteCart } from '../store/cart'

const Cart = ({ navigation, route }) => {

  const { foodName, cost, quantity } = route.params




  const [allData, setallData] = React.useState([
    {
      id: 1,
      image: images.food,
      title: "Soloi Salad",
      price: 7.90,
      quantity: 1,
    },
    {
      id: 2,
      image: images.pasta,
      title: "Pasta Bolongesse",
      price: 2.50,
      quantity: 1,
    },
    {
      id: 3,
      image: images.pizza,
      title: "Pepperoni  Pizza",
      price: 9.50,
      quantity: 1,
    },
    {
      id: 4,
      image: images.burger,
      title: "Chicken Burger",
      price: 5.00,
      quantity: 1,
    },
    {
      id: 5,
      image: images.blackCoffee,
      title: "Black Coffee",
      price: 2.50,
      quantity: 1,
    }
  ])


  const dispatch = useDispatch()
  const { cart } = useSelector(state => state.cart)

  React.useEffect(() => {
    if (foodName !== "") {
      dispatch(addDeleteCart([
        ...cart,
        (() => {
          let cartItem = allData.find(data => (data.title === foodName))

          cartItem['price'] = cost
          cartItem['quantity'] = quantity

          return cartItem

        })()
      ])
      )
    }
  }, [foodName])


  const handleDelete = (id) => {

    ToastAndroid.showWithGravityAndOffset('Cart Item Deleted', ToastAndroid.LONG, ToastAndroid.BOTTOM, 25, 260)
    dispatch(addDeleteCart((() => {
      let currentCartItems = []

      cart.map(item => currentCartItems.push(item))
      const deletedItem = currentCartItems.indexOf(currentCartItems.find(item => item.id === id))
      currentCartItems.splice(deletedItem, 1)

      return currentCartItems
    })(id)))
  }

  function renderCartCard() {
    return cart.length >= 1 ? (

      cart.map(({ id, image, title, price, quantity }, index) => (
        <CartCard
          id={id}
          key={index}
          deleteCb={handleDelete}
          image={image}
          title={title}
          price={price}
          amount={quantity}

        />
      )
      )
    ) : (
        <Text style={{
          ...tailwind(`
        font-semibold
        text-center
        text-xl
        `),
          
          color: COLORS.deepBlue,
          marginTop: SIZES.height * 0.3

          }
        }>Cart Empty !</Text>
      )


  }

  return (
    <View style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => { navigation.goBack() }} style={styles.backBtn}>
          <Image source={icons.back} style={styles.chevron} />
        </TouchableOpacity>
        <Text style={styles.title}>Your cart</Text>
      </View>

      {/* Cards */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.cardSection}>
        {renderCartCard()}
      </ScrollView>

      {/* Order button */}
      <View style={styles.btnWrapper}>
        <TouchableOpacity onPress={() => { navigation.navigate('Order') }} style={styles.checkoutBtn}>
          <Text style={styles.orderText}>Check Out</Text>
          <Image source={icons.deliver} style={styles.orderImage} />
        </TouchableOpacity>

      </View>

      <StatusBar style="dark" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    ...tailwind(`
    flex-1
    bg-gray-100
    mx-6
    `),
      marginTop: Constants.statusBarHeight * 2
    },

  header: {
    ...tailwind(`
    flex-row
    justify-between
    items-center
    pl-2
    `), 
    width: "68%"
  },

  backBtn: {...tailwind(`
      flex-row 
      justify-center 
      items-center 
      p-2 
      bg-white 
      rounded-full
    `),
    ...COLORS.shadow
  },

 chevron: {
    ...tailwind(`
    w-5
    h-5
    `), 
    tintColor: COLORS.secondary
  },

  title: {
    ...tailwind(`
    text-3xl
    `), 
    fontWeight: "700",
    color: COLORS.deepBlue
  },

  cardSection: tailwind(`
      flex-1
    `),

  btnWrapper: tailwind(`flex-row justify-center items-center`),

  checkoutBtn: {
    ...tailwind(`
    rounded-full
    flex-row
    justify-evenly
    items-center
    p-3
    my-2
    `), 
    ...COLORS.shadow,
    backgroundColor: COLORS.secondary,
    width: "62%",
  },
  orderImage: {
    ...tailwind(`w-12 h-12`),

    tintColor: "#fff"
  },

  orderText: {...tailwind(`
    text-gray-100
    text-xl
    `),
    fontWeight: "700",
  }

})

export default Cart