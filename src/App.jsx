import React,{useEffect, useReducer,  useMemo} from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';


import {reducer,initialState,actions} from './store';
import DataContext from './context/data';


import AppDrawer from './components/AppDrawer/index';
import AppContent from './components/AppConentent/index';
import TodoList from './pages/TodoList';
import LoginPage from './pages/Login/index';




export default function App(){

 
const[state,dispatch] = useReducer(reducer, initialState);

const contextValue = useMemo(()=>{
  return { state, dispatch }
},[state,dispatch]);


  useEffect(()=>{
    actions.getLists(dispatch);
    actions.setAuth(dispatch);
  },[]);

  return (
    <DataContext.Provider value={contextValue}>
    <div className="app">
      
      <AppDrawer lists={state.lists}/>
      
      
      <AppContent>
        <Switch>
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/" component={TodoList} />
            <Route exact path="/important" component={TodoList} />
            <Route exact path="/planned" component={TodoList} />
            <Route path="/:listId/:todoId?" component={TodoList} />
        </Switch>
          
        </AppContent>
        
    </div>
    </DataContext.Provider>
  );
}

