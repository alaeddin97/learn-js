'use strict';
const restaurant = {
  name: 'Classico Italiano',
  localization: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and 
    ${ing3}`);
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
  numGuests: 2,
};

/*
// Destructuring arrays
const [value1,value2]=restaurant.categories;
console.log(`Value1:${value1}`,`Value2:${value2}`);
//Mutating variables
let v3='sthing';
let v4='sthingElse';
console.log(`V3: ${v3}`,`V4: ${v4}`);
[v3,v4]=restaurant.mainMenu;
console.log(`V3: ${v3}`,`V4: ${v4}`);



// Destructuring objects
const {name,openingHours,categories}=restaurant;
console.log(name,openingHours,categories);
const {name:restoName,openingHours:hours,categories:tags,localization}
=restaurant;// Rename properties of an existing objects
console.log(`Name: ${name}`);
const {menu:big_Menu=[]}=restaurant;// define a default value
console.log(`big_Menu: ${big_Menu}`);
// Mutating variables
let a=999;
let b=1000;
({open:a,close:b}=hours.fri);
console.log(`a:${a},b:${b}`);
// Nested objects
const {fri:{open:o,close:c}}=openingHours;
console.log(o,c);
*/




/*
// Spread operator
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);
const goodNewArr = [1, 2, ...arr];
console.log(goodNewArr);
console.log(...goodNewArr);
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);
// Copy array
const mainMenuCopy = [...restaurant.mainMenu];
mainMenuCopy.push('Couscous'); // add Couscous to only mainMenuCopy
console.log(mainMenuCopy);
console.log(restaurant.mainMenu);
const mainMenuShalowCopy = restaurant.mainMenu;
mainMenuShalowCopy.push('Couscous'); // add Couscous to both restaurant.mainMenu and mainMenuShalowCopy
console.log(mainMenuShalowCopy);
console.log(restaurant.mainMenu);
//Join 2 arrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

// Iterables: arrays, strings ,maps, sets. Not objects
const str = 'Alaeddin';
const letters = [...str, '', 'END'];
console.log(letters);
/*
const ingredients = [
  prompt("Let's make pasta! Ingredient 1? "),
  prompt('Ingredient 2?'),
  prompt('Ingredient 3?'),
];
console.log(ingredients);
restaurant.orderPasta(...ingredients);

// Objects with spread operators since 2021
const newRestaurant={foundedIn:1998,...restaurant,founder:'Guiseppe'};
console.log(newRestaurant);
const restaurantCopy={...restaurant};
restaurantCopy.name='Ristorante Roma';
console.log(restaurant);
console.log(restaurantCopy);
*/




/*
// Rest operator : to pack elements into an array : Opposite of Spread array
const [a, b, ...others]=[1,2,3,4,5]; // Rest because it is on the left side of equal =
console.log(a,b,others);
const [Pizza,,Risotto,...otherFood]=[...restaurant.mainMenu,...restaurant.starterMenu];
console.log(Pizza,Risotto,otherFood);
// Objects , Rest
const {sat,...weekdays}=restaurant.openingHours;
console.log(weekdays);
// Function: Rest parameters
const add=function(...args){
  let sum=0;
  args.forEach(el=>sum+=el);
  return sum;
}
const sum=add(...[1,2,3],4);
console.log(sum);
restaurant.orderPizza('Mushrooms','Tomatoes','Cheese');
*/




/*
// Logic operators
// Logic operators:
//1. They can Use ANY data type
//2. They can Return Any data type
//3. They can Do short circuiting
console.log('OR SHORT-CIRCUITING...............');
// return the last truthy values or the last falsy if they're all falsy
console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || '');
console.log(undefined || null);

console.log('AND SHORT-CIRCUITING...............');
// return the first falsy value or the last truthy value if they're all truthy
console.log(0 && 'Jonas' && false);
console.log(3 && 'Jonas');
console.log(true && '');
console.log(undefined && null && false);

if(restaurant.orderPizza){
  restaurant.orderPizza('mushrooms','spinach');
}

// if orderPizza is not defined we will return undefined : first falsy value
restaurant.orderPizza && restaurant.orderPizza('mushrooms','spinach','cheese');
*/




/*
// Nullish Coalescing operator
restaurant.numGuests=0;
// const guests = restaurant.numGuests||10; // works with falsy values ('',false,0,null,undefined)
// console.log(guests);
const guestsToo=restaurant.numGuests ??10; // works with nullish values (null, undefined): introduced in es2022
console.log(guestsToo);
*/




// Logical assignment operators
const rest1={
  name:'Burguer',
  menu:['Mini Burguer', 'Big Burguer'],
  guests:0
}
const rest2={
  name:'McDonalds'
}
// OR assignment operators
// works with falsy values
/*
rest1.name ||='Burguer King';
console.log(rest1.name);
rest1.guests ||=5;
console.log(rest1.guests);
rest2.numGuests||=10;
console.log(rest2.numGuests);
*/
// AND assignment operators
// works with nullish values
rest1.name ??='Burguer King';
console.log(rest1.name);
rest1.guests ??=5;
console.log(rest1.guests);




