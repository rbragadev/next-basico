import DoorModel from '@/model/door';
import styles from '../styles/Door.module.css';

interface DoorProps {
  door: DoorModel;
}

export default function Door(props: DoorProps) {
  const { door } = props;
  const doorSelected = door.selected ? styles.frameSelected : '';

  return (
    <div className={styles.area}>
      <div className={`${styles.frame} ${doorSelected}`}>
        <div className={styles.door}>
          <div className={styles.number}>{door.number}</div>
          <div className={styles.doorknob}></div>
        </div>
      </div>
      <div className={styles.floor}></div>
    </div>
  );
}
