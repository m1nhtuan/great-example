import React from 'react';
import styled, { css } from 'styled-components';

interface InputWrapperProps {
  fullWidth?: boolean;
  error?: boolean;
}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  fullWidth?: boolean;
}

const InputWrapper = styled.div<InputWrapperProps>`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  ${({ fullWidth }) => fullWidth && css`width: 100%;`}
`;

const StyledInput = styled.input<{ error?: boolean }>`
  padding: 0.75rem 1rem;
  border: 1px solid var(--border-color);
  border-radius: 0.375rem;
  font-size: 1rem;
  transition: var(--transition);
  width: 100%;
  background-color: transparent;
  color: inherit;

  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 1px var(--primary-color);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  ${({ error }) =>
    error &&
    css`
      border-color: var(--danger-color);
      &:focus {
        border-color: var(--danger-color);
        box-shadow: 0 0 0 1px var(--danger-color);
      }
    `}
`;

const Label = styled.label`
  font-size: 0.875rem;
  font-weight: 500;
`;

const ErrorMessage = styled.span`
  color: var(--danger-color);
  font-size: 0.75rem;
`;

export const Input: React.FC<InputProps> = ({
  label,
  error,
  fullWidth,
  ...props
}) => {
  return (
    <InputWrapper fullWidth={fullWidth} error={!!error}>
      {label && <Label>{label}</Label>}
      <StyledInput error={!!error} {...props} />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </InputWrapper>
  );
};

export default Input; 