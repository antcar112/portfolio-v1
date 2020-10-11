import { GlobalContextProvider } from '@src/context'
import React from 'react'

import 'typeface-karla'
import 'typeface-rubik'

export const wrapRootElement = ({ element }) => (
  <GlobalContextProvider>{element}</GlobalContextProvider>
)
