import React from 'react'
import { render } from 'react-dom'
import App from './App'
import { AuthContextProvider } from './Context/authContext'
import './styles/index.scss'

render(
  <AuthContextProvider>
    <App />
  </AuthContextProvider>,
  document.getElementById('root')
)
