const express = require('express')  
const sequelize = require('./src/config/sequelize');
const initializePassport = require('./src/config/passport'); 
const passport = require('passport');
const session = require('express-session');
const routes = require('./src/api/routes/index');


const app = express();
const port = process.env.PORT || 3000;


// Session Middleware 
app.use (session({
    secret: process.env.SESSION_SECRET,
    resave: false, 
    saveUninitialized: false,
    cookie: { secure: false} // set to true if using HTTPS // add to .env and use secure cookies when ready 
}));


//Iinit Passport 
initializePassport(passport);

// Passport Middleware
app.use(passport.initialize()); // Initialize Passport middleware
app.use(passport.session()); // Enable session support for


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});


// Routes 

// Serve Root endopoint 
app.get('/', (req, res) => {
    console.log('Root endpoint hit');
    res.send('Root endpoint hit');
});

// Use Routes 
app.use('/', routes);

// DB connectection before app start up
async function assertDatabaseConnection() {
    console.log('Checking database connection...');
    try {
        await sequelize.sync({ force: true , logging: console.log }); // Add logging config as needed
        console.log('DB synced!');
    } catch (error) { // Corrected typo
        console.error('Unable to sync DB!', error);
        process.exit(1);
    }
};

app.listen(port, async () => {
    console.log(`Server is running on port ${port}`);
    await assertDatabaseConnection();
});