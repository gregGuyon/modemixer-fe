import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="sticky top-0 z-50 bg-white flex items-center justify-between p-3 mb-3">
        <nav className="">
          <Link to="/" className="text-brand font-extrabold text-2xl">
            ModeMixer
          </Link>
        </nav>
        <nav>
          <Link to="/collections" className="text-brand font-semibold ml-4 hover:text-brand-dark">
            Collections
          </Link>
          <Link to="/" className="text-brand font-semibold ml-4 hover:text-brand-dark">
            about
          </Link>
          <Link to="/admin" className="text-brand font-semibold ml-4 hover:text-brand-dark">
            Admin
          </Link>
        </nav>
      </header>
    );
}