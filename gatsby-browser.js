import { GlobalContextProvider } from '@src/context'
import React from 'react'

import 'typeface-karla'
import 'typeface-rubik'

export const wrapRootElement = ({ element }) => {
  return <GlobalContextProvider>{element}</GlobalContextProvider>
}
