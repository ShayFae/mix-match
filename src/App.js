import './App.css';
import React, { useState } from 'react';

function App() {
// let cards = ['King', 'King', 'Queen', 'Queen', 'Jack', 'Jack']
const [check, setCheck] = useState(false)
const [count, setCount] = useState(0)

const [check1, setCheck1] = useState(false)
const [check2, setCheck2] = useState(false)
const [check3, setCheck3] = useState(false)
const [check4, setCheck4] = useState(false)
const [check5, setCheck5] = useState(false)
const [check6, setCheck6] = useState(false)

// const [state, setState] = useState({
//   check1: (false),
//   check2: (false),
//   check3: (false),
//   check4: (false),
//   check5: (false),
//   check6: (false),
// });

// console.log(check2)
// console.log(check1)

  return (
    <div className="App">
        <ul>
          <div className='cards' onClick={() => {setCheck1(!check1)}}>
            <p style={{ display: check1 ? "block" : "none" }}>King</p>
          </div>
          <div className='cards' onClick={() => {setCheck2(!check2)}}>
            <p style={{ display: check2 ? "block" : "none" }}>King</p>
          </div>
          <div className='cards' onClick={() => {setCheck3(!check3)}}>
            <p style={{ display: check3 ? "block" : "none" }}>Queen</p>
          </div>
          <div className='cards' onClick={() => {setCheck4(!check4)}}>
            <p style={{ display: check4 ? "block" : "none" }}>Queen</p>
          </div>
          <div className='cards' onClick={() => {setCheck5(!check5)}}>
            <p style={{ display: check5 ? "block" : "none" }}>Jack</p>
          </div>
          <div className='cards' onClick={() => {setCheck6(!check6)}}>
            <p style={{ display: check6 ? "block" : "none" }}>Jack</p> 
          </div>
        </ul>
    </div>
  );
}

export default App;