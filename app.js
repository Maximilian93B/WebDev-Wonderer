require('dotenv').config();
console.log(process.env.DB_USERNAME);
console.log(process.env.DB_PASSWORD);
console.log(process.env.DB_DATABASE);
console.log(process.env.DB_HOST);
const express = require('express')
const { Sequelize } = require('sequelize')


const sequelize = new Sequelize({
    database: process.env.DB_DATABASE,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    dialect: 'postgres',
  });
  
  


const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req,res) =>{
res.send('Hello World!')
});


async function assertDatabaseConnection() {
    console.log ('Checking database connection...');
    try {
        await sequelize.authenticate();
        console.log('Database connection OK!');

    } catch (error) {
        console.error('Unable to connect to the db:', error)
        process.exit(1);
    }
}

app.listen(port, async() => {
    console.log(`Server is running on port ${port}`)
    await assertDatabaseConnection();
});