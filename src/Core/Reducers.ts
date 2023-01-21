import { configureStore } from '@reduxjs/toolkit'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

export const {
  reducer: CUSTOM_REDUCER,
  actions: { closeStack, loadingOverlay, openStack, sidebarAction, sidebarToggle },
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
    sidebarToggle: (state) => {
      state.Sidebar = !state.Sidebar
    },

    sidebarAction: (state, action: PayloadAction<boolean>) => {
      state.Sidebar = action.payload
    },

    loadingOverlay: (state, action: PayloadAction<boolean>) => {
      state.LoadingOverlay = action.payload
    },

    openStack: (state, action: PayloadAction<JSX.Element>) => {
      state.Dialog = [...state.Dialog, action.payload]
    },

    closeStack: (state) => {
      state.Dialog.pop()
    },
  },
})

export const {
  reducer: THEME_REDUCER,
  actions: { palleteModeToggle: palleteModeToggle },
} = createSlice({
  name: 'ThemeReducer',
  initialState: {
    DarkMode: localStorage.getItem('Theme') === 'dark' ? 'dark' : 'light',
  } as {
    DarkMode: 'light' | 'dark'
  },
  reducers: {
    palleteModeToggle: (state) => {
      state.DarkMode = state.DarkMode === 'dark' ? 'light' : 'dark'
      localStorage.setItem('Theme', state.DarkMode)
    },
    toDark: (state) => {
      state.DarkMode = 'dark'
      localStorage.setItem('Theme', state.DarkMode)
    },
    toLight: (state) => {
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

export const Reducers = () => {
  return {
    burgerToggle: useAppSelector((state) => state.Custom.Sidebar),
    dialogIsOpen: useAppSelector((state) => state.Custom.Dialog),
    isLoadingOverlay: useAppSelector((state) => state.Custom.LoadingOverlay),
    palleteMode: useAppSelector((state) => state.Theme.DarkMode),
    dispatch: useAppDispatch(),
  }
}
