// rest parameter
// destructuring : pha^n ra~
const arr = [1, 2, 3, 4];
//const [a, ...rest] = arr;
//console.log(rest)

const course = [
  {
    name: "JavaScript",
    cost: 1000,
    time: 2,
    children: {
      name: "NodeJS",
    },
  },
  {
    name: "PHP",
    cost: 2000,
    time: 3,
    children: {
      name: "Laravel",
    },
  },
  {
    name: "Java",
    cost: 1000,
    time: 1,
    children: {
      name: "Severlet",
    },
  },
];

// const {
//   name,
//   children: { name: childName },
//   description = "description default",
//   ...rest
// } = course;
//console.log(rest);

// spread : gia?i

const totalCost = course.reduce((acc, val) => {
  return acc + val;
});
console.log(totalCost);
