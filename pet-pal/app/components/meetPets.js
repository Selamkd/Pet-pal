import Link from 'next/link';
import petsData from '../database/petsData.json';
import { useState } from 'react';
import { router } from 'next';
function ChoosePet({ onPetHover }) {
  const [selectedPet, setSelectedPet] = useState(null);

  const handleAdopt = (event, petId) => {
    event.preventDefault();
    router.push(`/pets/${petId}`);
  };
  const openModal = (petId) => {
    setSelectedPet(petId);
  };
  const closeModal = () => {
    setSelectedPet(null);
  };
  const colors = ['#191743', '#0f0b2d', '#0a1628', '#081438'];
  return (
    <div className="petsDisplay">
      <h3>Choose a pet to adopt</h3>
      <div className="petsContainer">
        {petsData.map((pet, index) => (
          <div className="petLinkPage" key={pet.id}>
            <section>
              {/* <h2>{pet.name}</h2>
              <h3>{pet.bio}</h3> */}
              <div className="pet-avatar">
                <img
                  src={pet.avatar}
                  alt={`Avatar of ${pet.name}`}
                  onMouseEnter={() => onPetHover(colors[index])}
                  onMouseLeave={() => onPetHover('black')}
                />
              </div>

              {selectedPet === pet.id && (
                <div className="pet-info-modal">
                  <div className="pet-info">
                    <h2>{pet.name}</h2>
                    <p>{pet.bio}</p>
                  </div>
                  <button
                    className="modal-close"
                    onClick={(event) => handleAdopt(event, pet.id)}
                  >
                    Adopt
                  </button>
                </div>
              )}
              <button className="learn-more" onClick={() => openModal(pet.id)}>
                Learn More
              </button>
            </section>
          </div>
        ))}
      </div>
    </div>
  );
}
export default ChoosePet;
