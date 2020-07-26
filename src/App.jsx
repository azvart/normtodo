import React,{useEffect,useState} from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';
import {get} from './api';

import AppDrawer from './components/AppDrawer/index';
import AppContent from './components/AppConentent/index';
import TodoList from './components/TodoList';
import DBContext from './context/db' ;
export default function App(){


  const[lists,setLists] = useState([]);


  useEffect(()=>{

      get('lists')().then(setLists);
      
  },[]);
  return (
    <DBContext.Provider value={{ lists,get }}>
    <div className="app">

      <AppDrawer lists={lists}/>
      
      
      <AppContent>
        <Switch>
            <Route path="/:listId" component={TodoList} />
        </Switch>
          
        </AppContent>
        
    </div>
    </DBContext.Provider>
  );
}

