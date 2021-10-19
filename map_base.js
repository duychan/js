courses = [
    'Javascript',
    'PHP',
    'NodeJS'
]
Array.prototype.map2 = function(callback) {
    var arrLength = this.length,
        arr = []
    for (let i = 0; i < arrLength; ++i) {
        arr.push(callback(this[i]))
    }
    return arr
}
var htmls = courses.map2(function(element) {
    return `<h2>${element}</h2>`
})
console.log(htmls.join(''))