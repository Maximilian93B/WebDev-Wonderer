// This file will handle all simple territort logic 

const { Territory, District, Cell, Challenge} = require('../../models/index');


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


// Check Territory Completion


