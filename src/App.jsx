import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard.jsx";

export function App() {


  return (
    <div className="App">
      <TwitterFollowCard userName="elonmusk">Elon Musk</TwitterFollowCard>

      <TwitterFollowCard userName='Brianleft28' initialIsFollowing={true}>
        Brian Benegas
      </TwitterFollowCard>

      <TwitterFollowCard userName="midudev">
        Miguel Ángel Durán
      </TwitterFollowCard>
    </div>

  );
}

