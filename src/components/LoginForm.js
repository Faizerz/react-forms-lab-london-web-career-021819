import React from "react";

class LoginForm extends React.Component {

  state = {
    username: "",
    password: ""
  }

  recordUser = (event) => {
    this.setState({
      username: event.target.value,
      // password: this.state.password
    })
  }

  recordPass = (event) => {
    this.setState({
      // username: this.state.username,
      password: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    if (this.state.username.length > 0 && this.state.password.length > 0){
      this.props.handleLogin({username: this.state.username, password: this.state.password})
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input onChange={this.recordUser} id="username" name="username" type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input onChange={this.recordPass} id="password" name="password" type="password" />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
