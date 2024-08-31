/*
input - 2 arrs
check - if every value in arr 1 has its corrosponding value squared in in 2nd arr

*****************************

indexOf returns -1 when no match found
splice(index, 1) will remove an element from that pos
2 loops is vastly better than 2 nested loops

for-of iterate over values
for-in iterate over keys

*/

function same(arr1, arr2) {

    if (arr1.length !== arr2.length) return false

    let p1 = {}
    let p2 = {}



    // profiling arr1
    for (let val of arr1) {
        p1[val] = (p1[val] || 0) + 1
    }

    // profiling arr2
    for (let val of arr2) {
        p2[val] = (p2[val] || 0) + 1
    }

    // iterate over keys of p1
    for (key in p1) {

        if (!(key ** 2 in p2)) return false // check if there's a sqaure of that key in p2
        if (p2[key ** 2] !== p1[key]) return false // if yes, check the number of occurance, if they mismatch, return false
    }

    return true
}