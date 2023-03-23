function isBalancedBrackets(str) {
    const stack = [];
    const openingBrackets = "([{";
    const closingBrackets = ")]}";

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (openingBrackets.includes(char)) {
            stack.push(char);
        } else if (closingBrackets.includes(char)) {
            const lastOpening = stack.pop();
            if (!lastOpening || openingBrackets.indexOf(lastOpening) !== closingBrackets.indexOf(char)) {
                return "NO";
            }
        }
    }
    return stack.length === 0 ? "YES" : "NO";
}

console.log(isBalancedBrackets("{[()]}"))
console.log(isBalancedBrackets("{[(])}"))
console.log(isBalancedBrackets("{(([])[])[]}"))