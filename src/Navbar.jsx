import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-secondary p-3 navbar-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">📰 NewsApp</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link active" to="/home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/news">News</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/applenews">Apple</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/teslanews">car</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/businessnews">BusinessNews</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/technews">TechCrunchNews</Link>
            </li>
            <li className="nav-item">
            <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
