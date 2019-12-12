import React, { Component, Fragment } from 'react';
import axios from 'axios';

export default class extends Component {
    state = {
        express: null,
        economy: null,
        international: null,
    }

    componentDidMount() {
        axios.get(`/getCountExpress`)
            .then(res => {
                console.log(res.data[0].count);
                this.setState({ express: res.data[0].count });
            });
        axios.get(`/getCountEconomy`)
            .then(res => {
                console.log(res.data[0].count);
                this.setState({ economy: res.data[0].count });
            });
        axios.get(`/getCountInternational`)
            .then(res => {
                console.log(res.data[0].count);
                this.setState({ international: res.data[0].count });
            });
    }

    render() {
        return (
            <Fragment>
                <h2 style={{ textAlign: 'center', marginTop: '20px' }}>Statistiscs</h2>
            </Fragment>
        );
    }
}