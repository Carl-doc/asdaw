const sectionA = ["Anna", "Brian", "Charlie"];
const sectionB = ["Diana", "Ethan"];

let allStudents = [...sectionA, ...sectionB , "Faith"];
console.log("All students:", allStudents);

const car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020,
  owner: {
    name: "Alex",
    age: 30,
  },
};

let {brand, model, year, owner: {name, age}} = car;
console.log("Car:", brand, model, year);
console.log("Owner:", name, "Age:", age);

const grades = [75, 80, 90];
let updatedGrades = grades.map((n) => n + 5);
console.log("Updated Grades:", updatedGrades);

