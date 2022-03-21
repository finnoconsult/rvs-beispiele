import { Link } from 'react-router-dom';
import { Heart } from '../Icons';

export function ProductCard({ id, image, title, body, price }) {
  const url = `/products/${id}`;

  return (
    <div className="product-card">
      <Link to={url}>
        <img src={image} className="image" alt={title} />
      </Link>
      <Link to={url}>
        <h2 className="title">{title}</h2>
      </Link>
      <div className="body">{body}</div>
      <div className="spread">
        <button type="button" className="fav-button">
          <Heart />
        </button>
        <div className="price">{price}</div>
      </div>
    </div>
  );
}
