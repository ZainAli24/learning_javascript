
console.log("2" > 1);  // "2" is converted to 2, and 2 > 1 is true
console.log("02" > 1);  // "02" is converted to 2, and 2 > 1 is true
console.log("01" > 1); // "01" is converted to 1, and 1 > 1 is false


console.log(null > 0);  // null is converted to 0, and 0 > 0 is false
console.log(null == 0); // in == comparison, null is only equal to undefined and not to any other value, including 0, so this is false
console.log(null >= 0); // null is converted to 0, and 0 >= 0 is true


// *) Undefined is converted to NaN in numeric comparisons, and NaN is not greater than, less than, or equal to any number, including itself. Therefore, all comparisons involving undefined and a number will yield false.
console.log(undefined > 0); // undefined is converted to NaN, and NaN > 0 is false
console.log(undefined == 0); // false
console.log(undefined >= 0); // undefined is converted to NaN, and NaN >= 0 is false


console.log("2" > "12");  // true, because in lexicographical order, "2" is greater than "1", so "2" is greater than "12"
console.log("2" == "12"); // false b
console.log(4 < "32"); // "32" is converted to 32, and 4 < 32 is true
console.log("43" >= 55);

console.log("34" > "54"); // in lexicographical order, "3" is less than "5", so "34" is less than "54", and the result is false

