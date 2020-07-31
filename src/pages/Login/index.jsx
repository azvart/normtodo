import React,{useState} from 'react';

import useStore from '../../hooks/store';

export default function AuthPage(){
    const {actions} = useStore();
    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');
    const[error,setError] = useState('');

    function handleLogInButtonClick(){
        if( email && password){
            actions.registerUser(email,password)
                .catch(error => setError(error.message));
        }
    }

    function handleRegisterButtononClick(){
        if(email && password){
            actions.registerUser(email,password)
                .catch(error => setError(error.message));
        }
    }

    return(
        <div>
            <h1>React ToDo</h1>
             {error && 
                <h1>{error}</h1>
             }
             <div>
                 <input type="email"
                    value={email}
                    placeholder="Write e-mail"
                    required
                    onChange={(e)=>setEmail(e.target.value)}
                 />
             </div>

             <div>
                 <input type="password"
                    value={password}
                    placeholder="Write password"
                    required
                    onChange={(e)=>setPassword(e.target.value)}
                 />
             </div>


             <div>
                <button onClick={handleLogInButtonClick}>
                    Enter
                </button>
                     
                <button onClick={handleRegisterButtononClick}>
                    Register
                </button>
             </div>
        </div>
    )
}