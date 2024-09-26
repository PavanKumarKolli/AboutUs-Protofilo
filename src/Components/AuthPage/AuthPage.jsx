import React, { useState } from 'react';
import './AuthPage.css';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    createPassword: '',
    dob: '',
    purpose: '',
    isRobot: true,
  });
  const [errors, setErrors] = useState({});

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setErrors({});
    setFormData({
      name: '',
      email: '',
      password: '',
      createPassword: '',
      dob: '',
      purpose: '',
      isRobot: false,
    });
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const validate = () => {
    let errorMessages = {};
    if (!formData.email) errorMessages.email = "Email is required.";
    if (!formData.password) errorMessages.password = "Password is required.";
    if (!formData.createPassword) errorMessages.createPassword = "Please confirm your password.";
    if (formData.password !== formData.createPassword) errorMessages.createPassword = "Passwords do not match.";
    if (!isLogin && !formData.name) errorMessages.name = "Name is required.";
    if (!isLogin && !formData.dob) errorMessages.dob = "Date of Birth is required.";
    if (!isLogin && !formData.purpose) errorMessages.purpose = "Purpose is required.";
    if (!isLogin && !formData.isRobot) errorMessages.isRobot = "Please confirm you're not a robot.";
    setErrors(errorMessages);
    return Object.keys(errorMessages).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Form submitted successfully!");
      // Handle successful form submission logic here
    }
  };

  return (
    <div className="auth-container">
      <div className={`form-container ${isLogin ? 'login-active' : 'signup-active'}`}>
        <div className="welcome-section">
          <div className="welcome-text">
            <h2>{isLogin ? 'Welcome Back!' : 'Hello, Friend!'}</h2>
            <p>{isLogin 
              ? 'To keep connected with us, please login with your personal info' 
              : 'Enter your personal details and start your journey with us'}</p>
            <button onClick={toggleForm}>
              {isLogin ? 'Sign Up' : 'Sign In'}
            </button>
          </div>
        </div>
        <div className="form-section">
          <div className="form-content">
            {isLogin ? (
              <>
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                  <input 
                    type="email" 
                    name="email" 
                    placeholder="Email" 
                    value={formData.email} 
                    onChange={handleInputChange} 
                    required 
                  />
                  {errors.email && <p className="error">{errors.email}</p>}

                  <input 
                    type="password" 
                    name="password" 
                    placeholder="Password" 
                    value={formData.password} 
                    onChange={handleInputChange} 
                    required 
                  />
                  {errors.password && <p className="error">{errors.password}</p>}

                  <button type="submit">Login</button>
                </form>
                <p className="toggle-text">
                  Don't have an account? <span onClick={toggleForm}>Sign Up</span>
                </p>
              </>
            ) : (
              <>
                <h2>Sign Up</h2>
                <form onSubmit={handleSubmit}>
                  <input 
                    type="text" 
                    name="name" 
                    placeholder="Name" 
                    value={formData.name} 
                    onChange={handleInputChange} 
                    required 
                  />
                  {errors.name && <p className="error">{errors.name}</p>}

                  <input 
                    type="email" 
                    name="email" 
                    placeholder="Email" 
                    value={formData.email} 
                    onChange={handleInputChange} 
                    required 
                  />
                  {errors.email && <p className="error">{errors.email}</p>}

                  <input 
                    type="password" 
                    name="password" 
                    placeholder="Password" 
                    value={formData.password} 
                    onChange={handleInputChange} 
                    required 
                  />
                  {errors.password && <p className="error">{errors.password}</p>}

                  <input 
                    type="password" 
                    name="createPassword" 
                    placeholder="Create Password" 
                    value={formData.createPassword} 
                    onChange={handleInputChange} 
                    required 
                  />
                  {errors.createPassword && <p className="error">{errors.createPassword}</p>}

                  <input 
                    type="date" 
                    name="dob" 
                    placeholder="Date of Birth" 
                    value={formData.dob} 
                    onChange={handleInputChange} 
                    required 
                  />
                  {errors.dob && <p className="error">{errors.dob}</p>}

                  <input 
                    type="text" 
                    name="purpose" 
                    placeholder="Purpose" 
                    value={formData.purpose} 
                    onChange={handleInputChange} 
                    required 
                  />
                  {errors.purpose && <p className="error">{errors.purpose}</p>}

                  <div className="checkbox-container">
                    <input 
                      type="checkbox" 
                      name="isRobot" 
                      checked={formData.isRobot} 
                      onChange={handleInputChange} 
                      required 
                    />
                    <label htmlFor="isRobot">I am not a robot</label>
                  </div>
                  {errors.isRobot && <p className="error">{errors.isRobot}</p>}

                  <button type="submit">Sign Up</button>
                </form>
                <p className="toggle-text">
                  Already have an account? <span onClick={toggleForm}>Sign In</span>
                </p>
              </>
            )}
          </div>
        </div>
      </div>
      <div className={`quote-section ${isLogin ? 'quote-left' : 'quote-right'}`}>
        <div className="quote-content">
          <h2>{isLogin ? 'Welcome Back!' : 'Join Us Today!'}</h2>
          <p>{isLogin 
            ? 'We’re happy to see you again! Let’s explore new possibilities.' 
            : 'Create your account and start a wonderful journey with us.'}</p>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
