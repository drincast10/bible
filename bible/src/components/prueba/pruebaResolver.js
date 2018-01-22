export default {
    Query: {
        getPrueba: () => 'Ejemplo prueba de Ruben'
    },
    Mutation: {
        createPrueba: (parent, args, {models}) => models.Post.create({...args.prueba})
    }
}