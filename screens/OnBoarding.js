import React from 'react'
import tailwind from 'tailwind-rn'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageBackground,
}
from 'react-native'
import Constants from 'expo-constants'
import {images, icons, COLORS, SIZES, FONTS } from '../constants'

const OnBoarding  = ({navigation}) => {

  function renderAnimationDots() {
    return (
      <View style={[tailwind(`
      flex-row
      justify-evenly
      items-center
      `),
      {
        width:"20%",
        alignSelf:"center",
        marginTop:"30%"
        
      }]}>
      <View style={[tailwind(`
      w-5
      h-3
      rounded-full
      `),{backgroundColor:COLORS.secondary}]}></View>
      <View style={[tailwind(`
      w-3
      h-3
      rounded-full
      `),{backgroundColor:COLORS.secondary}]}></View>
      <View style={[tailwind(`
      w-3
      h-3
      rounded-full
      `),{backgroundColor:COLORS.secondary}]}></View>
      
      </View>
    )
  }

 return (
   <View style={styles.container}>
      <ImageBackground source={images.vegie} style={styles.backImage} resizeMode="cover" />
      <View style={styles.content}>

        {/* Header */}
        <View style={styles.header}>
        <TouchableOpacity onPress={() => {navigation.navigate("Product")}}>
        <Text style={styles.skipBtn}>Skip</Text></TouchableOpacity>
        </View>
        
        {/* Card */}
        <View style={styles.card}>
          {/* Card Heading */}
          <Text style={styles.cardHeading}>
          Fast delivery, perfect service
          </Text>
          {/* Description */}

                <Text style={styles.description}>Get the best delivery service in the country, we deliver really  fast</Text>

          {/* Image */}
                <Image source={images.delivery} resizeMode="contain"  style={styles.cardImage} />

          {/* next */}
          <TouchableOpacity 
          onPress={() => {navigation.navigate("Product")}}
          style={styles.nextBtn}><Text style={styles.nextText}>next</Text></TouchableOpacity>
        </View>

        {/* animation dots */}
        {renderAnimationDots()}
        </View>
   </View>
 )
}

const styles = StyleSheet.create({
  container: [tailwind(` 
    flex-1 
   `),
   {
     backgroundColor: COLORS.primary,
    paddingTop: Constants.statusBarHeight
   }
   ],
   backImage: [tailwind('w-full h-full'), {tintColor:COLORS.darkGray}],

   content:[
     tailwind(`absolute flex-1 w-full`),
     {
      top:"20%"
     }
   ],
   
   header: tailwind(`
   flex-row
   justify-end
   px-6
   items-center
   `),

   skipBtn: [tailwind(`
    font-bold
    text-white
    mb-6
   `), {
     ...FONTS.body3

   }],

   card: [tailwind(`
    justify-evenly
    items-start
    p-4
    mx-4
    border
    rounded-3xl
    flex-1
   `),
   {
     backgroundColor: COLORS.transparentLightGray1,
     borderColor:COLORS.lightGreen
   }],

cardHeading:[
  tailwind(`
  text-white
  text-left
  font-bold
  mb-4
  `),
  {
    ...FONTS.body1,
    width:"80%"
  }
],

description:[
  tailwind(`
  text-left
  text-white
  font-semibold
  `),
  {
    ...FONTS.body2,

  }
],

cardImage:[tailwind(`
flex-1
h-64
`),
{width:"100%"}
],

nextBtn:[
  tailwind(`
  absolute
  py-4
  px-6
  rounded-full
  `)
,
{
  top:"100%",
  left:"40%",
  backgroundColor: COLORS.secondary
  }
],

nextText:[
  tailwind(`
  font-bold
  capitalize
  `),
  {
    ...FONTS.body2
  }
]

    
})

export default OnBoarding