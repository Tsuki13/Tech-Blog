const User = require("./Users");
const Posts = require('./Posts');


User.hasMany(Posts, {
    foreignKey: "user_id"
});

Posts.belongsTo(User, {
    foreignKey: "user_id"
});

module.exports = { User, Posts };