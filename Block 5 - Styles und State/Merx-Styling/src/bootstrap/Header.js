import { Link } from 'react-router-dom';
import { Heart, Cart } from '../Icons';

export function Header() {
  return (
    <header className="d-flex flex-wrap justify-content-between py-3 mb-4 border-bottom">
      <Link to="/" className="d-flex align-items-center text-decoration-none">
        <h1 className="fs-3 m-0">Merx</h1>
      </Link>

      <ul className="nav nav-pills">
        <li className="nav-item">
          <Link className="nav-link" to="/favourites">
            <Heart />
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/cart">
            <Cart />
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">
            Login
          </Link>
        </li>
      </ul>
    </header>
  );
}
