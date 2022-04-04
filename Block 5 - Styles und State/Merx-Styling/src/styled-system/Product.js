import { useParams } from 'react-router-dom';
import { Price } from './Price';

export function Product({ products }) {
  const params = useParams();
  const product = products.find((product) => product.id == params.id);

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} className="image" />
      <div>
        <h5 className="title">{product.title}</h5>
        <Price price={product.price} textAlign="left" />
        <p className="body">{product.body}</p>
      </div>
    </div>
  );
}
