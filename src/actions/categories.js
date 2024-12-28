export const categoriesAction= (categories)=>{
  return {
    type: "CATEGORIES",
    payload: categories,
  };
}

export const categoriesSelectedAction = (category) => {
  return {
    type: "SELECTED_CATEGORY",
    payload: category,
  };
};