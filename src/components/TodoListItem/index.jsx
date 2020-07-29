import React from 'react';
import { 
    
     ListItem,ListItemGraphic,ListItemText,Checkbox,ListItemMeta,Icon,IconButton
 } from 'mdc-react';
import './index.scss';
export default function TodoListItem({
    todo,
    onDelete,
    onUpdate,
    onSelect
}){
  
  
function handleChange(completed){
    console.log(todo.id);
    onUpdate(todo.id,{completed});
}
    return(
            <ListItem>
                <ListItemGraphic>
                    <Checkbox 
                    checked={todo.completed}
                    onChange={handleChange}
                    >

                    </Checkbox>
                </ListItemGraphic>
                <ListItemText onClick={()=>onSelect(todo)}>{todo.title}</ListItemText>
                <ListItemMeta>
                    <IconButton onClick={()=>onDelete(todo.id)}>
                        <Icon>
                            delete
                        </Icon>
                    </IconButton>
                </ListItemMeta>
            </ListItem>

    )
}