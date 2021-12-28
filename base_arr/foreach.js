var courses = [{
    id: 1,
    name: 'Javascript',
    coin: 111
}, {
    id: 2,
    name: 'PHP',
    coin: 222
}, {
    id: 2,
    name: 'PHP',
    coin: 222
}]
Array.prototype.foreach2 = function(callback) {
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            callback(this[index], index, this)
        }
    }
}
var arr = []
var htmls = courses.forEach(function(element, index) {
    arr.push(element)
    console.log(element)
})
console.log(arr)