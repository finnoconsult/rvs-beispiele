import { Link } from 'react-router-dom';
import { Heart } from '../Icons';

export function ProductCard({ id, image, title, body, price }) {
  const url = `/products/${id}`;

  return (
    <div className="flex flex-col gap-2bg-white shadow-md rounded-lg max-w-sm border-solid border border-grey-600">
      <Link to={url}>
        <img className="rounded-t-lg p-8" src={image} alt={title} />
      </Link>
      <div className="px-5 pb-5 flex flex-col flex-1">
        <Link to={url}>
          <h3 className="text-gray-900 font-semibold text-xl tracking-tight">{title}</h3>
        </Link>

        <div className="flex-1">{body}</div>

        <div className="flex items-center justify-between mt-4">
          <button className="text-lg text-center">
            <Heart />
          </button>
          <span className="text-3xl font-bold text-gray-900">{price}</span>
        </div>
      </div>
    </div>
  );
}
