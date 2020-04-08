import React from 'react';
import { Card, CardBody, CardHeader, Row, Col } from 'reactstrap';
import './style/Detail.css';




class Detail extends React.Component {

  render() {
    return (

      <Card className="detail">
        <CardHeader>Détails</CardHeader>
        <CardBody>
          <Row>
            <Col xs="4">
              <h3 style={{ float: 'right' }}>Adresse : </h3>
            </Col>
            <Col xs="8" >
              <h3 style={{ float: 'left' }}>{this.props.adresse}</h3>
            </Col>
          </Row>
        </CardBody>
      </Card>
    )
  }
}

export default Detail;
