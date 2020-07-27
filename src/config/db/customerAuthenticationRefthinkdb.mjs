import { rethinkdb } from '../../../deps.mjs';
import { customerAuthenticationRethinkDB } from '../config.mjs';

rethinkdb.connect(customerAuthenticationRethinkDB, (err, conn) => {
    if (err) throw err;
});

export default rethinkdb;

//https://rethinkdb.com/docs/sql-to-reql/javascript/