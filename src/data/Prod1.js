import React from 'react';
import { Button, Col } from "react-bootstrap";
import { connect } from 'react-redux';
import TopMenu from '../Component/TopMenu';
import ProductsData from "../ProductsData";

export class Prod1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categoryName: this.props.match?.params.category || 'women',
            id: this.props.match?.params.id || 1
        }
    }

    render() {
        let currentProduct = ProductsData[this.props.match?.params.id];
        return (
            <div>
                <TopMenu category={this.state.categoryName} />
                
                    <Col className="xs-2">
                    <div>
                        <img src={currentProduct.picture} className="imgin1" alt=""></img>
                    </div>

                    <div>
                        <img src={currentProduct.picture} className="imgin2" alt=""></img>
                    </div>

                    <div>
                        <img src={currentProduct.picture} className="imgin3" alt=""></img>
                    </div>

                    </Col>

                    <Col>
                        <img src={currentProduct.picture} className="mainimgin" alt=""></img>
                    </Col>

                    <Col>
                        <p className="namein">{currentProduct.subname}</p>
                        <p className="name2in">{currentProduct.name}</p>
                        <p className="sizecat">SIZE:</p>

                        <Button variant="outline-dark" className="xsbutt">
                            XS
                        </Button>

                        <Button variant="outline-dark" className="sbutt">
                            S
                        </Button>

                        <Button variant="outline-dark" className="mbutt">
                            M
                        </Button>

                        <Button variant="outline-dark" className="lbutt">
                            L
                        </Button>

                        <p className="pricein">PRICE:</p>

                        <p className="moneypricein">${currentProduct.price}</p>

                        <Button variant="success" className="buttonbuy" onClick={() => this.props.onAddToBasket(this.props.product.id, this.state.count)}><p>ADD TO CART</p></Button> 
                        <div>
                            <p className="description">
                                {currentProduct.description}
                            </p>
                        </div>
                    </Col>
                
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {};
};
  
const mapDispatchToProps = dispatch => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Prod1);
