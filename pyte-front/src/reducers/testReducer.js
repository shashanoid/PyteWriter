const testReducer = (state = {}, action) => {
    switch (action.type) {
      case "GET_CHANNELS":
        return { ...state, channelList: action.payload };
      default:
        return state;
    }
  };
  

export default testReducer;