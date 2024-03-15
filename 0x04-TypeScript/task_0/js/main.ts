interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}
const student1: Student = { firstName: "ahmed", lastName: "ahmedLastName", age: 40, location: "casa" };
const student2: Student = { firstName: "adam", lastName: "adamLastName", age: 18, location: "rabat" };

const studentsList: Student[] = [student1, student2];
if (typeof document !== 'undefined') {
const table = document.createElement("table");

studentsList.forEach(student => {
  const row = table.insertRow();
  const cell1 = row.insertCell(0);
  const cell2 = row.insertCell(1);
  cell1.textContent = student.firstName;
  cell2.textContent = student.location;
  });

document.body.appendChild(table);}
