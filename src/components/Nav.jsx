import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Nav = () => {
  return (
    <nav class="navbar bg-dark border-bottom border-bottom-dark fixed-top bg-transparent" data-bs-theme="dark">
      <div class="container-fluid">
        <a class="navbar-brand text-white">DEVPOOL</a>
        <form class="d-flex flex-grow-2 w-50" role="search">
          <input class="form-control me-2 rounded-pill" type="search" placeholder="Search" aria-label="Search" />
        </form>
        <button class="btn btn-outline-light">Perfil</button>
      </div>
    </nav>


  );
}

export default Nav;