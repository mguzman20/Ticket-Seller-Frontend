import { CognitoUserPool } from 'amazon-cognito-identity-js'

const poolData = {
    UserPoolId: 'us-east-2_uKk6NcNyU',
    ClientId: '4b7td63onls44h02f28a0h7e6d'
}
const UserPool = new CognitoUserPool(poolData)
export default UserPool