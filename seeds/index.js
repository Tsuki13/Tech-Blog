
const sequelize = require("../config/connection");
const { User, Posts } = require("../models");
const userData = require("./user-seeds.json");
const postData = require("./blogPosts-seeds.json");


const seedDatabase = async () => {
    try {
        await sequelize.sync({ force: true });

        await User.bulkCreate(userData, {
            individualHooks: true,
            returning: true,
        });

        await Posts.bulkCreate(postData),

            process.exit(0);
    } catch (e) {
        console.log(e);
    }
}

seedDatabase();