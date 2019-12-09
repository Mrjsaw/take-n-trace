import React, { Component } from "react";
import ShippingOptions from "../pages/shippingOptions";
import { Card, CardDeck, Button } from "react-bootstrap";
import EUlogo from "../images/EU.PNG";
import Exprlogo from "../images/Express.PNG";
import Intlogo from "../images/international.PNG";

class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = { data: "" };
  }

  handleSubmit = event => {
    this.setState({});
    alert("Hello world");
  };

  render() {
    return (
      <div>
        <div>
          <div>
            <CardDeck>
              <Card
                style={{
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Card.Img
                  style={{
                    width: 50,
                    height: 50
                  }}
                  src={EUlogo}
                />
                <Card.Body>
                  <Card.Title>EXPRESS</Card.Title>
                  <Card.Text>
                    3 - 5 days <br />
                    Starting from $9.99
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button id={"btnExpress"} variant="dark">
                    SELECT
                  </Button>
                  <hr />
                </Card.Footer>
              </Card>
              <Card
                style={{
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Card.Img
                  variant="middle"
                  src={Exprlogo}
                  style={{
                    width: 50,
                    height: 50
                  }}
                />
                <Card.Body>
                  <Card.Title>EU</Card.Title>
                  <Card.Text>
                    6 - 10 days
                    <br />
                    Starting from $29.99
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button
                    className={"primary"}
                    id={"btnExpress"}
                    variant="primary"
                  >
                    SELECT
                  </Button>
                  <hr />
                </Card.Footer>
              </Card>
              <Card
                style={{
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Card.Img
                  variant="center"
                  src={Intlogo}
                  style={{
                    width: 50,
                    height: 50
                  }}
                />
                <Card.Body>
                  <Card.Title>INTERNATIONAL</Card.Title>
                  <Card.Text>
                    10 days or more
                    <br />
                    Starting from $59.99
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button id={"btnExpress"} variant="success">
                    SELECT
                  </Button>
                  <hr />
                </Card.Footer>
              </Card>
            </CardDeck>
            <br />
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;
