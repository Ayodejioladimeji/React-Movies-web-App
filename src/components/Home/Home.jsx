import React from 'react'

import { Container, Row, Col, Carousel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
    return (
        <div className="contain">
            <Container fluid>
                <Row>
                    <Col lg={12} style={{height:'500px'}}>
                        <Carousel style={{margin:'0!important'}}>
                            <Carousel.Item className={{width:'100%', height:'100%'}}>   
                                <Row>
                                    <Col lg={6} style={{height:'100vh',background:'red'}}>
                                        <img src="./layomi.png" alt="left-ima"/>
                                        
                                    </Col>

                                    <Col lg={6} style={{height:'100vh',background:'red'}}>
                                    <p>coming</p>
                                        
                                    </Col>
                                </Row>                               
                            </Carousel.Item>

                            <Carousel.Item className={{width:'100%', height:'100%'}}>   
                                <Row>
                                    <Col lg={6} style={{height:'100vh',background:'orange'}}>
                                        home made
                                    </Col>

                                    <Col lg={6} style={{height:'100vh',background:'orange'}}>
                                        home made
                                    </Col>
                                </Row>                               
                            </Carousel.Item>

                            <Carousel.Item className={{width:'100%', height:'100%'}}>   
                                <Row>
                                    <Col lg={6} style={{height:'100vh',background:'blue'}}>
                                        home made
                                    </Col>

                                    <Col lg={6} style={{height:'100vh',background:'blue'}}>
                                        home made
                                    </Col>
                                </Row>                               
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home
