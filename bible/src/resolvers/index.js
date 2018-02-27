import { combineResolvers } from 'apollo-resolvers';
import pruebaResolver from '../components/prueba/pruebaResolver';
import ejemploResolver from '../components/ejemplo/ejemploResolver';
import bibleResolver from '../components/bible/bibleResolver';

const resolvers = combineResolvers([
    pruebaResolver,
    ejemploResolver,
    bibleResolver,
]);

export default resolvers;