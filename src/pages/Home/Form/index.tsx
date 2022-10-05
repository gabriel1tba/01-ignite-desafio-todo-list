import { useRef, FormEvent } from 'react';

import { BsPlusCircle } from 'react-icons/bs';

import styles from './styles.module.css';

interface FormProps {
  onCreateTodo: (todo: string) => void;
}

export function Form({ onCreateTodo }: FormProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const todo = inputRef.current?.value;

    if (todo && todo.trim() !== '') {
      onCreateTodo(todo);
      inputRef.current.value = '';
    }
  }

  return (
    <form className={styles.wrapper} onSubmit={handleSubmit}>
      <input placeholder='Adicione uma nova tarefa' ref={inputRef} />
      <button type='submit'>
        Criar <BsPlusCircle />
      </button>
    </form>
  );
}
