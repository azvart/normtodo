import React,{useState} from 'react';

import {actions} from '../../store';


export default function LoginPage({ history }){
    const[login,setLogin] = useState('');
    const[password, setPassword] = useState(''); 
    function handleSubmit(event){
        event.preventDefault(); 
        actions.loginUser(login,password);
    }
    console.log(actions);
        return(
        <div>
            <form onSubmit={handleSubmit} >
            <input 
                value={login}
                onChange={(e)=>setLogin(e.targetvalue)}
                type='email'
                required
            />
            <input
                type='password'
                 value={password}
                 onChange={(e)=>setPassword(e.targetvalue)}
                 required
            />
                <button type='submit'>Enter</button>
            </form>
        </div>
    );
}