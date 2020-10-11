import { GlobalContextProvider } from '@src/context'
import React from 'react'

export const wrapRootElement = ({ element }) => (
  <GlobalContextProvider>{element}</GlobalContextProvider>
)
