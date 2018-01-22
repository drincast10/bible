export default `
    type User {
        fname: String!,
        lname: String!,
        username: String!,
        password: String!
    }

    type Prueba {
        _id: ID!,
        user: User,
        desc: String
    }

    input iPrueba{
        fname: String!,
        lname: String!,
        username: String!,
        password: String!
        desc: String
    }

    type Query {
        getPrueba: String
    }

    type Mutation{
        createPrueba(prueba: iPrueba): Prueba!
    }
`;