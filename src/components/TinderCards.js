import React,{useState} from 'react'
import TinderCard from 'react-tinder-card';
import '../css/TinderCard.css'
function TinderCards() {

     const [people, setPeople] = useState([
         {
           name:'Hamza Ait Sidi Said',
           url :'https://i.insider.com/5c0af6ccdde86778891b5fcf?width=960&format=jpeg&auto=webp%20960w'
         },
         {
           name:'Oumaima',
           url :'https://media.gettyimages.com/photos/facebook-cofounder-chairman-and-ceo-mark-zuckerberg-testifies-before-picture-id944827400?s=2048x2048'
         },
     ])

    
    return (
        <div>
             
             {people.map(person=>
                  <TinderCard 
                        className="swipe" 
                        key={person.name}
                        preventSwipe={['up','down']}>
                      <div  style={{ backgroundImage:`url(${person.url})`}} className="card">
                          <h3>{person.name}</h3>
                      </div>
                  </TinderCard> 
                )}
        </div>
    )
}

export default TinderCards
