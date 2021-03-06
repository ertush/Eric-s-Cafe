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
import { data, icons, COLORS, SIZES } from '../constants'
import { CartCard, Heading } from '../components'

import { useDispatch, useSelector } from 'react-redux'
import { addDeleteCart } from '../store/cart'
import { addSubtractToSubTotal } from '../store/subTotal'
import util from '../utils';
import { incDecPrice } from '../store/price';
import { incDecQuantity } from '../store/quantity';


const Cart = ({ navigation, route}) => {

    
  const dispatch = useDispatch()
 

  const { foodName, cost, quantity } = route.params
  const deliveryCost = 5.56;


  const [allData, setallData] = React.useState(data.dummyData(navigation))
  const [baseCost, setBaseCost] = React.useState(0)

  const { cart } = useSelector(state => state.cart)
  const { subTotal } = useSelector(state => state.subTotal)

 React.useEffect(() => {
    
    dispatch(addSubtractToSubTotal(cost))

    if (foodName !== "") {
      dispatch(addDeleteCart([
        ...cart,
        (() => {
          let cartItem = allData.find(data => (data.title === foodName))

          setBaseCost(cartItem.price)
          cartItem['price'] = cost
          cartItem['quantity'] = quantity

          dispatch(addSubtractToSubTotal(((_cost) => { 
              let subT = subTotal
              subT+=Number(_cost)
              return subT
          })(cost)))


          return cartItem

        })()
      ])
      )
    }

  return () => {
        dispatch(incDecQuantity(1))
        dispatch(incDecPrice(baseCost))
     }

   
  }, [foodName])


  const handleDelete = (id, setter) => {


    ToastAndroid.showWithGravityAndOffset('Cart Item Deleted', ToastAndroid.SHORT, ToastAndroid.BOTTOM, 25, 260)
    dispatch(addDeleteCart((() => {
      let currentCartItems = []

      cart.map(item => currentCartItems.push(item))
      const item = currentCartItems.find(item => item.id === id)
      const deletedItem = currentCartItems.indexOf(item)

      const remCost = subTotal - item.price

      if(currentCartItems.length === 0) remCost = 0

      dispatch(addSubtractToSubTotal(remCost))

      currentCartItems.splice(deletedItem, 1)

      setter(false)

      return currentCartItems
    })(id)))

    
  }
  
  const updatePriceByAdd = (price) => {
      dispatch(addSubtractToSubTotal(
        ((p) => {
            let _price = subTotal
            _price += p
            return _price
        })(price)
      ))


    }

  const updatePriceByMinus = (price) => {
    dispatch(addSubtractToSubTotal(
      ((p) => {
          let _price = subTotal
          _price -= p
          if(_price < 1) _price = 0
          return _price
      })(price)
    ))

  }

  function renderCartCard() {
    return cart.length >= 1 ? (

      cart.map(({ id, image, title, price, quantity, imageStyle}, index) => (
        <CartCard
          id={id}
          key={index}
          deleteCb={handleDelete}
          image={image}
          title={title}
          cost={price}
          amount={quantity}
          imageStyle={imageStyle}
          addToSubTotal={updatePriceByAdd}
          minusFromSubTotal={updatePriceByMinus}
  
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

  function renderTotalSection() {
    const styles = StyleSheet.create({
      totalSection:tailwind(`
        mt-6
        mb-4
        px-6
        justify-center
        items-center
      `),
      divider:tailwind(`
        h-1
        w-full
        rounded-full 
        bg-gray-200
        my-4
      `),
    subTotalSection:tailwind(`
    
    flex-row
    justify-between
    items-center
    w-full
    `),
    labelWrapper:tailwind(`
      justify-between
      items-center
    `),
    priceWrapper:tailwind(`
    justify-between
    items-center
  `),
  label:{
    ...tailwind(`
    text-base
    font-bold
    `),
    color: COLORS.darkGray
  },
  priceLabel:{
    ...tailwind(`
    text-xl
    font-semibold
    `),
    color: COLORS.deepBlue
  },
  totalWrapper:tailwind(`
  flex-row
  justify-between
  items-center
  w-full
  `),
  totalLabel:{
    ...tailwind(`
    text-xl
    font-bold
    `),
    color:COLORS.deepBlue
  },
  total:{
    ...tailwind(`
    text-xl
    font-semibold
    `),
    color:COLORS.deepBlue
  }



    })

    return(
    <View style={styles.totalSection}>
      
       <View style={styles.divider}></View>
        {/* Subtotal Section */}
       <View style={styles.subTotalSection}>
        <View style={styles.labelWrapper}>
          <Text style={styles.label}>Subtotal</Text>
          <Text style={{...styles.label, ...tailwind('mt-4')}}>Delivery</Text>
        </View>

        <View style={styles.priceWrapper}>
         <Text style={styles.priceLabel}>${util.formatPrice(subTotal)}</Text>
         <Text style={{...styles.priceLabel, ...tailwind('mt-4')}}>${deliveryCost}</Text>
       </View>
       </View>
       <View style={styles.divider}></View>
       {/* Total Section */}
       <View style={styles.totalWrapper}>
         <Text style={styles.totalLabel}>Total</Text>
         <Text style={styles.total}>${(subTotal === 0 ? util.formatPrice(0) : util.formatPrice(subTotal + deliveryCost))}</Text>
       </View>
    </View>
    )
  }

  return (
    <View style={styles.container}>

      {/* Screen Heading */}
      <Heading title={"Your Cart"} navigation={navigation}/>

      {/* Cards */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={tailwind('rounded-3xl')}
        style={styles.cardSection}>
        {renderCartCard()}
      </ScrollView>

      {/* Total Section */}
      {renderTotalSection()}

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


  cardSection: tailwind(`
      flex-1
      mt-6
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