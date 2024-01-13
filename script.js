console.log(`Дан масив [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]
 Знайти суму та кількість позитивних елементів.`);
let a = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
function positiveNumArray(num) {
    return num > 0;
}
console.log('Масив тільки з позитивних елементів:');
console.log((a.filter(positiveNumArray)));
let sum = 0;
for (let i = 0; i < a.length; i++) {
    sum = sum + a[i];
}
console.log('Сума:' + sum);

console.log('Знайти мінімальний елемент масиву та його порядковий номер.');
let index = 0;
let element = 0;
for (let i = 0; i < a.length; i++) {
    if (a[i] < element) {
        element = a[i];
        index = i;
    }
}
console.log('Мінімальний елемент: ' + element + '  Його порядковий номер: ' + index);
console.log('Знайти максимальний елемент масиву та його порядковий номер.');
let index2 = 0;
let element2 = a[0];
for (let i = 1; i < a.length; i++) {
    if (a[i] > element2) {
        element2 = a[i];
        index2 = i;
    }
}
console.log('Максимальний елемент: ' + element2 + '  Його порядковий номер: ' + index2);
console.log('Визначити кількість негативних елементів.');
function negativeNumArray(num) {
    return num < 0;
}
console.log('Масив тільки з негативних елементів:');
console.log((a.filter(negativeNumArray)));
console.log('Знайти кількість непарних позитивних елементів.');
let sum2 = 0;
for (let w = 0; w < a.length; w++) {
    if (a[w] > 0 && a[w] % 2 !== 0) {
        sum2 = sum2 + 1;  
    }
    
}
console.log(sum2);
console.log('Знайти кількість парних позитивних елементів.');
let sum3 = 0;
for (let u = 0; u < a.length; u++) {
    if (a[u] > 0 && a[u] % 2 === 0) {
        sum3 = sum3 + 1;  
    }
}
console.log(sum3);
console.log('Знайти суму парних позитивних елементів.');
let sum4 = 0;
for (let z = 0; z < a.length; z++) {
    if (a[z] > 0 && a[z] % 2 === 0) {
        sum4 = sum4 + a[z];    
    }
}
console.log(sum4);
console.log('Знайти суму непарних позитивних елементів.');
let sum5 = 0;
for (let d = 0; d < a.length; d++) {
    if (a[d] > 0 && a[d] % 2 !== 0) {
        sum5 = sum5 + a[d];    
    }
}
console.log(sum5);
console.log('Знайти добуток позитивних елементів.');
let mult = 1;
for (let l = 0; l < a.length; l++) {
    if (a[l] > 0) {
        mult = mult * a[l];    
    }
}
console.log(mult);
console.log('Знайти найбільший серед елементів масиву, остальні обнулити.');
let element3 = 0;
for (let v = 1; v < a.length; v++){
    if (a[v] > element3) {
        element3 = a[v];
    }
}
for (let v = 0; v < a.length; v++) {
    if (a[v] !== element3) {
        a[v] = 0;
    }
}
console.log(a);





