import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        username: "",
        password: "",
        errors: []
      }

      this.handleSubmit = this.handleSubmit.bind(this)
      this.demoLogin = this.demoLogin.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user).then(() => {
            this.props.closeModal()
            // this.props.history.push("/")
        }).fail(() => {
            this.setState({ errors: this.props.errors  })
        })
    }   

    update(field) {
        return (e) => {
            this.setState({
                [field]: e.currentTarget.value
            })
        }
    }
    
    demoLogin(e) {
        e.preventDefault()
        const demo = { username: "demo_user", password: "password"}
        const speed = 100;
    
        if (this.state.username !== demo.username) {
            const inputUsername = setInterval(() => {
                if(this.state.username !== demo.username) {
                    const temp = demo.username.slice(0, this.state.username.length + 1);
                    this.setState({username: temp})
                } else {
                    clearInterval(inputUsername);
                    animatePW();
                }
            }, speed)
        }
        const animatePW = () => {
            if (this.state.password !== demo.password) {
                const inputPassword = setInterval(() => {
                    if (this.state.password !== demo.password) {
                        const temp = demo.password.slice(0, this.state.password.length + 1);
                        this.setState({ password: temp });
                    } else {
                        clearInterval(inputPassword);
                        this.props.demoLogin(demo).then(
                            () => {
                                this.props.closeModal()
                                // this.props.history.push("/home")
                            })
                    }
                }, speed);
            }
        }
    }

    render () {
    
        const emailInput = (this.props.formType === "login") ? null : (
                <label>Email:
                    <br/>
                    <input className="signin-input" type="email" onChange={this.update("email")} value={this.state.email} />
                </label>
        );

        const demoButton = (this.props.formType === 'signup') ? null : (
            <div>
                <button className="signin-button" onClick={this.demoLogin}>demo login</button>
            </div>
        );

        const errors = this.state.errors.map((error, idx) => {
            return (
                <li key={idx}>
                    {error}
                </li>
            )
        })

        const formName = (this.props.formType === "login") ? (
            <div>
                Log in 
            </div>
        ) : (
            <div>
                Sign up 
            </div>
        )

        return (
            <div className="signin-container">
                <div className="signin-form">
                    <span> {errors} </span>
                    <h1 className="form-name">{formName}</h1>
                    <form className="signin-form-body" onSubmit={this.handleSubmit}>
                        <label>
                            {emailInput}
                        </label>
                        <label>Username:
                            <input className="signin-input" type="text" value={this.state.username} onChange={this.update('username')}/>
                        </label>
                        <label>Password:
                            <input className="signin-input" type="password" value={this.state.password} onChange={this.update('password')}/>
                        </label>
                            <input className="signin-button" type="submit" value={this.props.formType}/>
                        <span>{demoButton}</span>
                    </form>
                </div>
            </div>
        )
    }
}

export default SessionForm;