import { SIDEBAR_TOGGLE, useAppDispatch } from './../Core/Reducers'
import { Box, CSSObject, Theme } from '@mui/material'
import { CssComponent } from 'Assets/CSS'
import { IconCollection } from 'Assets/Collections/IconCollection'
import { CreateBox, IBox, Ingredients } from 'Components/CreateElements'
import { SubHeaderDivider } from 'Components/SubheaderDivider'
import { useAppSelector } from 'Core/Reducers'
import { createElement, memo } from 'react'
import { MenuItems } from 'Core/MenuItems'

const SidebarElements = memo(function Memo() {
  const { dispatch, burgerToggle } = {
    dispatch: useAppDispatch(),
    burgerToggle: useAppSelector((state) => state.Custom.Sidebar),
  }

  return Ingredients([
    {
      StyleForRootBox: (theme) => ({ ...(CssComponent().SIDEBAR_PARENT(theme, burgerToggle) as CSSObject) }),
      Box: [
        {
          sx: (theme) => ({ ...CssComponent().SIDEBAR_TOGGLE(theme as Theme) }),
          onClick: () => dispatch(SIDEBAR_TOGGLE()),
          label: IconCollection('Hamburger', 'HeroSize'),
        },
        ...MenuItems.map(
          (row, key) =>
            ({
              label: Ingredients([
                {
                  Box: [
                    { label: row.label && SubHeaderDivider({ title: burgerToggle ? row.label : '' }) },
                    ...row.children.map(
                      (row) =>
                        ({
                          Direction: 'row',
                          sx: (theme) => ({ ...CssComponent().SIDEBAR_MENU(theme as Theme, burgerToggle, key) }),
                          label: createElement(
                            Box,
                            { sx: { display: 'flex', alignItems: 'center' } },
                            IconCollection(row.icon, 'MenuSize'),
                            CreateBox(
                              {
                                sx: (theme) => ({ ...CssComponent().SIDEBAR_MENU_LABEL(theme as Theme, burgerToggle) }),
                              },
                              [row.label]
                            )
                          ),
                        } as IBox)
                    ),
                  ],
                },
              ]),
            } as IBox)
        ),
      ],
    },
  ])
})

export const Sidebar = createElement(SidebarElements, null)
