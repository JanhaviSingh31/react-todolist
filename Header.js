import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Header(props) {
  return (
<nav classname="navbar navbar-expand-lg bg-body-tertiary">
  <div  classname="container-fluid">
    <Link  classname="navbar-brand" to="/">{props.title}</Link>
    <button  classname="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span  classname="navbar-toggler-icon"></span>
    </button>
    <div  classname="collapse navbar-collapse" id="navbarSupportedContent">
      <ul  classname="navbar-nav me-auto mb-2 mb-lg-0">
        <li  classname="nav-item">
          <Link  classname="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li  classname="nav-item">
          <Link  classname="nav-link" to="/about">About</Link>
        </li>
      </ul>
      {props.searchBar? <form  classname="d-flex" role="search">
        <input  classname="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button  classname="btn btn-outline-success" type="submit">Search</button>
      </form>: ""}
    </div>
  </div>
</nav>
  )
}
Header.defaultProps = {
  title: "Your Title Here",
  searchBar: true
}
Header.propTypes = {
  title: PropTypes.string,
  searchBar: PropTypes.bool.isRequired
}