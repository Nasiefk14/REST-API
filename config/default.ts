require('dotenv').config();

const DbPort = process.env.PORT
const DbConnection = process.env.CONNECTIONSTRING
const SaltWorkVal = process.env.SALTWORKVALUE
export default {
    port: DbPort,
    dbUri: DbConnection,
    saltWorkFactor: SaltWorkVal
}      