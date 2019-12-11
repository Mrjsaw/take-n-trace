import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table'

const Packages = ({ match: { url }, packages }) => {

    return (
        <Fragment>
            <Table responsive bordered hover style={{ marginTop: '20px' }}>
                <thead>
                    <tr>
                        <th>Tracking number</th>
                        <th>Status</th>
                        <th>Type</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {packages.map(({ id, trackingnumber, originCountry, destinationCountry, status, type, date }) =>
                        <tr>
                            <td><Link to={`${url}/${id}`}>{trackingnumber}</Link></td>
                            <td>{status}</td>
                            <td>{type}</td>
                            <td>{date}</td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </Fragment>
    )
}
export default Packages;