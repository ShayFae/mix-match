import './App.css';

function App() {
let cards = ['King', 'King', 'Queen', 'Queen', 'Jack', 'Jack']

let parseCards = cards.map(x => x)

// const shuffle = () => {
//   for(let i = 0; i < cards.length; i++) {
//     let num = Math.floor(Math.random() * cards.length);
//   }
// }

  return (
    <div className="App">
      <div>
        <p>{parseCards}</p>
      </div>
      <button onClick={shuffle(cards)}>Shuffle</button>
    </div>
  );
}

export default App;