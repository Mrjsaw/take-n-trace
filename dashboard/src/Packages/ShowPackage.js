import React, { Fragment } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';

const ShowPackage = ({ trackingnumber, description, length, height, width, weight, originZip, originCountry, destinationZip, destinationCountry, status, type, date, email }) => {

    return (
        <Fragment>
            <Card style={{ width: '18rem', marginTop: '20px' }} className="text-center mx-auto">
                <Card.Header>
                    {trackingnumber}
                </Card.Header>
                <Card.Body>
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem></ListGroupItem>
                    <ListGroupItem>
                        Origin: {originZip} {originCountry}
                    </ListGroupItem>
                    <ListGroupItem>
                        Destination: {destinationZip} {destinationCountry}
                    </ListGroupItem>
                    <ListGroupItem>
                        Length: {length}
                    </ListGroupItem>
                    <ListGroupItem>
                        Height: {height}
                    </ListGroupItem>
                    <ListGroupItem>
                        Width: {width}
                    </ListGroupItem>
                    <ListGroupItem>
                        Weight: {weight}
                    </ListGroupItem>
                    <ListGroupItem>
                        Status: {status}
                    </ListGroupItem>
                    <ListGroupItem>
                        Type: {type}
                    </ListGroupItem>
                    <ListGroupItem>
                        Date: {date.replace('T', ' ').replace('Z', ' ').substring(0, date.length - 8)}
                    </ListGroupItem>
                    <ListGroupItem>
                        Contact: {email}
                    </ListGroupItem>
                </ListGroup>
                <Card.Footer className="text-muted"><Card.Link href="/packages">Back to packages</Card.Link></Card.Footer>
            </Card>
        </Fragment>
    )
}

export default ShowPackage;