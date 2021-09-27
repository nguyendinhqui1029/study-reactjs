export const addQuickLink=(currentLink)=>{
  return { type: "ADD_QUICK_LINK", payload: currentLink };
}

export const removeQuickLink = (index) => {
  return { type: "REMOVE_QUICK_LINK", payload: index };
};