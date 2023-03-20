require('dotenv').config();

const DbPort = process.env.PORT
const DbConnection = process.env.CONNECTIONSTRING
export default {
    port: DbPort,
    dbUri: DbConnection
}      