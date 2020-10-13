import React from 'react'
import { Link } from 'react-router-dom'

const Greeting = (props) => {
    let welcome; 
    if (props.currentUser ) {
        welcome = (
        <div>
            <p>Hello {props.currentUser.username}</p>
            <button onClick={props.logout}>Logout</button>
        </div>
      );
    }

    let notLoggedIn = (
      <div>
        <Link to="/login">Login</Link>
        <br/>
        <Link to="/signup">Signup</Link>
      </div>
    );
    
    return (
        props.currentUser ? welcome : notLoggedIn
    )
}

export default Greeting; 
