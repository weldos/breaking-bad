import React, { useState, useEffect} from 'react';
import './App.css';
import axios from 'axios'

// Import Custom Components
import Header from './components/ui/Header';



function App() {

  // this is an array called items, the update function is called setItems
  const  [ items, setItems] = useState([]);

  // this is a boolean variable called isLoading, the update function is setIsLoading.
  const [ isLoading, setIsLoading] = useState(true);

  useEffect (() => {
    const fetchItems = async () => {
      const res = await axios(
        `https://www.breakingbadapi.com/api/characters`
      );

      console.log(res.data)
    }
      fetchItems()

    }, [])

    //an empty array states that the useEffect will be called once after the components has mounted


  return (
    <div className="container">
      <Header />
    </div>
  );
}

export default App;
