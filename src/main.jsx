import React from 'react'
/* integracao do react com o Document object Model (representacao do html atraves do js) */
import ReactDOM from 'react-dom/client'
import { App } from './App.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
