import * as api from './api';

export function reducer(state, action) {
    switch(action.type){
        case "GET_LISTS":
            return {
                ...state,
                lists:state.lists.concat(action.payload)
            };

    
    default:
    return state;
    }
}

export const initialState = {
    lists:[],
    todos:[]
};


export function getLists() {
    return api.getLists()
        .then(lists => ({
            type: 'GET_LISTS',
            payload: {
                lists
            }
        }));
}

export function getTodos() {
    return api.getTodos()
        .then(todos => ({
            type: 'GET_TODOS',
            payload: {
                todos
            }
        }));
}

export function getListTodos(listId) {
    return api.getListTodos(listId)
        .then(todos => ({
            type: 'GET_LIST_TODOS',
            payload: {
                todos
            }
        }));
}

export function createTodo(data) {
    return api.createTodo(data)
        .then(todo => ({
            type: 'CREATE_TODO',
            payload: {
                todo
            }
        }));
}

export function updateTodo(todoId, data) {
    return api.updateTodo(todoId, data)
        .then(todo => ({
            type: 'UPDATE_TODO',
            payload: {
                todo
            }
        }));
}

export function deleteTodo(todoId) {
    return api.deleteTodo(todoId)
        .then(todoId => ({
            type: 'DELETE_TODO',
            payload: {
                todoId
            }
        }));
}
export const actions ={
    getLists,
    getTodos,
    getListTodos,
    createTodo,
    updateTodo,
    deleteTodo
};