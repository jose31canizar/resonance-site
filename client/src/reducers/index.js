const defaultState = {
  loggedIn: false
};

const reducer = (state = defaultState, action) => {
    switch(action.type){
      case 'LOGIN': 
        return {
          loggedIn: true
        };
        break;
      case 'LOGOUT': 
        return {
          loggedIn: false
        };
        break;
      default:
        return {
          loggedIn: false
        };
        break;
    }
  }

export default reducer