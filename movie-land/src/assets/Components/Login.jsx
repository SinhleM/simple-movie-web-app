import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Dummy login check (replace with actual auth later)
    if (email === 'user@example.com' && password === 'password123') {
      onLogin(email);
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div style={styles.container}>
      <h2>Login to Movie Searcher</h2>
      <form onSubmit={handleLogin} style={styles.form}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
          required
        />
        <button type="submit" style={styles.button}>Login</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '300px',
    margin: '50px auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    textAlign: 'center',
    backgroundColor: '#f9f9f9'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px'
  },
  input: {
    padding: '10px',
    fontSize: '16px'
  },
  button: {
    padding: '10px',
    backgroundColor: '#007BFF',
    color: 'white',
    fontSize: '16px',
    border: 'none',
    borderRadius: '5px'
  }
};

export default Login;
