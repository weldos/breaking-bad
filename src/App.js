import React, { useState, useEffect} from 'react';
import './App.css';
import axios from 'axios'

// Import Custom Components
import Header from './components/ui/Header';
import CharacterGrid from './components/characters/CharacterGrid';
import Search from './components/ui/Search';



function App() {

  // this is an array called items, the update function is called setItems
  const  [ items, setItems] = useState([]);

  // this is a boolean variable called isLoading, the update function is setIsLoading.
  const [ isLoading, setIsLoading] = useState(true);

  const [query, setQuery] = useState('');

  useEffect (() => {
    const fetchItems = async () => {
      const res = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );

    // add how many episodes a character was in  - .api/episodes diff endpoint

      console.log(res.data)
      setItems(res.data);
      setIsLoading(false);
    }
      fetchItems();

    }, [query])

    //an empty array states that the useEffect will be called once after the components has mounted


  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)}/>
      <CharacterGrid isLoading={isLoading} items={items}/>
    </div>
  );
}

export default App;
