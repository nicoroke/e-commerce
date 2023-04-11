import React from "react";
import css from "./Admin.module.css";
import Table from "react-bootstrap/Table";
import { useState, useEffect } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Sidebar from "../Sidebar/Sidebar";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavbarAdmin from "./NavbarAdmin/NavbarAdmin";

const AdminCategories = () => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await axios({
          method: "get",
          url: `${process.env.REACT_APP_API_BASE_URL}/categories`,
        });
        setCategories(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getCategories();
  }, []);

  const handleDeleteCategory = async (category) => {
    try {
      await axios({
        method: "delete",
        url: `${process.env.REACT_APP_API_BASE_URL}/categories/${category.id}`,
      });
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  return (
    <>
      <NavbarAdmin />
      <Container className="p-0 m-0" fluid id={css["backgroundAdminLogin"]}>
        <Sidebar />
        <Row className={`${css.backgroundTop} m-0`}>
          <div className="col-2"></div>
          <div className={` col-10 px-4`}>
            <div className={css.header}>
              <h2 className={css.tituloContainer}>Panel de Categorías</h2>
              <Button variant="success" className="ms-4 mb-2">
                <Link to="/admin/createCategory" className="text-decoration-none text-light">
                  Agregar categoria
                </Link>
              </Button>
            </div>

            <div className={css.tableProducts}>
              <Table striped bordered hover className={css.table}>
                <thead>
                  <tr>
                    <th>ID #</th>
                    <th>Nombre</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {categories.map((category) => {
                    return (
                      <tr>
                        <td>{category.id}</td>
                        <td>{category.name}</td>
                        <td>
                          {" "}
                          <Link
                            to={`/admin/editCategoryId/${category.id}`}
                            variant="warning"
                            className="text-decoration-none text-light"
                          >
                            <Button
                              className="buttons text-light text-decoration-none"
                              variant="warning"
                            >
                              Editar
                            </Button>{" "}
                          </Link>
                          <Button
                            className="buttons ms-2"
                            variant="danger"
                            onClick={() => handleDeleteCategory(category)}
                          >
                            Eliminar
                          </Button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </div>
          </div>
        </Row>
      </Container>
      ;
    </>
  );
};

export default AdminCategories;
