import React from 'react'
import tailwind from 'tailwind-rn'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  FlatList,

}
from 'react-native'
import Constants from 'expo-constants'
import { MaterialIcons } from '@expo/vector-icons';
import {icons, COLORS, data } from '../constants'
import { HorizontalFilter, FooterMenu } from '../components';
import utils from '../utils';


const Favourites = ({ navigation }) => {


  const [fav, setFav] = React.useState(false)
  const [pizza, setPizza] = React.useState(false)
  const [sushi, setSushi] = React.useState(false)
  const [pasta, setPasta] = React.useState(false)
  const [coffee, setCoffee] = React.useState(false)
  const [Burger, setBurger] = React.useState(false)
  const [hotDog, setHotDog] = React.useState(false)
  const [pinnapleJuice, setPinnapleJuice] = React.useState(false)

  const menu =  [
    {topping:"Pizza", state:pizza, setter:setPizza},
    {topping:"Sushi", state:sushi, setter:setSushi},
    {topping:"Pasta", state:coffee, setter:setCoffee},
    {topping:"Coffee", state:pasta, setter:setPasta},
    {topping:"Burger", state:Burger, setter:setBurger},
    {topping:"Hot Dog", state:hotDog, setter:setHotDog},
    {topping:"Pinnaple Juice", state:pinnapleJuice, setter:setPinnapleJuice}
  ]

  function CardMenu ({image, title, price}) {
    return(
      <View style={tailwind(`
      relative
      w-full
      bg-gray-100
      h-48
      `)}>

       {/* Shadow View */}
       <View style={{...tailwind(`
       h-40
       w-full
       rounded-t-3xl
       bg-transparent
       relative
       
      `),
      ...COLORS.shadow
    
      }}>
      {/* Image */}
      <Image 
      source={image}
      resizeMode="cover"
      style={tailwind(`
       h-full
       w-full
       rounded-t-3xl
       absolute
       
      `)} />
      {/* Fav Button */}
      <TouchableOpacity 
        onPress={
          () => {
            setFav(!fav)
          }
        }
      style={
        tailwind(`
        items-center
        justify-center
        p-3
        bg-white
        rounded-full
        absolute
        top-4
        right-4
        `)
      }>
         <Image source={icons.love}  style={{...tailwind('w-4 h-4'), tintColor:(!fav ? tailwind('text-gray-400').color : COLORS.secondary)}}/>
      </TouchableOpacity>
      </View>

   

      {/* Card Footer */}
      <TouchableOpacity
       style={{...tailwind(`
      flex-row
      justify-between
      items-center
      bg-white
      absolute
      inset-x-0
      top-40
      flex-1
      px-4
      py-4
      rounded-b-3xl
      z-10
      `),
      ...COLORS.shadow
      }}
      
      onPress={
        () => {

          navigation.navigate("MainMenu",{ 
            restaurant: title
          })
        }
      }
      >
        <Text style={{
          ...tailwind(`
          text-xl
          font-bold
          `),
          color: COLORS.deepBlue
        }}>{title}</Text>
       <View style={
         tailwind(`
         flex-row
         items-center
         `)
       }>
       <Text style={tailwind(`
       text-xs
       font-normal
       text-gray-500
       `)}>Delivery</Text>
       <Text style={{
         ...tailwind(`
          ml-2
          text-2xl
       `),
       color:COLORS.primary
       }}>${utils.formatPrice(price)}</Text>

       </View>
      </TouchableOpacity>

      </View>
    )
  }

  return (
    <View style={tailwind(`
    flex-1
    w-full
    justify-evenly
    `)}>
      <View
      style={{
        ...tailwind(`
        flex-row
        justify-between
        items-center
        px-4
        `),
        paddingTop: Constants.statusBarHeight * 2
      }}
      >
      <Text style={{...tailwind(`
        text-3xl
        font-bold
        `),
        color:COLORS.deepBlue}}>I want to eat ...</Text>
        <MaterialIcons name="menu" size={32} color={COLORS.deepBlue} />
      </View>

      <View style={tailwind('w-full mt-2 px-2')}>
        <HorizontalFilter data={menu}/>
      </View>

      {/* Card Flat list */}
      
        
          <FlatList
            showsVerticalScrollIndicator={false}
            keyExtractor={item => `${item.id}`}
            data={data.favouritesData}
            style={
              tailwind(`
              w-full
              px-4
              flex-1
              mt-2
            `)
           
            }
            renderItem={({item}) => {
               return (
                 <View style={tailwind(`w-full px-2 ${item.id === 1 ? 'mt-2 mb-8' : 'my-8'}`)}>
                   <CardMenu
                     image={item.image}
                     title={item.title}
                     price={item.price}
                   />
                 </View>
               );
            }}
          />
        
      {/* Footer */}
      <View style={tailwind('w-full border border-black')}>
      
      <FooterMenu 
      focusIconBtn={'Favourites'}
      navigation={navigation} />
      </View>
        
      
    </View>
  )
}
const styles = StyleSheet.create({
  
})

export default Favourites