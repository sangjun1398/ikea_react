import React from 'react'
import Explain from './Explain'
import Size from './Size'
import Steel from './Steel'

export default function Total() {
  return (
    <div className='total_container'>
        <Explain/>
        <Size/>
        <Steel/>
    </div>
  )
}
