// Shortest Word

// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

const s = 'hello my name is Seil';

function findShort(s){
    const words = s.split(' ');
    let shortest = words[0];
    for (let i = 1; i < words.length; i++) {
        if (shortest.length > words[i].length) {
            shortest = words[i];
        }
    }
    return shortest.length;
}

findShort(s);