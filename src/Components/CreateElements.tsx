import { Box, Theme } from '@mui/material'
import { BoxProps, SxProps } from '@mui/system'
import React, { createElement } from 'react'

export type Simplify<T> = { [KeyType in keyof T]: T[KeyType] }
export type OneOf<T1, T2> = T1 | T2
export type ExclusiveUnion<T extends U, U> = T | Exclude<U, T>
export type ExclusiveDeepTypeOf<ObjectType, ValueType extends keyof ObjectType = keyof ObjectType> = ObjectType[ValueType]

export interface IIngredients {
  Direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse'
  StyleForRootBox?: SxProps<Theme>
  Box?: IBox[]
}

export type IBox = BoxProps & Flexing & { label?: React.ReactNode }

export const Ingredients = (Ingredients: IIngredients[]) => {
  return (
    <>
      {Ingredients.map(({ Direction, StyleForRootBox, ...row }, key) => (
        <Box key={key} style={{ display: 'flex', flexDirection: Direction ?? 'column' }} sx={StyleForRootBox}>
          {row.Box?.filter((f) => f !== undefined).map(({ Direction, order, ...row }, key) => (
            <Box key={key} style={{ display: 'flex', flexDirection: Direction ?? 'column', order: order ?? 0 }} {...row}>
              {row.label}
            </Box>
          ))}
        </Box>
      ))}
    </>
  )
}

export const CreateBox = (props: BoxProps | null, child: React.ReactNode[]) => {
  return createElement(Box, props, ...child)
}

type Flexing = { Direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse'; order?: number }
