import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table'
import axios from 'axios';

export default class extends Component {
    state = {
      courierid: this.props.id,
      couriername: this.props.fullname,
      packages: []
    }
  
    componentDidMount() {
      axios.post(`/getCourierReports`, {courierid: this.state.courierid})
        .then(res => {
          console.log(res.data);
          this.setState({ packages: res.data });
        });

    }
  
    render() {
      const { packages } = this.state;
      const { couriername } = this.state;
  
      return (
        <Fragment>
            <h2 style={{textAlign: 'center', marginTop: '20px'}}>{couriername}</h2>
           <Table responsive bordered hover style={{ marginTop: '20px' }}>
                <thead>
                    <tr>
                        <th>Tracking number</th>
                        <th>Status</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {packages.map(({ id, trackingnumber, status, date }) =>
                        <tr key={id}>
                            <td>{trackingnumber}</td>
                            <td>{status}</td>
                            <td>{date.replace('T', ' ').replace('Z', ' ').substring(0, date.length - 8)}</td>
                        </tr>
                    )}
                </tbody>
            </Table>
            <Link to="/couriers">Back to couriers</Link>
        </Fragment>
      );
    }
  }