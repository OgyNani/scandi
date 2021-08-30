import { Container,} from "react-bootstrap";
import ProductList from "./ProductList";
import { connect } from "react-redux";
import React from "react";

class Home extends React.Component {
    render() {
        return (
            <Container className="mt-5">
                <ProductList />
            </Container>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
