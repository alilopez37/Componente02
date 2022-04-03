import React, {useState} from 'react';
import Card from '../components/Card'

const Home = () => {
    const [arrayCards, setArrayCards] = useState([])

    const loadCards = () =>{
       fetch('https://rickandmortyapi.com/api/character')
           .then( response => response.json())
           .then (data => setArrayCards(data.results))
           .catch( error => {
               console.log('Error al cargar los datos')
           })
    }

    return (
        <React.Fragment>
            <button type="button" className="btn btn-success" onClick={loadCards}>Cargar elementos</button>
            {
                arrayCards.map( (item) => <Card image={item.image} name={item.name} key={item.id}/>)
            }
        </React.Fragment>
    )
}

export default Home;