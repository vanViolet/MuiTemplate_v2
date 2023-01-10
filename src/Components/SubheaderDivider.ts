import { Divider, Typography } from '@mui/material'
import { createElement } from 'react'

export const SubHeaderDivider = ({ title }: { title: string }) => {
  return createElement(
    'div',
    null,
    createElement(Divider, { sx: { margin: '0.5rem 0' } }),
    createElement(Typography, { sx: { mt: 0.5, ml: 2 }, color: 'text.secondary', display: 'block', variant: 'caption' }, title)
  )
}
