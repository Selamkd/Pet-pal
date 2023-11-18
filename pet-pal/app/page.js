import Image from 'next/image';
import styles from './page.module.css';
import ChoosePet from './components/meetPets';
export default function Home() {
  return (
    <main className="main">
      <h1 className="heading">Pet pal: Your digital bestfriend</h1>
      <ChoosePet />
    </main>
  );
}
