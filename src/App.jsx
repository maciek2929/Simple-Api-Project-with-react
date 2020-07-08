import React, {useState, useEffect} from 'react';
import Header from './components/ui/Header'
import axios from 'axios'
import CharactersGrid from './components/characters/CharactersGrid'
import Search from './components/ui/Search'

import './App.css';

function App() {
  const [items, setItmes] = useState([]) //items reprezentuje rzeczy przychodzace z Api, Use state inicjalizuje poczatkowa wartosc na pusta tablice
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')

  useEffect(()=>{
    const fetchItems = async ()=> {
      const apiResult = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`);
      console.log(apiResult.data);
      setItmes(apiResult.data);
      setIsLoading(false)
      

    }
    fetchItems()

  },[query]) // za kazdym razem gdy wartosc query sie zmieni Use Efect zostanie odpalony jeszcze raz

  return (
    <div className="App">
      <Header/>
      <Search getQuery={(q)=>{
        setQuery(q)}}/>
      <CharactersGrid items={items} isLoading={isLoading}/>
      
    </div>
  );
}



export default App;
