import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const useURL = "https://ih-crud-api.herokuapp.com/characters";
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get(useURL)
      .then((response) => {
        console.log(response.data[90]);
        setCharacters(response.data);
      })
      .catch((e) => console.log(e));
  });

  return (
    <div className="App">
      <h1>Number of characters {characters.length}</h1>
      {characters.map((character) => {
        return (
          <div key={character.id}>
            <ul>
              <li>{character.name}</li>

              <ul>
                <li>{character.weapon}</li>

                <li>{character.occupation}</li>
              </ul>
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default App;
