import ApolloClient from 'apollo-boost'

function getToken() {
  let accessToken
  try {
    accessToken = JSON.parse(localStorage.getItem('gotrue.user')).token.access_token
  } catch(_) {}
  return accessToken ? `Bearer ${accessToken}` : '';
}

const client = new ApolloClient({
  uri: '/.netlify/functions/newql',
  request: operation => {
    operation.setContext({
      headers: {
        Authorization: getToken(),
      },
    })
  },
})

export default client