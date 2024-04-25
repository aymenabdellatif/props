// PlayersList.js
import React from 'react';
import player from './player';
import players from './players';

const PlayersList = () => {
  return (
    <div>
      {players.map((player, index) => (
        <Player key={index} {...player} />
      ))}
    </div>
  );
};

export default PlayersList;