import Link from 'next/link';
import petsData from '../database/petsData.json';

function ChoosePet() {
  return (
    <div className="petsDisplay">
      <h3>Choose a pet to adopt</h3>
      <div className="petsContainer">
        {petsData.map((pet) => (
          <Link href={`/pets/${pet.id}`} className="petLinkPage" key={pet.id}>
            <section>
              {/* <h2>{pet.name}</h2>
              <h3>{pet.bio}</h3> */}
              <img src={pet.avatar} alt={`Avatar of ${pet.name}`} />
            </section>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default ChoosePet;
