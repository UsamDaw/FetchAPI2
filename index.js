let file = 'fruits.json';

fetch(file)
.then(response => response.json())
.then(data => {
    /* Task 1
    data.forEach(element => {
        if (element.name === 'Apple') {
            console.log(`Det er ${element.nutritions.calories} kalorier i et eple.`);
        }
    });
    */

    /* Task 2
    data.forEach(element => {
        if (element.name === 'Avocado') {
            console.log(`Fettinnholdet i en avokado er ${element.nutritions.fat}g.`);
        }
    });
    */

    /* Task 3
    let maxSugar = 0;
    let fruitWithMostSugar = '';
    data.forEach(element => {
        if (element.nutritions.sugar > maxSugar) {
            maxSugar = element.nutritions.sugar;
            fruitWithMostSugar = element.name;
        }
    });
    console.log(`Frukten som inneholder mest sukker er ${fruitWithMostSugar} med ${maxSugar}g sukker.`);
    */

    /* Task 4
    data.forEach(element => {
        if (element.name === 'Mango') {
            console.log(`Det er ${element.nutritions.carbohydrates}g karbohydrater i en mango.`);
        }
    });
    */

    /* Task 5
    data.forEach(element => {
        if (element.name === 'Strawberry') {
            console.log(`Proteininnholdet i jordbær er ${element.nutritions.protein}g.`);
        }
    });
    */

    /* Task 6
    data.forEach(element => {
        if (element.name === 'Orange') {
            console.log(`Det er ${element.nutritions.calories} kalorier i en appelsin.`);
        }
    });
    */

    /* Task 7
    let minCarbohydrates = Infinity;
    let fruitWithLeastCarbohydrates = '';
    data.forEach(element => {
        if (element.nutritions.carbohydrates < minCarbohydrates) {
            minCarbohydrates = element.nutritions.carbohydrates;
            fruitWithLeastCarbohydrates = element.name;
        }
    });
    console.log(`Frukten som har minst karbohydrater er ${fruitWithLeastCarbohydrates} med ${minCarbohydrates}g karbohydrater.`);
    */

    /* Task 8
    data.forEach(element => {
        if (element.name === 'Pineapple') {
            console.log(`Det er ${element.nutritions.sugar}g sukker i en ananas.`);
        }
    });
    */

    /* Task 9
    data.forEach(element => {
        if (element.name === 'Coconut') {
            console.log(`Fettinnholdet i en kokosnøtt er ${element.nutritions.fat}g.`);
        }
    });
    */

    /* Task 10
    let maxProtein = 0;
    let fruitWithMostProtein = '';
    data.forEach(element => {
        if (element.nutritions.protein > maxProtein) {
            maxProtein = element.nutritions.protein;
            fruitWithMostProtein = element.name;
        }
    });
    console.log(`Frukten som har flest proteiner er ${fruitWithMostProtein} med ${maxProtein}g proteiner.`);
    */

    /* Task 11 Data
    data.forEach(element => {
        if (element.name === 'Grape') {
            console.log(`Kaloriene i en drue er ${element.nutritions.calories} kalorier.`);
        }
        if (element.name === 'Peach') {
            console.log(`Fettinnholdet i en fersken er ${element.nutritions.fat}g.`);
        }
        if (element.name === 'Kiwi') {
            console.log(`Sukkerinnholdet i en kiwi er ${element.nutritions.sugar}g.`);
        }
    });
})
*/