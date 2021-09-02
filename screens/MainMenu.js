import React from 'react'
import tailwind from 'tailwind-rn'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageBackground,
  FlatList
}
  from 'react-native'
import Constants from 'expo-constants'
import {Card} from '../components'
import { StatusBar } from 'expo-status-bar';
import { images, icons, COLORS, SIZES, FONTS } from '../constants'


const RenderCard = ({foodName, ingredients, description, image, price, navigation}) => {
        return (
         
          <TouchableOpacity onPress={() => {navigation.navigate(
            'Product',
            {
              foodName, 
              ingredients, 
              image, 
              description,
              price
            }
            )}}>
          <Card cardStyles={tailwind(`
          mt-4 
          flex-1
          flex-row
          justify-between
          items-center
          p-4
          `)}>
          
          {/*Heading & Description*/}
          <View style={[
            tailwind(`
            justify-between
            items-center
            `),
            {}
          ]
          }>
          <View >
            <Text 
            style={[tailwind(`
            font-bold
            text-left
            `), {
              ...FONTS.body3,
              color: COLORS.deepBlue
            }]}>{foodName}</Text>
            <Text
            style={[tailwind(`
            font-normal
            text-left
     
            `), {
              ...FONTS.body4,
              width:SIZES.width * 0.48,
              color: COLORS.darkGray
            }]}>{ingredients}</Text>
          </View>

          <View style={tailwind(`w-full`)}><Text style={[
            tailwind(`
          text-left
          mt-4
          font-semibold
          `), {
            ...FONTS.body2,
            color: COLORS.deepBlue
          }]}>
          ${price}
          </Text>
          </View>
          
          </View>

          {/*Image */}

          <Image source={image} style={tailwind('w-28 h-28 pr-2')}/>
          
          </Card>
          </TouchableOpacity>
     
          
        )
    }

