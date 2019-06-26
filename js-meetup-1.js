// Roll of Coins

const coinsJar = [5, 10, 10, 25, 25, 25, 10, 5, 1, 1, 1, 25, 25];
const coinRolls = { "1": 2, "5": 2, "10": 2, "25": 2 };

const coinsLabels = {
    "1": "Pennies",
    "5": "Nickels",
    "10": "Dimes",
    "25": "Quarters"
};

const coinsCount = coinsJar.reduce(groupBy, {});

console.log(coinsCount);

const coinsInfo = Object.keys(coinsCount).map(key => {
    const totalCoins = coinsCount[key];
    const rollCount = coinRolls[key];
    const label = coinsLabels[key];
    const { quotient, remainder } = getQuotientRemainder(totalCoins, rollCount);
    const coinInfo = { label, quotient, remainder };
    return coinInfo;
})

console.log(coinsInfo);

console.log(coinsInfo.map(displayRollMessage).join(" \n"));

function groupBy(bag, coins) {
    !!bag[coins] ? (bag[coins] += 1) : (bag[coins] = 1);
    return {...bag};
}

function getQuotientRemainder(x, y) {
    if (!y) {

    }

    return { quotient: parseInt(x / y), remainder: x % y };
}

function displayRollMessage(info) {
    const { label, quotient: rolls, remainder: left } = info;
    return `${label}: ${rolls} rolls - ${left} left`;
}