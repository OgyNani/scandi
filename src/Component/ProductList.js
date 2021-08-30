import { Row } from "react-bootstrap";
import Product from "./Product";
import ProductsData from "../ProductsData";
import React from 'react';
import { connect } from "react-redux";

class ProductList extends React.Component {
    render() {
      return (
        
        <Row>
                <div className="ctnm">
                    <h2>Category Name</h2>
                </div>
                {Object.entries(ProductsData).map((element) => {
                  let product = element[1];
                  //console.log(product);
                  if (this.props.category === product.category || this.props.category === 'all') {
                    if (this.props.text === null || this.props.text === '') {
                      return <Product product={product} key={product.id} />;
                    } else {
                      if (product.name.toLowerCase().search(this.props.text.toLowerCase().replace(/[^a-zA-Z0-9]/gm,"")) !== -1) {
                        return <Product product={product} key={product.id} />;
                      }
                    }
                  }
                  return null;
              }) }
        </Row>
      );
    }
}

const mapStateToProps = state => {
  return { 
    category: state.category,  
    text: state.text ?? null,
  };
};

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
