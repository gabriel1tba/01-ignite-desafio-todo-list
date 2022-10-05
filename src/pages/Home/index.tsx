import { Header } from '../../components/Header';
import { Todo } from '../../components/Todo';

import styles from './styles.module.css';

export function Home() {
  return (
    <div className={styles.wrapper}>
      <Header />

      <Todo />
    </div>
  );
}
