import { gql, useQuery } from '@apollo/client';
import React from 'react';
import CourencyDropDownComponent from "./CourencyDropDownComponent";

const CurrencyDropDown = (props) => {
    const GET_CURRENCIES = gql`
        query {
            currencies
        }
    `;

    const { loading, error, data } = useQuery(GET_CURRENCIES);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;


    return (
        <CourencyDropDownComponent 
            currencies={data.currencies}
            category={props.category}/>
    )
}

export default CurrencyDropDown;