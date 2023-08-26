import React from 'react';

function DogList(props) {
  return (
    <div>
      {props.dogs.map(dog => (
        <div key={dog.name}>
          <img src={dog.src} alt={dog.name} />
          <h3>{dog.name}</h3>
        </div>
      ))}
    </div>
  );
}

export default DogList;
