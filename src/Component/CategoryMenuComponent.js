import React from 'react';
import { connect } from 'react-redux';

class CategoryMenuComponent extends React.Component {
    render() {

        return (
            <ul className="navigation">
                {this.props.categories.map((category, index) => {
                    return <li className="women line" key={index}>
                        <a href={'/'+category.name} className={this.props.category === category.name ? 'active' : ''}> {category.name}</a>
                    </li>;
                })} 
            </ul>
        );
    }
}

const mapStateToProps = state => {
    return {};
};
  
const mapDispatchToProps = dispatch => {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryMenuComponent);
