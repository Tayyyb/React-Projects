import React from 'react'
import { extendTheme} from '@chakra-ui/react';
const theme = extendTheme({
    styles: { 
      global: {
        body: {
          border:"1px solid black",
          bg: 'white', // Set background color to white
          
        },
      },
    },
  });
  

export default theme
