const { Territory, District, Cell, Challenge} = require('../../models/index');


exports.getTerritoryData = async (req, res) => {
    const { territoryId } = req.params;

    try {
        const territory = await Territory.findByPk(territoryId, {
            incldue: [{
                model: District,
                include:[{
                    model:Cell,
                    include:[Challenge]   
                }]
            }]
        });

        if(!territory){
            return res.status(404).json({ message: 'Territory not found'});
        }

        res.json(territory);
    } catch (error) {
        console.error('Error fethcing territory data:', error);
        res.status(500).json({message:'Failed to retrieve territory data'})
    }
};
