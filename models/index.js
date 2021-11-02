const User = require('./User');
const Plant = require('./plantData')


User.hasMany(Plant, {
    foreignKey: 'plant_owner',
    
})

Plant.belongsTo(User, {
    foreignKey: 'plant_owner',
    onDelete: "CASCADE"
})
// Gallery.hasMany(Painting, {
//   foreignKey: 'gallery_id',
// });

// Painting.belongsTo(Gallery, {
//   foreignKey: 'gallery_id',
// });

// module.exports = { User, Gallery, Painting };
