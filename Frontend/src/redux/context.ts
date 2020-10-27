/*I will use context so that we can use useReducer Hook all over the App.*/
import {useContext,createContext} from 'react';

export const reduxContext = createContext<{
    state: any;
    dispatch: React.Dispatch<any>;
  }>({
    state: {tasks:[]},
    dispatch: () => null
  });

export const useRedux=()=>{
    return useContext(reduxContext)
}