const MainMenu = ({navigation}) => {

  const menuData = [
    { id:1,
      foodName:'Soloi Salad',
      description: `Enjoy freshly roasted fish and leafy vegies on the side`,
      ingredients:`Leafy Vegies, Roasted Fish, Red Tomatoe, garlic, olive oil, Served with red wine`,
      price: 7.90,
      image:images.food,
      navigation
    },
    {  
      id:2,
      foodName:'Pasta Bolongesse',
      description: `Enjoy Pasta with fried beef red hot sauce`,
      ingredients:`Chilli, red hot sauce, garlic powder, pasta, Tomatoe sauce, red wine`,
      price: 2.50,
      image:images.pasta,
      navigation
    },
     {
       id:3,
      foodName:'Pepperoni  Pizza', 
      description: `Enjoy Freshly backed pizza with pinnaple toppings`,
      ingredients:`Cheese, Mayonesse, tomatoe sauce, ketchup ,Onion rings, pinnaple chunks,bacon, beef, corn`,
      price: 5.50,
      image:images.pizza,
      navigation
    },
      {
        id:4,
      foodName:'Chicken Burger',
      description: `Enjoy a three layered chicken burger with a cold cocacola`,
      ingredients:`Buns, White oninos, Rasted Chicken meat, fresh vegies, Tomatoe, Cheese, Mayonesse, Tomamtoe sauce `,
      price: 2.45,
      image:images.burger,
       navigation
    },

     {
       id:5,
      foodName:'Black Coffee',
      description: `Enjoy a hot beverage of finely roasted coffee beans `,
      ingredients:`Freshly roasted coffebeans, sugar, milk cream, milk, hot water `,
      price: 3.45,
      image:images.blackCoffee,
      navigation
    },
    
  ]

  const rating = 4.8
  const price = 5.56

  function renderMenuHeader () {
    const styles = StyleSheet.create({
       container:[tailwind(`py-6 justify-center items-center `), {}],
       headerWrapper:[tailwind(`
       flex-row
       justify-between
       items-center
       w-full
       `), {}],
       heading:[tailwind(`text-left font-bold`), {...FONTS.body1, color:COLORS.deepBlue}],
       ratingsWrapper:[tailwind(`flex-row justify-between items-center`), {}],
       star:[tailwind(`w-4 h-4`), {tintColor: COLORS.lightYellow}],
       rating:[tailwind(`font-normal ml-2`), {...FONTS.body4, color:COLORS.darkGray}],
       subtitleWrapper:[tailwind(`
        flex-row
       justify-between
       items-center
       pt-4
       w-full
       `), {}],
       timeWrapper:[tailwind(`flex-row justify-between items-center`), {}],
       clock:[tailwind(`w-7 h-7`), { tintColor: COLORS.primary}],
       time:[tailwind(`text-right font-normal ml-1`), {...FONTS.body4, color:COLORS.darkGray}],
       priceWrapper:[tailwind(`flex-row justify-between items-center`), {}],
       deliveryText:[tailwind(`text-right font-normal mr-2`), {...FONTS.body4, color:COLORS.darkGray}],
       price:[tailwind(`font-bold text-right`), {color:COLORS.deepBlue}],
       verticalDivider:tailwind(`h-1 w-full mt-6  rounded-full bg-gray-200`)

    })

    return (
      <View style={styles.container}>
          {/* Header */}
          <View style={styles.headerWrapper}>
            <Text style={styles.heading}>Eric's Cafe</Text>
            <View style={styles.ratingsWrapper}>
              <Image source={icons.star} style={styles.star}/>
              <Text style={styles.rating}>{rating}</Text>
            </View>
          </View>
            {/* Sub-Heading */}
            <View style={styles.subtitleWrapper}>
              <View style={styles.timeWrapper}>
                <Image source={icons.clock} style={styles.clock}/>
                <Text style={styles.time}>25 - 40 min</Text>
              </View>

              <View style={styles.priceWrapper}>
                <Text style={styles.deliveryText}>delivery</Text>
                <Text style={styles.price}>${price}</Text>
              </View>
            </View>

          <View style={styles.verticalDivider}></View>

      </View>
    )
  }


const renderMenuBody = ({item}) => {
    return (
       <RenderCard 
       foodName={item.foodName}
       ingredients={item.ingredients}
       image={item.image}
       description={item.description}
       price={item.price}
       navigation={item.navigation}
       />
    )
  }


  function renderMenuFooter (navigation) {
    const styles = StyleSheet.create({
      container:[tailwind(`
        flex-row
        mt-4
        justify-evenly
        items-center
        bg-white
        rounded-full
        px-1
        py-6
      `),{
      }],
      image:[tailwind(`
      w-6
      h-6
      `), {
        tintColor: COLORS.darkGray
      }]

    })

    return (
      <View style={styles.container}>
      <TouchableOpacity>
        <Image source={icons.home} style={[tailwind('w-7 h-7'), {tintColor: COLORS.secondary }]}/>
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={icons.person} style={styles.image}/>
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={icons.love} style={styles.image}/>
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={icons.cart} style={styles.image}/>
      </TouchableOpacity>
      </View>
    )
  }


  return (

    <View style={[tailwind('flex-1'), styles.backImagWrapper]}>
      {/* Image background */}
      <ImageBackground source={images.vegie} resizeMode="cover" style={styles.backImage} />
      {/* Back */}
      <TouchableOpacity style={styles.back} onPress={() => { navigation.goBack() }}>
        <Image source={icons.back} style={styles.icon} />
      </TouchableOpacity>

        {/* Cart */}
      <TouchableOpacity style={styles.cart} onPress={() => { navigation.navigate('Cart', { 
           foodName: "",
           cost : 0,
           quantity : 0}) }}>
        <Image source={icons.cart} style={styles.icon} />
      </TouchableOpacity>


    <View style={styles.menuContainer}>
        {renderMenuHeader()}

        <Text style={styles.heading}>
          Main menu
        </Text>

      {/*Cards */}
      <FlatList
        showsVerticalScrollIndicator={false}
        style={tailwind('mt-2 mb-4')}
        data={menuData}
        keyExtractor={item => item.id}
        renderItem={renderMenuBody}
      />

      </View>

      {/* Footer 

          {renderMenuFooter()}

      */}

    <StatusBar style="light"/>
    </View>

  )
}

const styles = StyleSheet.create({
  backImagWrapper: {
    backgroundColor: COLORS.secondary
  },
  backImage: tailwind(`w-full h-1/2`),
  back: [tailwind(`
      absolute
      bg-white
      p-2
      flex-row
      justify-center
      items-center
      rounded-full
    `), { top: Constants.statusBarHeight * 2, left: SIZES.padding }],

  cart: [tailwind(`
      absolute
      bg-white
      p-2
      flex-row
      justify-center
      items-center
      rounded-full
    `), { top: Constants.statusBarHeight * 2, right: SIZES.padding }],

    icon: [tailwind(`
      w-5
      h-5
      `), {
      tintColor: COLORS.secondary
    }],

  menuContainer:[
    tailwind(`w-full px-6 rounded-t-3xl bg-gray-100 absolute`),
    { 
      top:"20%",
      height:"80%"
      }],
       
      heading:[tailwind(`
      font-bold
      `), {
        ...FONTS.body2,
        color: COLORS.deepBlue
      }],
})

export default MainMenu