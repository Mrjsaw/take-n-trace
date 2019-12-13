import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { Row, Col, Container } from 'react-bootstrap';

const Couriers = ({ match: { url }, couriers }) => {

    return (
        <Container>
            <h2 style={{textAlign: 'center', marginTop: '20px'}}>Couriers</h2>
        <Row>
            {couriers.map(({ id, fullname }) =>
            <Col key={id} xs="4" style={{ marginTop: '20px' }}>
            <Card className="text-center" > 
                <Card.Body>
                    <Card.Title>
                        {fullname}
                    </Card.Title>
                    <Link to={`${url}/${id}`}>Reports</Link>
                </Card.Body>
                </Card>
                </Col>
            )}
            </Row>
    </Container>
    )
}
export default Couriers;