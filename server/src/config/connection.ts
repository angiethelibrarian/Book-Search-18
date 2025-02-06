import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const _db =  mongoose.connection;    // mongoose.connect(process.env.MONGODB_URI || 'mongodb://

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/googlebooks');

export default mongoose.connection;
