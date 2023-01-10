import { configureStore } from '@reduxjs/toolkit'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

export const {
  reducer: CUSTOM_REDUCER,
  actions: { CLOSE_STACK, LOADING_OVERLAY, OPEN_STACK, SIDEBAR_ACTION, SIDEBAR_TOGGLE },
} = createSlice({
  name: 'CustomReducer',
  initialState: {
    Sidebar: true,
    LoadingOverlay: false,
    Dialog: [],
  } as {
    Sidebar: boolean
    LoadingOverlay: boolean
    Dialog: JSX.Element[]
  },
  reducers: {
    SIDEBAR_TOGGLE: (state) => {
      state.Sidebar = !state.Sidebar
    },

    SIDEBAR_ACTION: (state, action: PayloadAction<boolean>) => {
      state.Sidebar = action.payload
    },

    LOADING_OVERLAY: (state, action: PayloadAction<boolean>) => {
      state.LoadingOverlay = action.payload
    },

    OPEN_STACK: (state, action: PayloadAction<JSX.Element>) => {
      state.Dialog = [...state.Dialog, action.payload]
    },

    CLOSE_STACK: (state) => {
      state.Dialog.pop()
    },
  },
})

export const {
  reducer: THEME_REDUCER,
  actions: { DARK_MODE_TOGGLE },
} = createSlice({
  name: 'ThemeReducer',
  initialState: {
    DarkMode: localStorage.getItem('Theme') === 'dark' ? 'dark' : 'light',
  } as {
    DarkMode: 'light' | 'dark'
  },
  reducers: {
    DARK_MODE_TOGGLE: (state) => {
      state.DarkMode = state.DarkMode === 'dark' ? 'light' : 'dark'
      localStorage.setItem('Theme', state.DarkMode)
    },
    TO_DARK: (state) => {
      state.DarkMode = 'dark'
      localStorage.setItem('Theme', state.DarkMode)
    },
    TO_LIGHT: (state) => {
      state.DarkMode = 'light'
      localStorage.setItem('Theme', state.DarkMode)
    },
  },
})

export const STORE = configureStore({
  reducer: {
    Custom: CUSTOM_REDUCER,
    Theme: THEME_REDUCER,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export type RootState = ReturnType<typeof STORE.getState>

export type AppDispatch = typeof STORE.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
