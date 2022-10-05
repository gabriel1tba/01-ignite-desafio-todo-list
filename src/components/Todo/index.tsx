import { useMemo, useState } from 'react';
import { v4 } from 'uuid';

import { CardInfo } from '../CardInfo';
import { TodoHeader } from './TodoHeader';
import { Form } from './Form';

import styles from './styles.module.css';
import { TodoItem } from './TodoItem';

type Todo = {
  id: string;
  completed: boolean;
  title: string;
};

export function Todo() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const quantities = useMemo(
    () =>
      todos.reduce(
        (acc, todo) => {
          if (todo.completed) {
            acc.completeds += Number(todo.completed);
            acc.total += Number(todo.completed);
          } else if (!todo.completed) {
            acc.total += Number(!todo.completed);
          }

          return acc;
        },
        {
          completeds: 0,
          total: 0,
        }
      ),
    [todos]
  );

  function handleCreateTodo(title: string) {
    setTodos((prev) => [...prev, { id: v4(), completed: false, title }]);
  }

  function handleToggleTodo(id: string) {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  function handleDeleteTodo(id: string) {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }

  return (
    <div className={styles.wrapper}>
      <Form onCreateTodo={handleCreateTodo} />

      <TodoHeader
        createdTasksTitle={quantities.total}
        completedsTasksTitle={
          Boolean(todos.length)
            ? `${quantities.completeds} de ${quantities.total}`
            : 0
        }
      />

      {!Boolean(todos.length) && <CardInfo />}

      {Boolean(todos.length) &&
        todos.map((todo) => (
          <TodoItem
            key={todo.title}
            todo={todo}
            onToggleTodo={handleToggleTodo}
            onDeleteTodo={handleDeleteTodo}
          />
        ))}
    </div>
  );
}
