import React, { Fragment } from 'react';
import { Link} from 'react-router-dom';

export default ({ match: { url }, couriers }) =>
    <Fragment>
        <ul>
            {couriers.map(({ id, fullname}) =>
                <li key={id}>
                    <p>{id}</p>
                    <p>{fullname}</p>
                    <Link to={`${url}/${id}`}>Reports</Link>
                </li>
            )}
        </ul>
    </Fragment>