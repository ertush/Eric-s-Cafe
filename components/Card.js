import React from 'react'

import {
  View
} from "react-native"

import tailwind from 'tailwind-rn'

const Card = ({children, cardStyles}) => {
    return (
      <View style={{
        ...tailwind(`
        bg-white
        rounded-3xl
      `),
      ...cardStyles
      }}
      >
      {children}
      </View>
    )
  }


export default Card