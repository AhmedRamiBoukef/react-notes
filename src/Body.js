
import { Search } from './Search'
import { Notes } from './Notes'
import {Active} from './Active'
import {Completed} from './Completed'
import { Routes, Route } from "react-router-dom";
import { Alert } from './Alert';

export const Body = ({notes,setNotes}) => {
  
  const check = (id) => {
    let newNotes = notes.slice()
    newNotes[newNotes.findIndex(elem => elem.id===id)].check = !notes.find(elem => elem.id===id).check
    setNotes(newNotes) 
    console.log(notes);
    
  } 
  return (
    <div className='w-[568px] shadow-sm h-[440px] overflow-hidden border ml-auto mr-auto rounded-t mt-4 p-[15px]'>
      <Search notes={notes} setNotes={setNotes}/>
      
        {notes.length !== 0 && <Routes>
        <Route path="/" exact element={<Notes notes={notes} check={check}/>} />
        <Route path="/Active"  element={<Active notes={notes} check={check}/>} />
        <Route path="/Completed" element={<Completed notes={notes} check={check}/>} />
      </Routes>}
      
        {notes.length === 0 && <Alert></Alert>}
      
      
    </div>
  )
}
