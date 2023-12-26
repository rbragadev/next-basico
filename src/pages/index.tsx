import DoorModel from '@/model/door';
import Door from '../components/Door';
import { useState } from 'react';

export default function Home() {
  const [p1, setP1] = useState(new DoorModel(1));

  return (
    <div style={{ display: 'flex' }}>
      <Door value={p1} onChange={(newDoor) => setP1(newDoor)}></Door>
    </div>
  );
}
