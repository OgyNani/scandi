import React from 'react';
import { connect } from 'react-redux';
import CourencyDropDown from './CourencyDropDown';
import DropdownCart from "./DropdownCart";
import CategoryMenu from "./CategoryMenu";

class TopMenu extends React.Component {

    render() {  
        return (
            <div className="header">
                <div>
                    <nav>
                        <CategoryMenu category={this.props.category} />

                        <div className="logo">
                            <div className="logotr">
                                <a href="/"><img src="/svg/brico.svg" className="brico" alt=""></img></a>
                            </div>
                        </div>

                        <div className="action">
                            <CourencyDropDown />
                            <DropdownCart />
                        </div>
                       
                    </nav>
                 </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {};
};
  
const mapDispatchToProps = dispatch => {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(TopMenu);
