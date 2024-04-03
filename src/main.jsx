import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Card, ChakraProvider } from '@chakra-ui/react'
import Theme from './Theme/Theme.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >
    <ChakraProvider  theme={Theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
