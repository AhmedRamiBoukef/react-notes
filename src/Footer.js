

import React from 'react'
import { Items } from './Items'
import { Select } from './Select'
import { Access } from './Access'
export const Footer = ({setNotes,notes}) => {
  return (
    <div className='w-[568px] bg-[#f5f5f5] border-b border-x mx-auto rounded-b px-[15px] py-[10px] flex justify-between items-center'>
      <Items notes={notes}/>
      <Select/>
      <Access setNotes={setNotes} notes={notes}/>
    </div>
  )
}
