import React, { useEffect, useState } from 'react';
import api from './services/Api';

import './Global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

import PlayerItem from './components/PlayerItem';
import PlayerForm from './components/PlayerForm';

function App() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    async function loadPlayers() {
      const response = await api.get('./players');

      console.log(response)
      setPlayers(response.data);
    }
    
    loadPlayers();
  }, [])

  async function handleAddPlayer(data){
    const response = await api.post('/players', data);
    setPlayers([...players, response.data]);
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <PlayerForm onSubmit={ handleAddPlayer }/>
      </aside>
      <main>
        <ul>
          {
            players.map(player => (
              <PlayerItem key={player._id} player={player}/>
            ))
          }
        </ul>
      </main>
    </div>
  );
}

export default App;
