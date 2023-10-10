import React from 'react'
import ReactDOM from 'react-dom/client'
import { store } from './store'
import { BrowserRouter } from 'react-router-dom'
import './firebase'
import { Provider } from 'react-redux'
import App from './App'
import './firebase'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
