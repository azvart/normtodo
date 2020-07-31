import React,{useEffect} from 'react';
import { Switch, Route,} from 'react-router-dom';
import './App.scss';


import useStore from './hooks/store';


import AppDrawer from './components/AppDrawer/index';
import AppContent from './components/AppConentent/index';
import TodoList from './pages/TodoList';
import AuthPage from './pages/Login/index';




export default function App(){

 
const {state, actions} = useStore();


  useEffect(()=>{
    actions.getLists();
    actions.initAuth();
  },[]);

 if(!state.user){
   return(
     <Route component={AuthPage} />
   );
 }else{

  return (
    
      
  
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
  
  );
 }
}

