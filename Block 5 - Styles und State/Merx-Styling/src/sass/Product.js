import { useParams } from 'react-router-dom';

export function Product({ products }) {
  const params = useParams();
  const product = products.find((product) => product.id == params.id);

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} className="image" />
      <div>
        <h5 className="title">{product.title}</h5>
        <span className="price">{product.price}</span>
        <p className="body">{product.body}</p>
      </div>
    </div>
  );
}
