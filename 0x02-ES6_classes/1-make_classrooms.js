import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const classrooms = new Array(3);
  classrooms[0] = new ClassRoom(19);
  classrooms[1] = new ClassRoom(20);
  classrooms[2] = new ClassRoom(34);
  return classrooms;
}
