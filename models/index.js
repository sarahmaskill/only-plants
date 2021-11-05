const User = require('./User');
const Plant = require('./plantData')
const Post = require('./Post')


User.hasMany(Plant, {
    foreignKey: 'userName',
    onDelete: "CASCADE"
    
})

Plant.belongsTo(User, {
    foreignKey: 'userName',
    
})


User.hasMany(Post, {
    foreignKey: 'userName',
    onDelete: "CASCADE",
})

Post.belongsTo(User, {
    foreignKey: "userName",
})


// User.findAll({include: [{
//     model: Plant
// }]}).then(res => {
// res.map( user =>{
// console.log(user.get({plain:true}))
// })
// })
// .catch(e => {
//     console.log(e)
// })
User.findAll({include: [{
    model:Post
}]}).then(res => {
    res.map( user =>{
    console.log(user.get({plain:true}))
    })
    })
    .catch(e => {
        console.log(e)
    })
 module.exports = {Plant, User, Post};
