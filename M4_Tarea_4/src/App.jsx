import React from 'react';
import CharacterCard from './components/CharacterCard';

function App() {
  const [name, setName] = useState("");
const [image, setImage] = useState("");
const [genre, setGenre] = useState("");
const [status, setStatus] = useState("");

const rickAndMortyCharacterId = 1;

    useEffect( () => {
      fetch("https://rickandmortyapi.com/api/character/"+rickAndMortyCharacterId)
      .then((response) => response.jsxon())
      .then((result) =>
          console.log(result),
          setName(result.name)
      );
  }, []) 
return (
  <div>
    <h1>Personajes de Rick and morty</h1>
   <CharacterCard 
      name={name}
      image={image}
      genre={genre}
      status={status}
    />
  </div>
);
}

export default App;

