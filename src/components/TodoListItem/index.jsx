import React from 'react';
import { 
    
     ListItem,ListItemGraphic,ListItemText,Checkbox,
 } from 'mdc-react';

export default function TodoListItem({todo, onStatusCjange:onCompleteChange}){
  
  

    return(
            <ListItem>
                <ListItemGraphic>
                    <Checkbox checked={todo.completed}
                    onChange={onCompleteChange}
                    >

                    </Checkbox>
                </ListItemGraphic>
                <ListItemText>{todo.title}</ListItemText>
            </ListItem>

    )
}