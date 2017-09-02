export default categories => expenditure =>
  !categories.length || categories.some(category => category === expenditure.category);
