import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table'

const Packages = ({ match: { url }, packages }) => {

    return (
        <Fragment>
            <h2 style={{textAlign: 'center', marginTop: '20px'}}>Packages</h2>
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
                    {packages.map(({ id, trackingnumber, status, type, date }) =>
                        <tr key={id}>
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