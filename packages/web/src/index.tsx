import * as React from 'react'
import { ApolloProvider } from 'react-apollo'
import * as ReactDOM from 'react-dom'

import { client } from './apollo'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root') as HTMLElement
)
registerServiceWorker()
