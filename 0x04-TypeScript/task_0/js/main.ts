table id="studentTable"

export interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 34,
  location: "London, UK",
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Doe",
  age: 34,
  location: "Lagos, Nigeria",
};

const studentsList: Array<Student> = [
  student1,
  student2,
];

const table = document.getElementById("studentTable").getElementByTagName('tbody')[0]

for (const student of studentsList) {
  const row = table.inserRow();
  const cell1 = row.insertCell(0);
  const cell2 = row.insertCell(1);
  cell1.textContent = stdent.location;
}