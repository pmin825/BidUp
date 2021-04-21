import React from "react";
import { Link } from "react-router-dom";
import SearchBarContainer from "./searchbar_container";

const Greeting = (props) => {
    const sessionLinks = (
        <nav className="login-signup">
            <button
                className="session-button"
                onClick={() => props.openModal("login")}
            >
                Log in
            </button>
            <button
                className="session-button"
                onClick={() => props.openModal("signup")}
            >
                Sign up
            </button>
        </nav>
    );

    let welcome;
    if (props.currentUser) {
        welcome = (
            <div className="welcome-message">
                <p className="welcome-name">{props.currentUser.username}</p>
                <button className="logout-button" onClick={props.logout}>
                    Logout
                </button>
            </div>
        );
    }

    let notLoggedIn = (
        <div>
            <Link to="/login">Login</Link>
            <br />
            <Link to="/signup">Signup</Link>
        </div>
    );

    return (
        <div>
            <nav className="nav-container">
                <nav className="nav-bar">
                    <div className="nav-start">
                        <Link className="logo-name" to="/home">
                            BidUp
                        </Link>
                    </div>
                    <section className="nav-mid">
                        <div className="search-container">
                            <SearchBarContainer />
                        </div>
                    </section>

                    <nav className="login-signup">
                        <Link to="/products/new">
                            <i className="fas fa-camera"></i>
                            <button className="session-button">Sell</button>
                        </Link>
                        <Link className="user-link" to="/bids">
                            <button className="session-button">My Bids</button>
                        </Link>
                        {props.currentUser ? welcome : sessionLinks}
                    </nav>
                </nav>
            </nav>
        </div>
    );
};

export default Greeting;
