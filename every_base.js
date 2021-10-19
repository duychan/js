courses = [{
    id: 4,
    name: 'PHP',
    name2: 'NodeJS'
}]
Array.prototype.every1 = function(callback) {
    var arrLength = this.length
    for (let i = 0; i < arrLength; ++i) {
        if (callback(this[i]) != true) {
            return false;
        } else {
            return true;
        }
    }
}
var isExits = courses.every1(function(element) {
    return element.id == 5;
})
console.log(isExits)