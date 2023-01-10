import { SxProps, Theme } from '@mui/material'
import { blue, grey } from '@mui/material/colors'

export const CommonCss = () => {
  return {
    toCenter: (): SxProps => ({ display: 'flex', justifyContent: 'center', alignItems: 'center' }),
  }
}

export const colorConfig = {
  primary: {
    light: blue[500],
    dark: 'rgba(0,0,0,0)',
  },
  hover: {
    bg: 'rgba(33,150,243,0.1)',
    text: blue[500],
  },
}

export const CssComponent = () => {
  const transitionDuration = '200ms'
  return {
    SIDEBAR_PARENT: (
      {
        palette: {
          mode,

          divider,
        },
      }: Theme,
      burgerToggle: boolean
    ): SxProps<Theme> => ({
      borderRight: `1px solid ${divider}`,
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      width: burgerToggle ? '14rem' : '4rem',
      backgroundColor: mode === 'dark' ? 'rgba(0,0,0,0)' : 'white',
      backdropFilter: 'blur(1rem)',
      transitionDuration,
    }),

    SIDEBAR_TOGGLE: ({ palette: { mode } }: Theme): SxProps<Theme> => ({
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: mode === 'dark' ? colorConfig.primary.dark : colorConfig.primary.light,
      backdropFilter: 'blur(1rem)',
      padding: '0.5rem',
      color: 'white',
      ':hover': {
        cursor: 'pointer',
      },
      boxShadow: '0px 3px 5px rgba(0,0,0,0.3)',
    }),

    SIDEBAR_MENU: ({ palette: { mode } }: Theme, burgerToggle: boolean, key: number): SxProps<Theme> => ({
      margin: '0rem 0.4rem',
      marginTop: key === 0 ? '0.5rem' : '',
      borderRadius: '10rem',
      padding: '0.6rem',
      alignItems: 'center',
      '& :is(svg)': {
        transform: burgerToggle ? 'translateX(0)' : 'translateX(0.2rem)',
        color: mode === 'dark' ? 'white' : grey[700],
      },
      ':hover': {
        backgroundColor: colorConfig.hover.bg,
        cursor: 'pointer',
        borderRadius: '0.5rem',
        color: colorConfig.hover.text,
      },
      ':hover :is(svg)': {
        color: colorConfig.hover.text,
      },
      '& :is(*),::after': {
        transitionDuration: '100ms',
      },
    }),

    SIDEBAR_MENU_LABEL: ({ palette: { mode } }: Theme, burgerToggle: boolean): SxProps<Theme> => ({
      marginLeft: '1rem',
      opacity: burgerToggle ? 1 : 0,
      visibility: burgerToggle ? 'visible' : 'hidden',
      width: '10rem',
      transitionDuration: '200ms',
      fontSize: '0.9rem',
    }),
  }
}
