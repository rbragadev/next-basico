import Card from '@/components/Card';
import styles from '../styles/Form.module.css';
import Link from 'next/link';
import NumberInput from '@/components/NumberInput';
import { useState } from 'react';

export default function Form() {
  const [qtdDoors, setQtdDoors] = useState(3);
  const [hasGift, setHasGift] = useState(1);

  return (
    <div className={styles.form}>
      <div>
        <Card bgcolor="#c0392c">
          <h1>Monty Hall</h1>
        </Card>
        <Card>
          <NumberInput
            text="QTD Portas"
            value={qtdDoors}
            onChange={(newQtd) => setQtdDoors(newQtd)}
          />
        </Card>
      </div>
      <div>
        <Card>
          <NumberInput
            text="Porta com presente"
            value={hasGift}
            onChange={(newHasGift) => setHasGift(newHasGift)}
          />
        </Card>
        <Card bgcolor="#28a085">
          <Link href={`/game/${qtdDoors}/${hasGift}`}>
            <h2 className={styles.link}>Iniciar</h2>
          </Link>
        </Card>
      </div>
    </div>
  );
}
