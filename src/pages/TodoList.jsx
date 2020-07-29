import React,{useEffect, useState,useContext} from 'react';

import DataContext from '../context/data';
import useApi from '../hooks/api';


import {Spinner,Layout} from 'mdc-react';
import './index.scss';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm/index';

import TodoDetails from '../components/TodoDetails';


export default function TodoListPage({ match }){
    const {lists} = useContext(DataContext);
    const[selectedTodo,setSelectedTodo]=useState(null);
    const { data:{ lists, todos },actions} = useApi();
 

    useEffect(()=>{
        if(match.params.listId){
            actions.getListTodos(match.params.listId);
        }else{
            actions.getTodos();
        }
        
    },[actions,match.params.listId]);

     function handleSubmit(title){
            actions.createTodo({
                title,
                listId:list.id
            });
     }
    
     function handleDelete(todoId){
    actions.deleteTodo(todoId);
     }
     function handleUpdate(todoId, data){
        actions.updateTodo(todoId,data);
     }
     function handleSelect(todo){
         setSelectedTodo(todo);
     }
   const list = lists.find(list => list.id === match.params.listId);
   
    // if(!lists || !todos) return <Spinner />;
    return(
                <Layout id='todo-list-page'className='page' row>
                    <Layout>
            <TodoList 
              list={lists}
              todos={todos}
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