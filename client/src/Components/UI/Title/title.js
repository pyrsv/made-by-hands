import React from 'react'
import { StyledTitle } from '../../Carousels/ProductsCarousel/styles'

export const Title = ({ color, text }) => {
      return (
          <div>
              <StyledTitle color={color}>{text}</StyledTitle>
          </div>
      );
  };