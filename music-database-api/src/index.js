//Loading required modules
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const cors = require('cors');

//Setting up express
app = express();
app.use(bodyParser.json()); 
app.use(fileUpload({
    createParentPath: true
}));
app.use(cors());

//Setting up our database
const dbUsername = 'musicdb-admin' ||process.env.DBUSERNAME;
const dbPassword = 'mdb.sa13800511'||process.env.DBPASSWORD;
const url = `mongodb://${dbUsername}:${dbPassword}@127.0.0.1:27017/music-database`
mongoose.connect('mongodb://musicdb-admin:mdb.sa13800511@127.0.0.1:27017/music-database', {useNewUrlParser: true, useUnifiedTopology: true});

//Config
const PORT = 8000 || process.env.PORT

//Setting up routes
app.get('/', (req, res) => {
    res.send("Music Database main page");
});
const api = require('./routes/api.js');
app.use('/api', api);


//Running our server
app.listen(PORT, () => {
    console.log(`Server running at 0.0.0.0:${PORT}`);
});

