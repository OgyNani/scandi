import { Container,} from "react-bootstrap";
import ProductList from "./ProductList";
import { connect } from "react-redux";
import React from "react";
import TopMenu from "./TopMenu";

class Category extends React.Component {
    constructor(props) {
        super(props);
        console.log('Category',this.props.client, this.client);
        this.state = {
            categoryName: this.props.match?.params.category || 'women'
        }
    }

    render() {
        return (
            <div>
                <TopMenu category={this.state.categoryName} />
                <Container className="mt-5">
                    <ProductList category={this.state.categoryName} />
                </Container>
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

export default connect(mapStateToProps, mapDispatchToProps)(Category);
