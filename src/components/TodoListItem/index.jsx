import React from 'react';
import { 
    
     ListItem,ListItemGraphic,ListItemText,Checkbox,ListItemMeta,Icon,IconButton
 } from 'mdc-react';
import './index.scss';
export default function TodoListItem({todo, onStatusChange,onDelete}){
  
  

    return(
            <ListItem>
                <ListItemGraphic>
                    <Checkbox checked={todo.completed}
                    onChange={onStatusChange}
                    >

                    </Checkbox>
                </ListItemGraphic>
                <ListItemText>{todo.title}</ListItemText>
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