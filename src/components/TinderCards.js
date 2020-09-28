import React,{useState,useEffect} from 'react'
import TinderCard from 'react-tinder-card';
import '../css/TinderCard.css'
import database from '../firebase';
function TinderCards() {

     const [people, setPeople] = useState([])

    useEffect(() => {
        const unsubscribe =  database.collection('people').onSnapshot(snapshot=>(
            setPeople(snapshot.docs.map(doc=>doc.data()))
        ));

        return () =>{
            //this is where we clenup the function ...
            unsubscribe();
        }

     }, [people])

    
    return (
        <div>
             <div className="card_container">
             {people.map(person=>
                  <TinderCard 
                        className="swipe" 
                        key={person.name}
                        preventSwipe={['up','down']}>
                      <div  style={{ backgroundImage:`url(${person.image})`}} className="card">
                          <h3>{person.name}</h3>
                      </div>
                  </TinderCard> 
                )}
             </div>
            
        </div>
    )
}

export default TinderCards
