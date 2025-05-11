import React, { useState } from 'react';
import styled from 'styled-components';
import {
  DragDropContext,
  Droppable,
  Draggable,
  DroppableProvided,
  DroppableStateSnapshot,
  DraggableProvided,
  DraggableStateSnapshot,
} from '@hello-pangea/dnd';
import { FiPlus, FiEdit2, FiTrash2, FiCheck, FiX } from 'react-icons/fi';
import { toast } from 'react-toastify';

import { useAppDispatch, useAppSelector } from '../app/hooks';
import { addTodo, removeTodo, toggleTodo, updateTodo, reorderTodos, setFilter } from '../features/todos/todosSlice';
import { Button } from '../components/common/Button/Button';
import { Input } from '../components/common/Input/Input';
import { Modal } from '../components/common/Modal/Modal';
import { Todo } from '../types';

const Container = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 0 1rem;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 600;
`;

const FilterContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const TodoItem = styled.div<{ isDragging: boolean }>`
  display: flex;
  align-items: center;
  padding: 1rem;
  background-color: ${({ isDragging }) =>
    isDragging ? 'var(--primary-color)' : 'var(--background-light)'};
  border-radius: 0.5rem;
  margin-bottom: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: var(--transition);

  .dark-theme & {
    background-color: ${({ isDragging }) =>
      isDragging ? 'var(--primary-color)' : 'var(--background-dark)'};
  }
`;

const TodoContent = styled.div`
  flex: 1;
  margin: 0 1rem;
`;

const TodoTitle = styled.h3<{ completed: boolean }>`
  font-size: 1rem;
  margin-bottom: 0.25rem;
  text-decoration: ${({ completed }) => (completed ? 'line-through' : 'none')};
  opacity: ${({ completed }) => (completed ? 0.7 : 1)};
`;

const TodoDescription = styled.p<{ completed: boolean }>`
  font-size: 0.875rem;
  color: var(--secondary-color);
  text-decoration: ${({ completed }) => (completed ? 'line-through' : 'none')};
  opacity: ${({ completed }) => (completed ? 0.7 : 1)};
`;

const ActionButton = styled.button`
  padding: 0.5rem;
  color: var(--secondary-color);
  transition: var(--transition);

  &:hover {
    color: var(--primary-color);
  }

  &.delete:hover {
    color: var(--danger-color);
  }
