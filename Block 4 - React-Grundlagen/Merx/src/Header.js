export function Header() {
  return (
    <div className="container">
      <header className="d-flex flex-wrap justify-content-between py-3 mb-4 border-bottom">
        <a href="/" className="d-flex align-items-center text-decoration-none">
          <h1 className="fs-3 m-0">Merx</h1>
        </a>

        <ul className="nav nav-pills">
          <li className="nav-item">
            <a href="#" className="nav-link active" aria-current="page">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              About
            </a>
          </li>
        </ul>
      </header>
    </div>
  );
}
