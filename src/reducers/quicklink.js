const initState = {
  quickLinks: [{ path:'',label:"Trang chủ" }],
};
const quickLinkReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_QUICK_LINK": {
       const index = state.quickLinks.findIndex((item) => {
         return item.label === action.payload.label;
       });
       if (!index) return state;
       state.quickLinks.push(action.payload);
       state.quickLinks = [...state.quickLinks];
      return state;
    }
    case "REMOVE_QUICK_LINK": {
      if (action.payload) {
        state.quickLinks.splice(action.payload);
      }
      state.quickLinks = [...state.quickLinks];
      return state;
    }
    default:
      return state;
  }
};

export default quickLinkReducer;
