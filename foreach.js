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
Array.prototype.foreach2 = function(callback) {
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            callback(this[index], index, this)
        }
    }
}