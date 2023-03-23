function findMaxConsecutive(nums) {
    let maxLength = 0;
    let currentLength = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            currentLength++;
            maxLength = Math.max(maxLength, currentLength);
        } else {
            currentLength = 0;
        }
    }
    return maxLength;
}

console.log(findMaxConsecutive([1, 1, 0, 1, 1, 1]))
console.log(findMaxConsecutive([1, 0, 0, 1, 0, 1, 1]))
