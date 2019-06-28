const magazine = ["give", "me", "one", "grand", "today", "night"];
const note = ["give", "one", "grand", "today"];

function checkMagazine(magazine, note) {
    let magazineFreq = {};
    let noteFreq = {};
    let hash = "";

    for (let val of magazine) {
        if (magazineFreq[val]) {
            magazineFreq[val] += 1;
        } else {
            magazineFreq[val] = 1;
        }
    }

    for (let val of note) {
        if (noteFreq[val]) {
            noteFreq[val] += 1;
        } else {
            noteFreq[val] = 1;
        }
    }

    for (let key in noteFreq) {
        if (!(key in magazineFreq)) {
            hash = false;
            break;
        }
        if (noteFreq[key] !== magazineFreq[key]) {
            hash = false;
            break;
        }
        else {
            hash = true;
        }
    }
    if (hash === true) {
        console.log("Yes");
    } else {
        console.log("No");
    }
}

console.log(checkMagazine(magazine, note));