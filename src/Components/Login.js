import React from 'react';
import { useDispatch } from 'react-redux';
import { login,logout } from '../features/user';


function Login() {
    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={()=> {
                dispatch(login({name:'Kevin',age:69,email:'email'}))
            }}>Log In</button>
            <button onClick = {()=>dispatch(logout())}>Log Out</button>
        </div>
    );
}

export default Login;