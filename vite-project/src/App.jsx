import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function SuperheroCard({superhero}) {
let {name,age,powers,isBachelor,imageUrl}=superhero;
  return(
      <div className={'superhero-card ${isBachelor ? "Bachelor":"Not Bachelor"}'}> 
      <img src={imageUrl} alt={name}/>
        <h1>Name:{name}</h1>
        <p>Age:{age}</p>
        <p>Powers:{powers.join(", ")}</p>
      </div>    
  ) 

}

function App() {
  const superheroes = [
    {
      name: "Batman",
      powers: ["Rich", "Fly", "Genius"],
      address: {
        street: "Gotham St",
        city: "Gotham",
        country: "USA",
      },
      age: 21,
      isBachelor: true,
      imageUrl:
        "https://rukminim2.flixcart.com/image/850/1000/poster/7/d/g/batman-portrait-bt455566-medium-original-imaekp86fhb3fhxf.jpeg",
    },
    {
      name: "Superman",
      powers: ["Laser Fry", "Fly", "Runs Fast"],
      address: {
        street: "Central St",
        city: "New York",
        country: "USA",
      },
      age: 41,
      isBachelor: false,
      imageUrl:
        "https://c8.alamy.com/comp/2R7EMM0/portrait-of-a-drawing-of-superman-superhero-warner-dc-and-comics-concept-2R7EMM0.jpg",
    },
  ];
  return (
    <div className='app'>
    {superheroes.map((superhero,index)=>{
      <SuperheroCard key={index} superhero={superhero} />
    })}
    </div>
  )
}

export default App
