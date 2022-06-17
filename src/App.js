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

  const [values, setValues] = useState([]);
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
  let valArray = []

  const  match = (event) => {
    const name = event.target.getAttribute("name");
    const name2 = event.target.getAttribute("id");
    setValues([...values, name, name2]);
  }

  if(values.length >= 2) {
    let parseVal = values.filter(x => x !== null);
    valArray.push(parseVal[0], parseVal[1])
  }
  // console.log(d)
  if(valArray.length === 2  && valArray[0] === valArray[1]) {
    setScore(prev => prev + 1);
    console.log('MATCH')
    }else if(valArray.length === 2 && valArray[0] !== valArray[1]) {
        console.log('NO MATCH')
        let test = document.getElementsByName(valArray[0], valArray[1])
        console.log(test)
        if(valArray[0] === 'Hat' || valArray[1] === 'Hat') {
          // setHat(true)
        }
  }

  if(values.length > 2) {
    setValues([]);
  }

  return (
    <div className="App">
        <h1>Current Score: {score}</h1>
        <ul>
          <section onClick={match}>
            <div className='cards' name='Hat' onClick={() => {setCheck1(!check1)}}>
              <p style={{ display: check1 ? "block" : "none" }}><img src="https://static.vecteezy.com/system/resources/previews/004/745/869/original/top-hat-free-vector.jpg" /></p>
            </div>
            <div className='cards' name="Hat" onClick={() => {setCheck2(!check2)}}>
              <p style={{ display: check2 ? "block" : "none" }}><img src="https://static.vecteezy.com/system/resources/previews/004/745/869/original/top-hat-free-vector.jpg" style={{ display: hat ? "none" : "block" }}/></p>
            </div>
          </section>

          <section onClick={match}>
            <div className='cards' name='Cat' onClick={() => {setCheck3(!check3)}}>
              <p style={{ display: check3 ? "block" : "none" }}><img src="https://static.thenounproject.com/png/1179225-200.png" /></p>
            </div>
            <div className='cards' name='Cat' onClick={() => {setCheck4(!check4)}}>
              <p style={{ display: check4 ? "block" : "none" }}><img src="https://static.thenounproject.com/png/1179225-200.png" /></p>
            </div>
          </section>

          <section onClick={match}>
            <div className='cards' name='Controller' onClick={() => {setCheck5(!check5)}}>
              <p style={{ display: check5 ? "block" : "none" }}><img src="https://opengameart.org/sites/default/files/psController.png" /></p>
            </div>
            <div className='cards' name='Controller' onClick={() => {setCheck6(!check6)}}>
              <p style={{ display: check6 ? "block" : "none" }}><img src="https://opengameart.org/sites/default/files/psController.png" /></p> 
            </div> 
          </section>
        </ul>
        <button className='shuffle' onClick={shuffle}>Shuffle</button>
    </div>
  );
}

export default App;