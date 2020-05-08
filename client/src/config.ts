// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = 'dqj4fs190knp'
export const apiEndpoint = `https://${apiId}.execute-api.us-east-2.amazonaws.com/dev`

export const authConfig = {
  // TODO: Create an Auth0 application and copy values from it into this map
  domain: 'dev-0hz4le1t.auth0.com',            // Auth0 domain
  clientId: 'm3sGL6d7ZiR3SqyMvYybMs5ygsx6hlKJ',          // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
}

