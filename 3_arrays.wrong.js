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

/** Imperative */
const removeMeat = (recipes) => {
  for (let i = 0; i < recipes.length; i++) {
    const recipe = recipes[i];

    for (let j = 0; j < recipe.length; j++) {
      const ingredient = recipe[j];

      for (let h = 0; h < disgustingMeat.length; h++) {
        if (ingredient === disgustingMeat[h]) {
          recipe.splice(j, 1);
        }
      }
    }
  }
};

const recipesWithNoMeat = removeMeat(burgerRecipes);

console.log('recipesWithNoMeat', recipesWithNoMeat);
