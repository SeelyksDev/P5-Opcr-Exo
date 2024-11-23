//votre code ici
function printNumbers (n) {
    let numbers = "";
    for (let i = 1; i <= n; i++) {
        numbers+= i.toString();
        if (i < n) numbers += " ";
    }
    return numbers
}

export default printNumbers
