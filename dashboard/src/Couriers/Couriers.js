import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { Row, Col, Container } from 'react-bootstrap';

export default ({ match: { url }, couriers }) =>
    <Container>
        <Row>
            {couriers.map(({ id, fullname }) =>
            <Col xs="4" style={{ marginTop: '20px' }}>
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