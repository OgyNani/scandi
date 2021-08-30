import { gql } from '@apollo/client';
import React from 'react';
import { Dropdown, Button, Col, Row } from "react-bootstrap";
import { connect } from 'react-redux';
import { fetchCurrencies } from '../rootReducer';
import DropdownCart from "./DropdownCart";

class TopMenu extends React.Component {
    constructor(props) {
        super(props);
        //this.client = useApolloClient();
        //console.log('TopMenu',this.client);
        this.state = {
            category: this.props.category
        }
    }

    render() {
        this.props.fetchCurrencies();
        // const { currencies } = useLazyQuery(gql`
            // query GetExchangeRates {
                // currencies
            // }
        // `);
        // this.props.client.query({
        //     query: gql`
        //       query GetCurrencies {
        //         currencies
        //       }
        //     `
        //   })
        //   .then(result => console.log(result));
        return (
            <div className="header">
                <div>
                    <nav>
                        <ul className="navigation">
                            <li className="women line">
                                <a href="/women" className={this.state.category === 'women' ? 'active' : ''}>WOMEN</a>
                            </li>

                            <li className="men line">
                                <a href="/men" className={this.state.category === 'men' ? 'active' : ''}>MEN</a>
                            </li>

                            <li className="kids line">
                                <a href="/kids" className={this.state.category === 'kids' ? 'active' : ''}>KIDS</a>
                            </li>
                        </ul>

                        <div className="logo">
                            <div className="logotr">
                                <a href="/"><img src="/svg/brico.svg" className="brico"></img></a>
                            </div>
                        </div>

                        <div className="action">
                            <Dropdown className="brdrs">
                                <Dropdown.Toggle id="dropdown-basic" className="drbg">
                                    <img src="/svg/dollar.svg" className="mony"></img>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1"> <img src="/svg/USD.svg" className="mony"></img></Dropdown.Item>
                                    <Dropdown.Item href="#/action-2"> <img src="/svg/EUR.svg" className="mony"></img></Dropdown.Item>
                                    <Dropdown.Item href="#/action-3"> <img src="/svg/JPY.svg" className="mony"></img></Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

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
    return {
        fetchCurrencies: () => {
            dispatch(fetchCurrencies())
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TopMenu);
