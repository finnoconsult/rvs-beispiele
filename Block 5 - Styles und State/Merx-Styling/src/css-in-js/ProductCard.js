import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Flex, Box } from './Box';
import { Heart } from '../Icons';

const primary = '#118516';

const priceToNum = (price) => parseInt(price.replace(',', '.'), 10);

const FavButton = styled.button`
  padding: 1rem;
  border: 0;
  background-color: transparent;
  cursor: pointer;
  font-size: 1rem;
  color: ${(props) => (props.isFav ? primary : 'grey')};
  transform: scale(${(props) => (props.isFav ? '1.5' : '1')});
  transition: all 200ms;

  > svg {
    fill: ${(props) => (props.isFav ? primary : 'grey')};
  }
`;

export function ProductCard({ id, image, title, body, price }) {
  const [isFav, setIsFav] = useState(false);
  const url = `/products/${id}`;
  const toggle = () => setIsFav((b) => !b);

  return (
    <div className="product-card">
      <Link to={url}>
        <img src={image} className="image" alt={title} />
      </Link>
      <Link to={url}>
        <h2 className="title">{title}</h2>
      </Link>
      <div className="body">{body}</div>
      <Flex justifyContent="space-between" alignItems="center">
        <FavButton isFav={isFav} type="button" onClick={toggle}>
          <Heart />
        </FavButton>

        <Box
          padding="1rem"
          fontSize={24}
          fontWeight="bold"
          textAlign="right"
          color={priceToNum(price) > 80 ? 'red' : 'green'}
        >
          {price}
        </Box>
      </Flex>
    </div>
  );
}
