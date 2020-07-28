import dotenv from 'dotenv';
dotenv.config({path:".env"});

// const test = process.env.RETHINK_DB_HOST;
// console.log(test);

// export const  customerAuthenticationRethinkDB = {
//     host: process.env.RETHINK_DB_HOST,
//     port: process.env.RETHINK_DB_HOST,
//     db: process.env.RETHINK_DB_CUSTOMER_AUTHENTICATION
// };


export const  customerAuthenticationRethinkDB = {
    host: "localhost",
    port: "28015",
    db: "customer_authentication"
};

