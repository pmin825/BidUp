import React from 'react';


class SessionForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        username: "",
        password: ""
      }

      this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
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
        if (this.props.formType === 'login')
        link = (
            <Link to="/login">Login</Link>
        )

        if (this.props.formType === 'signup')
        link = (
            <Link to="/"></Link>
        )

        const errors = this.props.errors.map((error) => {
            <ul>
                <li>
                    {error}
                </li>
            </ul>
        })
        return (
            <div>
                {link}
                <form onSubmit={this.handleSubmit}>
                    <label>Username:
                        <input type="text" value={this.state.username} onChange={this.update('username')}/>
                    </label>
                    <label>Password:
                        <input type="password" value={this.state.password} onChange={this.update('password')}/>
                    </label>
                        <input type="submit" value={this.props.formType}/>
                </form>
                {errors}
            </div>
        )
    }
}

export default SessionForm;