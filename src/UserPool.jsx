import { CognitoUserPool } from 'amazon-cognito-identity-js'

const poolData = {
    UserPoolId: 'us-east-2_zmqMPBwNF',
    ClientId: '2rlnkgr508lnt22rfmms2q9l8'
}
const UserPool = new CognitoUserPool(poolData)
export default UserPool