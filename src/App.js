import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
const [check1, setCheck1] = useState(false);
const [check2, setCheck2] = useState(false);
const [check3, setCheck3] = useState(false);
const [check4, setCheck4] = useState(false);
const [check5, setCheck5] = useState(false);
const [check6, setCheck6] = useState(false);

const [hat, setHat] = useState(false)

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
let d = []

const  match = (event) => {
  const name = event.target.getAttribute("name");
  const name2 = event.target.getAttribute("id");
  setO([...o, name, name2]);
}

if(o.length >= 2) {
  let y = o.filter(x => x !== null);
  d.push(y[0], y[1])
}
// console.log(d)
if(d.length === 2  && d[0] === d[1]) {
  setScore(prev => prev + 1);
  console.log('MATCH')
  }else if(d.length === 2 && d[0] !== d[1]) {
      console.log('NO MATCH')
      let v = document.getElementsByName(d[0], d[1])
      console.log(v)
      if(d[0] === 'Hat' || d[1] === 'Hat') {
        // setHat(true)
      }
}


  if(o.length > 2) {
    setO([]);
  }

  return (
    <div className="App">
        <h1>Current Score: {score}</h1>
        <ul>
          <section onClick={match}>
            <div className='cards' name='Hat' onClick={() => {setCheck1(!check1); setAdd('Hat')}}>
              <p className='reset' style={{ display: check1 ? "block" : "none" }}><img src="https://static.vecteezy.com/system/resources/previews/004/745/869/original/top-hat-free-vector.jpg" /></p>
            </div>
            <div className='cards' name="Hat" onClick={() => {setCheck2(!check2); setAdd('Hat')}}>
              <p className="reset" style={{ display: check2 ? "block" : "none" }}><img src="https://static.vecteezy.com/system/resources/previews/004/745/869/original/top-hat-free-vector.jpg" style={{ display: hat ? "none" : "block" }}/></p>
            </div>
          </section>

          <section onClick={match}>
            <div className='cards' name='Cat' onClick={() => {setCheck3(!check3); setAdd('Cat')}}>
              <p className="reset" style={{ display: check3 ? "block" : "none" }}><img src="https://static.thenounproject.com/png/1179225-200.png" /></p>
            </div>
            <div className='cards' name='Cat' onClick={() => {setCheck4(!check4); setAdd('Cat')}}>
              <p className="reset" style={{ display: check4 ? "block" : "none" }}><img src="https://static.thenounproject.com/png/1179225-200.png" /></p>
            </div>
          </section>

          <section onClick={match}>
            <div className='cards' name='Controller' onClick={() => {setCheck5(!check5); setAdd('Controller')}}>
              <p className="reset" style={{ display: check5 ? "block" : "none" }}><img src="https://opengameart.org/sites/default/files/psController.png" /></p>
            </div>
            <div className='cards' name='Controller' onClick={() => {setCheck6(!check6); setAdd('Controller')}}>
              <p className="reset" style={{ display: check6 ? "block" : "none" }}><img src="https://opengameart.org/sites/default/files/psController.png" /></p> 
            </div> 
          </section>
        </ul>
        <button className='shuffle' onClick={shuffle}>Shuffle</button>
    </div>
  );
}

export default App;