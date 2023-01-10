import { STORE } from 'Core/Reducers'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={STORE}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)
