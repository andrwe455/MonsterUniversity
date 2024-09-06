const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const path = require('path');
const mongo = require('./database/mongo.js');
const sesion = require('express-session');
const mongoStore = require('connect-mongo');

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
    console.log(`http://localhost:${PORT}`);
});

mongo.connect()
//parseo del body
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors(({ origin: '*' })));
app.use(express.json());

//sesion
const sessionmiddleware = sesion({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
    cookie:{
        secure: false,
        httpOnly: false,
        signed: false
    },
    store: mongoStore.create({
        client: mongo.mongoose.connection.getClient(),
        collectionName: 'sessions',
        stringify: false,
        autoRemove: 'native',
    }),
});

app.use(sessionmiddleware);

//frontend
const proyectPath = path.resolve(__dirname, '../Frontend/views');
app.use(express.static(path.resolve(proyectPath)));


// Rutas de tu API
const router =require('./routes/routes.js');
app.use('/', router);