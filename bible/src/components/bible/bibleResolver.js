export default {
    Query: {
        allBible: (parent, args, {models}, info) => models.Bible.find(),
    },
    Mutation:{
        createBook: (parent, args, {models, info}) => models.Bible.create(args.book),
    }
}