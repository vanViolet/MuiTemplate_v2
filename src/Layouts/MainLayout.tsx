import { Button } from '@mui/material'
import { CreateBox } from 'Components/CreateElements'
import { DARK_MODE_TOGGLE, useAppDispatch, useAppSelector } from 'Core/Reducers'
import { createElement } from 'react'
import { Sidebar } from './Sidebar'

const MainLayout = () => {
  const { dispatch, darkMode } = {
    dispatch: useAppDispatch(),
    darkMode: useAppSelector((state) => state.Theme.DarkMode),
  }

  console.log(darkMode)
  return CreateBox(null, [
    Sidebar,
    createElement(Button, { sx: { position: 'fixed', bottom: 0, right: 0 }, onClick: () => dispatch(DARK_MODE_TOGGLE()) }, 'DARK MODE'),
    // CreateBox({ sx: { backgroundColor: 'red' } }, ['hello']),
  ])
}

export default MainLayout
