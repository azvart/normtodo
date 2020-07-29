import {useState, useEffect, useMemo} from 'react';
import * as api from '../api';

export default function useApi(){
    




    const actions = useMemo(()=>({
            getLists,
            getTodos,
            getListTodos,
            createTodo,
            updateTodo,
            deleteTodo
    }),[]);

    return {
        data:{
            lists,
            todos,
        },
        actions
    };
}