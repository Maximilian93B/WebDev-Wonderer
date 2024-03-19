  
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

// Middleware to log JSON responses 
const logJsonResponse = (req, res, next) => {
    const originalJson = res.json;
    res.json = function(data) {
        console.log('Response JSON', JSON.stringify(data,null,2));
        originalJson.call(this, data);
    };
    next()
};


// Middleware for user authentication to reach endpoints
const ensureAuthentication = ( req, res, next) => {
   if (req.isAuthenticated()) {
      return next();// User is authenticated 
   }
   req.flash('error','Please Log in to view that resource');
   res.redirect('/users/login');
}

module.exports = {logJsonResponse, ensureAuthentication };