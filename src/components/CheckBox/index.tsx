import { InputHTMLAttributes } from 'react';

import styles from './styles.module.css';

export function CheckBox(props: InputHTMLAttributes<HTMLInputElement>) {
  return <input type='checkbox' {...props} className={styles.wrapper} />;
}
