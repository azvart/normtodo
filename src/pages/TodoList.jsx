import React,{useEffect, useState,useContext} from 'react';

import DataContext from '../context/data';


import {actions} from '../store';
import {Spinner,Layout} from 'mdc-react';
import './index.scss';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm/index';

import TodoDetails from '../components/TodoDetails';


export default function TodoListPage({ match }){
    const { state,dispatch } = useContext(DataContext);
    const[selectedTodo,setSelectedTodo]=useState(null);
    
 

    useEffect(()=>{
        if(match.params.listId){
            actions.getListTodos(match.params.listId,dispatch);
        }else{
            actions.getTodos(dispatch);
        }
        
    },[dispatch,match.params.listId]);

     function handleSubmit(title){
            actions.createTodo({
                title,
                listId:list.id
            });
     }
    
     function handleDelete(todoId){
    actions.deleteTodo(todoId,dispatch);
     }
     function handleUpdate(todoId, data){
         console.log(data);
        actions.updateTodo(todoId,data,dispatch);
     }
     function handleSelect(todo){
         setSelectedTodo(todo,dispatch);
     }
   const list = state.lists.find(list => list.id === match.params.listId);
   
    // if(!state.lists || !state.todos) return <Spinner />;
    return(
                <Layout id='todo-list-page'className='page' row>
                    <Layout>
            <TodoList 
              list={list}
              todos={state.todos}
              onSelect={handleSelect}
              onDelete={handleDelete}
              onUpdate={handleUpdate}
            />
            <TodoForm onSubmit={handleSubmit} />
            </Layout>

            {selectedTodo &&
                <TodoDetails
                    todo={selectedTodo}
                    onClose={()=>setSelectedTodo(null)}
                />
                }
        </Layout>
    )
}