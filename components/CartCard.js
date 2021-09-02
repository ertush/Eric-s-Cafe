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

const CartCard = ({ id, image, title, price, amount, deleteCb, navigation }) => {

  let [quantity, setQuantity] = React.useState(amount)
  const [deleted, setDeleted] = React.useState(false)
  const handleAdd = () => { setQuantity(() => { quantity += 1; (quantity < 1 ? quantity = 1 : quantity); return quantity; }) }
  const handleMinus = () => { setQuantity(() => { quantity -= 1; (quantity < 1 ? quantity = 1 : quantity); return quantity; }) }


  React.useEffect(() => {

  }, [deleted])


  return (

    <View style={styles.cardWrapper} >
      {/* Card */}
      <Card cardStyles={styles.container}>
        {/* Image */}
        <View style={tailwind('flex-row flex-1')}>
          <Image source={image} style={styles.image} />

          {/* Title & price */}
          <View style={styles.detailsWrapper}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.price}>${price}</Text>
          </View>
        </View>

        {/* Quantity */}
        <View style={styles.quantityWrapper}>
          <Text style={styles.quantity}>qty: {quantity}</Text>
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
    </View>
  )

}

const styles = StyleSheet.create({
  cardWrapper: tailwind(`
   flex-row
   justify-between
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
  ml-2
  mt-6
  mb-4
  `),
  ...COLORS.shadow
},

  image: tailwind(`
  w-24
  h-24
  `),

  detailsWrapper: tailwind(`
  justify-between
  h-24
  py-5
  ml-2
  items-start
  `),

  title: {
    ...tailwind(`
 
  text-base
  `),
    color: COLORS.deepBlue,
    fontWeight: "700",
    width: "70%",
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
  justify-end
  items-center
  `),

  quantity: {
    ...tailwind(`
  mr-2
  ml-2
  text-base
  `),
    color: COLORS.deepBlue,
    fontWeight: "700",
    marginTop: 49,
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
  items-center
  `),
    backgroundColor: COLORS.primary,
  },

  minusBtn: tailwind(`
  p-2
  w-7
  h-7
  rounded-full
  bg-gray-200
  flex-row
  justify-center
  items-center
  `),
  plus: {
    ...tailwind(`
  w-5
  h-5
  `),
    tintColor: "#fff",
  },

  minus: {
    ...tailwind(`
  w-6
  h-6
  `),
    tintColor: COLORS.primary,
  },

  deleteButton: {
    ...tailwind(`
   flex-row
   justify-center
   items-center
   p-2
   ml-4
   mr-1
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