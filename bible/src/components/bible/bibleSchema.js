export default `
    type Book {
        _id: ID!,
        name: String!,
    }    

    type Chapter {
        _id: ID!,
        name: String!,
        idBook: String!,
    }

    type Verse {
        _id: ID!,
        name: String!,
        idChapter: String!,
    }

    type Query {
        allBible: [Book]
    }

    input iBook {
        name: String!,
    }

    input iChapter {
        name: String!,
        idBook: Book._id
    }

    type Mutation {
        createBook(book: iBook, chapter: iChapter ): Book!
    }

`;