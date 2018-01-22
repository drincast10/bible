import { mergeStrings } from 'gql-merge';
import pruebaSchema from '../components/prueba/pruebaSchema';
import ejemploSchema from '../components/ejemplo/ejemploSchema';

const types = [
    pruebaSchema,
    ejemploSchema
];

export default mergeStrings(types);