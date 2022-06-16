import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
const [check1, setCheck1] = useState(false);
const [check2, setCheck2] = useState(false);
const [check3, setCheck3] = useState(false);
const [check4, setCheck4] = useState(false);
const [check5, setCheck5] = useState(false);
const [check6, setCheck6] = useState(false);

const [o, setO] = useState([]);
const [add, setAdd] = useState('')
const [score, setScore] = useState(0)

//Shuffle function 
const ul = document.querySelector('ul');

const shuffle = () => {
  // document.getElementsByClassName('pog').style.display = "none"
  for (let i = ul.children.length; i >= 0; i--) {
    ul.appendChild(ul.children[Math.random() * i | 0]);
  }
  setCheck1(false);
  setCheck2(false);
  setCheck3(false);
  setCheck4(false);
  setCheck5(false);
  setCheck6(false);
  setScore(0)
}

// useEffect(() => {
//   shuffle()
// }, [])

let p =[];
let test = {}

const  match = (event) => {
  const name = event.target.getAttribute("name");
  const name2 = event.target.getAttribute("id");
  setO([...o, name, name2]);
}

if(o.length >= 2) {
  console.log('FULL');
  let y = o.filter(x => x !== null);
  console.log(y);
  if(y[0] === y[1]) {
    console.log('MATCH');
    // setCount(prev => {
    //   prev += 1
    // })
    setScore(prev => prev + 1);
    setO([])
  } else {
    console.log('NO MATCH');
    //Test
    // setCheck1(!check1)
    // setCheck2(!check2)
  }
}

if(o.length > 2) {
  setO([]);
}

console.log(score)
  return (
    <div className="App">
        <h1>Current Score: {score}</h1>
        <ul>
          <section onClick={match}>
            <div className='cards' name='King' onClick={() => {setCheck1(!check1); setAdd('Kng')}}>
              <p className='reset' style={{ display: check1 ? "block" : "none" }}><img src="https://static.vecteezy.com/system/resources/previews/004/745/869/original/top-hat-free-vector.jpg" /></p>
            </div>
            <div className='cards' name="King" onClick={() => {setCheck2(!check2); setAdd('King')}}>
              <p className="reset" style={{ display: check2 ? "block" : "none" }}><img src="https://static.vecteezy.com/system/resources/previews/004/745/869/original/top-hat-free-vector.jpg" /></p>
            </div>
          </section>

          <section onClick={match}>
            <div className='cards' name='Queen' onClick={() => {setCheck3(!check3); setAdd('Queen')}}>
              <p className="reset" style={{ display: check3 ? "block" : "none" }}><img src="https://static.thenounproject.com/png/1179225-200.png" /></p>
            </div>
            <div className='cards' name='Queen' onClick={() => {setCheck4(!check4); setAdd('Queen')}}>
              <p className="reset" style={{ display: check4 ? "block" : "none" }}><img src="https://static.thenounproject.com/png/1179225-200.png" /></p>
            </div>
          </section>

          <section onClick={match}>
            <div className='cards' name='Jack' onClick={() => {setCheck5(!check5); setAdd('Jack')}}>
              <p className="reset" style={{ display: check5 ? "block" : "none" }}><img src="https://opengameart.org/sites/default/files/psController.png" /></p>
            </div>
            <div className='cards' name='Jack' onClick={() => {setCheck6(!check6); setAdd('Jack')}}>
              <p className="reset" style={{ display: check6 ? "block" : "none" }}><img src="https://opengameart.org/sites/default/files/psController.png" /></p> 
            </div> 
          </section>
        </ul>
        <button className='shuffle' onClick={shuffle}>Shuffle</button>
    </div>
  );
}

export default App;