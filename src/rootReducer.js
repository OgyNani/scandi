import {
  ApolloClient,
  InMemoryCache,
  gql
} from "@apollo/client";

export const FETCH_CURRENCIES = "FETCH_CURRENCIES";

export function fetchCurrencies(payload) {
    return { type: FETCH_CURRENCIES, payload };
}

const initialState = {
  currencies: [],
};

export const GET_CURRENCIES = gql`
  query GetCurrencies {
    currencies
  }
`;

const apolloClient = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache()
});

const request = apolloClient => apolloClient
    .query({
        query: gql`
            query GetCurrencies {
                currencies
            }
        `,
    })
    //.then(result => return result;);

async function getUser() {
   //const response = await request(apolloClient);
   //console.log(await response);
}

function rootReducer(state = initialState, action) {

  if (action.type === FETCH_CURRENCIES) {
    //const responce = await getUser();
    //.then(result => console.log(result));
//console.log(responce);
    return Object.assign({}, state, {
        currencies: []// action.payload.data,
    });
  }
  
  return state;
}

export default rootReducer;