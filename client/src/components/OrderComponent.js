import React, { Component } from 'react';
const axios = require('axios');

class OrderComponent extends Component {
    state = {
      data: {}
    };

    getPackageData = () => {
        axios.post("getPackageByTrackingNumber/", this.props).then((res) => {
            this.setState({data: res.data[0]});
            console.log(res.data);
        }, (err) => {
            console.log(err);
        })
    };

    componentDidMount(){
        // Returns a package record from DB
        this.getPackageData();
    }

    render() {
      return (
        <div className="container">
        <div className="banner row">
            <div className="col-8">
                <h1>Commercial Invoice</h1>
                <p>{this.state.data.type} Delivery</p>
                <p>Origin: {this.state.data.originCountry}</p>
                <p>Date: {this.state.data.date}</p>
                <p>TRACKNR: {this.state.data.trackingnumber}</p>
                <p>STATUS: {this.state.data.status}</p>
                <p>INVOICENR: VF0{this.state.data.id}</p>
            </div>
        </div>
        <hr id="border-info"/>
        <div className="personal-details row">
            <div id="senderDetails" class="col-6">
                <span id="subtitles"><p>Sender details</p></span>
                <hr/>
                <h2>{this.state.data.originName}</h2>
                <p>{this.state.data.originStreet} {this.state.data.originNumber}</p>
                <p>{this.state.data.originCity}  {this.state.data.originZip}</p>
                <p>{this.state.data.originCountry}</p>
                <p>{this.state.data.email}</p>
            </div>
            <div id="receiverDetails" class="col-6">
                <span id="subtitles"><p>Receiver details</p></span>
                <hr />
                <h2>{this.state.data.destinationName}</h2>
                <p>{this.state.data.destinationStreet} {this.state.data.destinationNumber}</p>
                <p>{this.state.data.destinationCity}  {this.state.data.destinationZip}</p>
                <p>{this.state.data.destinationCountry}</p>
            </div>
        </div>
        <div className="track-info row">
            <div className="col-6">
                <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=1000"/>
            </div>
            <div className="col-6">
                <table>
                    <tr>
                        <td>Length</td>
                        <td>{this.state.data.length} cm</td>
                    </tr>
                    <tr>
                        <td>Width</td>
                        <td>{this.state.data.width} cm</td>
                    </tr>
                    <tr>
                        <td>Height</td>
                        <td>{this.state.data.height} cm</td>
                    </tr>
                    <tr>
                        <span><td>Weight</td></span>
                        <td>{this.state.data.weight} kg</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
      );
    }
  }
  
  export default OrderComponent;
  