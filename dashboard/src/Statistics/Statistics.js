import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Chart from "./Chart.js";

export default class extends Component {
    state = {
        packageData: {}
    }

    async getData() {
        let count = [];
        await axios.get(`/getCountExpress`)
            .then(res => {
                count.push(res.data[0].count);
            });
        await axios.get(`/getCountEconomy`)
            .then(res => {
                count.push(res.data[0].count);
            });
        await axios.get(`/getCountInternational`)
            .then(res => {
                count.push(res.data[0].count);
            });
        return Promise.all(count);
    }

    componentWillMount(){
        let types = [];
        this.getData().then(values => {
            values.forEach(value => types.push(value));
        });
        this.setState({packageData: {
            labels: ['Express', 'Economy', 'International'],
            datasets: [{
                label: 'amount of packages per type',
                data: types,
                backgroundColor:[
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)']
            }]
        }}, () => {
            console.log(this.state.packageData.datasets);
        });
    }

  
    render() {
        return (
            <Fragment>
                <h2 style={{ textAlign: 'center', marginTop: '20px' }}>Statistiscs</h2>
                <Chart chartData={this.state.packageData} />
            </Fragment>
        );
    }
}