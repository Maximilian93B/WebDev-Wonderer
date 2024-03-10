// This file will handle user logic wihtin the app 
const {User, UserProgress,}= require('../../models/index');

//User registration 
exports.registerUser = async (req, res) => {
    // requires username, email , password as request body 
    console.log('req.body:', req.body);
    const { username, email , password } = req.body; 

    //Creater new user 
    try {
        // Create new User 
        const newUser = await User.create({
             username,
             email,
             password // Passed to model for hashing --> check User Model 
        });
        // Responds with feedback of user input 
        res.status(201).json({
            id: newUser.id,
            username: newUser.username,
            email: newUser.email,
        });
        // Handles errors 
    } catch (error) {
        console.error('User registration error:', error);
        res.status(500).json({ message: 'Failed to register user'});
    }
};


// ADMIN ONLY --> will add isAdmin file later 
//List all users 
exports.listAllUsers = async (req, res) => {
    try {
        const getAllUsers = await User.findAll(); // Remove any conditions to fetch all users
        res.json(getAllUsers);
    } catch (error) {
        console.error('Could not list users', error);
        res.status(500).json({ message: 'Failed to list all users' });
    }
};

// GET User by ID 
exports.getUserById = async (req,res)=> {
    try {
        const user = await User.findByPk(req.params.id, {
            attributes: { exclude: ['password'] } // exclude users passwords for query 
        });
        
        if(!user) {
            return res.status(404).json({ message: 'User not found' }); 
        }

        res.json(user);
    } catch (error) {
        console.error('Error fetching User:', error);
        res.status(500).json ({ message: 'Failed to retrieve user'});
    }
};

// Get User Progress --> UserProgress = User Profile 
exports.getAllUserProgress = async (req,res) => {
    try {
     const allUserProgress = await UserProgress.findAll({
 
     });
 
     res.json(allUserProgress)
    } catch (error) {
     console.error('Error fetching user progress:', error);
     res.status(500).json({ message: 'Failed to retireve user progress records'})
    }
 };


// GET User Progress By user ID 
exports. getUserProgressByUserId = async (req,res)=>{
    // Parse userId from the req params and convert to INT 
    const userId = parseInt(req.params.userId,10);
    // Checks conversion result is (Not a Number) if true then resonds with invalid user
    if(isNaN(userId)) {
        return res.status(404).json({message: 'Invalid user ID'});
    }

    try {
        // Attempts to find all User PRofile records with the userId  
        const userProgress = await UserProgress.findAll({
            where:{ user_id: userId },
            include: [{
                model: User,
                attributes: ['username',]
            }]
        });
        // If no user profile is found 
        if(!userProgress.length) {
            return res.status(404).json({message:'No user progress records for this user found'})
        }
        // Responds with user profile (JSON) 
        res.json(userProgress);
        // Handles errors 
    } catch (error) {
        console.error('Error fetching user progress data:', error);
        res.status(500).json({message: 'Failed to retrieve user progress records'})
    }
};



