import mongoose from 'mongoose';

const bibleSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    chapter: {
        type: [],
        default: [],
    }
});

const bibleModel = mongoose.model('Bible', bibleSchema);

export default bibleModel;