import './LoginForms.css';
import { useState } from 'react';

export const LoginForms = () => {
    const [name, setName] = useState('');
    const [isShown, setIsShown] = useState(false);
    const [password, setPassword] = useState('');


    const usernameHandler = (event) => {
        setName(event.target.value);
    };

    const passwordHandler = (event) => {
        setPassword(event.target.value);
    };

    const togglePassword = () => {
        setIsShown((isShown) => !isShown);
    };

    const resetButton = () => {
        setName("")
        setPassword("")
    };

    const onSubmitHandler = () => {
        alert(
            `Username:${name}
            Password:${password}`
        )
    };


    return (
        <div className='login-wrapper'>
        <h1>Login</h1>
        <input type='text' value={name} placeholder="Username" className='input' onChange={usernameHandler}></input>
        
        <form className="form" onSubmit={(e) => e.preventDefault()}>
        <input onChange={passwordHandler}
            value={password}
          type={isShown ? "text" : "password"}
          placeholder="Password"
          className="input"
        />
        
        <div className='checkbox-container'>
            <label htmlFor='checkbox'>Show password</label>
            <input
                id='checkbox'
                type='checkbox'
                checked={isShown}
                onChange={togglePassword}
            />
        </div>

        <button onClick={onSubmitHandler} >login</button>
        <div><input type='reset' value='reset' className='button' onClick={() => resetButton()}/></div>
        </form>
        </div>
    );
};