import { Fragment } from "react";
import { Link } from "react-router-dom";

export const Menu = ({ role }) => {

    return (

        <Fragment>

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse">
                    {role === "Admin" ? (
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to={"/productListAdmin"}>Lista De Productos</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/productModify"}>Crear Producto</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/saleList"}>Lista De Ventas</Link>
                            </li>
                        </ul>
                    ) : (
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to={"/productListClient"}>Lista De Productos</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/shoppingCart"}>Carrito De Compras</Link>
                            </li>
                        </ul>
                    )}
                </div>
            </nav>

        </Fragment>

    )

}