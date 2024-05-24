
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { CiMapPin } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";
import { FiTwitter } from "react-icons/fi";




const Footer = () => {
    return (
        <section id="footer" className='bg-dark py-4'>
            <Container>
                <Row>
                    <Col sm={12} md={4} lg={4} >
                        <h4 className='text-white'>CONTACT US
                        </h4>
                        <ul className='list-unstyled'>
                            <li className='text-secondary'> <CiMapPin className='text-white' />
                                8th floor, 379 Hudson St, New York, NY 10018</li>
                            <li className='text-secondary'><FaPhoneAlt className='text-white' />
                                (+1) 96 716 6879</li>
                            <li className='text-secondary'><MdOutlineMessage className='text-white' /> contact@site.com</li>
                        </ul>
                        <h4 className='text-white'>OPENING TIMES</h4>
                        <ul className='list-unstyled'>
                            <li className='text-secondary'>09:30 AM – 11:00 PM</li>
                            <li className='text-secondary'>Every Day</li>
                        </ul>
                    </Col>
                    <Col sm={12} md={4} lg={4}>
                        <h4 className='text-white'>LATEST TWITTER
                        </h4>
                        <ul className='list-unstyled'>
                            <li className='text-secondary'>  <a className='text-danger text-decoration-none ' href='#'><FiTwitter className='text-white' />
                                @colorlib</a>
                                Activello is a good option. It has a slider built into that displays the featured image in the slider. <a className='text-danger text-decoration-none' href='#'>https://buff.ly/2zaSfAQ</a></li>
                        </ul>
                        <ul className='list-unstyled'>
                            <li className='text-secondary'>  <a className='text-danger text-decoration-none' href='#'><FiTwitter className='text-white' />
                                @colorlib</a>
                                Activello is a good option. It has a slider built into that displays <a className='text-danger text-decoration-none' href='#'>https://buff.ly/2zaSfAQ</a></li>
                        </ul>
                    </Col>
                    <Col sm={12} md={4} lg={4}>
                        <h4 className='text-white'>GALLERY

                        </h4>
                        <Row className="row-gap-3 justify-content-center">
                            <Col xs={3} sm={3} md={3} lg={3}>
                                <img className='img-fluid ' src='https://preview.colorlib.com/theme/pato/images/photo-gallery-01.jpg' />
                            </Col>
                            <Col xs={3} sm={3} md={3} lg={3}>
                                <img className='img-fluid ' src='https://preview.colorlib.com/theme/pato/images/photo-gallery-thumb-02.jpg' />
                            </Col>
                            <Col xs={3} sm={3} md={3} lg={3}>
                                <img className='img-fluid ' src='https://preview.colorlib.com/theme/pato/images/photo-gallery-thumb-03.jpg' />
                            </Col>
                            <Col xs={3} sm={3} md={3} lg={3}>
                                <img className='img-fluid ' src='https://preview.colorlib.com/theme/pato/images/photo-gallery-thumb-04.jpg' />
                            </Col>
                            <Col xs={3} sm={3} md={3} lg={3}>
                                <img className='img-fluid ' src='https://preview.colorlib.com/theme/pato/images/photo-gallery-thumb-05.jpg' />
                            </Col>
                            <Col xs={3} sm={3} md={3} lg={3}>
                                <img className='img-fluid ' src='https://preview.colorlib.com/theme/pato/images/photo-gallery-thumb-06.jpg' />
                            </Col>
                            <Col xs={3} sm={3} md={3} lg={3}>
                                <img className='img-fluid ' src='https://preview.colorlib.com/theme/pato/images/photo-gallery-thumb-07.jpg' />
                            </Col>
                            <Col xs={3} sm={3} md={3} lg={3}>
                                <img className='img-fluid ' src='https://preview.colorlib.com/theme/pato/images/photo-gallery-thumb-08.jpg' />
                            </Col>
                            <Col xs={3} sm={3} md={3} lg={3}>
                                <img className='img-fluid ' src='https://preview.colorlib.com/theme/pato/images/photo-gallery-thumb-09.jpg' />
                            </Col>
                            <Col xs={3} sm={3} md={3} lg={3}>
                                <img className='img-fluid ' src='https://preview.colorlib.com/theme/pato/images/photo-gallery-thumb-10.jpg' />
                            </Col>
                            <Col sm={3} md={3} lg={3}>
                                <img className='img-fluid ' src='https://preview.colorlib.com/theme/pato/images/photo-gallery-thumb-11.jpg' />
                            </Col>
                            <Col xs={3} sm={3} md={3} lg={3}>
                                <img className='img-fluid ' src='https://preview.colorlib.com/theme/pato/images/photo-gallery-thumb-12.jpg' />
                            </Col>
                        </Row>
                    </Col>

                </Row>
            </Container>

        </section>
    )
}

export default Footer