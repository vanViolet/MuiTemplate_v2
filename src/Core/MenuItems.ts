import { IIconCollection } from 'Assets/Collections/IconCollection'

interface IMenuItems {
  label: string
  children: Array<{
    label: string
    icon: IIconCollection
    path: string
  }>
}

export const MenuItems: IMenuItems[] = [
  {
    label: '',
    children: [
      {
        label: 'Dashboard',
        icon: 'Dashboard',
        path: '/dashboard',
      },
    ],
  },
  {
    label: 'Application',
    children: [
      {
        label: 'Manajemen Akun',
        icon: 'Users',
        path: '/manajemen-akun',
      },
    ],
  },
]
