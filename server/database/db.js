import mongoose from 'mongoose';

const Connection = async (username, password) => {

  
    
    const URL = `mongodb+srv://${username}:${password}@cluster0.5k0ziar.mongodb.net/Database2?retryWrites=true&w=majority`
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true});
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error);
    }

};

export default Connection;