import { Link } from 'react-router-dom';
import { Heart } from '../Icons';
import { Price } from './Price';
import { ContainerSt, ImageSt, TitleSt, BodySt } from './ProductCard.css';

export function ProductCard({ id, image, title, body, price }) {
  const url = `/products/${id}`;

  return (
    <ContainerSt>
      <Link to={url}>
        <ImageSt src={image} alt={title} />
      </Link>
      <Link to={url}>
        <TitleSt>{title}</TitleSt>
      </Link>
      <BodySt>{body}</BodySt>
      <div className="spread">
        <button type="button" className="fav-button">
          <Heart />
        </button>
        <Price price={price} color={parseInt(price, 10) < 120 ? '#118516' : 'red'} />
      </div>
    </ContainerSt>
  );
}
