import React, {useState} from 'react';
import './App.css';
import contacts from './contacts.json';



console.log(contacts)

function App(){
 const firstFive = contacts.slice(0, 5)
 console.log(firstFive)
 const showFive=()=>{
   return firstFive.map(eachContact =>{
     return <li>{eachContact.name} <img src={eachContact.pictureUrl}/></li>
   })
 }




  return (
    <div>Hello 
    {showFive()}
    </div>
  )
}

export default App;