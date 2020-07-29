import React,{useEffect, useReducer, useContext} from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';


import {reducer,initialState,actions} from './store';
import DataContext from './context/data';


import AppDrawer from './components/AppDrawer/index';
import AppContent from './components/AppConentent/index';
import TodoList from './pages/TodoList';





export default function App(){

  const data = useContext();
const[state,dispatch] = useReducer(reducer, initialState);




  useEffect(()=>{
    actions.getLists();
  },[actions]);

  return (
    <DataContext.Provider value={{state,dispatch}}>
    <div className="app">

      <AppDrawer lists={state.lists}/>
      
      
      <AppContent>
        <Switch>
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

