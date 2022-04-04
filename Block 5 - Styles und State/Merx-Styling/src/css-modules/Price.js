import styles from './price.module.css';

export function Price({ price }) {
  return <div className={styles.price}>{price}</div>;
}
