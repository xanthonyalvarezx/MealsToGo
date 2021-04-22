import React from "react";
import { View } from "react-native";
import styled, {useTheme} from "styled-components/native";


const sizeVariant = {
  small:1,
  medium:2,
  large: 3
}

const positionVariant = {
  top:'marginTop',
  left:'marginLeft',
  bottom:'marginBottom',
  right:'marginRight',
  
}

const getVariant = (position, size, theme)  => {
  const property = positionVariant[position]
  const SizeIndex = sizeVariant[size]
  const value = theme.space[sizeIndex]
  const SizeIndex = sizeVariant[size]
  return `${property}:${value}`;

}

const spacerView = styled.View`
${({variant}) => variant}
`

export const Spacer = ({position, size, children}) =>{
const theme = useTheme()
const variant = getVariant(position, size,theme)
return(

  <spacerView variant={variant}>
    {children}
  </spacerView>
)

}


Spacer.defaultProps= {
  position = 'top',
  size = 'small',
}
