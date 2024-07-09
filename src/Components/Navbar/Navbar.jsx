import React from "react";
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
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
          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link"  to="/" style={{ fontSize : '20px' }} aria-current="page">
                  All Cources
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/:courses/FullStack" style={{ fontSize : '20px' }}>
                  Full Stack
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/:courses/ReactJs" style={{ fontSize : '20px' }}>
                  React Js
                </Link>
              </li>
              <li className="nav-item">
                <Link style={{ fontSize : '20px' }}
                  className="nav-link"
                  to="/:courses/Ui-Ux"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Ui Ux
                </Link>
              </li>
              <li className="nav-item">
                <Link style={{ fontSize : '20px' }}
                  className="nav-link"
                  to="/:courses/Devops"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Devops
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
