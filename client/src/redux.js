export const apiMiddleware = store => next => action => {
  next(action);
  switch (action.type) {
    case 'LOGIN_USER':
      console.log('from redux')
      const disp = store.dispatch({type: 'LOGIN'})
      setTimeout(() => {
        // window.history.replaceState( {loggedIn: true} , 'resonance beta', 'http://localhost:9001/beta')
      }, 500);
      // .then(() => {
        
      // })
      console.log(disp)
      // window.location.href = `http://localhost:9001/beta`;
      console.log('inside redux dispatching login')
      // window.history.replaceState( {} , 'resonance beta', 'http://localhost:9001/beta' );
      break;
    case 'LOGOUT_USER':
      console.log('from redux')
      store.dispatch({type: 'LOGOUT'})
      setTimeout(() => {
        // window.history.replaceState( {loggedIn: false} , 'resonance login', 'http://localhost:9001/login')
      }, 500);
      // .then(() => {
        
      // });
      // window.location.href = `http://localhost:9001/login`;
      // window.history.replaceState( {} , 'resonance login', 'http://localhost:9001/login' );
      break;
    default:
      break;
  }
};



