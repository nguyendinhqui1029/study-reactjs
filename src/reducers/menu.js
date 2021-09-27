const initState = {
  menuList: []
}

const menuReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_MENU": {
      state.menuList = [...action.payload];
      return state;
    }
    default:
      return state;
  }
};

export default menuReducer;
