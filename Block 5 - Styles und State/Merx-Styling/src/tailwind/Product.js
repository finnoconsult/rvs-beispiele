import { useParams } from 'react-router-dom';

export function Product({ products }) {
  const params = useParams();
  const product = products.find((product) => product.id == params.id);

  return (
    <div>
      <img src={product.image} alt={product.title} />
      <div>
        <h2 className="text-gray-900 font-semibold text-xl tracking-tight">{product.title}</h2>
        <span className="text-3xl font-bold text-gray-900">{product.price}</span>
        <p>{product.body}</p>
      </div>
    </div>
  );
}
