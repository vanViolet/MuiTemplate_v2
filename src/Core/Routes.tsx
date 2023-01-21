import { RouteObject, useRoutes } from 'react-router-dom'
import { Box } from '@mui/material'
import { MinimalLayout } from 'Layouts/MinimalLayout'
import MainLayout from 'Layouts/MainLayout'
import { createElement } from 'react'
import { ManajemenAkunPage } from 'Views/ManajemenAkun'
import loadable from '@loadable/component'

const { MainRoutes, AuthRoutes }: { MainRoutes: () => RouteObject; AuthRoutes: () => RouteObject } = {
  MainRoutes: () => ({
    path: '/',
    element: MainLayout(),
    children: [
      { path: '/dashboard', element: <Box>asdfads</Box> },
      { path: '/manajemen-akun', element: createElement(loadable(() => Promise.resolve(ManajemenAkunPage))) },
    ],
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
