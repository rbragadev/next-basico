import Door from '@/components/Door';
import { createDoors, updateDoors } from '@/functions/doors';
import { useEffect, useState } from 'react';
import styles from '../../../styles/Game.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Game() {
  const router = useRouter();

  const [doors, setDoors] = useState([]);
  const [valid, setValid] = useState(false);

  useEffect(() => {
    const doors = +router.query.doors;
    const hasGift = +router.query.hasGift;
    const qtdDoorsValids = doors >= 3 && doors <= 100;
    const hasValidGift = hasGift >= 1 && hasGift <= doors;

    setValid(qtdDoorsValids && hasValidGift);
  }, [doors]);

  useEffect(() => {
    const doors = +router.query.doors;
    const hasGift = +router.query.hasGift;
    setDoors(createDoors(doors, hasGift));
  }, [router?.query]);

  function renderDoors() {
    return doors.map((door) => {
      return (
        <Door
          key={door.number}
          value={door}
          onChange={(newDoor) => setDoors(updateDoors(doors, newDoor))}
        />
      );
    });
  }

  return (
    <div className={styles.game}>
      <div className={styles.doors}>
        {valid ? renderDoors() : <h2>Valores inválidos</h2>}
      </div>
      <div className={styles.buttons}>
        <Link href="/">
          <button>Reiniciar Jogo</button>
        </Link>
      </div>
    </div>
  );
}
