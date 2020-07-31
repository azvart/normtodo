import React,{useEffect, useState} from 'react';


import useStore from '../hooks/store';

import {Spinner,Layout} from 'mdc-react';
import './index.scss';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm/index';

import TodoDetails from '../components/TodoDetails';


export default function TodoListPage({ match }){
    const { state, actions } = useStore();
    const [selectedTodo, setSelectedTodo] = useState(null);
    
 

    useEffect(()=>{
        setSelectedTodo(null);
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
   const list = state.lists.find(list => list.id === match.params.listId);
   
     if(!state.lists || !state.todos) return <Spinner />;
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