import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const COLORS = {
  // base colors / theme
  primary: "#55a38f", // Green
  secondary: "#fd875d",   // deep-Orange

    // other colors
  darkblue: "#363c5e",
  deepBlue: "#333c62",
  lightYellow: "#fad484",
  darkGray: '#898C95',
  lightGreen: '#78bdad',
  transparentLightGray: '#CCD4D5D6',
  transparentLightGray1: 'rgba(255,255,255,0.25)',

  //shadow
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8
  }
};

export const SIZES = {
    // global sizes
    base: 8, //t-2
    font: 14,
    radius: 12, //t-3
    padding: 24, //t-6

    // font sizes
    largeTitle: 50,
    h1: 30, //text-3xl
    h2: 22, 
    h3: 16, //text-base
    h4: 14, 
    body1: 30, //text-3xl 
    body2: 20, //text-xl
    body3: 16, //text-base
    body4: 14, //text-sm
    body5: 12, //text-xs

    // app dimensions
    width,
    height
};


export const FONTS = {
    largeTitle: { fontFamily: "Roboto-Black", fontSize: SIZES.largeTitle, lineHeight: 55 },
    h1: { fontFamily: "Roboto-Black", fontSize: SIZES.h1, lineHeight: 36 },
    h2: { fontFamily: "Roboto-Bold", fontSize: SIZES.h2, lineHeight: 30 },
    h3: { fontFamily: "Roboto-Bold", fontSize: SIZES.h3, lineHeight: 22 },
    h4: { fontFamily: "Roboto-Bold", fontSize: SIZES.h4, lineHeight: 22 },
    body1: { fontFamily: "Roboto-Regular", fontSize: SIZES.body1, lineHeight: 36 },
    body2: { fontFamily: "Roboto-Regular", fontSize: SIZES.body2, lineHeight: 30 },
    body3: { fontFamily: "Roboto-Regular", fontSize: SIZES.body3, lineHeight: 22 },
    body4: { fontFamily: "Roboto-Regular", fontSize: SIZES.body4, lineHeight: 22 },
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;