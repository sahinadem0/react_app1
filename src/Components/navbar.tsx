import React from 'react'
//import Logo from "../Images/logo.jpg";
import {Link,Route,useParams} from 'react-router-dom';

//Componnetlerin ilk harfi büyük olur
const Navbar = () => {
    return (
        <div className="navbar">
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img className="logo" ></img>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            <a className="nav-link" href="/">Anasayfa</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/hakkimizda">Hakkımızda</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/urunler">Ürünler</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/iletisim">İletişim</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
