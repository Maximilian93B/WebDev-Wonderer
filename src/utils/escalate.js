
// We need to do a few more things IOT to make this work 
/*
const { User } = require('../models/index');


async function makeAdmin(username) {
     const user = await User.findOne({ where: {username}});
     if(user) {
        user.isAdmin = true; 
        await user.save();
        console.log(`${username} is now admin`);
     } else {
        console.log('User not found.'); 
     }
}

makeAdmin('yourUsername'); 
*/ 