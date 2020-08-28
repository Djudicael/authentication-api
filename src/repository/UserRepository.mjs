import { client, cassandra } from '../config/db/cassandra.mjs'
export default class UserRepository {
    constructor() {
        console.log(rethinkdb);
        this.usersCollection = rethinkdb.table('customers');
    }

    async create(user) {
        console.log(user);
        //if (!article.title || !article.description) return;
        return this.usersCollection.insert(user).run(conn, (err, result) => {
            if (err) throw err;
            console.log(JSON.stringify(result));
        });
        ;
    };

    async getUsers() {
        return this.usersCollection;
    };

    async getUserByID(id) {
        const getByUserID = 'SELECT * FROM users WHERE user_id = ?';

        const result = await client.execute(getByUserID, [id])
            .catch((error) => {
                console.log(error);

            });
        console.log(result.rows[0]);

        const user = {
            username: result.rows[0].username,
            email: result.rows[0].email,
            name: result.rows[0].name
        }

        return user;
    };

    async getUserByUsername(username) {

        const getByUsername = 'SELECT * FROM users WHERE username = ?';

        const result = await client.execute(getByUsername, [username])
            .catch((error) => {
                console.log(error);

            });

        const user = {
            username: result.rows[0].username,
            email: result.rows[0].email,
            name: result.rows[0].name
        }

        return user;
    };

    async getUserByEmail(email) {
        const getByUsername = 'SELECT * FROM users WHERE email = ?';

        const result = await client.execute(getByUsername, [email])
            .catch((error) => {
                console.log(error);

            });

        const user = {
            username: result.rows[0].username,
            email: result.rows[0].email,
            name: result.rows[0].name
        }

        return user;
    };

    async editUserByID(id, user) {
        if (!id) return;
        return this.usersCollection.filter(
            { id }
        ).update(user)
    };

}