import React from 'react'
import { Link } from 'react-router-dom'

const Greeting = (props) => {

    const sessionLinks = (
    <nav className="login-signup">
      <button onClick={() => props.openModal('login')}>Login</button>
      <button onClick={() => props.openModal('signup')}>Signup</button>
    </nav>
    );

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
        props.currentUser ? welcome : sessionLinks
    )
}

export default Greeting; 
