
/*
 module.exports = function isAdmin(req, res, next) {
    if (req.isAuthenticated() && req.user.role === 'admin') {
      return next();
    }
    return res.status(403).json({ message: 'Access denied' });
    
   console.loh('isAdmin middleware passed');
   next();
  };
*/


  
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



module.exports = {logJsonResponse};