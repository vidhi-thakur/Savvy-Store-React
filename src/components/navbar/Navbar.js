import React from 'react'
import ecom from "../../images/ECom-logo.svg"

function Navbar() {
    return (
        <nav className="nav">
            <div className="avatar avatar-sm">
                <a href="/">
                    <img src={ecom} alt="avatar" />
                </a>
            </div>
            <div className="nav-serch">
                <i className="fas fa-search opacity-07"></i>
                <input className="nav-input" type="text" placeholder="Search" />
            </div>
            <div className="nav-links">
                <button className="btn btn-primary-contained shadow-none">login</button>
                <span className="position-rel nav-icon-box">
                    <i className="fas fa-user-alt nav-icon"></i><span
                        className="badge status-badge badge-primary-contained badge-round sm-badge">5</span>
                </span>
                <span className="position-rel nav-icon-box">
                    <i className="fas fa-heart nav-icon"></i><span
                        className="badge status-badge badge-primary-contained badge-round sm-badge">5</span>
                </span>
                <span className="position-rel nav-icon-box">
                    <i className="fas fa-cart-plus nav-icon"></i><span
                        className="badge status-badge badge-primary-contained badge-round sm-badge">9</span>
                </span>
            </div>
        </nav>
    )
}
export default Navbar