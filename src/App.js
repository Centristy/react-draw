import './App.css';
import React, { useState, useEffect } from "react";
import axios from "axios";
import Deck from './Deck.js'

function App() {

  const [newDeck, setNewDeck] = useState(null);

  useEffect(function fetchUserWhenMounted() {
    async function fetchDeck() {
      const newDeck = await axios.get(
        "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1");
      setNewDeck(newDeck.data);
    }
    fetchDeck();}, []);


  return (
    
<div>
  <Deck/>
  {newDeck ? <Deck newDeck={newDeck}/> : <i>(loading ... )</i>}</div>
  );
}

export default App;
