import React, { useReducer } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { reduxContext } from './redux/context';
import reducer from './redux/reducer';

export function Index(){

  let [state,dispatch] = useReducer(reducer,{tasks:[]})

  return(

    <reduxContext.Provider value={{state,dispatch}}>
      <App />
    </reduxContext.Provider>

  )
}


ReactDOM.render(<Index/> ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

