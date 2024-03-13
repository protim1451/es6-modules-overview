import { useEffect, useState } from 'react'
import Sunglass from './components/Sunglass/Sunglass'
import './App.css'
import Watch from './components/watch/Watch'

function App() {
  const [count, setCount] = useState(0)
  // const watches = [
  //   {id: 1, name: 'Apple watch', price: 200},
  //   {id: 2, name: 'Samsung watch', price: 150},
  //   {id: 3, name: 'MI watch', price: 250},
  // ]
    const [watches, setWatches] = useState([]);


    useEffect(() =>{
      fetch('watches.json')
      .then(res => res.json())
      .then(data => setWatches(data));
    }, [])

  
  return (
    <>
      
      <h1>ES6 Modules Overview</h1>
      {
        watches.map(watch => 
        <Watch key={watch.id} watch={watch}></Watch>)
      }
    </>
  )
}

export default App
