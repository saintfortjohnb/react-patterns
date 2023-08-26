import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function DogDetails(props) {
  const navigate = useNavigate();
  const { name } = useParams();
  const dog = props.dogs.find(d => d.name.toLowerCase() === name.toLowerCase());

  useEffect(() => {
    if (!dog) {
      navigate('/dogs', { replace: true });
    }
  }, [dog, navigate]);

  if (!dog) return null;

  return (
    <div>
      <h2>{dog.name}</h2>
      <img src={dog.src} alt={dog.name} />
      <ul>
        {dog.facts.map((fact, idx) => (
          <li key={idx}>{fact}</li>
        ))}
      </ul>
    </div>
  );
}

export default DogDetails;
