// Vending machine
// https://github.com/adyngom/28-relevant-js-questions/blob/master/6-vending-machine.md


const VM = function (inventory) {
    let drinks = inventory || null;

    if (!drinks) {
        throw new Error("No inventory: Cannot add a new VM");
    }

    const drinksKeys = Object.keys(drinks);

    let sale = function (pid) {
        if (!drinks[pid]) {
            return;
        }
        if (drinks[pid].stock > 0) {
            drinks[pid].stock--;
            return `1 ${drinks[pid].name} - Thank you, come again!!`;
        } else {
            drinks[pid].stock = 0;
            return `${drinks[pid].name} is out of stock :( Come back tomorrow`;
        }
    }

    let stock = function () {
        // const total = drinksKeys.reduce((c, n) => c + drinks[n].stock, 0);
        const total = drinksKeys.reduce(function (c, n) {
            return c + drinks[n].stock;
        }, 0);
        // 0, 2 ==> 0 + 2 = 2
        // 2 + 2 = 4
        // 4 + 1 = 5
        // 5 + 3 = 8
        if (total) {
            return total;
        } else {
            return "Out of stock"
        }
    }
    // Object.freeze prevent from mutating methods such as stock, sale from outside
    return Object.freeze({ sale, stock });
    // if it was a class, use Object.freeze.(className.prototype);
};

const drinks = {
    1: { name: "Mango Juice", stock: 2 },
    2: { name: "Banana Smoothies", stock: 2 },
    3: { name: "Guava Mix", stock: 1 },
    4: { name: "Citrus Blend", stock: 3 }
};

const vendingM = VM(drinks);

// console.log(vendingM.sale(1));
console.log(vendingM.stock());