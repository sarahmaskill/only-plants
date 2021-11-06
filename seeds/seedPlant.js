const Plant = require('../models/plantData')


const plantData = [
    {
        name: "Phillip",
        species: 'Autumn Olive',
        waterSchedule: 'Every Other Day',
        outsidePlant: false,
        lastWatered: 1,
        user_id: 1,    
    },

    {
        name: "Plant The Plant",
        species: 'Cucumber',
        waterSchedule: 'Every Other Day',
        outsidePlant: true,
        lastWatered: 1,
        user_id: 1,
    },
]

const seedPlant = () => Plant.bulkCreate(plantData)

module.exports = seedPlant