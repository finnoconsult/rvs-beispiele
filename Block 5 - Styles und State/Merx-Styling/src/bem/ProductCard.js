import { Link } from 'react-router-dom';
import { Heart } from '../Icons';

export function ProductCard({ id, image, title, body, price }) {
  const url = `/products/${id}`;
  const isFav = Math.random() > 0.5;

  return (
    <div className="product-card">
      <Link to={url}>
        <img src={image} className="product-card__image" alt={title} />
      </Link>
      <Link to={url}>
        <h2 className="product-card__title">{title}</h2>
      </Link>
      <div className="product-card__body">{body}</div>
      <div className="product-card__spread">
        <button
          type="button"
          className={`product-card__fav-button ${
            isFav ? 'product-card__fav-button--favourited' : 'product-card__fav-button--unfavourited'
          }`}
        >
          <Heart />
        </button>
        <div className="product-card__price">{price}</div>
      </div>
    </div>
  );
}
