export function ProductCard({ id, image, title, excerpt, price, onClick }) {
  return (
    <div className="card">
      <img src={image} className="card-img-top p-2 pb-0" alt={title} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title}</h5>
        <p className="card-text flex-fill">{excerpt}</p>
        <div className="d-flex flex-wrap align-items-center justify-content-between">
          <button onClick={() => onClick(id)} className="btn btn-primary">
            Details
          </button>
          <span className="fs-3 text-success">{price}</span>
        </div>
      </div>
    </div>
  );
}
