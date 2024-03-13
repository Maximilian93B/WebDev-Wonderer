
const { UserProgress, Challenge ,} = require('../../models/index');

// List all Challenges 
exports.ListallChallenges = async (req , res) => {
    try {
        // get all challenges 
        const challengeData =  await Challenge.findAll({
            include: {
                model: Challenge
            }
        });
        // respond with challenge data 
        res.json(challengeData)
        // handle errors
    } catch (error) {
        console.error('Error fethcing Challenges', error);
        res.status(500).json({message:'Failed to retrieve Challenge data'})
    }
}


// Challenge completion logic 

exports.markChallengeComplete = async (req , res ) => {
 
    const { user_id, challenge_id } = req.body;
    try {
        // Check to see if challenge exists 
        const challengeExists = await Challenge.findByPk(challenge_id);
        if(!challengeExists) {
            return res.status(404).json({message: 'Challenge not found'});
        }
        // Then find User Progress by user_id 
        let userProgress = await UserProgress.findOne({
            where: {user_id},
            defaults: { user_id, completed_challenges: [] },
        });

        // userProgress is an array with two elements: the instance and a boolean
        userProgress = userProgress[0]; // get the instance
        
        // Check if the challenge is already completed in the completed_challenge array
        if (!userProgress.completed_challenges.includes(challenge_id)) {
            userProgress.completed_challenges.push(challenge_id);
            // update User Progresss with completed challnge id
            await userProgress.save();
            // Handle errors            
            return res.json({ message: 'Challenge marked as complete', userProgress });
        } else {
            return res.status(400).json({ message: 'Challenge already completed' });
        }
    } catch (error) {
        console.error('Error marking challenge complete:', error);
        res.status(500).json({ message: 'Failed to mark challenge as complete' });
    }
     
};
