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
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user).then(() => this.props.history.push("/")).fail(() => {
            this.setState({ errors: this.props.errors  })
        })
    //     this.setState({ email: "", username: "", password: "" });
    }   

    update(field) {
        return (e) => {
            this.setState({
                [field]: e.currentTarget.value
            })
        }
    }   

    render () {
    
        let link;
        if (this.props.formType === 'signup')
        link = (
            <Link to="/login">Already have an account? Login now!</Link>
        )

        if (this.props.formType === 'login')
        link = (
            <Link to="/signup">Don't have an account? Sign up now!</Link>
        )

        const emailInput = (this.props.formType === "login") ? null : (
            <label>Email:
                <input type="text" onChange={this.update("email")} value={this.state.email} />
            </label>
        );

        const errors = this.state.errors.map((error, idx) => {
            return (
                <li key={idx}>
                    {error}
                </li>
            )
        })
        return (
            <div>
                {link}
                {errors}
                <form onSubmit={this.handleSubmit}>
                    <br/>
                    <label>
                        {emailInput}
                    </label>
                    <label>Username:
                        <input type="text" value={this.state.username} onChange={this.update('username')}/>
                    </label>
                    <label>Password:
                        <input type="password" value={this.state.password} onChange={this.update('password')}/>
                    </label>
                        <input type="submit" value={this.props.formType}/>
                </form>
            </div>
        )
    }
}

export default SessionForm;