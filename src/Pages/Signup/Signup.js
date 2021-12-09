import React, { myFunction } from 'react';
import './Signup.css';
import Navbar from '../../Components/Navbar/Navbar';

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    
    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }
    
    myFunction = () => {
        var x = document.getElementById("myInput");
        if (x.type === "password") {
          x.type = "text";
        } else {
          x.type = "password";
        }
    }

    render() {
        return (
            <div className="Signup">
                <Navbar />
                <div className="form-container">
                    <h1>Sign Up</h1>
                    <form className="grid" onSubmit={this.handleSubmit}>
                        <label>First Name:</label>
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                        <label>Last Name:</label>
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                        <label>Username:</label>
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
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

export default Signup;
