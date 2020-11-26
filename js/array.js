//создать массив
let fruit = ["apple", "banana", "orange"];
console.log(fruit);
console.log(fruit[0]);
console.log(fruit[2]);
console.log(fruit[fruit.length-1]);
//FOR Loop
for(let i = 0; i < 3; i++){
    let message = `${i+1}. ${fruit[i]}`;
    console.log(message);
}

//FOREACH Loop
fruit.forEach(element => {
    console.log("Hello from FOREACH", element);
});

//Выбрать случайный элемент массива
let rnd = Math.floor(Math.random() * fruit.length);
console.log(rnd);

let randomFruit = fruit[rnd];
console.log('My random fruit:', randomFruit);

//добавить новый элемент в массив
fruit.push('avocado');
console.log(fruit);

//удалить элемент banana из массива
let bananaIndex = fruit.indexOf('banana');
console.log('index of banana: ', bananaIndex);
fruit.splice(bananaIndex, 1);
console.log(fruit);