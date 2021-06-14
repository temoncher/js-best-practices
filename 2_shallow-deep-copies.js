const allBurgerRecipes = [
  /* 1 */['🍞', '🥬', '🥓', '🧀', '🥩', '🍅'], // "Classic" burger // Oops! We forgot last slice of bread!
  /* 2 */['🍞', '🌶', '🧀', '🥩', '🍅', '🍞'], // "Capitan Jalapeno" burger
  /* 3 */['🍞', '🧀', '🥚', '🍖', '🍅', '🍞'], // "Pig and egg" burger
  /* 4 */['🍞', '🥬', '🧀', '🍗', '🍅', '🍞'], // "Chicken" burger
  /* 5 */['🍞', '🧈', '🧀', '🍑', '🥩', '🍅', '🍞'], // "Peach breeze" burger
];

/* Shallow copy */
const shallowCopyOfRecipes = [...allBurgerRecipes];

console.log('allBurgerRecipes', allBurgerRecipes);
console.log('shallowCopyOfRecipes', shallowCopyOfRecipes);
console.log('reference equality (shallow copy)', allBurgerRecipes === shallowCopyOfRecipes);
console.log('element equality (shallow copy)', allBurgerRecipes[0] === shallowCopyOfRecipes[0]);

/* Deep copy */
const deepCopyOfRecipes = [
  [...allBurgerRecipes[0]],
  [...allBurgerRecipes[1]],
  [...allBurgerRecipes[2]],
  [...allBurgerRecipes[3]],
  [...allBurgerRecipes[4]],
];

console.log('reference equality (deep copy)', allBurgerRecipes === deepCopyOfRecipes);
console.log('element equality (deep copy)', allBurgerRecipes[0] === deepCopyOfRecipes[0]);
