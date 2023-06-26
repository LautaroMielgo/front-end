import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import store from './redux/store.js'
import axios from 'axios'

// axios.defaults.baseURL = 'http://localhost:3001';
axios.defaults.baseURL = 'https://back-end-production-913f.up.railway.app/';


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <React.StrictMode>
 <BrowserRouter>
    
      <App />
    
  </BrowserRouter>
  </React.StrictMode>
    </Provider>
)
