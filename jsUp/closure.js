function logger(type) {
    function getMess(mess) {
        console.log(`[${type}] ${mess}`)
    }
    return getMess;
}

const logger1 = logger("Info");
logger1("Login with port 2000");
logger1("Login with port 2000");
logger1("Login with port 2000");
const x = [1, 2, 3]
const y = [...x]
y.push(1);

console.log(y)
console.log(x)