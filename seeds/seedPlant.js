const Plant = require('../models/plantData')


const plantData = [
    {
        name: "Phillip",
        species: 'Autumn Olive',
        waterSchedule: 'Every Other Day',
        outsidePlant: false,
        lastWatered: 1,
        plantImg: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fweb.plant.id%2F&psig=AOvVaw1Ca3jo1eXevYhso1gkX3Xg&ust=1636501844635000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJCs7Mr6ifQCFQAAAAAdAAAAABAd",
        user_id: 1,    
    },

    {
        name: "Plant The Plant",
        species: 'Cucumber',
        waterSchedule: 'Every Other Day',
        outsidePlant: true,
        lastWatered: 1,
        plantImg: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/ab/43d910ae7d11e88e82d728f9399c9e/plant_Profile_logo.jpg?auto=format%2Ccompress&dpr=1",
        user_id: 1,
    },
]

const seedPlant = () => Plant.bulkCreate(plantData)

module.exports = seedPlant