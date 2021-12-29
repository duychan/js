// going to overwrite
Array.prototype.reduce2 = function (callback, iValue) {
  let i = 0;
  if (arguments.length === 1) {
    i = 1;
    iValue = this[0];
  }
  for (; i < this.length; ++i) {
    iValue = callback(iValue, this[i], i, this);
  }
  return iValue;
};

var course = [
  {
    id: 1,
    name: "Java",
    status: true,
    coin: 100,
  },
  {
    id: 2,
    name: "mySQL",
    status: true,
    coin: 200,
  },
  {
    id: 3,
    name: "ReactJS",
    status: true,
    coin: 50,
  },
];
const arr = [1, 2, 3, 4, 5, 6];
const totalArr = arr.reduce2((acc, number) => {
  return acc + number;
});
var totalCoin = course.reduce((a, b) => a + b["coin"], 0); // ES6

console.log(totalArr);

// test
var deptArr = [1, 2, [3, 4], 5, 6, [7, 8, 9]];
var newArr = deptArr.reduce(function (flat, deptItem) {
  // flat: ma?ng tạm. // deepItem: value pha^`n tủ in deptArr
  return flat.concat(deptItem); // concat nối arr
}, []);
//console.log(newArr)

//test2
var topics = [
  {
    topic: "Front-end",
    course: [
      {
        id: 1,
        name: "html,css",
      },
      {
        id: 2,
        name: "ReactJS",
      },
    ],
  },
  {
    topic: "Back-end",
    course: [
      {
        id: 1,
        name: "Java",
      },
      {
        id: 2,
        name: "NodeJS",
      },
    ],
  },
];
var newCourse = topics.reduce(function (course, item) {
  return course.concat(item.course);
}, []);
var html = newCourse.map(function (arr, index) {
  return `<h1>${arr.name}</h1>`; // trả về 1 ma?ng contain string đó
});
//console.log(html.join(""));
