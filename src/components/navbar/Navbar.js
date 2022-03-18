import React from 'react'
import ecom from "../../images/ECom-logo.svg"

function Navbar() {
    return (
        <nav class="nav">
            <div class="avatar avatar-sm">
                <a href="/">
                    <img src={ecom} alt="avatar" />
                </a>
            </div>
            <div class="nav-serch">
                <i class="fas fa-search opacity-07"></i>
                <input class="nav-input" type="text" placeholder="Search" />
            </div>
            <div class="nav-links">
                <button class="btn btn-primary-contained shadow-none">login</button>
                <span class="position-rel nav-icon-box">
                    <i class="fas fa-user-alt nav-icon"></i><span
                        class="badge status-badge badge-primary-contained badge-round sm-badge">5</span>
                </span>
                <span class="position-rel nav-icon-box">
                    <i class="fas fa-heart nav-icon"></i><span
                        class="badge status-badge badge-primary-contained badge-round sm-badge">5</span>
                </span>
                <span class="position-rel nav-icon-box">
                    <i class="fas fa-cart-plus nav-icon"></i><span
                        class="badge status-badge badge-primary-contained badge-round sm-badge">9</span>
                </span>
            </div>
        </nav>
    )
}
export default Navbar