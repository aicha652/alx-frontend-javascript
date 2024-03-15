var student1 = { firstName: "ahmed", lastName: "ahmedLastName", age: 40, location: "casa" };
var student2 = { firstName: "adam", lastName: "adamLastName", age: 18, location: "rabat" };
var studentsList = [student1, student2];
if (typeof document !== 'undefined') {
    var table_1 = document.createElement("table");
    studentsList.forEach(function (student) {
        var row = table_1.insertRow();
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.textContent = student.firstName;
        cell2.textContent = student.location;
    });
    document.body.appendChild(table_1);
}
