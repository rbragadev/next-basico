import DoorModel from '@/model/door';

export function createDoors(qtd: number, doorHasGift: number): DoorModel[] {
  return Array.from({ length: qtd }, (_, i) => {
    const number = i + 1;
    const hasGift = number === doorHasGift;
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
