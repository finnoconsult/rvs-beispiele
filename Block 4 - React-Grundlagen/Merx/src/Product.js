import { useApi, STATES } from './useApi';
import { API_URL } from './config';

export function Product({ id, onClick }) {
  const url = `${API_URL}/${id}`;
  const { status, error, data } = useApi(url);

  if (status === STATES.LOADING)
    return (
      <div className="text-center mt-5 mb-5">
        <div className="spinner-grow text-secondary" />
      </div>
    );

  if (error)
    return (
      <div className="alert alert-danger" role="alert">
        {error}
      </div>
    );

  if (!data) return null;

  return (
    <div className="d-flex">
      <div style={{ maxWidth: 200 }}>
        <img src={data.image} alt={data.title} style={{ width: '100%' }} />
      </div>
      <div>
        <h5 className="card-title">{data.title}</h5>

        <span className="fs-3 text-success">{data.price}</span>

        <p dangerouslySetInnerHTML={{ __html: data.bodyHtml }} />
      </div>
    </div>
  );
}
