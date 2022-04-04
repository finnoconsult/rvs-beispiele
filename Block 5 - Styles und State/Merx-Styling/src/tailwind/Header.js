import { Link } from 'react-router-dom';
import { Heart, Cart } from '../Icons';

export function Header() {
  return (
    <header className="bg-white/80 backdrop-blur-md shadow-md w-full">
      <div className="container mx-auto flex justify-between py-4 ">
        <div className="flex items-center">
          <Link to="/">
            <h1 className="text-3xl font-medium text-green-700">Merx</h1>
          </Link>
        </div>

        <nav className="flex items-center space-x-5">
          <Link to="/favourites" className="text-lg font-semibold text-green-700">
            <Heart />
          </Link>

          <Link to="/cart" className="text-lg font-semibold text-green-700">
            <Cart />
          </Link>

          <Link to="/login" className="text-lg font-semibold text-green-700">
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
}
