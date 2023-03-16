import './App.css';
import { useEffect, useState } from 'react';
import StarshipCard from './components/StarshipCard';
import getAllStarships from './services/sw-api';

function App()
{
  const [starshipsData, setStarshipsData] = useState({ starships: undefined, isLoading: true })

  useEffect(() =>
  {
    getAllStarships().then(ships =>
    {
      setStarshipsData({ starships: ships, isLoading: false })
    })
  }, [])

  return (
    <div className="App">
      <header className='App__header'>
        <h1>Star Wars Starships</h1>
      </header>

      {
        starshipsData.isLoading && <h2 className="App__loader">Loading...</h2>
      }

      {
        !starshipsData.isLoading && (

          <div className="App__cards-container">
            {
              starshipsData.starships.results.map(ship => <StarshipCard key={ship.name} shipInfo={ship} />)
            }
          </div>

        )
      }

    </div>
  );
}

export default App;
