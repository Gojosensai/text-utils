import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} bg-gradient`}>
        <div className="container-fluid">
            <a className="navbar-brand" href="/">{props.title}</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <a className={`nav-link ${props.isActive}`} href="/">Home</a>
                </li>
                {/* <li className="nav-item">
                    <a className={`nav-link ${props.isActive}`} href="/about">About</a>
                </li> */}
                </ul>
                <div className={`form-check form-switch mx-3 text-${props.mode === "light" ? "dark": "light"}`}>
                    <input className="form-check-input" onClick={() => props.toggleMode(props.mode === "light" ? "red": "light")} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Red Mode</label>
                </div>
                <div className={`form-check form-switch mx-3 text-${props.mode === "light" ? "dark": "light"}`}>
                    <input className="form-check-input" onClick={() => props.toggleMode(props.mode === "light" ? "dark": "light")} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
                </div>
                <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </div>
    </nav>
  )
}

// propTypes define the type of prop by which we can not mistakly change the type
// isRequired is used to define that this prop is required it cant be empty or undefiend
Navbar.propTypes = {
    title : PropTypes.string.isRequired
}

// defaultProps ensure that if the prop is not set on the component then it will show something
Navbar.defaultProps = {
    title : "Set title"
}