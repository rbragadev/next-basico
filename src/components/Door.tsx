import DoorModel from '@/model/door';
import styles from '../styles/Door.module.css';

interface DoorProps {
  value: DoorModel;
  onChange: (newDoor: DoorModel) => void;
}

export default function Door(props: DoorProps) {
  const door = props.value;
  const doorSelected = door.selected && !door.open ? styles.frameSelected : '';

  const alterSelect = (e: any) => props.onChange(door.alterSelect());
  const open = (e: any) => {
    e.stopPropagation();
    props.onChange(door.openDoor());
  };

  function renderDoor() {
    return (
      <div className={styles.door}>
        <div className={styles.number}>{door.number}</div>
        <div className={styles.doorknob} onClick={open}></div>
      </div>
    );
  }

  return (
    <div className={styles.area} onClick={alterSelect}>
      <div className={`${styles.frame} ${doorSelected}`}>
        {door.open ? false : renderDoor()}
      </div>

      <div className={styles.floor}></div>
    </div>
  );
}
