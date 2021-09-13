import React from "react";
import { connect } from "react-redux";
import { Dropdown, Button, Col, Row, Form } from "react-bootstrap";

class DropdownCart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            showSuccess: false,
        };
    }
render() {
  return (
    <>
      {/* {this.props.basket && this.props.basket.map((item, index) => {
        const product = this.getProduct(item.productId);
        totalAmount = totalAmount + product.price * item.count;
        return  */}
        <Form >
        <Dropdown className="brdrs">
                <Dropdown.Toggle id="dropdown-basic" className="drbg">
                  <img src="/svg/cart.svg" className="cart" alt=""></img>
                </Dropdown.Toggle>

                <Dropdown.Menu className="drmenu">
                  <div className="drdwheader">
                    <p>My Bag, 2 items</p>
                  </div>
                  <Dropdown.Item className="marginitemsin">
                    <Row>
                      <Col>
                        <p>
                          Apollo
                        </p>
                        <p>
                          Runnig Short
                        </p>

                        <div className="priceofprodincart">
                          <p>50.00</p>
                        </div>
                        <img src="/svg/S.svg"
                          className="sbutcss" alt="">
                        </img>
                        <img src="/svg/M.svg" className="mbutcss" alt=""></img>
                                                  
                      </Col>

                      <Col>
                        <div>
                          <img src="/svg/plus-square.svg" alt=""></img>
                        </div>

                        <p className="countofprodincart" >
                          1
                        </p>

                        <div>
                          <img src="/svg/minus-square.svg" alt=""></img>
                        </div>
                      </Col>

                      <Col>
                        <div>
                          <img src="/svg/Image1.svg" className="picofprodincart" alt=""></img> 
                        </div>
                      </Col>
                    </Row>
                  </Dropdown.Item>

                  

                  <Dropdown.Item className="marginitemsin">
                    <Row>
                      <Col>
                        <p>
                          Apollo
                        </p>
                        <p>
                          Runnig Short
                        </p>

                        <div className="priceofprodincart">
                          <p>50.00</p>
                        </div>
                        <img src="/svg/S.svg"
                          className="sbutcss" alt="">
                        </img>
                        <img src="/svg/M.svg" className="mbutcss" alt=""></img>
                                                  
                      </Col>

                      <Col>
                        <div>
                          <img src="/svg/plus-square.svg" alt=""></img>
                        </div>

                        <p className="countofprodincart" >
                          1
                        </p>

                        <div>
                          <img src="/svg/minus-square.svg" alt=""></img>
                        </div>
                      </Col>

                      <Col>
                          <img src="/svg/Image1.svg" className="picofprodincart" alt=""></img> 
                      </Col>
                    </Row>
                  </Dropdown.Item>

                  

                  <Row>
                    <Col>
                      <p className="totalincartpr">Total</p>
                    </Col>

                    <Col>
                      <p className="totalpriceincartpr">1</p>
                    </Col>
                  </Row>
                  <Row>
                  <Col>
                    <Button className="viewbagincart" href="/cart" >
                      <p>VIEW BAG</p>
                    </Button>
                  </Col>

                  <Col>
                  <Button className="checkoutincart">
                    <p>CHECK OUT</p>
                  </Button>
                </Col>
              </Row>
            </Dropdown.Menu>
          </Dropdown>
        </Form>
        {/* //})
      //} */}
    </>
    );
  }
}

const mapStateToProps = state => {
  return { basket: state.basket};
};

const mapDispatchToProps = dispatch => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DropdownCart);