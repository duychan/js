var course = [{
        id: 1,
        name: 'Java',
        status: true,
        coin: 100
    }, {
        id: 2,
        name: 'mySQL',
        status: true,
        coin: 200
    },
    {
        id: 3,
        name: 'ReactJS',
        status: true,
        coin: 50
    }
]
var totalCoin = course.reduce((a, b) => a + b.coin, 0) // ES6
var totalCoin = course.reduce(function(accumulator, currentValue) { //reduce(a,b)// đối số a là function
        //                               accumulator:bộ nhớ tạm         //đối số b là variable để lưu giá trị
        return accumulator + currentValue.coin
    }, 0)
    // console.log(totalCoin)

// test
var deptArr = [1, 2, [3, 4], 5, 6, [7, 8, 9]]
var newArr = deptArr.reduce(function(flat, deptItem) { // flat: mảng tạm. // depitem: value phần tủ trong deptArr
        return flat.concat(deptItem) // concat nối arr
    }, [])
    //console.log(newArr)

//test2
var topics = [{
    topic: 'Front-end',
    course: [{
            id: 1,
            name: 'html,css'
        },
        {
            id: 2,
            name: 'ReactJS'
        }
    ]
}, {
    topic: 'Back-end',
    course: [{
            id: 1,
            name: 'Java'
        },
        {
            id: 2,
            name: 'NodeJS'
        }
    ]
}]
var newCourse = topics.reduce(function(course, item) {
    return course.concat(item.course)
}, [])
var htmls = newCourse.map(function(arr, index) {
        return `<h1>${arr.name}</h1>` // trả về 1 mảng chứa chuỗi đó
    })
    // console.log(htmls.join(''))