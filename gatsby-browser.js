import { GlobalContextProvider } from '@src/context'
import React from 'react'

export const wrapRootElement = ({ element }) => {
  return <GlobalContextProvider>{element}</GlobalContextProvider>
}
