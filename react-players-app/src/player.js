import React from 'react';

import { defaultImage } from './players';

const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={imageUrl} alt={name} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Team: {team} <br />
          Nationality: {nationality} <br />
          Jersey Number: {jerseyNumber} <br />
          Age: {age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

Player.defaultProps = {
  name: 'Unknown',
  team: 'Unknown',
  nationality: 'Unknown',
  jerseyNumber: 0,
  age: 0,
  imageUrl: defaultImage
};

export default Player;