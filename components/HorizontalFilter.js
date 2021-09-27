import React from 'react';
import {
    TouchableOpacity,
    Text,
    ScrollView
} from 'react-native';
import tailwind from 'tailwind-rn';
import { COLORS, SIZES } from '../constants';

const HorizontalFilter = ({data}) => {

    function renderToppingTags(_data) {

        return(
          _data.map(
            ({topping, state, setter}, index) => (
              <TouchableOpacity 
              key={index}
              onPress={() => {setter(!state)}}
              style={{...tailwind(
                `
                bg-white
                m-2
                ${index === 0 ? 'mr-2' : 'mx-2'}
                rounded-3xl
                justify-center
                items-center
                p-2
          
                `
              ),
                ...(() => {
                    if(state) return {...COLORS.shadow}
                })()
              }}>
              <Text style={
                {
                  ...tailwind(`
              text-base 
                  `),
                fontWeight: "700",
                color:(state ? 
                COLORS.secondary :
                COLORS.darkGray
                ),
    marginHorizontal:SIZES.radius
                  }
              }>{topping}</Text>
              </TouchableOpacity>
            )
          )
        )
      }

    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={tailwind(
          `
    h-16
   `
        )}
      >
        {renderToppingTags(data)}
      </ScrollView>
    );
}

export default HorizontalFilter
