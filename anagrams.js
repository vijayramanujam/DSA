/**
 * input - 2 strings
 * check - second string is an anagram of first
 * 
 * What's an anagram again ? Word, phrase or name formed by rearranging the letters of another.
 * 
 * 
 */

function anagram(s1, s2) {

    if (s1.length !== s2.length) return false

    p1 = {} // to profile s1

    for (let char of s1) {

        p1[char] = (p1[char] || 0) + 1
    }

    // iterate over string 2
    for (let char of s2) {

        if (!(p1[char])) return false // read as if true, return false. Only 0 and undefined will return true in this case
        else p1[char] -= 1

    }

    return true
}