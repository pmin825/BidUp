import React from 'react'
import { Link } from 'react-router-dom'

const Greeting = (props) => {

    const sessionLinks = (
    <nav className="login-signup">
      <button className="session-button" onClick={() => props.openModal('login')}>Log in</button>
      <button className="session-button" onClick={() => props.openModal('signup')}>Sign up</button>
    </nav>
    );

    let welcome; 
    if (props.currentUser ) {
        welcome = (
        <div className="welcome-message">
            <p>Hello {props.currentUser.username}!</p>
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
      <nav className="nav-container">
        <nav className="nav-bar">
          <p className="logo-name">BidUp</p>
          {props.currentUser ? welcome : sessionLinks}    
        </nav>
      </nav>
    )

}

export default Greeting; 
