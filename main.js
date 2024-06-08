import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from './schema.js';
import db from "./db.js"

//resolver
const resolvers = {
    Query: {
        games(){
            return db.games;
        },
        autho(){
            return db.games;
        },
        games(){
            return db.games;
        },

    }
}
//server setup
const server = new ApolloServer({
    // typeDefs 
    typeDefs
    //resolvers
});

const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 }
})
console.log('Server running on port:', 4000)