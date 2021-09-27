import React from "react";
import tailwind from "tailwind-rn";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  SafeAreaView
} from "react-native";

import Constants from "expo-constants";
import {data} from '../constants'
import {LinearGradient} from 'expo-linear-gradient';
import MapView, {Marker} from 'react-native-maps';
import { images, icons, COLORS, SIZES } from "../constants";
import { Heading, RadioButton } from "./../components";

const Order = ({navigation}) => {
  const [radioBtnState, _] = React.useState(false);

  const renderVisaCard = () => {
    return (
      
      <LinearGradient 
        start={{x: 0, y: 0}} 
        end={{x: 1, y: 0}}
        colors={[tailwind('text-yellow-500').color, COLORS.secondary]}
        style={{
          ...tailwind(`
            mt-6
            flex-col
            justify-end
            items-center
            w-full
            rounded-3xl
            w-full
            px-6
            pt-4
            `),
            ...COLORS.shadow,
            flexGrow:1,
          backgroundColor: COLORS.secondary
        }}
      >
        <View
          style={tailwind(`
          w-full
          flex-row
          justify-center
          items-center
        `)}
        ></View>

        <View style={tailwind(`flex-row items-center justify-start w-full `)}>
          <View
            style={tailwind(`
        w-10
        bg-yellow-400
        rounded-xl
        flex-col
        justify-center
        items-center
  
        h-10
        `)}
          >
            <View
              style={tailwind(`
          w-full
          h-1
          bg-gray-500
          rounded
        `)}
            ></View>

            <View
              style={{
                ...tailwind(`
                  w-1/2
                  h-4
                  rounded-full
                `),
                borderWidth: 3,
                borderColor: tailwind("text-gray-500").color,
              }}
            ></View>

            <View
              style={tailwind(`
                  w-full
                  h-1
                  bg-gray-500
                  rounded
                `)}
            ></View>
          </View>
          <View
            style={{ ...tailwind("flex-row items-center"), marginLeft: "25%" }}
          >
            <View style={tailwind("flex-col")}>
              <Text
                style={tailwind(
                  "text-xs font-normal text-white text-opacity-70 mr-2"
                )}
              >
                DEC
              </Text>
              <Text
                style={tailwind(
                  "text-xs font-normal text-white text-opacity-70"
                )}
              >
                THU
              </Text>
            </View>
            <Text
              style={tailwind(`
              text-white
              text-opacity-70
              font-bold
              text-base
              
              `)}
            >
              12/20
            </Text>
          </View>
        </View>

        <View
          style={tailwind(`
            flex-row
            w-full
            justify-between
            items-center
            
            `)}
        >
          <Text
            style={tailwind(`
              text-white
              text-opacity-70
              font-bold
              text-base
              `)}
          >
            2394 5432 1239 6743{" "}
          </Text>

          <Image
            source={images.visa}
            style={{ ...tailwind("w-16 h-16"), tintColor: "#fff" }}
          />
        </View>
    </LinearGradient>
    );
  };


  return (
    <SafeAreaView
      style={{
        marginTop: Constants.statusBarHeight * 2,
        paddingHorizontal: SIZES.padding,
        height: Dimensions.get('window').height
      }}
    >
      {/* Screen heading */}
      <Heading
        title={"Confirm Order"}
        navigation={navigation}
      />
      {/* Shipping Area */}
      <View
        style={tailwind(`
          flex
          flex-col
          w-full
          items-center
          mt-8
        `)}
      >
        <View
          style={{
            ...tailwind(`
            flex-row
            justify-between
            items-center
            w-full
            `),
          }}
        >
          <View style={tailwind(`flex-row items-center`)}>
            <Text
              style={{
                ...tailwind(`
              text-base
              font-bold
              text-left
              mr-2
              `),
                color: COLORS.deepBlue,
              }}
            >
              Shipping
            </Text>
            <Text
              style={{
                ...tailwind(`
              text-base
              font-semibold
              text-left
              text-gray-400
              `),
              }}
            >
              Water St 43, 00021
            </Text>
          </View>

          <TouchableOpacity>
            <Text
              style={{
                ...tailwind(`
              text-base
              font-semibold
              text-left
              text-gray-400
              `),
                color: COLORS.secondary,
              }}
            >
              Edit
            </Text>
          </TouchableOpacity>
        </View>

        {/* Map */}

        <MapView
          customMapStyle={data.customMapStyles}
          initialRegion={data.initialCoordinates}
          style={{
            ...tailwind(`w-full mt-4 rounded-3xl mx-6`),
            height: SIZES.height * 0.25,
          }}
        >
         
        </MapView>
      </View>

      {/* Payment method */}

      <View
        style={tailwind(`
        flex-col
        items-start
        mt-6
        `)}
      >
        {/* Radio Button Section */}
        <RadioButton
          label={"Cash"}
          initialState={radioBtnState}
          onPressCb={(state, setter) => {
            setter(!state)
          }}
        />
        <View
          style={tailwind("mt-4 flex-row justify-between items-center w-full")}
        >
          <RadioButton
            label={"By Card"}
            initialState={!radioBtnState}
            onPressCb={(state, setter) => {
              setter(!state)
            }}
          />

          <View
            style={tailwind(`
       flex-row
       items-center
       `)}
          >
            <Image
              source={icons.plus}
              style={{
                ...tailwind(`
       w-5
       h-5
       mr-4
       `),
                tintColor: COLORS.secondary,
              }}
            />

            <Text
              style={{
                ...tailwind(`
       text-base
       font-bold
       `),
                color: COLORS.secondary,
              }}
            >
              Add another card
            </Text>
          </View>
        </View>
      </View>

      {/* Visa Card */}

      {renderVisaCard()}

      <View></View>

      {/* Order Button */}
      <View
        style={{...tailwind(`
        flex-row
        justify-center
        items-center
        w-full
        mb-6
        `),
        flexGrow:2
        }}
      >
        <LinearGradient 
        start={{x: 0, y: 0}} 
        end={{x: 1, y: 0}}
        colors={[COLORS.secondaryLight, COLORS.secondaryDark]}
        style={{
            ...tailwind(`
      flex-row 
      justify-center
      p-4
      w-40
      rounded-full
      `),
            ...COLORS.shadow,
            backgroundColor: COLORS.secondary
          }}
        >
         <TouchableOpacity
          onPress={() => {
            navigation.navigate('SubmitOrder')
          }}>
          <Text
            style={tailwind(`
        text-base
        text-gray-100
        font-bold
        capitalize
        `)}
          >
            Order
          </Text>
        </TouchableOpacity>
          
        </LinearGradient>

      
       
      </View>
    </SafeAreaView>
  );
};
// const styles = StyleSheet.create({

// })

export default Order;
