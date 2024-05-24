import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NavLink } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import "./index.scss"


const Header = () => {
    return (
        <section id="header" className='bg-white py-2'>
            <Container>
                <Row className=" align-items-center">
                    <Col md={3} lg={3}>
                        <div className='logo '>
                            <img className='img-fluid' src='https://preview.colorlib.com/theme/pato/images/icons/logo2.png' />
                        </div>
                    </Col>
                    <Col md={9} lg={9}>
                        <ul className='d-flex list-unstyled column-gap-3 m-0 justify-content-end py-2'>
                            <li><NavLink className="text-decoration-none text-dark">Home</NavLink></li>
                            <li><NavLink className="text-decoration-none text-dark">Menu</NavLink></li>
                            <li><NavLink className="text-decoration-none text-dark">Reservation</NavLink></li>
                            <li><NavLink className="text-decoration-none text-dark">Gallery</NavLink></li>
                            <li><NavLink className="text-decoration-none text-dark">About</NavLink></li>
                            <li><NavLink className="text-decoration-none text-dark">Contact</NavLink></li>
                            <li><NavLink className="text-white"><FaFacebookF />
                            </NavLink></li>
                            <li><NavLink className="text-white"><FaTwitter />
                            </NavLink></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </section >
    )
}

export default Header