import { Link, NavLink } from 'react-router-dom';

export function Header() {
  return (
    <div className="container">
      <header className="d-flex flex-wrap justify-content-between py-3 mb-4 border-bottom">
        <Link to="/" className="d-flex align-items-center text-decoration-none">
          <h1 className="fs-3 m-0">Merx</h1>
        </Link>

        <ul className="nav nav-pills">
          <li className="nav-item">
            <NavLink to="/" className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>
              About
            </NavLink>
          </li>
        </ul>
      </header>
    </div>
  );
}
