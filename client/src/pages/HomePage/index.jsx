import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./index.scss"
import Button from 'react-bootstrap/Button';

import { NavLink } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";



import { useEffect, useState } from "react";
import { getAllData } from "../../services";

const HomePage = () => {
    const [restaurants, setRestaurants] = useState(null);
    useEffect(() => {
        getAllData().then((res) => {
            setRestaurants(res.data.data);
        });
    }, []);
    return (
        <>
            <section id="hero">
                <Container>
                    <div className='content text-center'>
                        <h2 className='text-white '>Welcome to</h2>
                        <h1 className='text-white'>Pato Place</h1>
                        <Button className="bg-white text-dark border-0">Look Menu</Button>
                    </div>
                </Container>

            </section>
            <section id="welcome" className='py-3'>
                <Container>
                    <Row>
                        <Col sm={12} md={6} lg={6}>
                            <div className='content text-center'>
                                <h4 className='text-danger'>Italian Restaurant
                                </h4>
                                <h2>WELCOME
                                </h2>
                                <p className='text-secondary'>Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis est. Sed fringilla, nunc sed imperdiet lacinia, nisl ante egestas mi, ac facilisis ligula sem id neque.</p>
                                <NavLink className="text-secondary text-decoration-none">OUR STORY<IoIosArrowRoundForward />
                                </NavLink>
                            </div>
                        </Col>
                        <Col sm={12} md={6} lg={6}>
                            <img className='img-fluid ' src='https://preview.colorlib.com/theme/pato/images/our-story-01.jpg' />
                        </Col>
                    </Row>
                </Container>
            </section>
            <section id='discover'>
                <Container>
                    <div className='content text-center'>
                        <h4 className='text-danger'>Discover</h4>
                        <h2 className='text-white'>Pato Place</h2>
                    </div>
                </Container>
            </section>
            <section id="restaurants" className='py-3'>
                <Container>
                    <Row className="justify-content-center row-gap-4" xs={3} sm={3} md={4} xl={5}>
                        {restaurants &&
                            restaurants.map((p) => {
                                return (
                                    <Col className="row-gap-3" xs={12} sm={6} md={4} lg={4} key={p._id}>
                                        <div className="restorant">
                                            <img className="img-fluid rounded-4" src={p.imageUrl} />
                                            <h5>{p.name}</h5>
                                            <p className="text-secondary">{p.description}</p>
                                            <NavLink className="text-secondary text-decoration-none">Learn more<IoIosArrowRoundForward />
                                            </NavLink>
                                        </div>
                                    </Col>
                                );
                            })}
                    </Row>
                </Container>
            </section>
            <section id="menu" className='py-5'>
                <Container>
                    <div className="content text-center">
                        <h4 className='text-danger'>Discover</h4>
                        <h2 className='fw-bold'>OUR MENU
                        </h2>
                    </div>
                    <Row className="row-gap-4">
                        <Col xs={6} sm={6} md={4} lg={4}>
                            <div className='menu-image'>
                                <img className='img-fluid w-100' src='https://preview.colorlib.com/theme/pato/images/our-menu-01.jpg' />
                                <Button className="bg-white text-dark fw-bold border-0 w-50">Lunch</Button>
                            </div>
                        </Col>

                        <Col xs={6} sm={6} md={4} lg={4}>
                            <div className='menu-image'>
                                <img className='img-fluid w-100' src='https://preview.colorlib.com/theme/pato/images/our-menu-05.jpg' />
                                <Button className="bg-white text-dark fw-bold border-0 w-50">Dinner</Button>
                            </div>

                        </Col>

                        <Col sm={12} md={4} lg={4}>
                            <Row className="row-gap-4">
                                <Col xs={6} sm={12} md={12} lg={12}>
                                    <div className='menu-image'>
                                        <img className='img-fluid w-100' src='https://preview.colorlib.com/theme/pato/images/our-menu-08.jpg' />
                                        <Button className="bg-white text-dark fw-bold border-0 w-50">Drink</Button>
                                    </div>
                                </Col>
                                <Col xs={6} sm={12} md={12} lg={12}>
                                    <div className='menu-image'>
                                        <img className='img-fluid w-100' src='https://preview.colorlib.com/theme/pato/images/our-menu-10.jpg' />
                                        <Button className="bg-white text-dark fw-bold border-0 w-50">Starters</Button>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={12} lg={8}>
                            <div className='menu-image'>
                                <img className='img-fluid w-100' src='https://preview.colorlib.com/theme/pato/images/our-menu-13.jpg' />
                                <Button className="bg-white text-dark fw-bold border-0 w-50">Happy Hour</Button>
                            </div>

                        </Col>
                        <Col md={12} lg={4}>


                            <div className='menu-image'>
                                <img className='img-fluid w-100' src='https://preview.colorlib.com/theme/pato/images/our-menu-16.jpg' />
                                <Button className="bg-white text-dark fw-bold border-0 w-50">Desserts</Button>
                            </div>

                        </Col>
                    </Row>
                </Container>
            </section>
            <section id='reservation' className='py-3'>
                <Container>
                    <div className='content text-center'>
                        <h4 className='text-danger'>Reservation</h4>
                        <h2>BOOK TABLE
                        </h2>
                    </div>
                    <Row>
                        <Col md={6} lg={6}>
                            <div className='inputs'>
                                <div className='d-flex align-items-center'>   <h6>Date</h6>
                                    <input className='form-control w-50' type='date'></input>
                                    <h6 className='mt-3'>Name</h6>
                                    <input className='form-control w-50' type='text' placeholder='Name' />
                                </div>
                                <div className='d-flex align-items-center mt-3'>
                                    <h6 className='mt-3'>Time
                                    </h6>
                                    <input className='form-control w-50' type='time' />
                                    <h6 className='mt-3'>Phone
                                    </h6>
                                    <input className='form-control w-50' type='number' placeholder='Phone' />
                                </div>
                                <div className='d-flex align-items-center mt-3'>
                                    <h6 className='mt-3'>People
                                    </h6>
                                    <select className='form-control mt-3 '>
                                        <option>1 person</option>
                                        <option>2 person</option> <option>3 person</option> <option>4 person</option>
                                        <option>2 person</option> <option>3 person</option> <option>5 person</option>
                                    </select>
                                </div>


                            </div>
                        </Col>
                        <Col md={6} lg={6}>
                            <img className='img-fluid mt-3' src='https://preview.colorlib.com/theme/pato/images/booking-01.jpg' />
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default HomePage




