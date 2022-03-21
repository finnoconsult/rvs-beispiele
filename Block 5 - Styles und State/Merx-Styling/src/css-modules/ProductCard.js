import { Link } from 'react-router-dom';
import { Heart } from '../Icons';
import styles from './ProductCard.module.css';
import cx from 'classnames';

export function ProductCard({ id, image, title, body, price }) {
  const url = `/products/${id}`;
  const isActive = Math.random() > 0.5;

  return (
    <div className={styles.productCard}>
      <Link to={url}>
        <img src={image} className={styles.image} alt={title} />
      </Link>
      <Link to={url}>
        <h2 className={styles.title}>{title}</h2>
      </Link>
      <div className={styles.body}>{body}</div>
      <div className={styles.spread}>
        <button
          type="button"
          className={cx(styles.favButton, isActive ? styles.favButtonInactive : styles.favButtonActive)}
        >
          <Heart />
        </button>
        <div className={styles.price}>{price}</div>
      </div>
    </div>
  );
}
