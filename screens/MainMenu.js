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
import {Card, FooterMenu} from '../components'
import { StatusBar } from 'expo-status-bar';
import { images, data, icons, COLORS, SIZES } from '../constants'
import util from '../utils';



const RenderCard = ({foodName, ingredients, description, image, imageStyle, calories, price, navigation}) => {
        return (
         
          <TouchableOpacity onPress={() => {navigation.navigate(
            'Product',
            {
              foodName, 
              ingredients, 
              image, 
              description,
              calories,
              cost:price
            }
            )}}>
          <Card cardStyles={{...tailwind(`
          mt-4 
          flex-1
          flex-row
          justify-between
          items-center
          mx-1
          p-4
          `)}}>
          
          {/*Heading & Description*/}
          <View style={
            tailwind(`
            justify-between
            items-center
            `)
          }>
          <View >
            <Text 
            style={{
              ...tailwind(`
            text-left
            text-base
            `),
            fontWeight: "700",
              color: COLORS.deepBlue
            }}>{foodName}</Text>
            <Text
            style={{
              ...tailwind(`
            font-normal
            text-left
            text-sm
            `), 
              
              width:SIZES.width * 0.48,
              color: COLORS.darkGray
            }}>{ingredients}</Text>
          </View>

          <View style={tailwind(`w-full`)}><Text style={{
            ...tailwind(`
          text-left
          mt-4
          font-semibold
          text-xl
          `), 
            color: COLORS.deepBlue
          }}>
          ${util.formatPrice(price)}
          </Text>
          </View>
          
          </View>

          {/*Image */}

          <Image source={image} style={{...tailwind('pr-2'), ...imageStyle}}/>
          
          </Card>
          </TouchableOpacity>
     
          
        )
    }

const MainMenu = ({navigation}) => {


  const rating = 4.8
  const price = 5.56

  function renderMenuHeader () {
    const styles = StyleSheet.create({
       container:tailwind(`py-6 justify-center items-center `),

       headerWrapper:tailwind(`
       flex-row
       justify-between
       items-center
       w-full
       `), 

       heading:{
         ...tailwind(`text-left text-3xl`),
         fontWeight: "700", 
         color:COLORS.deepBlue},

       ratingsWrapper:tailwind(`flex-row justify-between items-center`), 

       star:{...tailwind(`w-4 h-4`), tintColor: COLORS.lightYellow},

       rating:{...tailwind(`font-normal ml-2 text-sm`),  color:COLORS.darkGray},

       subtitleWrapper:tailwind(`
        flex-row
       justify-between
       items-center
       pt-4
       w-full
       `), 

       timeWrapper:tailwind(`flex-row justify-between items-center`),

       clock:{...tailwind(`w-7 h-7`), tintColor: COLORS.primary},

       time:{...tailwind(`text-right font-normal ml-1 text-sm`), color:COLORS.darkGray},

       priceWrapper:tailwind(`flex-row justify-between items-center`),

       deliveryText:{...tailwind(`text-right font-normal mr-2 text-sm`),  color:COLORS.darkGray},

       price:{...tailwind(`text-right`), fontWeight: "700", color:COLORS.deepBlue},

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
                <Text style={styles.price}>${util.formatPrice(price)}</Text>
              </View>
            </View>

          <View style={styles.verticalDivider}></View>

      </View>
    )
  }


const renderMenuBody = ({item}) => {
    return (
       <RenderCard 
       foodName={item.title}
       ingredients={item.ingredients}
       image={item.image}
       description={item.description}
       price={item.price}
       calories={item.calories}
       navigation={item.navigation}
       imageStyle={item.imageStyle}
       />
    )
  }



  return (

    <View style={{...tailwind('flex-1'), ...styles.backImagWrapper}}>
      {/* Image background */}
      <ImageBackground source={images.vegie} resizeMode="cover" style={styles.backImage} />
      {/* Back */}
      <TouchableOpacity style={styles.back} onPress={() => { navigation.goBack() }}>
        <Image source={icons.back} style={styles.icon} />
      </TouchableOpacity>

  

    <View style={styles.menuContainer}>
        {renderMenuHeader()}

        <Text style={styles.heading}>
          Main menu
        </Text>

      {/*Cards */}
      <FlatList
        showsVerticalScrollIndicator={false}
        style={tailwind('mt-2 mb-4 ')}
        data={data.dummyData(navigation)}
        keyExtractor={item => `${item.id}`}
        renderItem={renderMenuBody}
      />

      </View>

      {/* Footer */}
      <FooterMenu  focusIconBtn={'MainMenu'} navigation={navigation} />

  

    <StatusBar style="light"/>
    </View>

  )
}

const styles = StyleSheet.create({
  backImagWrapper:tailwind('bg-gray-100'),

  backImage: {...tailwind(`w-full h-1/2`),  backgroundColor: COLORS.secondary },

  back: {...tailwind(`
      absolute
      bg-white
      p-2
      flex-row
      justify-center
      items-center
      rounded-full
    `),  top: Constants.statusBarHeight * 2, left: SIZES.padding },


  cart: {...tailwind(`
      absolute
      bg-white
      p-2
      flex-row
      justify-center
      items-center
      rounded-full
    `),  top: Constants.statusBarHeight * 2, right: SIZES.padding },

    icon: {...tailwind(`
      w-5
      h-5
      `), 
      tintColor: COLORS.secondary
    },

  menuContainer:{
    ...tailwind(`w-full px-6 rounded-t-3xl bg-gray-100 absolute`),
      top:"20%",
      height:"70%"
      },
       
      heading:{...tailwind(`
      text-xl
      `), 
        fontWeight: "700",
        color: COLORS.deepBlue
      },
})

export default MainMenu