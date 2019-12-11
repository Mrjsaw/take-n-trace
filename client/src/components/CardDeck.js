import React, { Component } from "react";
import { Card, CardDeck, Button } from "react-bootstrap";
import EUlogo from "../img/EU.PNG";
import Exprlogo from "../img/Express.PNG";
import Intlogo from "../img/international.PNG";
import { withRouter } from "react-router-dom";

class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = { opened: false };
    this.toggleBox = this.toggleBox.bind(this);
    this.routeChange = this.routeChange.bind(this);
  }

  handleSelect(plan) {
    //Condition according to selected plan comes here...
    console.log("Selected");
  }

  routeChange() {
    let path = "./components/form.js";
    this.props.history.push(path);
  }

  toggleBox() {
    const { opened } = this.state;
    this.setState({
      opened: !opened
    });
  }

  render() {
    var { title, children } = this.props;
    const { opened } = this.state;

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
      height: "80px"
    };
    return (
      <div style={bodyStyle} className="body">
        <CardDeck>
          <Card>
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
              <div className="box">
                <div className="boxTitle" onClick={this.toggleBox}>
                  <Button
                    id="btnExpress"
                    variant="primary"
                    onClick={this.routeChange}
                  >
                    SELECT
                  </Button>
                </div>
                {opened && <div class="boxContent">{children}</div>}
              </div>
              <hr />
            </Card.Footer>
          </Card>
          <Card>
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
              <Button
                className="boxTitle"
                onClick={this.toggleBox}
                id="btnEU"
                variant="primary"
              >
                SELECT
              </Button>
              <hr />
            </Card.Footer>
          </Card>
          <Card>
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
              <Button
                className="boxTitle"
                onClick={this.toggleBox}
                id={"btnInt"}
                variant="primary"
              >
                SELECT
              </Button>
              <hr />
            </Card.Footer>
          </Card>
        </CardDeck>
        <br />
        <p>Our employees guarantee a very well done service.</p>
      </div>
    );
  }
}

export default withRouter(Cards);
