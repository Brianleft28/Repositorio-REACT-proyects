import { useState } from "react";
import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard.jsx";

export function App() {
  const  [name, setname]= useState('pedrito')

  return (
    <div className="App">
      <TwitterFollowCard userName="elonmusk">Elon Musk</TwitterFollowCard>

      <TwitterFollowCard userName={name}>
        Brian Benegas
      </TwitterFollowCard>

      <TwitterFollowCard userName="midudev">
        Miguel Ángel Durán
      </TwitterFollowCard>
      <button onClick={() => setname('Brianleft28')}>Cambio Nombre</button>
    </div>

  );
}

