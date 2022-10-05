import { useState } from 'react';

import { Header } from '../../components/Header';
import { CardInfo } from './CardInfo';

import { Form } from './Form';

import styles from './styles.module.css';
import { TodoHeader } from './TodoHeader';

export function Home() {
  const [todos, setTodos] = useState<string[]>([]);

  function handleCreateTodo(todo: string) {
    setTodos([...todos, todo]);
  }

  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.wrapperTodo}>
        <Form onCreateTodo={handleCreateTodo} />

        <TodoHeader createdTasksTitle='0' completedsTasksTitle='0' />

        <CardInfo />
      </div>
    </div>
  );
}
