import React,{useContext,useState,useEffect} from 'react';
import DBContext from '../context/db';



import './index.scss';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm/index';


export default function TodoListPage({match}){
    const[todos,setTodos] = useState([]);
    const db = useContext(DBContext);

    useEffect(()=>{
        
        db.getListsTodos(match.params.listId)
        .then(setTodos);
    },[db,match.params.listId]);

    const list = db.lists.find(list => list.id === match.params.listId);

     function handleSubmit(title){
            db.createTodo({
                title,
                listId:list.id
            }).then(todo=>{
                console.log(todo);
                setTodos([...todos,todo])});
     }
    
     function handleDelete(todoId){
      db.deleteTodo(todoId).then(todoId=>{
          setTodos([...todos.filter(t=>t.id !==todoId)]);
      });
     }
    return(
                <div id='todo-list-page'className='page'>
                    
            <TodoList 
                list={list}
              todos={todos}
              onDelete={handleDelete}

            />
            <TodoForm onSubmit={handleSubmit} />
        </div>
    )
}