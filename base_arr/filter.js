var courses = [{
        id: 1,
        name: 'Javascript',
        coin: 111
    },
    {
        id: 2,
        name: 'PHP',
        coin: 222
    },
    {
        id: 3,
        name: 'NodeJS',
        coin: 222
    }
]
Array.prototype.filter2 = function(callback) {
    let arr = [];
    for (let i in this) {
        if (this.hasOwnProperty(i)) {
            var result = callback(this[i], i, this)
            if (result) {
                arr.push(this[i])
            }
        }
    }
    return arr;
}
var is = courses.filter2(function(element, index, arr) {
    return element ;
})
console.log(is)