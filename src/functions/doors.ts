import DoorModel from '@/model/door';

export function createDoors(qtd: number, selected: number): DoorModel[] {
  return Array.from({ length: qtd }, (_, i) => {
    const number = i + 1;
    const hasGift = number === selected;
    return new DoorModel(number, hasGift);
  });
}

export function updateDoors(doors: DoorModel[], updatedDoor: DoorModel) {
  return doors.map((doorActually) => {
    const sameAsUpdated = doorActually.number === updatedDoor.number;

    if (sameAsUpdated) {
      return updatedDoor;
    } else {
      return updatedDoor.open ? doorActually : doorActually.deselect();
    }
  });
}
