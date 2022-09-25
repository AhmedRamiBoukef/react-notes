

import React from 'react'

export const Items = ({notes}) => {
  return (
    <div className='bg-[#777777] rounded text-white px-2 font-bold relative text-center py-1'>{notes.filter(elem => elem.check===false).length} item left</div>
  )
}
