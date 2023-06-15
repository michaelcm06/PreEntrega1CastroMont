import React from 'react'
import NavBar from '../../components/Nav-Bar/NavBar';
import CardItem from '../../components/ItemListContainer';
import myAlim from '../../assets/comida1.jpg';


const HomePage = () => {
return (
  <div>
    <NavBar />  
    <div>
        <CardItem 
        title="Título de la tarjeta"
        description="Descripción de la tarjeta"
        image={myAlim}
        />
      </div>    
  </div>

)
}

export default HomePage;