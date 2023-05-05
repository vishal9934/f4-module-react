import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../actions';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const LoginPage = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const userData = useSelector(state => state.getUserData);
  console.log("saved in store=>>>",userData);

    const handleLogin = () => {
        fetch('https://dummyjson.com/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username, password })
        })
        .then(res => {
          if (res.ok) {
            return res.json();
          } else {
            throw new Error('Login failed');
          }
        })
        .then(data => {
          dispatch(setUser(data)); // save user object including token and id to redux state
          //history.push('/profile'); // redirect to profile page
          //console.log(data)
          navigate("/profile");
          
          console.log("saved in store=>>>",userData);
        })
        .catch(error => setError(error.message));
      };

  return (
    <div className="login-div">
        
        <input type="text" placeholder="Enter Your Username" value={username} onChange={(e)=>(setUsername(e.target.value))} />
        <input type="password" placeholder="Enter Your Password" value={password} onChange={(e)=>(setPassword(e.target.value))} />
        <button onClick={handleLogin}>Login</button>
        {error && <div className='error-div'>{error}</div>}

        </div>
  )
}

export default LoginPage;