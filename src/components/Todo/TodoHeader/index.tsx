import styles from './styles.module.css';

interface TodoHeaderProps {
  createdTasksTitle: number | string;
  completedsTasksTitle: number | string;
}

export function TodoHeader({
  createdTasksTitle,
  completedsTasksTitle,
}: TodoHeaderProps) {
  return (
    <div className={styles.wrapper}>
      <p>
        Tarefas criadas{' '}
        <span className={styles.badge}>{createdTasksTitle}</span>
      </p>{' '}
      <p>
        Concluídas <span className={styles.badge}>{completedsTasksTitle}</span>
      </p>
    </div>
  );
}
