import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const ShowPackage = ({ trackingnumber, description, length, height, width, weight, origin, destination, status, type, date, email }) => {

    return (
        <Fragment>
            <p>Date: {date}</p>
            <p>Contact information: {email}</p>
            <p>Tracking number: {trackingnumber}</p>
            <p>Description: {description}</p>
            <p>Length: {length}</p>
            <p>Height: {height}</p>
            <p>Width: {width}</p>
            <p>Weight {weight}</p>
            <p>Origin: {origin}</p>
            <p>Destination: {destination}</p>
            <p>Type: {type}</p>
            <p><b>Status: {status}</b></p>
            <Link to="/packages">Back to packages</Link>
        </Fragment>
    )
}

export default ShowPackage;