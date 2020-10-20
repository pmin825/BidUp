import React from 'react'
import { Link } from 'react-router-dom'

const Greeting = (props) => {

    const sessionLinks = (
      <nav className="login-signup">
      {/* <i className="fas fa-camera"></i>
      <button className="session-button">Sell</button>
      <button className="session-button">About</button> */}
      <button className="session-button" onClick={() => props.openModal('login')}>Log in</button>
      <button className="session-button" onClick={() => props.openModal('signup')}>Sign up</button>
      </nav>
    );

    let welcome; 
    if (props.currentUser ) {
        welcome = (
        <div className="welcome-message">
            <p className="welcome-name">{props.currentUser.username}</p>
            <button className="logout-button" onClick={props.logout}>Logout</button>
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
      <div>
        <nav className="nav-container">
          <nav className="nav-bar">
            <div className="nav-start">
              <Link className="logo-name" to="/">BidUp</Link>
            </div>
            <section className="nav-mid">
              <div className='search-container'>
                <i className="fa fa-search">
                  <input className="search-input-one" type="text" placeholder="Search BidUp" name="search" />
                </i>
              </div>

              <div className='search-container'>
                <i className="fas fa-map-marker-alt">
                  <input className="search-input-two" type="text" placeholder="Nearby" name="search" />
                </i>
                  <button className="go-button">GO</button>
              </div>
            </section>

            <nav className="login-signup">
              <i className="fas fa-camera"></i>
              <Link to="/products/new">
                <button className="session-button">Sell</button>
              </Link>
              <button className="session-button">About</button>
              {props.currentUser ? welcome : sessionLinks}  
            </nav>  
          </nav>
        </nav>
      </div>
    )

}

export default Greeting; 
