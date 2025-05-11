export interface Todo {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  category: string;
  priority: 'low' | 'medium' | 'high';
  createdAt: string;
  updatedAt: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}

export interface TodosState {
  items: Todo[];
  loading: boolean;
  error: string | null;
  filter: {
    status: 'all' | 'completed' | 'active';
    category: string;
    priority: string;
  };
} 