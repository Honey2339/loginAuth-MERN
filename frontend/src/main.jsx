import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import { AuthProvider } from 'react-auth-kit'


ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
  <React.StrictMode>
    <AuthProvider authName={"_auth"} authType={"cookie"}>
    <App />
    </AuthProvider>
  </React.StrictMode>
  </ChakraProvider>
)
