import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Packages = ({ match: { url }, packages }) => {

    function deleteHandler(id) {
        /*axios.delete(`/deletePackage`)
            .then(res => {
                console.log(res.data);
                this.setState({ couriers: res.data });
            });*/
    }

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
                        <button onClick={() => deleteHandler(id)}>Delete</button>
                    </li>
                )}
            </ul>
        </Fragment>
    )
}
export default Packages;