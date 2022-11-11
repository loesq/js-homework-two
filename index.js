/*let N = 10
for (let i = '1'; i <= N; i++) {
    console.log(i);    
}*/



/*let N = 50
const M = 10
let count = 0
while (N>M) {
    N = N/2
    count = count+1
}
console.log(count);*/


/*let firstAge = 1800
const lastAge = 2020
let requiredAge = 1968
let count = 0
while (firstAge != requiredAge) {
    firstAge = firstAge + 1
    count = count+1
    if (firstAge > lastAge) {
        break;
    }
}
console.log(firstAge);
console.log(count);*/

let firstAge = 1800
const lastAge = 2020
let count = 0
let leapYear = 0
let countTwo = 0
while (firstAge != lastAge) {
    firstAge = firstAge+1
    count = count + 1
    countTwo = countTwo +1
    if (count == 4) {
        leapYear = leapYear+1
        count = 0
        continue;
    }    
}
console.log(countTwo);
console.log(leapYear);