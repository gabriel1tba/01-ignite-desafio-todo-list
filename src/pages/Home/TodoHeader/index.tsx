import styles from './styles.module.css';

interface TodoHeaderProps {
  createdTasksTitle: string;
  completedsTasksTitle: string;
}

export function TodoHeader({
  completedsTasksTitle,
  createdTasksTitle,
}: TodoHeaderProps) {
  return (
    <div className={styles.wrapper}>
      <p>
        Tarefas criadas{' '}
        <span className={styles.badge}>{completedsTasksTitle}</span>
      </p>{' '}
      <p>
        Concluídas <span className={styles.badge}>{createdTasksTitle}</span>
      </p>
    </div>
  );
}
