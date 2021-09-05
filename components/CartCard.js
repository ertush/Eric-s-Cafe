import React from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'

import tailwind from 'tailwind-rn'

import { icons,  COLORS, } from '../constants'
import Card from './Card'
import formatPrice from '../utils'
// import {useDispatch, useSelector} from 'react-redux'
// import { incDecQuantity } from '../store/quantity'
// import {incDecPrice} from '../store/price'

const CartCard = ({ id, image, title, cost, amount, deleteCb, baseCost }) => {

  // // const [addCostCb, minusCostCb] = costCb
  const [quantity, setQuantity] = React.useState(amount)
  const [price, setPrice] = React.useState(cost)
  const [deleteCardBtn, setDeleteCardBtn] = React.useState(false)
  // const dispatch = useDispatch()
  // // const {quantity} = useSelector(state => state.quantity)
  // const {price} = useSelector(state => state.price)

  // const [baseCost, setBaseCost] = React.useState(cost)
  // const [cardCost, setCardCost] = React.useState(price)
  // // const [price, setPrice] = React.useState(baseCost)
  const [deleted, setDeleted] = React.useState(false)

  const handleAdd = () => { 
  
    let qnt = quantity;
      qnt += 1; 
      setPrice(baseCost * qnt)
      setQuantity(qnt)
 


      // setCardCost(baseCost * qnt)

      // dispatch(incDecPrice(baseCost * quantity))
 
    // addCostCb(price)
   
  }

  const handleMinus = () => { 
   
    let qnt = quantity;
      qnt -= 1; 
      if(qnt < 1) qnt = 1 
      setPrice(baseCost * qnt)
      setQuantity(qnt)
     
      // setCardCost(baseCost * qnt)

    // dispatch(incDecPrice(baseCost * quantity))
    // minusCostCb(price)

  }


  React.useEffect(() => {
    // return () => {
    //   setCardCost(0)
    // }
  }, [deleted])


  return (

    <TouchableOpacity onLongPress={() => {
       setDeleteCardBtn(!deleteCardBtn)
    }} style={styles.cardWrapper} >
      {/* Card */}
      <Card cardStyles={styles.container}>
        {/* Image */}
        <View style={tailwind('flex-row flex-1 justify-center items-center')}>
          <Image source={image} style={{...styles.image, marginLeft: deleteCardBtn ? "25%" : 0}} />

          {/* Title & price */}
          <View style={styles.detailsWrapper}>
            <Text style={{...styles.title, width: deleteCardBtn ? "70%" : "100%"}}>{title}</Text>
            <Text style={styles.price}>${formatPrice(price)}</Text>
          </View>
        </View>

        {/* Quantity */}

        <View style={tailwind('justify-center items-center')}>
          <Text style={styles.quantity}>{quantity}</Text>
        </View>
        <View style={styles.quantityWrapper}>
          <View style={styles.btnWrapper}>
            <TouchableOpacity
              onPress={handleAdd}
              style={styles.addBtn}><Image source={icons.plus} style={styles.plus} /></TouchableOpacity>
            <TouchableOpacity
              onPress={handleMinus}
              style={styles.minusBtn}><Image source={icons.minus} style={styles.minus} /></TouchableOpacity>
          </View>

        </View>

      </Card>

      {/* Delete Button */}
      {
        deleteCardBtn && 
        <TouchableOpacity
        onPress={
          () => {
            setDeleted(true)
            deleteCb(id)
          }
        }
        style={styles.deleteButton}>
        <Image source={icons.recycleBin} style={styles.recycleBin} />
      </TouchableOpacity>

      }
     
    </TouchableOpacity>
  )

}

const styles = StyleSheet.create({
  cardWrapper: tailwind(`
   flex-row
   justify-center
   items-center
  `),

  container: {...tailwind(`
  flex-row
  justify-between

  py-2
  pr-4
  pl-2
  flex-1
  items-center
  mx-2
  mt-6
  mb-4
  `),
  ...COLORS.shadow
},

  image: tailwind(`
  w-20
  h-20
  mr-2
  `),

  detailsWrapper: tailwind(`
  justify-evenly
  h-24
  py-1
  items-start
  `),

  title: {
    ...tailwind(`
 
  text-base
  `),
    color: COLORS.deepBlue,
    fontWeight: "700",
  },

  price: {
    ...tailwind(`
  text-base
  `),
    fontWeight: "700",
    color: COLORS.deepBlue,
  },

  quantityWrapper: tailwind(`
  flex-row
  justify-center
  items-center
  `),

  quantity: {
    ...tailwind(`
  mr-2
  ml-2
  text-base
  `),
    color: COLORS.deepBlue,
    fontWeight: "700"
  },

  btnWrapper: tailwind(`
   justify-between
   h-24
   py-2
   items-center
  `),

  addBtn: {
    ...tailwind(`
  p-2
  w-7
  h-7
  rounded-full
  flex-row
  justify-center
  bg-white
  items-center
  `),
  borderWidth: 2,
  borderColor: COLORS.transparentLightGray
  },

  minusBtn:{...tailwind(`
  p-2
  w-7
  h-7
  rounded-full
  bg-white
  flex-row
  justify-center
  items-center
  `),
  borderWidth: 2,
  borderColor: COLORS.transparentLightGray
  },
  plus: {
    ...tailwind(`
  w-5
  h-5
  `),
    tintColor: COLORS.darkGray,
  },

  minus: {
    ...tailwind(`
  w-6
  h-6
  `),
    tintColor: COLORS.darkGray,
  },

  deleteButton: {
    ...tailwind(`
   flex-row
   justify-center
   items-center
   p-2
  
   rounded-full
  `),
  ...COLORS.shadow,
    backgroundColor: COLORS.secondary,
  },

  recycleBin: {
    ...tailwind(`
    w-5
    h-5
    `),

    tintColor: "#fff",
  },
});

export default CartCard