import { TbTrash } from 'react-icons/tb';
import { CheckBox } from '../../CheckBox';

import styles from './styles.module.css';

type Todo = {
  id: string;
  completed: boolean;
  title: string;
};

interface TodoItemProps {
  todo: Todo;
  onToggleTodo(id: string): void;
  onDeleteTodo(id: string): void;
}

export function TodoItem({ todo, onToggleTodo, onDeleteTodo }: TodoItemProps) {
  return (
    <div className={styles.wrapper}>
      <CheckBox
        checked={todo.completed}
        onChange={() => onToggleTodo(todo.id)}
      />
      <p
        className={todo.completed ? styles.colorCompleted : styles.colorDefault}
      >
        {todo.title}
      </p>

      <button onClick={() => onDeleteTodo(todo.id)} type='button'>
        <TbTrash />
      </button>
    </div>
  );
}
