import React from 'react';
import {NavLink} from 'react-router-dom';
import {Drawer, 
        DrawerHeader,
        DrawerContent,
        List,
        ListItem,
        ListItemGraphic,
        ListItemText,
        ListGroup,
        
        ListDivider,
        Icon,
} from 'mdc-react';


export default function AddDrawer({lists}){
    return(

        <Drawer id='app-drawer'>
            <DrawerHeader title='react Todo'/>
            <DrawerContent>
                <ListGroup>
                <List>
                    {[
                        {title:'Задачи',icon:'home',to:'/'},
                        {title:'Важно',icon:'star',to:'/important'},
                        {title:'Запланированные',icon:'event',to:'/planned'}
                    ].map(item=>
                    <ListItem 
                    key={item.icon}
                    component={NavLink}
                    to={item.to}
                    >
                        <ListItemGraphic>
                    <Icon>{item.icon}</Icon>
                        </ListItemGraphic>
                        <ListItemText>
                            {item.title}
                        </ListItemText>
                    </ListItem>
                        )}

                </List>
                        <ListDivider element='hr'/>
                <List>
                    {lists.map(item=>
                    <ListItem 
                    key={item.key}
                    component={NavLink}
                    to={item.id}
                    >
                        <ListItemGraphic>
                    <Icon>list</Icon>
                        </ListItemGraphic>
                        <ListItemText>
                            {item.title}
                        </ListItemText>
                    </ListItem>
                        )}

                </List>
                </ListGroup>
            </DrawerContent>
        </Drawer>
    );
}