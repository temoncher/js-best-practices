/* Immutability */
const allBurgerRecipes = [
  /* 1 */['🍞', '🥬', '🥓', '🧀', '🥩', '🍅'], // "Classic" burger // Oops! We forgot last slice of bread!
  /* 2 */['🍞', '🌶', '🧀', '🥩', '🍅', '🍞'], // "Capitan Jalapeno" burger
  /* 3 */['🍞', '🧀', '🥚', '🍖', '🍅', '🍞'], // "Pig and egg" burger
  /* 4 */['🍞', '🥬', '🧀', '🍗', '🍅', '🍞'], // "Chicken" burger
  /* 5 */['🍞', '🧈', '🧀', '🍑', '🥩', '🍅', '🍞'], // "Peach breeze" burger
];
const disgustingMeat = ['🥓', '🥩', '🍖', '🍗'];

const fixedFirstRecipe = [...allBurgerRecipes[0], '🍞'];

const correctBurgerRecipes = [
  fixedFirstRecipe,
  ...allBurgerRecipes.slice(1, allBurgerRecipes.length),
];

console.log('allBurgerRecipes', allBurgerRecipes);
console.log('correctBurgerRecipes', correctBurgerRecipes);

/* Destructive functions */
const addAge = (obj) => ({
  ...obj,
  age: 10,
});

const artem = {
  name: 'Artem',
};

const agedArtem = addAge(artem);

console.log('artem', artem);
console.log('agedArtem', agedArtem);

/* Don't store anything as public fields if you don't have to */

class VeganBurgersStore {
  constructor(burgerRecipes) {
    const filteredBurgerRecipes = burgerRecipes.filter(
      (recipe) => !recipe.find((ingredient) => disgustingMeat.includes(ingredient)),
    );

    this.recipes = filteredBurgerRecipes.map((recipe) => recipe.filter((ingredient) => ingredient !== '🍞'));
  }
}

console.log(new VeganBurgersStore(allBurgerRecipes));
