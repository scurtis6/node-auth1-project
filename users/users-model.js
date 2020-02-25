const db = require('../database/dbConfig');

module.exports = {
    find,
    findBy,
    findById,
    add
};

function find() {
    return db('users')
    .select('id', 'username', 'password');
}

function findById(id) {
    return db('users')
    .select('id', 'username')
    .where('id', id)
    .first();
}

function findBy(filter) {
    return db('users')
    .select('id', 'username', 'password')
    .where(filter)
}

function add(user) {
    return db('users')
    .insert(user, 'id')
    .then(ids => {
        const [id] = ids;
        return findById(id);
    });
}
