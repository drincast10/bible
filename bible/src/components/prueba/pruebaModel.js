import mongoose from 'mongoose';

const pruebaSchema = mongoose.Schema({
    user: {
        fname: String,
        lname: String,
        username: String,
        password: String
    },
    desc: String
});

export default pruebaSchema;