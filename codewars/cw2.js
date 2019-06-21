// Mumbling

// This time no story, no theory. The examples below show you how to write function accum:
// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

const s = "abcd";

function accum(s) {
    let mumble = '';
    mumble = s[0].toUpperCase();
        for (let i = 1; i < s.length; i++) {
        mumble += '-' + s[i].toUpperCase() + s[i].toLowerCase().repeat(i);
    }
    console.log(mumble);
    return mumble;
}

accum(s);