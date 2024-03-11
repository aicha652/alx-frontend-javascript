export default function updateStudentGradeByCity(StudentList, city, newGrades) {
  const students = StudentList.filter((student) => student.location === city);

  return students.map((student) => {
    const grade = newGrades.find((grade) => grade.studentId === student.id);
    const VarStudent = { ...student };
    VarStudent.grade = grade
      ? grade.grade
      : 'N/A';
    return VarStudent;
  });
}
