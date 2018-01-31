export default `
    type User {
        _id: ID,
        fname: String!,
        lname: String!,
        username: String!,
        password: String!,
        desc: String
    }

    input iPrueba{
        fname: String!,
        lname: String!,
        username: String,
        password: String,
        desc: String
    }

    type Query {
        allPrueba: [User]!
        getPrueba(_id: ID): User!
    }

    type Mutation{
        createPrueba(prueba: iPrueba): User!
    }
`;