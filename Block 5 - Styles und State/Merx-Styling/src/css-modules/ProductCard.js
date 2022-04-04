import { Link } from 'react-router-dom';
import { Heart } from '../Icons';
import { Price } from './Price';
import styles from './product-card.module.css';

export function ProductCard({ id, image, title, body, price }) {
  const url = `/products/${id}`;

  return (
    <div className={styles.container}>
      <Link to={url}>
        <img src={image} className={styles.image} alt={title} />
      </Link>
      <Link to={url}>
        <h2 className={styles.title}>{title}</h2>
      </Link>
      <div className={styles.body}>{body}</div>
      <div className="spread">
        <button type="button" className="fav-button">
          <Heart />
        </button>
        <Price price={price} />
      </div>
    </div>
  );
}
