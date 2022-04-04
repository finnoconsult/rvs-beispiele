import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Heart } from '../Icons';
import { ContainerSt, ImageSt, TitleSt, BodySt } from './ProductCard.css';

export const PriceSt = styled.div`
  padding: 1rem;
  font-size: 24px;
  font-weight: bold;
  text-align: right;
  color: ${(props) => (props.isCheap ? '#118516' : 'red')};
`;

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
        <PriceSt isCheap={parseInt(price, 10) < 120}>{price}</PriceSt>
      </div>
    </ContainerSt>
  );
}
