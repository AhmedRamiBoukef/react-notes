import './App.css';
import  {Header}  from './Header';
import { Body } from './Body';
import { Footer } from './Footer';
import { useState } from 'react';
function App() {
  const [notes,setNotes] = useState([
    {
      id: 1,
      text: "text",
      check: true
    },
    {
      id: 2,
      text: "text2",
      check: true
    },
    {
      id: 3,
      text: "text3",
      check: false
    },
  ])
  return (

    <div className="App mt-6">
      <Header />
      <Body notes={notes} setNotes={setNotes}/>
      
      
      <Footer setNotes={setNotes} notes={notes}/>
    </div>
  );
}

export default App;
 