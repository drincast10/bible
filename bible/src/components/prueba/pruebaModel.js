import mongoose from 'mongoose';

const pruebaSchema = mongoose.Schema({
    fname: String,
    lname: String,
    username: String,
    password: String,
    desc: String
});

const pruebaModel = mongoose.model('Prueba', pruebaSchema);

export default pruebaModel;