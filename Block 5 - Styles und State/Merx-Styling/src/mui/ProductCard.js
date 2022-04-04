import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import { Heart } from '../Icons';
import { Price } from './Price';

export function ProductCard({ id, image, title, body, price }) {
  const url = `/products/${id}`;

  return (
    <Card>
      <Link to={url}>
        <img src={image} className="image" alt={title} />
      </Link>
      <Link to={url}>
        <h2 className="title">{title}</h2>
      </Link>
      <div className="body">{body}</div>
      <div className="spread">
        <Button variant="text">
          <Heart />
        </Button>
        <Price price={price} />
      </div>
    </Card>
  );
}
