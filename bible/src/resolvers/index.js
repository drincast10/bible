import { combineResolvers } from 'apollo-resolvers';
import pruebaResolver from '../components/prueba/pruebaResolver';
import ejemploResolver from '../components/ejemplo/ejemploResolver';

const resolvers = combineResolvers([
    pruebaResolver,
    ejemploResolver,
]);

export default resolvers;