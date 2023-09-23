import { useState } from 'react'

import './App.css';
import data from './data';
import List from './components/List';

function App() {
 
  const [people, setPeople] = useState(data);
  
  const handleRemove = (id) => {
    people.filter((item) => {
     let filterData = item.id != id;
     return setPeople(filterData);
    })
  }

  return (
    <>
      
      <h2 className='heading'>Birthday Intro App</h2>
      <div className="card">
        <h4>Todays Birthday: {people.length}</h4>
        <List people={people} handleRemove={handleRemove} />
        <button className='clearBtn' onClick={() => setPeople([])}>Clear All</button>
      </div>
    </>
  )
}

export default App
