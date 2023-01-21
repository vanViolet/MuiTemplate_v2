console.time('B')
import { STORE } from 'Core/Reducers'
import MainLayout from 'Layouts/MainLayout'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <>
    <Provider store={STORE}>
      <BrowserRouter>
        <MainLayout />
      </BrowserRouter>
    </Provider>
  </>
)

console.timeEnd('B')
