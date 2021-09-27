import React from "react";
import tailwind from "tailwind-rn";
import { View, Text, Dimensions, Image } from "react-native";
import MapView, {Marker, Polyline} from "react-native-maps";
// import MapViewDirections from 'react-native-maps-directions';
import { data, images, COLORS } from "../constants";
import { Heading } from "../components";
import { LinearGradient } from "expo-linear-gradient";
// import Constants from 'expo-constants';
import { FontAwesome, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';


const CustomMarker = ({renderIcon /*, apiKey*/}) => {
    return (
        <View style={{
            ...tailwind(`
                w-9
                h-9
                rounded-full
                items-center
                justify-center
            `),
            backgroundColor: COLORS.secondary

        }}>
        {
            renderIcon()
        }

        </View>
    )
}

const TrackOrder = ({navigation}) => {

    
    function renderContactCard(){
        const renderPhoneIcon = () => {
            return(
                <View style={tailwind(`
                    relative
                    items-center
                    justify-center
                    w-12
                    h-12
                    rounded-full
                    bg-white
                    bg-opacity-40
                `)}>
                <View style={tailwind(`
                     absolute
                    w-10
                    h-10
                    rounded-full
                    bg-white
                    bg-opacity-50
                   
                `)}>
                </View>
                <View style={tailwind(`
                                    absolute
                                    w-8
                                    h-8
                                    rounded-full
                                    items-center
                                    justify-center
                                    bg-white
                                    z-10
                                `)}>
                            <FontAwesome name="phone" size={24} color="black" />

                                </View>
                </View>
            )
        }

        return(
            <LinearGradient
            start={{x:0, y:0}}
            end={{x:1, y:0}}
            colors={[
                COLORS.secondaryLight,
                COLORS.secondaryDark
            ]}
             style={{...tailwind(`
            flex-row
            items-center
            justify-between
            mx-6
            absolute
            inset-x-0
            rounded-3xl
            p-4
            `),
            top:"70%",
            ...COLORS.shadow
            }}>
            <View style={tailwind(`flex-row items-center`)}>
                <Image source={images.contact} 
                 resizeMode="contain"
                 style={tailwind('w-12 h-12 rounded-full')} />
                <View style={tailwind('ml-4')}>
                    <Text style={tailwind(`
                    text-base
                    font-bold
                    text-gray-100
                    `)}>Eric Mutua</Text>
                    <Text style={tailwind(`
                    text-base
                    font-normal
                    text-gray-100
                    text-opacity-90
                    `)}>Courier</Text>
                </View>
            </View>
            {/* Icon */}
            {
                renderPhoneIcon()
            }

            </LinearGradient>
        )
    }

    function renderDetailsCard(){
        return(
            <View style={
                {
                    ...tailwind(`
                    absolute
                    inset-x-0
                    mx-6
                    p-4
                    flex-1
                    items-center
                    justify-evenly
                    rounded-3xl
                    bg-white
                    
                    `),
                    ...COLORS.shadow,
                    top:"84%"
                }
            }>
            <Text style={{...tailwind(`
                text-3xl
                font-bold
            `),
            color:COLORS.deepBlue
            }}>21:30 pm</Text>
            <Text style={tailwind('text-base font-bold text-gray-400 mt-1')}>Estimated remaining time</Text>
            </View>
        )
    }


    return (
      <View
        style={{
          ...tailwind(`
                w-full
                flex-1
                relative
           `),
        }}
      >
        <MapView
          customMapStyle={data.customMapStyles}
          initialRegion={data.initialCoordinates}
          style={{
            width: Dimensions.get("window").width,
            height: Dimensions.get("screen").height,
          }}
        >

    
        {/*  Markers */}
        {
            data.markerMapData.map(({coordinates}, index) => (
                <Marker 
                key={index}
                coordinate={coordinates}>
                    <CustomMarker renderIcon={()=>{
                        switch(index){
                            case 0:
                            return <MaterialIcons name="shopping-cart" size={24} color="white" />
                            case 1:
                            return <MaterialCommunityIcons name="home-map-marker" size={24} color="white" />
                        }

                    }}/>
                </Marker>  

            ))    
       
        
        }
        {/* Path */}

        <Polyline 
            lineDashPattern={[1]}
            coordinates={(() => data.markerMapData.map(item => item.coordinates))()}
            lineCap="round"
            strokeWidth={6}
            strokeColor={COLORS.secondary}
        />

        {/* <MapViewDirections
        origin={data.markerMapData[0].coordinates}
        destination={data.markerMapData[1].coordinates}
        strokeWidth={5}
        apikey={apiKey}
        strokeColor={COLORS.secondary}
        /> */}
     

        </MapView>

        {/* Heading */}
        <View style={{...tailwind('absolute inset-x-0 px-6 w-full'), top:"8%"}}>
        <Heading
        title={"Track Order"}
        navigation={navigation}
      />
        </View>
        

        {/* Contact Card */}
        {
            renderContactCard()
        }

        {/* Details Card */}
        {
            renderDetailsCard()
        }
      </View>
    );
}

{/* TrackOrder.defaultProps = {
    apiKey: Constants.manifest.extra.apiKey || false
} */}

export default TrackOrder
