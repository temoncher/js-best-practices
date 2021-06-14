/**
 * Your boss is in process of rebranding his restaurant
 *
 * His plan is:
 * 1: Rename it from "Beefy chops" into "Peaceful salads"
 * 2: Exclude all meat from all burgers <-- That's your part
 * 3: Prey on vegans
 */

// Given
const burgerRecipes = [
  /* 1 */['🍞', '🥬', '🥓', '🧀', '🥩', '🍅', '🍞'], // "Classic" burger
  /* 2 */['🍞', '🌶', '🧀', '🥩', '🍅', '🍞'], // "Capitan Jalapeno" burger
  /* 3 */['🍞', '🧀', '🥚', '🍖', '🍅', '🍞'], // "Pig and egg" burger
  /* 4 */['🍞', '🥬', '🧀', '🍗', '🍅', '🍞'], // "Chicken" burger
  /* 5 */['🍞', '🧈', '🧀', '🍑', '🥩', '🍅', '🍞'], // "Peach breeze" burger
];
const disgustingMeat = ['🥓', '🥩', '🍖', '🍗'];

// Task: remove meat from all burger recipes

/** Declarative(Functional) */
const removeMeat = (recipes) => recipes.map(
  (recipe) => recipe.filter((ingredient) => !disgustingMeat.includes(ingredient)),
);

const recipesWithNoMeat = removeMeat(burgerRecipes);

console.log('recipesWithNoMeat', recipesWithNoMeat);

/**
 * Get number of bread slices for the whole menu to be cooked
 */
const countBreadSlices = (recipes) => recipes.reduce((acc, recipe) => {
  const onlyBreads = recipe.filter((ingredient) => ingredient === '🍞');

  return acc + onlyBreads.length;
}, 0);

const totalBreadSlices = countBreadSlices(burgerRecipes);

console.log('totalBreadSlices', totalBreadSlices);
