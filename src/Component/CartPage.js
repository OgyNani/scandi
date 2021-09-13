import React from "react";
import { Container, Col, Row, Dropdown } from "react-bootstrap";
import TopMenu from '../Component/TopMenu';

class CartPage extends React.Component {
render() {
  return (
    <Container>
        <TopMenu />
            <div className="cartpagecart">
                <h2>Cart</h2>
            </div>
        <Row className="totalmgbl">
            <Dropdown.Divider />
            <Col>
                <p className="cartpagename">
                    Apollo
                </p>
                <p className="cartpagesurn">
                    Runnig Short
                </p>
                <p className="cartpagemon">
                    $50.00
                </p>
                <img src="/svg/S.svg" className="cartpageS" alt=""></img>
                <img src="/svg/M.svg" className="cartpageM" alt=""></img>                                 
            </Col>
            <Col>
                <div className="floatforblocks">
                    <img src="/svg/plus-square.svg" className="cartpageplus" alt=""></img>
                    <p className="cartpagecountprod">
                        1
                    </p>
                    <img src="/svg/minus-square.svg" className="cartpageminus" alt=""></img>
                </div>
            </Col>
            <Col>
                <img src="/svg/Image1.svg" className="cartpageimg" alt=""></img> 
            </Col>
        </Row>
        <Row className="totalmgbl">
            <Dropdown.Divider />
            <Col>
                <p className="cartpagename">
                    Apollo
                </p>
                <p className="cartpagesurn">
                    Runnig Short
                </p>
                <p className="cartpagemon">
                    $50.00
                </p>
                <img src="/svg/S.svg" className="cartpageS" alt=""></img>
                <img src="/svg/M.svg" className="cartpageM" alt=""></img>                                 
            </Col>
            <Col>
                <div className="floatforblocks">
                    <img src="/svg/plus-square.svg" className="cartpageplus" alt=""></img>
                    <p className="cartpagecountprod">
                        1
                    </p>
                    <img src="/svg/minus-square.svg" className="cartpageminus" alt=""></img>
                </div>
            </Col>
            <Col>
                <img src="/svg/Image1.svg" className="cartpageimg" alt=""></img> 
            </Col>
        </Row>
        
    </Container>
    );
  }
}


export default CartPage;