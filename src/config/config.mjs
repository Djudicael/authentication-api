import dotenv from 'dotenv';
dotenv.config();

const customerAuthenticationRethinkDB = {
    host: process.env.RETHINK_DB_HOST,
    port: process.env.RETHINK_DB_HOST,
    db: process.env.RETHINK_DB_CUSTOMER_AUTHENTICATION
};

export default { customerAuthenticationRethinkDB };