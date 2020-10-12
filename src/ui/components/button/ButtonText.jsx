import React from 'react'

export const ButtonText = ({ children }) => (
  <>
    <div className='btn_text--default'>
      <span>{children}</span>
    </div>
    <div className='btn_text--hidden'>
      <span>{children}</span>
    </div>
  </>
)
