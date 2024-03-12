
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

/*
// Access control middleware
const checkUserTerritoryAccess = async (req, res, next) => {
   const { userId, territoryId, accessToken } = req.body; // Or however you plan to receive these values (e.g., from req.params or req.query)

   try {
       const access = await UserTerritoryAccess.findOne({
           where: {
               user_id: userId,
               territory_id: territoryId,
               access_token: accessToken,
           },
       });

       if (!access) {
           return res.status(403).json({ message: "Access denied. Invalid or missing access token." });
       }

       next(); // User has access, proceed to the next middleware or request handler
   } catch (error) {
       console.error('Error checking territory access', error);
       return res.status(500).json({ message: "Failed to verify territory access." });
   }
};
*/







module.exports = {logJsonResponse};