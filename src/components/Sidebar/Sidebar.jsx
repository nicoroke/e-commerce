import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import css from "./Sidebar.module.css";

function Sidebar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div id={css["menuDashboard"]}>
        <div className={css.topMenu}>
          <div className={css.logo}>
            <img src="../../logo.svg" alt="" />
          </div>
        </div>

        <div className="toggle">
          <Button className={css.botonAdmin} variant="primary" onClick={handleShow}>
            <i className="bi bi-list"></i>
          </Button>
        </div>
      </div>

      {
        <Offcanvas show={show} onHide={handleClose} id={css["menu"]}>
          <Offcanvas.Header closeButton></Offcanvas.Header>
          <div>
            <Button className={css.botonAdmin} variant="primary" onClick={handleShow}>
              <i className="bi bi-list"></i>
            </Button>
          </div>
          <Offcanvas.Body>
            <Offcanvas.Title className={`d-block ${css.tituloSidebar}`}>
              Vista de Admins
            </Offcanvas.Title>
            <div className={css.adminButton}>
              <Link to="/admin/categories" className={`d-block ${css.adminButtons}`}>
                <i className={`bi bi-card-checklist ${css.iconos}`}></i>
                Admin Categories
              </Link>
              <Link to="/admin/orders" className={`d-block ${css.adminButtons}`}>
                <i className={`bi bi-receipt ${css.iconos}`}></i>
                Admin Orders
              </Link>
              <Link to="/admin/reviews" className={`d-block ${css.adminButtons}`}>
                <i className={`bi bi-chat-left-quote ${css.iconos}`}></i>
                Admin Reviews
              </Link>
              <Link to="/admin/products" className={`d-block ${css.adminButtons}`}>
                <i className={`bi bi-shop ${css.iconos}`}></i>
                Admin Products
              </Link>
              <Link to="/admin/users" className={`d-block ${css.adminButtons}  ${css.adminButton}`}>
                <i className={`bi bi-people ${css.iconos}`}></i>
                Admin Users
              </Link>
              <hr className="hr" />
              <Link to="/" className={`d-block ${css.volver}`}>
                <i className={`bi bi-house ${css.iconos}`}></i>
                Volver al sitio
              </Link>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      }
    </>
  );
}

export default Sidebar;