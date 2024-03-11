export default function getListStudentIds(argument) {
  if (!Array.isArray(argument)) {
    return [];
  }
  return argument.map((student) => student.id);
}
