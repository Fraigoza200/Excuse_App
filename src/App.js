import { useState } from 'react';
import './App.css';
import Axios from 'axios'

function App() {
  const [generateExcuse, setGenerateExcuse] = useState('')

  const fetchExcuse = (excuse) => {
    Axios.get(`https://excuser.herokuapp.com/v1/excuse/${excuse}`).then((res) => {
      setGenerateExcuse(res.data[0].excuse)
    })
  }
 
  
  

  return (
    <div className="App">
      <h1 className="header">Generate An Excuse</h1>
      <button className="button 1" onClick= {() => fetchExcuse("family")}>Family</button>
      <button className="button 2" onClick={() => fetchExcuse("party")} >Party</button>
      <button className="button 3" onClick={() => fetchExcuse("office")}>Office</button>
      <p>{generateExcuse}</p>
    </div>
  );
}
export default App;
