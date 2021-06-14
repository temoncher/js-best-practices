const recipes = [
  /* 1 */['🍞', '🥬', '🥓', '🧀', '🥩', '🍅', '🍞'], // "Classic" burger
  /* 2 */['🍞', '🌶', '🧀', '🥩', '🍅', '🍞'], // "Capitan Jalapeno" burger
  /* 3 */['🍞', '🧀', '🥚', '🍖', '🍅', '🍞'], // "Pig and egg" burger
  /* 4 */['🍞', '🥬', '🧀', '🍗', '🍅', '🍞'], // "Chicken" burger
  /* 5 */['🍞', '🧈', '🧀', '🍑', '🥩', '🍅', '🍞'], // "Peach breeze" burger
];
const strings = ['🥓', '🥩', '🍖', '🍗'];

const filterData = (recs) => recs.filter(
  (elem) => !elem.find(
    (item) => strings.includes(item),
  ),
);

/** @type {string} */
const st = 124;

const newRecipes = filterData(recipes);

console.log(newRecipes);
