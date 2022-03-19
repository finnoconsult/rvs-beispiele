import { useParams } from 'react-router-dom';

export function Product({ products }) {
  const params = useParams();
  const product = products.find((product) => product.id == params.id);

  return (
    <div className="d-flex">
      <div style={{ maxWidth: 200 }}>
        <img src={product.image} alt={product.title} style={{ width: '100%' }} />
      </div>
      <div>
        <h5 className="card-title">{product.title}</h5>

        <span className="fs-3 text-success">{product.price}</span>

        <p dangerouslySetInnerHTML={{ __html: product.bodyHtml }} />
      </div>
    </div>
  );
}
