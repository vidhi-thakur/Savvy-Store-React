import React from 'react'
import ecom from "images/ECom-logo.svg"
// router
import { NavLink } from 'react-router-dom'
// context
import { useCart } from 'context/addToCart';
import { useWishlist } from 'context/addToWishlist';
// css
import './Navbar.css'
import { useAuth } from 'context/authContext';

function Navbar() {
    const { isUserLoggedIn, logoutUser } = useAuth()
    const [{ numOfItemsinCart },] = useCart();
    const [{ numOfItemsinWishlist },] = useWishlist();
    return (
        <nav className="nav nav-container">
            <div className="avatar avatar-sm">
                <NavLink to="/">
                    <img src={ecom} alt="avatar" />
                </NavLink>
            </div>
            <div className="nav-serch">
                <i className="fas fa-search opacity-07"></i>
                <input className="nav-input" type="text" placeholder="Search" />
            </div>
            <div className="nav-links">
                {!isUserLoggedIn ? <NavLink to='/login'>
                    <button className="btn btn-primary-contained shadow-none">login</button>
                </NavLink>: <button onClick={logoutUser} className="btn btn-primary-outlined shadow-none">logout</button>}
                <NavLink to='/product'>
                    <span className="position-rel nav-icon-box">
                        <i className="fas fa-shopping-bag nav-icon"></i>
                    </span>
                </NavLink>
                <NavLink to='/wishlist'>
                    <span className="position-rel nav-icon-box">
                        <i className="fas fa-heart nav-icon"></i>{numOfItemsinWishlist > 0 && <span
                            className="badge status-badge badge-primary-contained badge-round sm-badge">{numOfItemsinWishlist}</span>}
                    </span>
                </NavLink>
                <NavLink to='/cart-management'>
                    <span className="position-rel nav-icon-box">
                        <i className="fas fa-cart-plus nav-icon"></i>{numOfItemsinCart > 0 && <span
                            className="badge status-badge badge-primary-contained badge-round sm-badge">{numOfItemsinCart}</span>}
                    </span>
                </NavLink>
            </div>
        </nav>
    )
}
export { Navbar }