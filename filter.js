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
        id: 2,
        name: 'PHP',
        coin: 222
    }
]
Array.prototype.filter2 = function(callback) {
    var arr = []
    for (var i in this) {
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
    return element.id == 2;
})
console.log(is)