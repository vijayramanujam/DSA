/**
 * Input - accepts a sorted array of integers.
 * Aim - find the first pair where sum is 0
 * Return an array that includes both values that to zero or undefined if the pair dosen't exist 
 */



function sumZero(arr) {

    let left = 0;
    let right = arr.length - 1;
    while (left < right) {

        let sum = arr[left] + arr[right];
        if (sum === 0) return [arr[left], arr[right]]
        else if (sum > 0) right--
        else left++

    }
}
