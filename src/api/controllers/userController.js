// This file will handle user logic wihtin the app 
const {User,}= require('../../models/index');
const {Sequelize} = require('sequelize');

//User registration 
exports.registerUser = async (req, res) => {
    console.log('req.body:', req.body);
    const { username, email , password } = req.body; 
    try {
        // Create new User 
        const newUser = await User.create({
             username,
             email,
             password // Passed to model for hashing 
        });
        //Response 
        res.status(201).json({
            id: newUser.id,
            username: newUser.username,
            email: newUser.email,
        });
    } catch (error) {
        console.error('User registration error:', error);
        res.status(500).json({ message: 'Failed to register user'});
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

// Search for users bu username
exports.searchUsers = async (req, res) => {
    console.log('searchUsers called');
    const { username } = req.query; // Assuming a query parameter for search
   if (!username) {
    return res.status(400).json({message:'username is required'})
   }

   try{
    const user = await User.findOne({
        where:{
            username:Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('username')), Sequelize.fn('LOWER',username))
        },
        attributes: ['id', 'username', 'email'],
    });

    if(!user) {
        return res.status(404).json({message:'User not found'});
    }

    res.json(user);
   } catch (error) {
    console.error('Error finding user:', error);
    res.status(500).json({message: 'Failed to find user'})
   }
};





// ADMIN ONLY 
//List all users 
exports.listAllUsers = async (req,res) => {
    try {
        const users = await User.findAll({
            attributes: { exclude: ['password'] }
        }) 
        // response with all users 
        res.json(users)
    }catch (error) {
        console.error('Could not List users', error);
        res.status(500).json({ message: 'Failed to list all users '});
    }
};
 
