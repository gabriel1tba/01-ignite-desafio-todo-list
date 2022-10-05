import clipboardSvg from '../../assets/Clipboard.svg';

import styles from './styles.module.css';

export function CardInfo() {
  return (
    <div className={styles.wrapper}>
      <img src={clipboardSvg} />
      <strong>Você ainda não tem tarefas cadastradas</strong>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  );
}
