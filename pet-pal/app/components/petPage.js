'use client';
import { useEffect, useState, useRef } from 'react';
import petData from '../database/petsData.json';
import 'bootstrap/dist/css/bootstrap.min.css';

function SinglePetPage({ id }) {
  // state to keep track of the pet being displayed
  const [pet, setPet] = useState({});
  //state to keep track of name of the pet
  const [petName, setPetName] = useState('');

  const petNameRef = useRef('');
  // function to find pet from petdata and return pet
  function findPet() {
    const pet = petData.find((pet) => pet.id === id);
    return pet;
  }
  // found pet set to current displayed pet
  useEffect(() => {
    const foundPet = findPet();
    setPet((prev) => ({ ...foundPet }));
  }, [id]);

  function handleChange(e) {
    setPetName(e.target.value);
  }
  function handleGo() {
    setPetName(petName);
  }
  return (
    <section
      className="single-petContainer"
      style={{
        backgroundColor: '#191743',
        height: '100vh',
        width: '100vw',
      }}
    >
      <div className="img-container">
        <img src={pet.avatar} alt="pet-avatar" />
      </div>
      <div className="nameInput">
        <input
          type="text"
          value={petName}
          onChange={handleChange}
          placeholder="Enter a name for your pet"
        />
        <button
          type="submit"
          onClick={() => {
            setPetName(petName);
            handleGo();
          }}
        >
          {' '}
          Go!
        </button>
      </div>{' '}
      <h1>{petName || 'Kitty'}</h1>{' '}
    </section>
  );
}

export default SinglePetPage;
