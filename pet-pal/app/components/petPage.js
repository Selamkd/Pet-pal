'use client';
import { useEffect, useState } from 'react';
import petData from '../database/petsData.json';
import 'bootstrap/dist/css/bootstrap.min.css';
function SinglePetPage({ id }) {
  const [pet, setPate] = useState({});
  const [backgroundColor, setBackgroundColor] = useState('#050a18');
  const colors = ['#191743', '#0f0b2d', '#0a1628', '#081438'];
  function handleBackgroundChange() {
    colors.map((color) => setBackgroundColor(color));
  }
  function findPet() {
    const pet = petData.find((pet) => pet.id === id);
    return pet;
  }
  useEffect(() => {
    const foundPet = findPet();
    setPate((prev) => ({ ...foundPet }));
  }, [id]);
  return (
    <section
      className="single-petContainer"
      style={{
        backgroundColor: backgroundColor,
        height: '100vh',
        width: '100vw',
      }}
    >
      <div className="container mt-4 mx-auto vh-100 d-flex align-items-center">
        <div className="row">
          <div className="col-md-4">
            <div className="img-container">
              <img src={pet.avatar} alt="pet-avatar" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="petbio-container">
              <h2>{pet.name}</h2>
              <p>{pet.bio}</p>
              <button>Adopt</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default SinglePetPage;
