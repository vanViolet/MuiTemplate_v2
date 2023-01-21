import { Box } from '@mui/material'
import { Reducers } from 'Core/Reducers'
import React, { createElement, isValidElement } from 'react'
import { IProps } from './CeTypes'
import { ELEMENTS } from './Elements'
import { CSS } from 'Assets/CSS'

interface ICreateElements<T extends keyof IProps> {
  type: T
  props?: IProps[T] | ((selector: ReturnType<typeof Reducers>) => IProps[T])
  child?: hasChildOrNot<IProps, ThereisNoChild>[T]
  CSS?: (css: typeof CSS) => any
}
type NestedDeep<T extends keyof IProps, ARG> = Omit<ICreateElements<T>, 'child' | 'type'> & {
  type: T
  child?: Array<ARG | undefined> | string | React.ReactElement | number
}

type ThereisNoChild =
  | 'Autocomplete'
  | 'Checkbox'
  | 'Radio'
  | 'Rating'
  | 'Select'
  | 'Slider'
  | 'Switch'
  | 'TextField'
  | 'Chip'
  | 'CircularProgress'
  | 'LinearProgress'
  | 'Skeleton'
  | 'Snackbar'
  | 'Card::Media'
  | 'BottomNavigation::Action'

export type IChild<T extends keyof IProps = keyof IProps> = NestedDeep<T, IGrandChild<T>>
export type IGrandChild<T extends keyof IProps = keyof IProps> = NestedDeep<T, IGreatGrandChild<T>>
export type IGreatGrandChild<T extends keyof IProps> = NestedDeep<T, IGreatGrandChildsChild<T>>
export type IGreatGrandChildsChild<T extends keyof IProps> = NestedDeep<T, Array<string | React.ReactElement>>
export type hasChildOrNot<T, K extends keyof T, Props extends keyof IProps = keyof IProps> = {
  [P in K]?: never
} & {
  [P in Exclude<keyof T, K>]?: Array<IChild<Props> | undefined> | string | React.ReactElement | number
}

export function CreateElements<T extends keyof IProps>(
  Ingredients: (Tools: ReturnType<typeof Reducers>) => Array<ICreateElements<T> | undefined>
) {
  const ProccesingElements = Ingredients(Reducers())
    .filter((f) => f !== undefined)
    .map((row, key) => {
      if (!row?.type) return
      return ELEMENTS({
        props: typeof row?.props === 'function' ? row?.props?.(Reducers()) : row?.props,
        key,
        CSS: row?.CSS?.(CSS),
        child:
          typeof row?.child === 'number'
            ? row?.child
            : typeof row?.child === 'string'
            ? row?.child
            : isValidElement(row?.child)
            ? row?.child
            : row?.child
                ?.filter((f) => f !== undefined)
                .map((row, key) => {
                  // console.log(row)
                  return ELEMENTS({
                    props: typeof row?.props === 'function' ? row?.props?.(Reducers()) : row?.props,
                    key,
                    CSS: row?.CSS?.(CSS),
                    child:
                      typeof row?.child === 'number'
                        ? row?.child
                        : typeof row?.child === 'string'
                        ? row?.child
                        : isValidElement(row?.child)
                        ? row?.child
                        : row?.child
                            ?.filter((f) => f !== undefined)
                            .map((row, key) => {
                              return ELEMENTS({
                                props: typeof row?.props === 'function' ? row?.props?.(Reducers()) : row?.props,
                                key,
                                CSS: row?.CSS?.(CSS),
                                child:
                                  typeof row?.child === 'number'
                                    ? row?.child
                                    : typeof row?.child === 'string'
                                    ? row?.child
                                    : isValidElement(row?.child)
                                    ? row?.child
                                    : row?.child
                                        ?.filter((f) => f !== undefined)
                                        .map((row, key) => {
                                          return ELEMENTS({
                                            props: typeof row?.props === 'function' ? row?.props?.(Reducers()) : row?.props,
                                            key,
                                            CSS: row?.CSS?.(CSS),
                                            child:
                                              typeof row?.child === 'number'
                                                ? row?.child
                                                : typeof row?.child === 'string'
                                                ? row?.child
                                                : isValidElement(row?.child)
                                                ? row?.child
                                                : row?.child
                                                    ?.filter((f) => f !== undefined)
                                                    .map((row, key) => {
                                                      return ELEMENTS({
                                                        props: typeof row?.props === 'function' ? row?.props?.(Reducers()) : row?.props,
                                                        key,
                                                        child: row?.child,
                                                      })
                                                        .filter((f) => f.type === row?.type)
                                                        .map((r) => {
                                                          // console.log(r)
                                                          return r.element
                                                        })
                                                    }),
                                          })
                                            .filter((f) => f.type === row?.type)
                                            .map((r) => {
                                              // console.log(r)
                                              return r.element
                                            })
                                        }),
                              })
                                .filter((f) => f.type === row?.type)
                                .map((r) => {
                                  // console.log(row?.type)
                                  // console.log(r)
                                  return r.element
                                })
                            }),
                  })
                    .filter((f) => f.type === row?.type)
                    .map((r) => {
                      // console.log(r)
                      return r.element
                    })
                }),
      })
        .filter((f) => f.type.includes(row?.type))
        .map((r) => {
          // console.log(r)
          return r.element
        })
    })

  return createElement(Box, null, ProccesingElements && [...ProccesingElements])
}
