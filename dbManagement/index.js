const rethinkdb = require('rethinkdb');

rethinkdb.connect({
    host: 'localhost',
    port: 28015,
    db: 'mydb'
}, (err, conn) => {
    if (err) throw err;
    //createTable(conn, 'users');
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

    rethinkdb.table('users').insert(users).run(conn, (err, result) => {
        console.log(JSON.stringify(result));
    });

}

function getUsers(conn) {

    rethinkdb.table('users').run(conn, (err, cursor) => {
        cursor.toArray((err, result) => console.log(JSON.stringify(result)));

    });

}