var course = [{
        id: 1,
        name: 'Java',
        status: true
    }, {
        id: 2,
        name: 'mySQL',
        status: true
    },
    {
        id: 3,
        name: 'ReactJS',
        status: true
    }
]

// trả về mảng mới
var newCourse = course.map(function(course) { //    tham số thứ nhất --> item của arr
    return { //                                     tham số thứ hai --> index của arr
        id: course.id,
        name: 'Khoa hoc ' + course.name,
        status: course.status,
        vote: `danh gia ${course.status}`

    };
})
console.log(newCourse)