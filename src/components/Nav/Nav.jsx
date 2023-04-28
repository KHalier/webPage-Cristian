import React from "react";
import styles from "./Nav.module.css";
import { Link, NavLink } from "react-router-dom";
import ROUTES from "../Routes/Routes.helper";
import logo from "../../img/logo.png"
const {nav, container, txtLogo, containerImg, link}= styles;

export default function Nav() {
    return <nav className={container}>
        <div className={containerImg}>
        <Link className={link} to={ROUTES.INICIO}>
           <img src={logo} alt="LOGO"></img> 
        </Link>
        <div className={txtLogo}>
            <h4>nombre empresa</h4>
            <h4>direccion</h4>
            <h4>correo electronico</h4>
        </div>
        </div>


        <nav className={nav}>
        <Link to={ROUTES.INICIO}>
            <button>Inicio</button>
        </Link>
        <Link to={ROUTES.SERVICES}>
            <button>Servicios</button>
        </Link>
        <Link to={ROUTES.PRODUCTOS}>
            <button>Productos</button>
        </Link>  
        <Link to={ROUTES.CONTACTO}>
            <button>Contacto</button>
        </Link>                   
        </nav>
      
    </nav>
    
}