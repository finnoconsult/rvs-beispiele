import { Link } from 'react-router-dom';

export function ProductCard({ id, image, title, excerpt, price }) {
  const url = `/products/${id}`;

  return (
    <div className="card">
      <Link to={url}>
        <img src={image} className="card-img-top p-2 pb-0" alt={title} />
      </Link>
      <div className="card-body d-flex flex-column">
        <Link to={url}>
          <h5 className="card-title">{title}</h5>
        </Link>
        <p className="card-text flex-fill">{excerpt}</p>
        <div className="d-flex flex-wrap align-items-center justify-content-between">
          <div />
          <span className="fs-3 text-success">{price}</span>
        </div>
      </div>
    </div>
  );
}
