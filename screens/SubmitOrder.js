import React from 'react'
import tailwind from "tailwind-rn";
import {
    View,
    ImageBackground,
    Text,
    TouchableOpacity,
} from 'react-native';
import { COLORS, images } from "../constants";
import { FontAwesome } from '@expo/vector-icons'; 
import Constants from 'expo-constants'
import { LinearGradient } from 'expo-linear-gradient';



const SubmitOrder = ({navigation}) => {
    return (
      <View
        style={{
          ...tailwind("w-full flex-1 relative"),
          backgroundColor: COLORS.primary,
          paddingTop: Constants.statusBarHeight,
        }}
      >
        <ImageBackground
          source={images.vegie}
          style={{
            width: "100%",
            height: "100%",
            tintColor: COLORS.darkGray,
          }}
          resizeMode="cover"
        />
        <View
          style={{
            ...tailwind(`
        flex-col
        items-center
        justify-evenly

        absolute
        flex-1
        `),
            top: "10%",
            height: "85%",
          }}
        >
          <Text
            style={tailwind(`
          text-3xl
          font-bold
          text-gray-100
         
          `)}
          >
            Great job!
          </Text>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={[tailwind("text-yellow-500").color, COLORS.secondaryDark]}
            style={tailwind("w-48 h-48 rounded-3xl items-center justify-center")}
          >
            <FontAwesome
              name="thumbs-up"
              size={160}
              color={"white"}
            />
          </LinearGradient>

          <Text
            style={tailwind(`
          text-xl
          font-bold
          text-gray-200
          text-opacity-90
          text-center
        
          px-10
          `)}
          >
            Your delivery will be on your place soon
          </Text>

          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={[tailwind('text-yellow-500').color, COLORS.secondaryDark]}
            style={tailwind(`
            p-4
           
            rounded-full
          `)}
          > 
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("TrackOrder");
              }}
            >
              <Text style={tailwind(`text-gray-100 text-xl font-bold`)}>
                {" "}
                Track order{" "}
              </Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>

        <View
          style={{
            ...tailwind("h-8 absolute bottom-2"),
            width: "30%",
            left: "35%",
            backgroundColor: COLORS.primary,
          }}
        ></View>
      </View>
    );
}

export default SubmitOrder
