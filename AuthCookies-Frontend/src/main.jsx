import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppRouter } from './router'
import './index.css';
import { ChakraProvider } from '@chakra-ui/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <ChakraProvider>
        <AppRouter />
      </ChakraProvider>
  </React.StrictMode>,
)
