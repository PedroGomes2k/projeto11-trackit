import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { GlobalStyle } from './Style/GlobalStyle.js'
import ResetStyle from './Style/Reset.js'
import { TokenProvider } from './Contex/Token.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <ResetStyle />
    <TokenProvider>
      <App />
    </TokenProvider>
  </React.StrictMode>,
)
