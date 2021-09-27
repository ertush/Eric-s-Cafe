import React from "react";
import {
    View,
    Text,
    TouchableOpacity ,
    Image,
    StyleSheet 
} from "react-native";
import { icons, COLORS } from "../constants";
import tailwind from "tailwind-rn";

const Heading = ({title, navigation}) => {
  return (
    <View style={{...styles.header}}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        style={styles.backBtn}
      >
        <Image source={icons.back} style={styles.chevron} />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <View style={tailwind('w-8 h-8')}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: tailwind(`
        flex-row
        justify-between
        items-center
        pl-2
        `),

  title: {
    ...tailwind(`
        text-3xl
        `),
    fontWeight: "700",
    color: COLORS.deepBlue,
  },

  backBtn: {
    ...tailwind(`
    flex-row 
    justify-center 
    items-center 
    p-2 
    bg-white 
    rounded-full
  `),
    ...COLORS.shadow,
  },

  chevron: {
    ...tailwind(`
  w-5
  h-5
  `),
    tintColor: COLORS.deepBlue,
  },
});

export default Heading;
