import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { toast } from 'react-toastify';

import { useAppDispatch } from '../app/hooks';
import { loginSuccess } from '../features/auth/authSlice';
import { Button } from '../components/common/Button/Button';
import { Input } from '../components/common/Input/Input';

const LoginContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;

const LoginForm = styled.form`
  background-color: var(--background-light);
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;

  .dark-theme & {
    background-color: var(--background-dark);
  }
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
  font-size: 1.5rem;
  font-weight: 600;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const RegisterLink = styled(Link)`
  display: block;
  text-align: center;
  margin-top: 1rem;
  color: var(--primary-color);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // For demo purposes, we'll use a simple validation
    if (email === 'demo@example.com' && password === 'demo123') {
      dispatch(
        loginSuccess({
          id: '1',
          email: 'demo@example.com',
          name: 'Demo User',
        })
      );
      navigate('/');
      toast.success('Welcome back!');
    } else {
      toast.error('Invalid credentials. Try demo@example.com / demo123');
    }
  };

  return (
    <LoginContainer>
      <LoginForm onSubmit={handleSubmit}>
        <Title>Welcome Back</Title>
        <FormGroup>
          <Input
            type="email"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            fullWidth
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="password"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
            fullWidth
          />
        </FormGroup>
        <Button type="submit" fullWidth>
          Log In
        </Button>
        <RegisterLink to="/register">
          Don't have an account? Sign up
        </RegisterLink>
      </LoginForm>
    </LoginContainer>
  );
};

export default Login; 