import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import StreamShow from './streaming/Streaming'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <h1>HI</h1>
    <StreamShow/>
  </React.StrictMode>
)
