import React, { myFunction } from 'react';
import './Login.css';
import Navbar from '../../Components/Navbar/Navbar';

class Login extends React.Component {

    render() {
        return (
            <div className="Login">
                <Navbar />
                <p>Sundown</p>
                <div className="form-container">
                    <h1>Log In</h1>
                    <form className="grid">
                        <label>Username:</label>
                        <input type="text" />
                        <label>Password:</label>
                        <input id="myInput" type="password" />
                        <input type="checkbox" onClick={myFunction} />
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;
