

import React from 'react'
import { Elem } from './Elem'
export const Active = ({notes,check}) => {
  return (
    <div className='mt-[16px] overflow-y-auto h-full '>
      {notes.map((note,index) => (
        !note.check && <Elem key={index} note={note} checks={check}/>
        
      ))}
        
    </div>
  )
}
