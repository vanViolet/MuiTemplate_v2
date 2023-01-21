import { CSSObject } from '@mui/material'
import { DekstopView } from 'Utils/Tools'

export const CSS = {
  BURGER_TOGGLE_IN_HEADER: (burgerToggle: boolean): CSSObject => ({
    width: '5rem',
    [DekstopView()]: {
      width: burgerToggle ? '15rem' : '5rem',
    },
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    ':hover': { cursor: 'pointer', backgroundColor: 'rgba(255,255,255,0.3)' },
    transitionDuration: '150ms',
    transitionTimingFunction: 'ease-in',
  }),
}
