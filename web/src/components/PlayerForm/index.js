import React, { useEffect, useState } from 'react';

import './Styles.css';

function PlayerForm( {onSubmit} ){

  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [chess_username, setChess_username] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        setLatitude(latitude);
        setLongitude(longitude);
      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 30000,
      }
    )
  }, []);

  async function handleSubmit (e) {
    e.preventDefault();
    await onSubmit({
      chess_username,
      latitude,
      longitude,
    });
    
    setChess_username('');
  }
    return(
        <form onSubmit={handleSubmit}>
        <div className="input-block">
          <label htmlFor="chess_username">Usuário do Chess</label>
          <input 
            name="chess_username" 
            id="chess_username" 
            required
            value={chess_username}
            onChange={e => setChess_username(e.target.value)}
            />
        </div>

        
        <div className="input-group">
          <div className="input-block">
            <label htmlFor="latitude">Latitude</label>
            <input 
              type="number" 
              name="latitude" 
              id="latitude" 
              required value={latitude}
              onChange={e => setLatitude}
            />
          </div>

          <div className="input-block">
            <label htmlFor="longitude">Longitude</label>
            <input 
              type="number" 
              name="longitude" 
              id="longitude" 
              required value={longitude}
              onChange={e => setLongitude}
            />
          </div>
        </div>
        <button type="submit">Salvar</button>
      </form>
    )
};

export default PlayerForm;