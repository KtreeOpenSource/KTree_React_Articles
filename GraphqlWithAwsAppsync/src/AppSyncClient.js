// AppSyncClient.js

import { Auth } from 'aws-amplify'
import AWSAppSyncClient from 'aws-appsync'
import AwsConfig from '../Config/AwsConfig.json'

const AppSyncClient = new AWSAppSyncClient({
  url: AwsConfig.aws_appsync_graphqlEndpoint,
  region: AwsConfig.aws_appsync_region,
  auth: {
    type: AwsConfig.aws_appsync_authenticationType,
    jwtToken: async () => (await Auth.currentSession()).getAccessToken().getJwtToken(),
  },
})

export default AppSyncClient
