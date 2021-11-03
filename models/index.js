const User = require('./User');
const Plant = require('./plantData')
const Post = require('./Post')


User.hasMany(Plant, {
    foreignKey: 'owner_id',
    onDelete: "CASCADE"
    
})

Plant.belongsTo(User, {
    foreignKey: 'owner_id',
    
})


User.hasMany(Post, {
    foreignKey: 'owner_id',
    onDelete: "CASCADE",
})

Post.belongsTo(User, {
    foreignKey: "owner_id",
})
 module.exports = {Plant, User, Post};
