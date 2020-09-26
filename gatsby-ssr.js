import React from 'react'
import { GlobalContextProvider } from '@src/context'
import 'typeface-karla'
import 'typeface-rubik'

export const wrapRootElement = ({ element }) => {
  return <GlobalContextProvider>{element}</GlobalContextProvider>
}
