

import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';


export const Search = ({notes,setNotes}) => {
  const [val,setVal] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    let note = {
      id: notes.length+1,
      text: val,
      check: false
    }
    let newNotes = notes.slice()
    newNotes.push(note)
    setNotes(newNotes)
    console.log(notes);
  }
  return (
    <div >
        <form onSubmit={ handleSubmit } className='h-[34px] flex items-center '>
          <input onChange={e => setVal(e.target.value)} value={val} type="text" className='h-full flex-1 px-[12px] py-[6px] rounded-l border active:border-r-0' placeholder="What needs to be done? Search or add..." ></input>
          <button className='bg-[#337AB7] h-full text-white px-[12px] py-[6px] border rounded-r font-[14px] hover:grayscale-[40%] flex justify-center items-center'><AddIcon /></button>
        </form>
    </div>
  )
}
