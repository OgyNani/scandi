import { gql, useQuery } from '@apollo/client';
import React from 'react';
import CategoryMenuComponent from "./CategoryMenuComponent";

const CategoryMenu = (props) => {
    const GET_CATEGORIES = gql`
        query {
            categories {
                name
            }
        }
    `;

    const { loading, error, data } = useQuery(GET_CATEGORIES);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;


    return (
        <CategoryMenuComponent 
            categories={data.categories}
            category={props.category}/>
    )
}

export default CategoryMenu;
