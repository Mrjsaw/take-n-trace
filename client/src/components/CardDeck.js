import React, { Component } from "react";
import { Card, CardDeck, Button } from "react-bootstrap";
import EUlogo from "../img/EU.PNG";
import Exprlogo from "../img/Express.PNG";
import Intlogo from "../img/international.PNG";
import { Redirect } from "react-router-dom";
import { NONAME } from "dns";

class Cards extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    redirect: false
  };

  setRedirect = () => {
    this.setState({
      redirect: true
    });
  };

  renderRedirect = name => {
    if (this.state.redirect) {
      return <Redirect to={`plan/form?type=${name}`} />;
    }
  };

  textStyle = {
    textAlign: "center"
  };

  render() {
    const cardStyle = {
      justifyContent: "center",
      alignItems: "center"
    };

    const imgStyle = {
      width: 50,
      height: 50,
      paddingTop: "10px"
    };

    const bodyStyle = {
      height: "80px",
      justifyContent: "center",
      alignItems: "center"
    };
    return (
      <div style={bodyStyle} className="body">
        <CardDeck>
          <Card style={cardStyle}>
            <div id="btnExpress" style={cardStyle}>
              <Card.Img style={imgStyle} src={EUlogo} />
            </div>
            <Card.Body>
              <Card.Title>EXPRESS</Card.Title>
              <Card.Text>
                3 - 5 days <br />
                Starting from $9.99
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <div className="buttonExpress">
                <form action="/plan/form" method="GET">
                  <Button
                    variant="primary"
                    type="submit"
                    name="type"
                    value="express"
                  >
                    SELECT
                  </Button>
                </form>
              </div>
              <hr />
            </Card.Footer>
          </Card>
          <Card style={cardStyle}>
            <div id="btnEu" style={cardStyle}>
              <Card.Img variant="middle" src={Exprlogo} style={imgStyle} />
            </div>
            <Card.Body>
              <Card.Title>EU</Card.Title>
              <Card.Text>
                6 - 10 days
                <br />
                Starting from $29.99
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <div className="btnEu">
                <form action="/plan/form" method="GET">
                  <Button
                    variant="primary"
                    type="submit"
                    name="type"
                    value="eu"
                  >
                    SELECT
                  </Button>
                </form>
              </div>
              <hr />
            </Card.Footer>
          </Card>
          <Card style={cardStyle}>
            <div id="btnExpress" style={cardStyle}>
              <Card.Img variant="center" src={Intlogo} style={imgStyle} />
            </div>
            <Card.Body>
              <Card.Title>INTERNATIONAL</Card.Title>
              <Card.Text>
                10 days or more
                <br />
                Starting from $59.99
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <div className="btnInternational">
                <form action="/plan/form" method="GET">
                  <Button
                    variant="primary"
                    type="submit"
                    name="type"
                    value="international"
                  >
                    SELECT
                  </Button>
                </form>
              </div>
              <hr />
            </Card.Footer>
          </Card>
        </CardDeck>
        <br />
        <p style={this.textStyle}>
          Our employees guarantee a very well done service.
        </p>
      </div>
    );
  }
}

export default Cards;
