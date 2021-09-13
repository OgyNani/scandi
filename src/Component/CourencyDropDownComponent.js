import React from 'react';
import { Dropdown } from "react-bootstrap";
import { connect } from 'react-redux';

class CourencyDropDownComponent extends React.Component {
    render() {
        const currencySymbols = {
            'USD': '$',
            'GBP': '£',
            'AUD': '$',
            'JPY': '¥',
            'RUB': '₽',
        };
        
        return (
            <div>
            {/* <Spinner animation="border" /> */}
            <Dropdown className="brdrs">
            <Dropdown.Toggle id="dropdown-basic" className="drbg">
                <img src="/svg/dollar.svg" className="mony" alt=""></img>
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {this.props.currencies.map((currency, index) => {
                    return <Dropdown.Item href="#/action-1" key={index}> {currencySymbols[currency]} {currency}</Dropdown.Item>
                })}
            </Dropdown.Menu>
            </Dropdown>
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

export default connect(mapStateToProps, mapDispatchToProps)(CourencyDropDownComponent);
