import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    credentials: 'same-origin',
    uri: 'https://w5xlvm3vzz.lp.gql.zone/graphql'
  })
})
