import { RouteObject, useRoutes } from 'react-router-dom'
import { Box } from '@mui/material'
import { MinimalLayout } from 'Layouts/MinimalLayout'
import { createElement } from 'react'
import loadable from '@loadable/component'
import MainLayout from 'Layouts/MainLayout'

const { MainRoutes, AuthRoutes }: { MainRoutes: () => RouteObject; AuthRoutes: () => RouteObject } = {
  MainRoutes: () => ({
    path: '/',
    element: createElement(loadable(() => Promise.resolve(MainLayout))),
    children: [{ path: '/', element: <Box>asdfads</Box> }],
  }),
  AuthRoutes: () => ({
    path: '/',
    id: '',
    element: <MinimalLayout />,
    children: [
      { path: '/login', element: <></> },
      { path: '/testing', element: <></> },
    ],
  }),
}

export const Routes = () => {
  return useRoutes([MainRoutes(), AuthRoutes()])
}
