import React from "react";
import { Link } from "react-router-dom";

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            errors: [],
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoLogin = this.demoLogin.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props
            .processForm(user)
            .then(() => {
                this.props.closeModal();
            })
            .fail(() => {
                this.setState({ errors: this.props.errors });
            });
    }

    update(field) {
        return (e) => {
            this.setState({
                [field]: e.currentTarget.value,
            });
        };
    }

    demoLogin(e) {
        e.preventDefault();
        const demoUser = { username: "demo_user", password: "password" };
        const speed = 100;

        if (this.state.username !== demoUser.username) {
            const usernameInput = setInterval(() => {
                if (this.state.username !== demoUser.username) {
                    const temp = demoUser.username.slice(
                        0,
                        this.state.username.length + 1
                    );
                    this.setState({ username: temp });
                } else {
                    clearInterval(usernameInput);
                    animate();
                }
            }, speed);
        }
        const animate = () => {
            if (this.state.password !== demoUser.password) {
                const pw = setInterval(() => {
                    if (this.state.password !== demoUser.password) {
                        const temp = demoUser.password.slice(
                            0,
                            this.state.password.length + 1
                        );
                        this.setState({ password: temp });
                    } else {
                        clearInterval(pw);
                        this.props.demoLogin(demoUser).then(() => {
                            this.props.closeModal();
                        });
                    }
                }, speed);
            }
        };
    }

    render() {
        let link;
        if (this.props.formType === "signup") link = this.props.otherForm;
        if (this.props.formType === "login") link = this.props.otherForm;

        const emailInput =
            this.props.formType === "login" ? null : (
                <label>
                    EMAIL
                    <br />
                    <input
                        autoFocus
                        className="signin-input"
                        type="email"
                        onChange={this.update("email")}
                        value={this.state.email}
                    />
                </label>
            );

        const demoButton =
            this.props.formType === "signup" ? null : (
                <div>
                    <button className="signin-button" onClick={this.demoLogin}>
                        Demo User
                    </button>
                </div>
            );

        const errors = this.state.errors.map((error, idx) => {
            return (
                <li className="errors" key={idx}>
                    {error}
                </li>
            );
        });

        const formName =
            this.props.formType === "login" ? (
                <div>Log in</div>
            ) : (
                <div>Sign up</div>
            );

        const formButtonName =
            this.props.formType === "login" ? "Log in" : "Sign up";

        return (
            <div className="signin-container">
                <div className="signin-form">
                    <h1 className="form-name">{formName}</h1>
                    <p className="bid-title">BidUp</p>
                    <form
                        className="signin-form-body"
                        onSubmit={this.handleSubmit}
                    >
                        <label className="form-label">{emailInput}</label>
                        <label className="form-label">
                            USERNAME
                            <input
                                autoFocus
                                className="signin-input"
                                type="text"
                                value={this.state.username}
                                onChange={this.update("username")}
                            />
                        </label>
                        <label className="form-label">
                            PASSWORD
                            <input
                                autoFocus
                                className="signin-input"
                                type="password"
                                value={this.state.password}
                                onChange={this.update("password")}
                            />
                        </label>
                        <input
                            className="signin-button"
                            type="submit"
                            value={formButtonName}
                        />
                        <span>{demoButton}</span>
                        <span> {errors} </span>
                    </form>
                    <br />
                    <span>{link}</span>
                </div>
            </div>
        );
    }
}

export default SessionForm;
