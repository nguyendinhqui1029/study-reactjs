const initState = {
  categories:[],
  selectedCategory:{}
}
const categoriesReducer = (state = initState, action) => {
  switch (action.type) {
    case "CATEGORIES": {
      state.categories = [...action.payload];
      return state;
    }
    case "SELECTED_CATEGORY": {
      state.selectedCategory = Object.assign(action.payload);
      return state;
    }
    default:
      return state;
  }
};

export default categoriesReducer;
