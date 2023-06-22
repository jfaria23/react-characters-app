import "./App.css";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Route, Routes, NavLink } from "react-router-dom";

function App() {
  const baseURL = "https://ih-crud-api.herokuapp.com";

  const [charactersArr, setCharactersArr] = useState(null);

  useEffect(() => {
    axios
      .get(`${baseURL}/characters`)
      .then((response) => {
        setCharactersArr(response.data);
      })
      .catch((e) => console.log(e));
  }, []);

  const renderListOfCharacters = () => {
    if (charactersArr === null) {
      return <p>loading....</p>;
    } else {
      return charactersArr.map((characterObj) => {
        return (
          <div key={characterObj.id} className="character box">
            Name: {characterObj.name} <br />
            Weapon: {characterObj.weapon}
          </div>
        );
      });
    }
  };

  return (
    <div className="App">
      <h1>React Charates App</h1>

      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={renderListOfCharacters()} />
        <Route path="/about" element={<p>Display About page</p>} />
        <Route path="/contact" element={<p>Display Contact page</p>} />
      </Routes>
    </div>
  );
}

export default App;
