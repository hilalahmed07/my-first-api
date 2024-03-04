const mongoose = require('mongoose');

uri = "\mongodb+srv://ahmedhilal818:XQXP81kqfwaJfyqd@newproject.x7sfc7b.mongodb.net/NewProject?retryWrites=true&w=majority&appName=NewProject";


const connectDB = () => {
    console.log('i am working properly');
    return mongoose.connect(uri);
};

// const connectDB = () => {
//     return mongoose.connect(uri,{
        // userNewUrlParser: true,
        // useUnifiedTopology: true,
//     });
// };

module.exports = connectDB;