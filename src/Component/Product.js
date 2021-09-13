import React from "react";
import { connect } from "react-redux";

class Product extends React.Component {

    render() {
        let url = `/men/product/${this.props.product.id}`;
        return (
            <div className="col-lg-4 col-md-6 mb-4 ">
                
                    <div className="item1" >
                    <a href={url}>
                        <div className="img1">
                            <img src={this.props.product.picture} className="hov" alt=""></img>
                            <img src="/svg/greencart.svg" className="greencart hov" alt=""></img>
                            
                            
                            <div className="content hov" >
                                <p>{this.props.product.name}</p>
                                <p>${this.props.product.price}</p>
                            </div>
                        </div>
                        </a>
                    </div>
                
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { myself: state.myself };
};

const mapDispatchToProps = dispatch => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);
