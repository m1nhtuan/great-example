import styled, { css } from 'styled-components';

type ButtonVariant = 'primary' | 'secondary' | 'success' | 'danger' | 'warning';
type ButtonSize = 'small' | 'medium' | 'large';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  isLoading?: boolean;
}

const getVariantStyles = (variant: ButtonVariant = 'primary') => {
  const variants = {
    primary: css`
      background-color: var(--primary-color);
      color: var(--text-light);
      &:hover:not(:disabled) {
        background-color: var(--primary-hover);
      }
    `,
    secondary: css`
      background-color: var(--secondary-color);
      color: var(--text-light);
      &:hover:not(:disabled) {
        opacity: 0.9;
      }
    `,
    success: css`
      background-color: var(--success-color);
      color: var(--text-light);
      &:hover:not(:disabled) {
        opacity: 0.9;
      }
    `,
    danger: css`
      background-color: var(--danger-color);
      color: var(--text-light);
      &:hover:not(:disabled) {
        opacity: 0.9;
      }
    `,
    warning: css`
      background-color: var(--warning-color);
      color: var(--text-light);
      &:hover:not(:disabled) {
        opacity: 0.9;
      }
    `,
  };
  return variants[variant];
};

const getSizeStyles = (size: ButtonSize = 'medium') => {
  const sizes = {
    small: css`
      padding: 0.5rem 1rem;
      font-size: 0.875rem;
    `,
    medium: css`
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    `,
    large: css`
      padding: 1rem 2rem;
      font-size: 1.125rem;
    `,
  };
  return sizes[size];
};

export const Button = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.375rem;
  font-weight: 500;
  transition: var(--transition);
  white-space: nowrap;
  
  ${({ variant }) => getVariantStyles(variant)}
  ${({ size }) => getSizeStyles(size)}
  ${({ fullWidth }) => fullWidth && css`width: 100%;`}
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  ${({ isLoading }) =>
    isLoading &&
    css`
      position: relative;
      color: transparent;
      
      &::after {
        content: '';
        position: absolute;
        width: 1em;
        height: 1em;
        border: 2px solid;
        border-radius: 50%;
        border-color: #fff #fff #fff transparent;
        animation: spin 0.7s linear infinite;
      }

      @keyframes spin {
        to {
          transform: rotate(360deg);
        }
      }
    `}
`;

export default Button; 