`;

/**
 * TodoList Component
 * Main component for managing and displaying todos
 * Features:
 * - Add, edit, delete todos
 * - Filter todos by status
 * - Drag and drop reordering
 * - Modal for adding/editing todos
 */
const TodoList: React.FC = () => {
  // Local state for managing the add/edit modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTodo, setEditingTodo] = useState<Todo | null>(null);
  
  // Form state for todo creation/editing
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [priority, setPriority] = useState<'low' | 'medium' | 'high'>('medium');

  // Redux hooks for state management
  const dispatch = useAppDispatch();
  const { items: todos, filter } = useAppSelector((state) => state.todos);

  /**
   * Handles the end of a drag operation
   * Updates the todo order in the Redux store
   * @param {Object} result - Drag and drop result object
   */
  const handleDragEnd = (result: any) => {
    if (!result.destination) return;

    dispatch(
      reorderTodos({
        sourceIndex: result.source.index,
        destinationIndex: result.destination.index,
      })
    );
  };

  /**
   * Creates a new todo item
   * Dispatches addTodo action and shows success message
   */
  const handleAddTodo = () => {
    const newTodo: Todo = {
      id: Date.now().toString(),
      title,
      description,
      completed: false,
      category,
      priority,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    dispatch(addTodo(newTodo));
    resetForm();
    setIsModalOpen(false);
    toast.success('Todo added successfully!');
  };

  /**
   * Updates an existing todo item
   * Dispatches updateTodo action and shows success message
   */
  const handleUpdateTodo = () => {
    if (!editingTodo) return;

    const updatedTodo: Todo = {
      ...editingTodo,
      title,
      description,
      category,
      priority,
      updatedAt: new Date().toISOString(),
    };

    dispatch(updateTodo(updatedTodo));
    resetForm();
    setIsModalOpen(false);
    toast.success('Todo updated successfully!');
  };

  /**
   * Resets the form state and clears editing mode
   */
  const resetForm = () => {
    setTitle('');
    setDescription('');
    setCategory('');
    setPriority('medium');
    setEditingTodo(null);
  };

  /**
   * Opens the edit modal and populates form with todo data
   * @param {Todo} todo - Todo item to edit
   */
  const openEditModal = (todo: Todo) => {
    setEditingTodo(todo);
    setTitle(todo.title);
    setDescription(todo.description);
    setCategory(todo.category);
    setPriority(todo.priority);
    setIsModalOpen(true);
  };

  /**
   * Filters todos based on current filter settings
   * Applies status, category, and priority filters
   */
  const filteredTodos = todos.filter((todo) => {
    if (filter.status !== 'all') {
      if (filter.status === 'completed' && !todo.completed) return false;
      if (filter.status === 'active' && !todo.completed) return false;
    }
    if (filter.category && todo.category !== filter.category) return false;
    if (filter.priority && todo.priority !== filter.priority) return false;
    return true;
  });

  return (
    <Container>
      {/* Header with title and add button */}
      <Header>
        <Title>My Tasks</Title>
        <Button onClick={() => setIsModalOpen(true)}>
          <FiPlus /> Add Task
        </Button>
      </Header>

      {/* Filter buttons for todo status */}
      <FilterContainer>
        <Button
          variant={filter.status === 'all' ? 'primary' : 'secondary'}
          size="small"
          onClick={() => dispatch(setFilter({ status: 'all' }))}
        >
          All
        </Button>
        <Button
          variant={filter.status === 'active' ? 'primary' : 'secondary'}
          size="small"
          onClick={() => dispatch(setFilter({ status: 'active' }))}
        >
          Active
        </Button>
        <Button
          variant={filter.status === 'completed' ? 'primary' : 'secondary'}
          size="small"
          onClick={() => dispatch(setFilter({ status: 'completed' }))}
        >
          Completed
        </Button>
      </FilterContainer>

      {/* Drag and drop context for todo list */}
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="todos">
          {(provided: DroppableProvided, snapshot: DroppableStateSnapshot) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {/* Map through filtered todos and render draggable items */}
              {filteredTodos.length === 0 ? (
                <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--secondary-color)' }}>
                  No todos found. Add a new task!
                </div>
              ) : (
                filteredTodos.map((todo, index) => (
                  <Draggable key={todo.id} draggableId={todo.id} index={index}>
                    {(provided: DraggableProvided, snapshot: DraggableStateSnapshot) => (
                      <TodoItem
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        isDragging={snapshot.isDragging}
                      >
                        {/* Toggle completion status */}
                        <ActionButton
                          onClick={() => dispatch(toggleTodo(todo.id))}
                        >
                          {todo.completed ? <FiX /> : <FiCheck />}
                        </ActionButton>
                        
                        {/* Todo content */}
                        <TodoContent>
                          <TodoTitle completed={todo.completed}>
                            {todo.title}
                          </TodoTitle>
                          <TodoDescription completed={todo.completed}>
                            {todo.description}
                          </TodoDescription>
                        </TodoContent>
                        
                        {/* Action buttons */}
                        <ActionButton onClick={() => openEditModal(todo)}>
                          <FiEdit2 />
                        </ActionButton>
                        <ActionButton
                          className="delete"
                          onClick={() => {
                            dispatch(removeTodo(todo.id));
                            toast.success('Todo removed successfully!');
                          }}
                        >
                          <FiTrash2 />
                        </ActionButton>
                      </TodoItem>
                    )}
                  </Draggable>
                ))
              )}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>

      {/* Modal for adding/editing todos */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          resetForm();
        }}
        title={editingTodo ? 'Edit Task' : 'Add New Task'}
      >
        {/* Todo form fields */}
        <Input
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter task title"
          required
          fullWidth
        />
        <Input
          label="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter task description"
          fullWidth
        />
        <Input
          label="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Enter task category"
          fullWidth
        />
        <div style={{ marginBottom: '1rem' }}>
          <label>Priority</label>
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value as 'low' | 'medium' | 'high')}
            style={{ width: '100%', padding: '0.5rem' }}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        <Button
          onClick={editingTodo ? handleUpdateTodo : handleAddTodo}
          fullWidth
        >
          {editingTodo ? 'Update Task' : 'Add Task'}
        </Button>
      </Modal>
    </Container>
  );
};

export default TodoList; 