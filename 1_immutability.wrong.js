/* Immutability */
const allBurgerRecipes = [
  /* 1 */['🍞', '🥬', '🥓', '🧀', '🥩', '🍅'], // "Classic" burger // Oops! We forgot last slice of bread!
  /* 2 */['🍞', '🌶', '🧀', '🥩', '🍅', '🍞'], // "Capitan Jalapeno" burger
  /* 3 */['🍞', '🧀', '🥚', '🍖', '🍅', '🍞'], // "Pig and egg" burger
  /* 4 */['🍞', '🥬', '🧀', '🍗', '🍅', '🍞'], // "Chicken" burger
  /* 5 */['🍞', '🧈', '🧀', '🍑', '🥩', '🍅', '🍞'], // "Peach breeze" burger
];
const disgustingMeat = ['🥓', '🥩', '🍖', '🍗'];

allBurgerRecipes[0].push('🍞');

console.log('Mutated `allBurgerRecipes`', allBurgerRecipes);

/* Destructive functions */
const addAge = (obj) => {
  // eslint-disable-next-line no-param-reassign
  obj.age = 10;

  return obj;
};

const artem = {
  name: 'Artem',
};

const agedArtem = addAge(artem);

console.log('artem', artem);
console.log('agedArtem', agedArtem);

/* Don't store anything as public fields if you don't have to */

class VeganBurgersStore {
  constructor(burgerRecipes) {
    this.burgerRecipes = burgerRecipes;
    this.filteredBurgerRecipes = this.burgerRecipes.filter(
      (recipe) => !recipe.find((ingredient) => disgustingMeat.includes(ingredient)),
    );
    this.finalRecipes = this.filteredBurgerRecipes.map((recipe) => recipe.filter((ingredient) => ingredient !== '🍞'));
  }
}

console.log(new VeganBurgersStore(allBurgerRecipes).finalRecipes);
