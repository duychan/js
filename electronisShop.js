const mouse = [3, 2, 1, 4, 6, 4];
const keyboard = [5, 4, 6, 7, 1, 2];
const canBuy = [];

function find(mouse, keyboard, budget) {
    for (let i of mouse) {
        for (let j of keyboard) {
            if (i + j <= budget) {
                canBuy.push(i + j);
            }
        }
    }
    if (canBuy.length === 0) return -1
    return Math.max(...canBuy);
}
const result = find(mouse, keyboard, 30);
console.log(result);