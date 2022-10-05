import logoSvg from '../../assets/Logo.svg';

import styles from './styles.module.css';

export function Header() {
  return (
    <header className={styles.wrapper}>
      <img src={logoSvg} />
    </header>
  );
}
