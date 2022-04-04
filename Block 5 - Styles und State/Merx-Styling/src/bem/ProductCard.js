import { Link } from 'react-router-dom';
import { Heart } from '../Icons';

const priceToInt = (price) => parseInt(price, 10);

export function ProductCard({ id, image, title, body, price }) {
  const url = `/products/${id}`;

  const priceModifier = priceToInt(price) < 120 ? 'product-card__price--low' : 'product-card__price--high';

  return (
    <div className="product-card">
      <Link to={url}>
        <img src={image} className="product-card__image" alt={title} />
      </Link>
      <Link to={url}>
        <h2 className="product-card__title">{title}</h2>
      </Link>
      <div className="product-card__body">{body}</div>
      <div className="spread">
        <button type="button" className="product-card__fav-button">
          <Heart />
        </button>
        <div className={`product-card__price ${priceModifier}`}>{price}</div>
      </div>
    </div>
  );
}
