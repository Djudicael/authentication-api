import { rethinkdb } from '../../../deps.mjs';
import { customerAuthenticationRethinkDB } from '../config.mjs';


const conn = rethinkdb.connect(customerAuthenticationRethinkDB);

export default conn;

//https://rethinkdb.com/docs/sql-to-reql/javascript/