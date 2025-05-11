import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { toast } from 'react-toastify';

import { useAppDispatch } from '../app/hooks';
import { loginSuccess } from '../features/auth/authSlice';
import { Button } from '../components/common/Button/Button';
import { Input } from '../components/common/Input/Input';

const RegisterContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;

const RegisterForm = styled.form`
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

const LoginLink = styled(Link)`
  display: block;
  text-align: center;
  margin-top: 1rem;
  color: var(--primary-color);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Register: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    // For demo purposes, we'll just create a new user
    dispatch(
      loginSuccess({
        id: Date.now().toString(),
        email,
        name,
      })
    );
    navigate('/');
    toast.success('Registration successful!');
  };

  return (
    <RegisterContainer>
      <RegisterForm onSubmit={handleSubmit}>
        <Title>Create Account</Title>
        <FormGroup>
          <Input
            type="text"
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            required
            fullWidth
          />
        </FormGroup>
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
        <FormGroup>
          <Input
            type="password"
            label="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm your password"
            required
            fullWidth
          />
        </FormGroup>
        <Button type="submit" fullWidth>
          Sign Up
        </Button>
        <LoginLink to="/login">
          Already have an account? Log in
        </LoginLink>
      </RegisterForm>
    </RegisterContainer>
  );
};

export default Register; 