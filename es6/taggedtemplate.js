const temp = function([first, ...rest], ...value) {
    return value.reduce(
        (acc, element) => [acc,
            `<span>${element}</span>`,
            rest.shift()
        ], first
    ).join();
}
let course = "JavaScript";
let place = "F8";
console.log(temp `Go to pro ${course} with ${place}!`);