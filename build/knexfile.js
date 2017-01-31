module.exports = {

    development: {
        client: 'pg',
        connection: 'postgres://localhost/trust'
    },

    production: {
        client: 'postgresql',
        connection: process.env.DATABASE_URL + '?ssl=true',
    },

};
