import React from 'react';

import { 
    Typography,
    List
 } from 'mdc-react';


import './index.scss';
import TodoListItem from '../TodoListItem';

export default function TodoList({ 
    todos,
     onDelete,
     onUpdate,
     list,
     onSelect}){

    return(
        <div className='todo-list'>
            {/* <Typography className='todo-list__title' variant="headline4">
                {list.title}
                </Typography> */}
        <List className='todo-list__items'>
        {todos.map(todo=>
            <TodoListItem 
            key={todo.id} 
            todo={todo}
            onDelete={onDelete}
            onUpdate={onUpdate}
            onSelect={onSelect}
            />
          )}
      </List>
      </div>
    )
}