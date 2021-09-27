import React from "react";
import {icons} from '../constants'
import {
    View,
    Image,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import tailwind from "tailwind-rn";
import { COLORS } from './../constants'

const FooterMenu = ({navigation, focusIconBtn}) => {

    const styles = StyleSheet.create({
        container: tailwind(`
          flex-row
          mt-4
          justify-evenly
          items-center
          bg-white
          rounded-3xl
          px-1
          py-6
          absolute
          bottom-1
          w-full
        `)
  
      })
  
      return (
        <View style={styles.container}>
        {/* Home */}
        <TouchableOpacity onPress={() => {
            navigation.navigate('MainMenu')
        }}>
          <Image source={icons.home} style={{...tailwind('w-7 h-7'), tintColor: focusIconBtn === 'MainMenu' ? COLORS.secondary : COLORS.darkGray }}/>
        </TouchableOpacity>

        {/* Profile */}
        <TouchableOpacity onPress={() => { 
           
          }}>
          <Image source={icons.person} style={{...tailwind('w-6 h-6'), tintColor: focusIconBtn === 'Profile' ? COLORS.secondary : COLORS.darkGray }}/>
        </TouchableOpacity>

        {/* Favourites */}
        <TouchableOpacity onPress={() => { 
            navigation.navigate('Favourites')
          }}>
          <Image source={icons.love} style={{...tailwind('w-6 h-6'), tintColor: focusIconBtn === 'Favourites' ? COLORS.secondary : COLORS.darkGray }}    
          />
        </TouchableOpacity>

        {/* Cart */}
        <TouchableOpacity onPress={() => { 
          
          navigation.navigate('Cart', { 
             foodName: "",
             cost : 0,
             quantity : 0}) }}>
          <Image source={icons.cart} style={{...tailwind('w-6 h-6'), tintColor: focusIconBtn === 'Cart' ? COLORS.secondary : COLORS.darkGray }}    
          />
        </TouchableOpacity>
        </View>
      )
}

export default FooterMenu
