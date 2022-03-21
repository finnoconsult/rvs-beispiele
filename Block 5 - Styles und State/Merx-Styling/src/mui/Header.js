import { Link } from 'react-router-dom';
import { Heart, Cart } from '../Icons';

export function Header() {
  return (
    <header>
      <Link to="/">
        <h1 className="title">Merx</h1>
      </Link>

      <ul className="nav spread">
        <li>
          <Link to="/favourites">
            <Heart />
          </Link>
        </li>
        <li>
          <Link to="/cart">
            <Cart />
          </Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </header>
  );
}
