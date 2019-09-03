import React from "react";
import { withRouter } from "react-router-dom";

import "./sign-in.styles.scss";

class SignIn extends React.Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      errorMsg: ""
    };
  }

  redirectToHome = () => {
    const { history } = this.props;
    if(history) history.push('/home');
  }

  handleSubmit = async event => {
    event.preventDefault();
    if(this.state.email === "test@test.com" && this.state.password === "password"){
      this.redirectToHome();
      this.setState({ email: "", password: "", errorMsg: "" });
    }else {
      this.setState({errorMsg: "Password or User Name is incorrect!"})
    }
    this.setState({ email: "", password: "" });
  };

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <div className="sign-in-container">
          <h3 className="title">Sign in with your email and password</h3>
          <h5 className="error-text">{this.state.errorMsg.length ? this.state.errorMsg : null}</h5>
          <form onSubmit={this.handleSubmit}>
            <div className="group"> 
              <input
                name="email"
                label="Email"
                type="email"
                value={this.state.email}
                onChange={(e) => this.handleChange(e)}
                required
                className="form-input"
              />
              <label
                className={`${
                  this.state.email.length ? "shrink" : ""
                } form-input-label`}
              >
                Email
              </label>
            </div>

            <div className="group">
              <input
                name="password"
                label="Password"
                type="password"
                value={this.state.password}
                onChange={(e) => this.handleChange(e)}
                className="form-input"
                required
              />

              <label
                className={`${
                  this.state.password.length ? "shrink" : ""
                } form-input-label`}
              >
                Password
              </label>
            </div>
            
            <div className="buttons">
              <button type="submit">Sign in</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(SignIn);
