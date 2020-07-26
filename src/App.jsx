import React,{useEffect,useState} from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';
import * as api from './api';

import AppDrawer from './components/AppDrawer/index';
import AppContent from './components/AppConentent/index';
import TodoList from './pages/TodoList';
import DBContext from './context/db' ;
export default function App(){


  const[lists,setLists] = useState([]);


  useEffect(()=>{

      api.getLists().then(setLists);
      
  },[]);
  return (
    <DBContext.Provider value={{ lists, ...api }}>
    <div className="app">

      <AppDrawer lists={lists}/>
      
      
      <AppContent>
        <Switch>
            <Route exact path="/:listId" component={TodoList} />
        </Switch>
          
        </AppContent>
        
    </div>
    </DBContext.Provider>
  );
}

