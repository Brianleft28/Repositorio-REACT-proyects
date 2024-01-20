/* IMPORTANDO HOOKS DE REACT PARA TRABAJAR CON ESTADOS */
import { useState } from "react"
/* Aquí empieza mi componente */
export function TwitterFollowCard ({userName, children}) {
 
  const [isFollowing, setIsFollowing] = useState(false);
  const text = isFollowing ? 'Siguiendo' : 'Seguir'
  const buttonClassname = isFollowing 
  ? 'tw-followCard-button is-following'
  : 'tw-followCard-button'

  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }

return (  
  
    <article className='tw-followCard'> 
        <header className='tw-followCard-header'>
          <img 
          className='tw-followCard-avatar'
          alt="Migue Granados"
          src={`https://unavatar.io/twitter/${userName}` }/>
          <div className='tw-followCard-info'>
          <strong>{children}</strong>
          <span className='tw-followCard-infoUsername'>@{userName}</span>
          </div>
        </header>
        <aside>
          <button className={buttonClassname} onClick={handleClick}>{text}</button>
        </aside>
          
    </article>
    )
}