import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
const [check1, setCheck1] = useState(false)
const [check2, setCheck2] = useState(false)
const [check3, setCheck3] = useState(false)
const [check4, setCheck4] = useState(false)
const [check5, setCheck5] = useState(false)
const [check6, setCheck6] = useState(false)

//Shuffle function 
const ul = document.querySelector('ul');

const shuffle = () => {
  // document.getElementsByClassName('pog').style.display = "none"
  for (let i = ul.children.length; i >= 0; i--) {
    ul.appendChild(ul.children[Math.random() * i | 0]);
  }
  setCheck1(false)
  setCheck2(false)
  setCheck3(false)
  setCheck4(false)
  setCheck5(false)
  setCheck6(false)
}

// useEffect(() => {
//   shuffle()
// }, [])

const  match = (event) => {
  const name = event.target.getAttribute("name");
  let p = []
  p.push(name)
  console.log(p)
}

  return (
    <div className="App">
        <button className='shuffle' onClick={shuffle}>Shuffle</button>
        <ul>
          <section onClick={match}>
            <div className='cards' name='King' onClick={() => {setCheck1(!check1)}}>
              <p className='reset' style={{ display: check1 ? "block" : "none" }}>King</p>
            </div>
            <div className='cards' name='King' onClick={() => {setCheck2(!check2)}}>
              <p className="reset" style={{ display: check2 ? "block" : "none" }}>King</p>
            </div>
          </section>

          <section onClick={match}>
            <div className='cards' name='Queen' onClick={() => {setCheck3(!check3)}}>
              <p className="reset" style={{ display: check3 ? "block" : "none" }}>Queen</p>
            </div>
            <div className='cards' name='Queen' onClick={() => {setCheck4(!check4)}}>
              <p className="reset" style={{ display: check4 ? "block" : "none" }}>Queen</p>
            </div>
          </section>

          <section onClick={match}>
            <div className='cards' name='Jack' onClick={() => {setCheck5(!check5)}}>
              <p className="reset" style={{ display: check5 ? "block" : "none" }}>Jack</p>
            </div>
            <div className='cards' name='Jack' onClick={() => {setCheck6(!check6)}}>
              <p className="reset" style={{ display: check6 ? "block" : "none" }}>Jack</p> 
            </div> 
          </section>

        </ul>
    </div>
  );
}

export default App;