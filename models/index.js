const User = require('./User');
const Plant = require('./plantData')
const Post = require('./Post')



Plant.belongsTo(User, {
    foreignKey: 'plant_Owner',
    onDelete: "CASCADE"
})

User.hasMany(Plant, {
    foreignKey: 'plant_Owner',
    
})

User.hasMany(Post)
 module.exports = {Plant, User};
