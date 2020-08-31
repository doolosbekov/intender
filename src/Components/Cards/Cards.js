/* Components - Cards | React Core */
import React, {useState, useEffect} from 'react'

/* Components - Cards & Firebase | Tinder Cards & Firebase */
import TinderCard  from 'react-tinder-card'
import Database    from './../Firebase';

/* Components - Cards | Custom Styles */
import {CardStyles}  from './Styles'

/* Cards Declaration */
export default function Cards() {
     const classes = CardStyles();
     const [players, setPlayers] = useState([]);
     useEffect(() => {
         const unfollow = Database
             .collection('players')
             .onSnapshot(snapshot => (
                 setPlayers (snapshot.docs.map(doc => doc.data()))
         ))
         return() => unfollow();
     }, []);
     
     return(
         <div>
             <div className = {classes.card__container}>
             {players.map(person => (
                 <TinderCard
                     key = {person.name} 
                     className    = {classes.swipe}
                     preventSwipe = {['up', 'down']}
                 >
                     <div 
                         className = {classes.card}
                         style = {{ backgroundImage: `url(${person.url})` }}
                     >
                         <h4 className = {classes.card__titles}>
                             {person.name}{'\u0020'}{person.position}
                         </h4>
                     </div>    
                 </TinderCard>
             ))}
             </div>
         </div>
     )
}