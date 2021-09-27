import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import tailwind from 'tailwind-rn'
import { COLORS } from '../constants'

const RadioButton = ({label, initialState, onPressCb}) => {

  React.useEffect(() => {}, [pressed])

    const [pressed, setPressed] = React.useState(initialState);
    return (
            <View style={tailwind(`
              flex-row
              items-center
              justify-start
            `)}>
                <TouchableOpacity 
                onPress={
                    () => {
                        
                        onPressCb(pressed, setPressed)
                    }
                }
                
                style={
                    {
                  ...tailwind(`
                  w-6
                  h-6
                  rounded-full
                  flex-row
                  bg-transparent
                  items-center
                  justify-center
                  mr-4
                  `),

                  borderWidth: 1,
                  borderColor: pressed ? COLORS.deepBlue : tailwind('text-gray-400').color
                   
                    }
                }>
                   {
                     pressed && 
                     <View
                   style={{...tailwind(`
                    w-3
                    h-3
                    rounded-full
                   `),
                   backgroundColor: pressed ? COLORS.deepBlue : tailwind('text-gray-400').color
                   }}
                   >
                   </View>
                   }
                   
                </TouchableOpacity>
                <Text style={{...tailwind(`
                    text-base
                    font-bold
                `),
                color: pressed ? COLORS.deepBlue : tailwind('text-gray-400').color
                }}>{label}</Text>
            </View>
          )
    
}

export default RadioButton
