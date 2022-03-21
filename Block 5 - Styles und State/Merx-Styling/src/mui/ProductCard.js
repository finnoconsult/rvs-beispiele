import { Link } from 'react-router-dom';
import { Box, IconButton } from '@mui/material';
import { Heart } from '../Icons';

const priceToNum = (price) => parseInt(price.replace(',', '.'), 10);

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
        <IconButton variant="contained" type="button">
          <Heart />
        </IconButton>
        <Box
          sx={{
            padding: 2,
            fontSize: 24,
            fontWeight: 'bold',
            textAlign: 'right',
            color: priceToNum(price) > 80 ? 'red' : 'green',
          }}
        >
          {price}
        </Box>
      </div>
    </div>
  );
}
