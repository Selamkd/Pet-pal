'use client';
import Image from 'next/image';
import styles from './page.module.css';
import ChoosePet from './components/meetPets';
import { useState } from 'react';
export default function Home() {
  const [backgroundColor, setBackgroundColor] = useState('#050a18');

  function handlePetHover(color) {
    setBackgroundColor(color);
  }
  return (
    <main
      className="main"
      style={{
        backgroundColor: backgroundColor,
        height: '100vh',
        width: '100vw',
      }}
    >
      <h1 className="heading">Pet pal: Your digital bestfriend</h1>
      <ChoosePet onPetHover={handlePetHover} />
    </main>
  );
}
