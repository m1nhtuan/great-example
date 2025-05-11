import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color: #6366f1;
    --primary-hover: #4f46e5;
    --secondary-color: #64748b;
    --success-color: #22c55e;
    --danger-color: #ef4444;
    --warning-color: #f59e0b;
    --background-light: #f8fafc;
    --background-dark: #0f172a;
    --text-light: #f8fafc;
    --text-dark: #1e293b;
    --border-color: #e2e8f0;
    --transition: all 0.3s ease;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: var(--background-light);
    color: var(--text-dark);
    line-height: 1.5;
    transition: var(--transition);
  }

  body.dark-theme {
    background-color: var(--background-dark);
    color: var(--text-light);
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
    font-family: inherit;
  }

  input, textarea {
    font-family: inherit;
  }

  ul {
    list-style: none;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  /* Scrollbar styles */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: var(--background-light);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--secondary-color);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--primary-color);
  }

  /* Toast styles */
  .Toastify__toast {
    border-radius: 8px;
    font-family: inherit;
  }
`; 