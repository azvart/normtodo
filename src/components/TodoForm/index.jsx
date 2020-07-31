import React,{useState} from 'react';
import {
TextField,
List,ListItem,
} from 'mdc-react';
import './index.scss';

export default function TodoForm({onSubmit}){

    const[title,setTitle]=useState('');
    function handleSubmit(event) {
        event.preventDefault();

        onSubmit(title);
        setTitle('');
    }
    return(
        <form className='todo-form' onSubmit={handleSubmit}>
            <List>
                <ListItem>
            <TextField 
            placeholder='Write the new task'
                fullWidth
                value={title}
                onChange={(e)=>{setTitle(e.target.value)}}
            />
            </ListItem>
            </List>
        </form>
    );
}