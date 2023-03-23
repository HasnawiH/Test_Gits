function reverseStringRecursive(arr, start = 0) {
    const end = arr.length - 1 - start;
    if (start >= end) {
        return arr;
    }
    const temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;

    return reverseStringRecursive(arr, start + 1);
}

console.log(reverseStringRecursive(["h", "e", "l", "l", "o"]))