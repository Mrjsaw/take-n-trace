import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Packages = ({ match: { url }, packages }) => {

    return (
        <Fragment>
            <ul>
                {packages.map(({ id, origin, destination, status, type, date }) =>
                    <li key={id}>
                        <p>{id}</p>
                        <p>{origin} -> {destination}</p>
                        <p>{status}</p>
                        <p>{type}</p>
                        <p>{date.substring(0, 10)}</p>
                        <button href=""><Link to={`${url}/${id}`}>Detail</Link></button>
                    </li>
                )}
            </ul>
        </Fragment>
    )
}
export default Packages;