import rethinkdb from '../config/db/customerAuthenticationRefthinkdb.mjs'
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
        if (!id) return;
        return this.usersCollection.filter(
            { id }
        );
};

async getUserByEmail(email) {
    if (!email) return;
    return this.usersCollection.filter({
        email
    });
};

async editUserByID(id, user) {
    if (!id) return;
    return this.usersCollection.filter(
        { id }
    ).update(user)
};

}