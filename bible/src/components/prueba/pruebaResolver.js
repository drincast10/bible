export default {
    Query: {
        allPrueba: (parent, args, {models}, info) => models.Prueba.find(),
        getPrueba: (parent, args, {models}, info) => models.Prueba.findOne(args)
    },
    Mutation: {
        createPrueba: (parent, args, {models}) => models.Prueba.create(args.prueba)
    }
}