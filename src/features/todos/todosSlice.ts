import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TodosState, Todo } from 'types';

/**
 * Initial state for the todos slice
 * @property {Todo[]} items - Array of todo items
 * @property {boolean} loading - Loading state for async operations
 * @property {string | null} error - Error message if operations fail
 * @property {Object} filter - Current filter settings for todos
 */
const initialState: TodosState = {
  items: [],
  loading: false,
  error: null,
  filter: {
    status: 'all',
    category: '',
    priority: '',
  },
};

/**
 * Redux slice for managing todo items
 * Handles CRUD operations and filtering for todos
 */
const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    /**
     * Adds a new todo item to the state
     * @param {Todo} action.payload - The todo item to add
     */
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.items.push(action.payload);
    },

    /**
     * Removes a todo item from the state
     * @param {string} action.payload - ID of the todo to remove
     */
    removeTodo: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((todo) => todo.id !== action.payload);
    },

    /**
     * Toggles the completed status of a todo
     * Updates the updatedAt timestamp
     * @param {string} action.payload - ID of the todo to toggle
     */
    toggleTodo: (state, action: PayloadAction<string>) => {
      const todo = state.items.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
        todo.updatedAt = new Date().toISOString();
      }
    },

    /**
     * Updates an existing todo item
     * Preserves the ID and updates the timestamp
     * @param {Todo} action.payload - Updated todo item
     */
    updateTodo: (state, action: PayloadAction<Todo>) => {
      const index = state.items.findIndex((todo) => todo.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = {
          ...action.payload,
          updatedAt: new Date().toISOString(),
        };
      }
    },

    /**
     * Updates the current filter settings
     * @param {Partial<TodosState['filter']>} action.payload - New filter settings
     */
    setFilter: (state, action: PayloadAction<Partial<TodosState['filter']>>) => {
      state.filter = { ...state.filter, ...action.payload };
    },

    /**
     * Reorders todos using drag and drop
     * @param {Object} action.payload - Source and destination indices
     * @param {number} action.payload.sourceIndex - Original position
     * @param {number} action.payload.destinationIndex - New position
     */
    reorderTodos: (state, action: PayloadAction<{ sourceIndex: number; destinationIndex: number }>) => {
      const [removed] = state.items.splice(action.payload.sourceIndex, 1);
      state.items.splice(action.payload.destinationIndex, 0, removed);
    },
  },
});

export const {
  addTodo,
  removeTodo,
  toggleTodo,
  updateTodo,
  setFilter,
  reorderTodos,
} = todosSlice.actions;

export default todosSlice.reducer; 