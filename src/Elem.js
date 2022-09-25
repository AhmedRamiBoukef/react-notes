

import React from 'react'
import CheckIcon from '@mui/icons-material/Check';

export const Elem = ({note,checks}) => {
  const unCheckStyle = 'focus:border-2 focus:border focus:border-black hover:border-blue-500 hover:border rounded-full bg-[#A9A9A9] p-[3px] mr-[12px] text-white'
  const CheckStyle = 'hover:border-blue-500 hover:border rounded-full bg-[#4CAE4C] p-[3px] mr-[12px] text-white'
  return (
    <div className='px-[15px] py-[10px] border rounded'>
        <button onClick={() => checks(note.id)} className='float-left'>
            <CheckIcon className={note.check? CheckStyle:unCheckStyle}/>
        </button>
        <div>{note.text}</div>
    </div>
  )
}
