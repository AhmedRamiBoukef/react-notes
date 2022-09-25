

import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';

export const Access = ({setNotes,notes}) => {
  const deleteAll = () => {
    setNotes([])
  }
  const check = () => {
    const all = notes.slice()
    all.forEach(note => note.check = true)
    setNotes(all)
  }
  return (
    <div>
        <div className="Select flex">
            <button onClick={check} className='bg-[#5CB85C] text-white px-[12px] py-[6px] rounded-l border font-[14px] hover:grayscale-[40%] flex justify-center items-center'><CheckIcon/></button>
            <button onClick={deleteAll} className='bg-[#D9534F] text-white px-[12px] py-[6px] border rounded-r font-[14px] hover:grayscale-[40%] flex justify-center items-center'><DeleteIcon/></button>
        </div>  
    </div>
  )
}
