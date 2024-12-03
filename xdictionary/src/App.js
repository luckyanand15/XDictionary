import { useState } from "react";
import "./App.css";

const dictionary = [
  {
    word: "React",
    meaning: "A JavaScript library for building user interfaces.",
  },

  { word: "Component", meaning: "A reusable building block in React." },

  { word: "State", meaning: "An object that stores data for a component." },
];

function App() {
  const [value, setValue] = useState('');
  const [matched, setMatched] = useState('');

  const findingMeaning = (lowerWord)=>{
    const found = dictionary.find((item)=> item.word.toLowerCase() === lowerWord)
    setMatched(found ? found.meaning : "Word not found in the dictionary.");
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    findingMeaning(value.toLowerCase());
  }
  return (
    <div>
      <h1>Dictionary App</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Search for a word..." value={value} onChange={(e)=>setValue(e.target.value)}/>
        <button type="submit">Search</button>
      </form>
      <h5>Definition:</h5>
      {matched && <p>{matched}</p>}
    </div>
  );
}

export default App;
