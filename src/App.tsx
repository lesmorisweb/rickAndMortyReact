import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import axios from 'axios';
import './App.css'
import { getAllCharacters } from './utils/services/characters';
import { ICard } from './components/card/interfaces';
import { Card } from './components/card/Card';
import { CardsContainer } from './components/cardsContainer/CardsContainer';
import { getAllCharactersMapped, getFilteredCharacter } from './utils/dataManagement/dataFiltering';
import { SearchBar } from './components/searchBar/SearchBar';
// import { SeachBar } from './components/searchBar/SearchBar';

function App() {

  const [rickAndMortyData, setRickAndMortyData] = useState<ICard[]>([{
    name: "loading",
    image: "",
    location: "loading"
  }]);
  const [filteredData, setfilteredData] = useState<ICard[]>(rickAndMortyData);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const [search, setSearch] = useState("");

  useEffect(()=> {
    setIsLoading(true);
    getAllCharacters()
      .then((res) => {
        if (res.status !== 200) {
          setError(true);
        } else {
          const result = res.data.results;
          const cardValueResult = getAllCharactersMapped(result);
          setRickAndMortyData(cardValueResult);
          setfilteredData(cardValueResult);
        }
        setIsLoading(false);
      })
  },[]);


  function onSearchChanges(text: string) {
    setSearch(text);
    setfilteredData(getFilteredCharacter(rickAndMortyData, search));
  }

  return (
    <div className="App">
      <h1>CHARACTERS</h1>
      <SearchBar onDataChangeFunction={onSearchChanges}/>
      {error && <div>Error</div>}
      {rickAndMortyData &&  <CardsContainer rickAndMortyData={filteredData}/>}
    </div>
  )
}

export default App
