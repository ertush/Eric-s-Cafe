import React from 'react'
import tailwind from 'tailwind-rn'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  ImageBackground,
}
from 'react-native'
import {images, icons, COLORS, SIZES } from '../constants'

const Product = ({navigation, route}) => {

 
const subtitle = `Open from 10 am - 11pm Daily`

const {foodName, image, price, ingredients, description} = route.params
const baseCost = price

  // Toppings
  const [pepper, setPepper] = React.useState(false)
  const [tomato, setTomato] = React.useState(false)
  const [salt, setSalt] = React.useState(false)
  const [chilli, setChilli] = React.useState(false)
  const [mayonnese, setMayonnese] = React.useState(false)
  const [gingerPowder, setGingerPowder] = React.useState(false)
  const [pinnapleJuice, setPinnapleJuice] = React.useState(false)

  const toppings =  [
      {topping:"Pepper", state:pepper, setter:setPepper},
      {topping:"Tomamto", state:tomato, setter:setTomato},
      {topping:"Chilli", state:chilli, setter:setChilli},
      {topping:"Salt", state:salt, setter:setSalt},
      {topping:"Mayonnese", state:mayonnese, setter:setMayonnese},
      {topping:"Ginger Powder", state:gingerPowder, setter:setGingerPowder},
      {topping:"Pinnaple Juice", state:pinnapleJuice, setter:setPinnapleJuice}
    ]

  let [quantity, setQuantity] = React.useState(1)
  let [cost, setCost] = React.useState(baseCost)

   



  function renderHeader(){
    return(
      <View style={{...tailwind('flex flex-row justify-between items-center absolute pt-8 h-10 w-full px-6'), top:SIZES.radius}}>
      <TouchableOpacity onPress={() => {navigation.goBack()}} style={tailwind('flex-row items-center p-2 bg-white rounded-full')}>
        <Image source={icons.back} resizeMode="contain" style={{...tailwind('w-5 h-5'), tintColor:COLORS.secondary}}/>
      </TouchableOpacity>

      <TouchableOpacity 
      onPress={() => {navigation.navigate('Favourites')}}
      style={tailwind('flex-row items-center p-3 bg-white rounded-full')}>
        <Image source={icons.love}  style={{...tailwind('w-4 h-4'), tintColor:COLORS.secondary}}/>
      </TouchableOpacity>

      
      </View>
    )
  }

  function renderDish(){

    const renderFlameIcon = () => {
      return(
         <View style={tailwind('flex-row justify-start items-end')}>
        <View style={tailwind('w-8 h-8')}>
          <View style={{...tailwind(' h-9 rounded-full flex-1'), backgroundColor:COLORS.secondary}}>
                 <View style={tailwind('w-4 h-4 bg-gray-100 rounded-full absolute -top-2')}>
                  </View>
                  <View style={tailwind('w-4 h-3 bg-yellow-300 rounded-full absolute left-1/4 top-5')}>
                  </View>
          </View>
        </View>
        <Text style={{...tailwind('text-gray-400 font-bold text-base'), paddingLeft: SIZES.radius}}> 78 Calories</Text>
        </View>
      )
    }

    return (
      <View style={tailwind('flex-1 ')}>
          {/* Title */}
          <View style={{...tailwind('flex-row justify-between items-center w-full'), paddingHorizontal:SIZES.padding}}>
           <Text style={tailwind('font-bold text-green-700 text-xl')}>{foodName}</Text>
           <Text style={tailwind('font-normal text-xl')}>${baseCost}</Text>
          </View>
          {/* Description */}
          <Text style={{...tailwind(' text-gray-400 text-left text-xs font-bold pt-4'), paddingHorizontal:SIZES.padding}}>{ingredients}</Text>

          <View style={{...tailwind('pt-4'), paddingLeft:SIZES.padding}}>
          {renderFlameIcon()}
          </View>

      </View>
    )
  }

  function renderToppingTags(_toppings) {

    return(
      _toppings.map(
        ({topping, state, setter}, index) => (
          <TouchableOpacity 
          key={index}
          onPress={() => {setter(!state)}}
          style={tailwind(
            `
            bg-white
            p-2
            ${index === 0 ? 'mr-2' : 'mx-2'}
            rounded-3xl
            border-2
            ${state ? 'border-yellow-500' : 'border-gray-200' }

            `
          )}>
          <Text style={
            {
              ...tailwind(`
          text-xs  
              `),
            fontWeight: "700",
            color:(state ? 
            COLORS.secondary :
            COLORS.darkGray
            ),
marginHorizontal:SIZES.radius
              }
          }>{topping}</Text>
          </TouchableOpacity>
        )
      )
    )
  }

 return (
   <View style={{...styles.container}}>

   {/* Header */}
      <View style={{backgroundColor: COLORS.primary, height:"40%"}}>    
        <ImageBackground source={images.vegie} style={{...tailwind('w-full h-full'), tintColor:COLORS.primary}} resizeMode="cover"/>
        {/* Title */}
          <View style={{...tailwind('text-center items-center absolute w-full'), top:"26%"}}>
            <Text style={tailwind('text-white font-bold capitalize text-3xl')}>{foodName}</Text>
            <Text style={tailwind('text-gray-200 font-bold text-center text-base px-6')}>{description}</Text>
            <Text style={tailwind('text-gray-200 font-bold text-center text-base')}>{subtitle}</Text>
          </View>

        {renderHeader()}
        <Image source={image} style={{...tailwind('w-44 h-44 absolute'), left:"26%", right:"26%", top:"70%"}} resizeMode="cover"/>
      </View>

    {/* Dish & Description */}
    <ScrollView showsVerticalScrollIndicator={false} style={tailwind('mt-24')}>
    {renderDish()}
    
    {/* Quantity */}
      <View style={{...tailwind('justify-center items-start  flex-1'), paddingHorizontal:SIZES.padding}}>
      <Text style={tailwind('font-bold text-green-700 pt-6 text-xl')}>Quantity</Text>
      <View style={tailwind('flex-row justify-start items-center pt-4')}>
         <TouchableOpacity
         onPress={() => {setQuantity(() => {
           quantity+=1; 
           (quantity < 1 ? quantity=1 : quantity); 
           setCost((baseCost *  quantity).toPrecision(3));
           return quantity;})
           }} 
         style={tailwind(`
         rounded-full
         p-2 
         bg-white
         bg-white 
         rounded-full 
         flex-row 
         justify-center 
         items-center 
        `)}>
         <Image source={icons.plus} style={{...tailwind('w-8 h-8'), tintColor:COLORS.primary}} />
         </TouchableOpacity>

         <Text style={tailwind('ml-4 text-xl font-bold')}>{quantity}</Text>

         <TouchableOpacity 
         onPress={() => {setQuantity(() => {
           quantity-=1; 
           (quantity < 1 ? quantity=1 : quantity); 
           setCost((baseCost *  quantity).toPrecision(3)); 
           return quantity;})
           }} 
         style={{...
           tailwind(
           `
         rounded-full 
         p-2 
         ml-4
         bg-white
         bg-white 
         rounded-full 
         flex-row 
         justify-center 
         items-center 
           `
         ),
           shadowColor:"#fefefe",
           shadowRadius:SIZES.radius,
           shadowOpacity: 1,
           shadowOffset: 2
         }
         }>
         <Image source={icons.minus} style={{...tailwind('w-8 h-8'), tintColor:COLORS.primary}} />
         </TouchableOpacity>
      </View>

      {/* Filter Tags */}

        <Text style={tailwind('font-bold text-green-700 pt-6 text-xl')}>Add Extra Toppings</Text>

    <ScrollView
    horizontal
    showsHorizontalScrollIndicator={false}

     style={tailwind(
      `
       my-6
       h-10
      `
    )}>
    {renderToppingTags(toppings)}
    </ScrollView>
         
      </View>

      </ScrollView>

         {/* Add to Cart */}

        <View style={
          tailwind(`
          flex-row
          justify-between
          items-center
          px-6
          py-4
          mx-2
          mb-2
          bg-white
          rounded-full
          `)
        }>
        {/* label */}
        <View style={
          tailwind(`
          justify-center
          items-start
          `)
        }>
          <Text style={   
            tailwind(`
              font-bold
              text-base
            `)
           
          }>Total price</Text>

          <Text style={
            
            tailwind(`
              font-bold
              text-xl
            `)
          }>$ {cost}</Text>
        </View>
          
        {/* Button */}
        <TouchableOpacity
        onPress={() => {
          navigation.navigate('Cart', {
           foodName,
           cost,
           quantity
        })
        }}
        style={{...
          tailwind(`
           flex-row
           justify-start
           items-center
           rounded-full
           px-4
           py-3
          `),
             backgroundColor:COLORS.secondary
          }
        }
        >
        <Text style={
          tailwind(`
            font-bold
            text-white
            text-base
          `)
        }>Add to cart</Text>

        <Image source={icons.cart} style={{...tailwind('w-7 h-7 ml-2'), tintColor: '#fff'}} />
        </TouchableOpacity>

        </View>
   </View>
 )
}

const styles = StyleSheet.create({
  container: tailwind(`
  flex-1
  bg-gray-100
  `),
 
})

export default Product