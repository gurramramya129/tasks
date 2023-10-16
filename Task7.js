import React, { Component } from 'react';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: {
        email: '',
        password: '',
      },
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    const errors = {};

    // Email validation (simple check for a valid email format)
    if (!email.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) {
      errors.email = 'Invalid email address';
    }

    // Password validation (simple check for a minimum length)
    if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
    }

    // Check for errors
    if (Object.keys(errors).length === 0) {
      // Successful login, you can perform further actions here
      console.log('Logged in with:', { email, password });
    } else {
      this.setState({ errors });
    }
  };

  render() {
    const { email, password, errors } = this.state;

    return (
      <div>
        <h2>Login Form</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
            <span className="error">{errors.email}</span>
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
            <span className="error">{errors.password}</span>
          </div>
          <div>
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginForm;