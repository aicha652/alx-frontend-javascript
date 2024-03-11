export default function getStudentIdsSum(argument) {
  return argument.reduce((accumulator, student) => accumulator + student.id,
    0);
}
