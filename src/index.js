// module.exports = function reverseNum(n) {
//     let total = 0;
//     n = Math.abs(n);

//     while (n) {
//         total = total * 10 + n % 10;
//         n = Math.floor(n / 10);
//     }
//     return total;
// }

module.exports = function reverseNum(num) {
    num = Math.abs(num);
    return +num.toString().split("").reverse().join("");
}
