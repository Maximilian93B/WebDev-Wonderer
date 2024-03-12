// This file will handle all simple territort logic 

const { Territory, District, Cell, Challenge,UserTerritoryAccess} = require('../../models/index');


exports.getTerritoryData = async (req, res) => {
    const { territory_id } = req.params.id;
    // Finds Territory by territory_id 
    // Inlcudes the Distric,cell,challenges assoicated within the territory
    try {
        const territory = await Territory.findByPk(territory_id, {
            incldue: [{
                model: District,
                include:[{
                    model:Cell,
                    include:[Challenge]   
                }]
            }]
        });
        // Handles territory error 
        if(!territory){
            return res.status(404).json({ message: 'Territory not found'});
        }
        // respsonds with territory data 
        // Handle errors 
        res.json(territory);
    } catch (error) {
        console.error('Error fethcing territory data:', error);
        res.status(500).json({message:'Failed to retrieve territory data'})
    }
};


exports.addUserTerritoryAccess = async (req, res) => {
    const { userId, territoryId, accessToken } = req.body.id; // Adjust according to your API design

    try {
      
        // Check if a user territory access record already exists 
        const existingAccess = await UserTerritoryAccess.findOne({
            where: {
                user_id: userId,
                territory_id: territoryId,
            }
        });

        if(existingAccess){
            //update existing record with new access token 
            existingAccess.access_token = accessToken;
            await existingAccess.save();
            console.log(`Access token updated for user ${userId} on territory ${territoryId}`);
            res.json({message: 'Access token updated successfullly.',existingAccess});
        } else {
            // Create a new access record
            const newUserAccess = await UserTerritoryAccess.create({
                user_id: userId,
                territory_id: territoryId,
                access_token: accessToken,
            });
            console.log(`Created new access record for user ${userId}. Added territory ${territoryId} and token.`);
            res.status(201).json({ message: 'User territory access created successfully.', newUserAccess });
        }
    } catch (error) {
        console.error('Error updating user territory access:', error);
        res.status(500).json({ message: 'Failed to update user territory access.', error: error.message });
    }
};

