//import Input from '../Input/Input'
//import Button from '../Button/Button'
import './FormLogin.css'
import { Link, useNavigate } from 'react-router-dom';

import LogoLibreriaAliada from '../../assets/images/descarga.jpeg'
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


const { useEffect, useState } = require("react");

const API_URL = 'http://localhost:3000/api/v1';

export default function FormLogin() {

  const [mail, setmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length === 0) {

      console.log("Enviar datos de registro", { mail, password });
      sendData();
    } else {
      setErrors(errors);
    }
  };


  const validate = () => {
    const errors = {};
    if (!mail) errors.mail = "El correo es requerido";
    if (!password) errors.password = "La contraseña es requerida";
    if (password.length < 6) errors.password = "La contraseña debe tener al menos 6 caracteres";
    return errors;
  };



  const sendData = async () => {
    if (mail !== "" && password !== "") {

      if (password.length < 6) {
        setErrors({ password: "La contraseña debe tener al menos 6 caracteres" });
        return;
      }

      try {


        const datosEnviados = { mail, password };

        const response = await fetch(`${API_URL}/login`, {
          method: 'POST',
          body: JSON.stringify(datosEnviados),
          headers: {
            'Content-Type': 'application/json'
          }
        })


        if (!response.ok) {

          throw new Error("La red no responde");

        }

        const data = await response.json();
        sessionStorage.setItem('token', data.token);
        navigate('/home');

      } catch (error) {
        console.error("Tenemos un problema con el inicio de sesión:", error);
      }
    }
  }

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) {
      navigate("/home");
    }
  }, []);


  return (
    <Container >
      <Col>
      <Image src={LogoLibreriaAliada} alt="Logo" className="logo_libreriaaliada img-fluid" />
      </Col>
      <p className="texto_TuLibreriAaliada">Tu Libreria Aliada </p>
      <Form onSubmit={handleSubmit} className='formulario'>
        <Form.Group controlId="correo" className='entrada'>

          <Form.Control 
            type="text"
            placeholder="Ingrese su correo"
            value={mail}
            onChange={(e) => setmail(e.target.value)}
          />
          {errors.mail && <span>{errors.mail}</span>}
        </Form.Group>

        <Form.Group controlId="password" className='entrada'>

          <Form.Control 
            type="password"
            placeholder="Ingrese su contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <span>{errors.password}</span>}
        </Form.Group>


        <Row className='fila'>
          <Button className='form__account' id='bt' type="submit">
            Iniciar sesión
          </Button>
        </Row>

        <Row className="form__help" >
          <Link to="/signup" id='redireccionar'>¿No te has registrado? Hazlo aquí</Link>
        </Row>
      </Form>
    </Container>
  );
}
