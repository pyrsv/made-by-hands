import React from 'react'
import { StyledTitle } from '../../Carousels/ProductsCarousel/styles'

export const Title = ({ color, text }) => {
    console.log(color)
      return (
          <div>
              <StyledTitle color={color}>{text}</StyledTitle>
          </div>
      );
  };