import { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  const validateForm = () => {
    const newErrors: { email?: string; password?: string } = {};
    
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // TODO: Implement login logic
      console.log('Login attempt with:', { email, password });
    }
  };

  return (
    <div className="login-container">
      <div className="login-header">
        <h2>Sign in to your account</h2>
      </div>

      <div className="login-form-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <div className="input-container">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <p className="error-message">{errors.email}</p>}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="input-container">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && <p className="error-message">{errors.password}</p>}
            </div>
          </div>

          <div className="form-group">
            <button type="submit">Sign in</button>
          </div>
        </form>

        <div className="signup-link">
          <span>
            Don't have an account?{' '}
            <Link to="/signup">Sign up</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login; 