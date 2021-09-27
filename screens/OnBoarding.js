import React from 'react'
import tailwind from 'tailwind-rn'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageBackground,
  ScrollView,
  Animated, 
  useWindowDimensions
}
from 'react-native'
import Constants from 'expo-constants'
import {data, images, COLORS, SIZES } from '../constants'
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { BlurView } from "expo-blur";
import {useAnimatedRef, useSharedValue, useDerivedValue, scrollTo} from 'react-native-reanimated'
import { LinearGradient } from 'expo-linear-gradient'

const RenderOnBoardingCard = ({title, subTitle, renderMaterialIcon, isLastCard, cardStyle, scroll, width, index, navigation}) => {

  
  return (
    <BlurView 
     intensity={90}
      style={{ ...styles.card, ...cardStyle }}>
      {/* Card Heading */}
      <Text style={styles.cardHeading}>{title}</Text>
      {/* Description */}
      <Text style={styles.description}>{subTitle}</Text>

      {/* Icon */}
      <View style={tailwind("w-full items-center py-6")}>
        {renderMaterialIcon()}
      </View>

      {/* next */}

      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={[tailwind("text-yellow-500").color, COLORS.secondaryDark]}
        style={{ ...styles.nextBtn, left: isLastCard ? "21%" : "40%" }}
      >
        <TouchableOpacity
          onPress={() => {
            if(scroll.current){
                scroll.current.scrollTo({x: width * (index + 1), animated: true})
            }
            
            if (isLastCard) navigation.navigate("MainMenu");
          }}
        >
          <Text style={styles.nextText}>
            {isLastCard ? "Lets Get started" : "next"}
          </Text>
        </TouchableOpacity>
      </LinearGradient>
    </BlurView>
  );
}

const OnBoarding  = ({navigation}) => {

  const scrollX = React.useRef(new Animated.Value(0)).current;
  const { width: windowWidth } = useWindowDimensions();

  const scrollViewRef = React.useRef(null)
  // const scroll = useSharedValue(0);

  // useDerivedValue(() => {
  //   scrollTo(scrollViewRef, 0, scroll.value * 100, true);
  // })

  function renderAnimationDots(data) {
    const styles = StyleSheet.create({
      normalDot: {
        height: 8,
        width: 8,
        borderRadius: 4,
        backgroundColor: "white",
        marginHorizontal: 4
      },
      indicatorContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        paddingHorizontal: SIZES.padding
      }
    })
    return (
      
    <View style={styles.indicatorContainer}>
    {data?.map((_, imageIndex) => {
      const width = scrollX.interpolate({
        inputRange: [
          windowWidth * (imageIndex - 1),
          windowWidth * imageIndex,
          windowWidth * (imageIndex + 1)
        ],
        outputRange: [8, 16, 8],
        extrapolate: "clamp"
      });
      return (
        <Animated.View
          key={imageIndex}
          style={[styles.normalDot, { width }]}
        />
      );
    })}
  </View>
    )
  }

 

 return (
   <View style={styles.container}>
      <ImageBackground source={images.vegie} style={styles.backImage} resizeMode="cover" />
      <View style={styles.content}>

        {/* Header */}
        <View style={styles.header}>
        <TouchableOpacity onPress={() => {
          navigation.navigate("MainMenu")
        }}>
        <Text style={styles.skipBtn}>Skip</Text></TouchableOpacity>
        </View>
        
        {/* Card */}
        <ScrollView 
        ref={scrollViewRef}
        style={{height: SIZES.height * 0.7}}
        horizontal={true}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event([
            {
              nativeEvent: {
                contentOffset: {
                  x: scrollX
                }
              }
            }
          ],{useNativeDriver: false})}
        >
          {
            data.onBoardingData?.map((item, index) => (
              <RenderOnBoardingCard 
                key={item.title}
                title={item.title}
                subTitle={item.subTitle}
                navigation={navigation}
                scroll={scrollViewRef}
                width={windowWidth}
                {...{index}}
                cardStyle={(() => { 
                  if(index === 1){
                    return tailwind('ml-5 mr-4')
                  }
                  else if(index === 2){
                    return tailwind('mr-5 ml-4')
                  }else{
                    return tailwind('mx-4')
                  }
                  })()}
                  renderMaterialIcon={
                    () => {
                      switch(index){
                       case 0:
                       return (
                         <LinearGradient
                         start={{x:0, y:0}}
                         end={{x:1, y:0}}
                         colors={[tailwind('text-yellow-500').color, COLORS.secondaryDark]}
                         style={tailwind('w-44 h-44 px-2 rounded-3xl')}
                         >
                           <MaterialIcons name="delivery-dining" size={160} color="white"/>
                         </LinearGradient>
                       
                       )
                       case 1:
                       return (
                        <LinearGradient
                         start={{x:0, y:0}}
                         end={{x:1, y:0}}
                         colors={[tailwind('text-yellow-500').color, COLORS.secondaryDark]}
                         style={tailwind('w-44 h-44 px-2 rounded-3xl')}
                         >
                           <Ionicons name="timer-outline" size={160} color="white" />
                         </LinearGradient>
                       )
                       case 2:
                        return (
                        <LinearGradient
                         start={{x:0, y:0}}
                         end={{x:1, y:0}}
                         colors={[tailwind('text-yellow-500').color, COLORS.secondaryDark]}
                         style={tailwind('w-44 h-44 px-2 rounded-3xl mb-4')}
                         >
                           <MaterialIcons name="feedback" size={160} color="white" />
                         </LinearGradient>
                       )

                      }
                    }
                  }
                isLastCard={index === 2}
              />
            ))
          }
        </ScrollView>


        {/* animation dots */}
        {renderAnimationDots(data.onBoardingData, scrollX)}
        </View>
        <View style={{...tailwind('h-9 absolute bottom-2'), width:"30%", left:"35%", backgroundColor:COLORS.primary}}></View>
   </View>
 )
}

const styles = StyleSheet.create({
  container: {
     flex:1,
     backgroundColor: COLORS.primary,
     paddingTop: Constants.statusBarHeight
   }
   ,
   backImage: {
     width: "100%",
     height:"100%",
     tintColor:COLORS.darkGray
  },

   content:{
      position: "absolute",
      flex:1,
      width:"100%",
      top:"10%",
     }
   ,
   
   header: {
    flexDirection:"row",
    justifyContent:"flex-end",
    paddingHorizontal:SIZES.padding,
    alignItems:"center"
   },

   skipBtn:{...tailwind(`
    text-white
    mb-6
    text-base
   `),
   fontWeight: "700",
  },

   card:{...tailwind(`
    justify-evenly
    items-start
    border
    p-4
    mt-6
    mb-8
    rounded-3xl
   `),
    borderColor:COLORS.lightGreen,
    width: SIZES.width * 0.9
   },

cardHeading:{
  ...tailwind(`
  text-white
  text-left
  mb-4
  text-3xl
  `),
  
    fontWeight: "700",
    width:"80%"
  },


description:tailwind(`
  text-left
  text-white
  font-semibold
  text-xl
  `),

cardImage:{
 ...tailwind(`
flex-1
mb-10
h-44
`),
width:"100%",
tintColor: tailwind('text-yellow-400').color

},

nextBtn:{
  ...tailwind(`
  absolute
  py-4
  px-6
  rounded-full
  `)
,
  top:"100%",
  backgroundColor: COLORS.secondary
},

nextText:{...tailwind(`
  capitalize
  text-xl
  text-white
  `),
  fontWeight: "700",
  }
})

export default OnBoarding