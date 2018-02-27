import { mergeStrings } from 'gql-merge';
import pruebaSchema from '../components/prueba/pruebaSchema';
import ejemploSchema from '../components/ejemplo/ejemploSchema';
import bibleSchema from '../components/bible/bibleSchema';

const types = [
    pruebaSchema,
    ejemploSchema,
    bibleSchema,
];

export default mergeStrings(types);