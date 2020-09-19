import React from 'react'
import GlobalContextProvider from './src/context/GlobalContextProvider'
import 'typeface-karla'
import 'typeface-rubik'

export const wrapRootElement = ({ element }) => {
  return <GlobalContextProvider>{element}</GlobalContextProvider>
}
