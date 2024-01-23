import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
   <>
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div className="col-md-4 d-flex align-items-center">
      <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
        <svg className="bi" width="30" height="24"></svg>
      </a>
      <span className="text-muted">© 2021 Company, Inc</span>
    </div>

    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li className="ms-3 m-lg-3 fs-3"><Link className="text-muted" to="https://facebook.com"><FaFacebook /></Link></li>
      <li className="ms-3 m-lg-3 fs-3"><Link className="text-muted" to="https://instagram.com"><FaInstagram /></Link></li>
      <li className="ms-3 m-lg-3 fs-3"><Link className="text-muted" to="https://twitter.com"><FaTwitter /></Link></li>
      
    </ul>
  </footer>
   </>
  )
}

export default Footer