

import React from 'react'
import { Elem } from './Elem'
export const Notes = ({notes,check}) => {
  return (
    <div className='mt-[16px] overflow-y-auto h-full '>
      {notes.map((note,index) => (
        <Elem key={index} note={note} checks={check}/>
        
      ))}
        
    </div>
  )
}
