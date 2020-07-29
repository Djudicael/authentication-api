import rethinkdb  from 'rethinkdb';
import { customerAuthenticationRethinkDB } from '../src/config/config.mjs';

console.log(customerAuthenticationRethinkDB);

rethinkdb.connect(customerAuthenticationRethinkDB, (err, conn) => {
    if (err) throw err;
    //createTable(conn, 'customers');
    //createTable(conn, 'devices');
    //addUsers(conn);
    getUsers(conn);
});

function createTable(conn, tableName) {
    rethinkdb.tableCreate(tableName).run(conn, (err, result) => {
        if (err) throw err;
        console.log(JSON.stringify(result));
    })

}


function addUsers(conn) {
    const users = [
        { name: 'John Doe', city: 'Miami', age: 34 },
        { name: 'Sara Wilson', city: 'Boston', age: 28 },
        { name: 'Steve Smith', city: 'Detroit', age: 49 },
        { name: 'Jen Williams', city: 'Miami', age: 35 }
    ];

    rethinkdb.table('customers').insert(users).run(conn, (err, result) => {
        console.log(JSON.stringify(result));
    });

}

function getUsers(conn) {

    rethinkdb.table('customers').run(conn, (err, cursor) => {
        cursor.toArray((err, result) => console.log(JSON.stringify(result)));

    });

}