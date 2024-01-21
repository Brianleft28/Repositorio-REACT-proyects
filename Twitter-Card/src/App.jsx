import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard.jsx";

 const users = [
  {
    userName: 'midudev',
    name: 'Miguel Ángel Durán',
    isFollowing: false
  },
  {
    userName: 'Brianleft28',
    name: 'Brian Benegas',
    isFollowing: true
  },
  {
    userName: 'elonmusk',
    name: 'Elon Musk',
    isFollowing: true
  },
  {
    userName: 'argentina',
    name: 'Lionel Messi 10',
    isFollowing: false
  }
 ]

export function App() {
  
    return (
      
      <section className="App">
        {
          users.map(({ userName, name, isFollowing })  =>  (
              <TwitterFollowCard
                key={userName}
                userName={userName}
                name={name}
                initialIsFollowing={isFollowing}
                > 
               {name}
              </TwitterFollowCard>
            )
          )
        }
      </section>

  );
}

