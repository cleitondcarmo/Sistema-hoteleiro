import { ChakraProvider } from "@chakra-ui/react"
import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import App from './App'
import Cadastro from './pages/Cadastro'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<App />}/>
              <Route path="/cadastro" element={<Cadastro />}/>
          </Routes>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
)
