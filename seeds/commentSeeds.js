const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 1,
        content: "Wow!"
    },
    {
        user_id: 2,
        post_id: 2,
        content: "Fake."
    },
    {
        user_id: 2,
        post_id: 3,
        content: "Cool."
    },
    {
        user_id: 3,
        post_id: 4,
        content: "Impressive!"
    },
    {
        user_id: 3,
        post_id: 5,
        content: "First!"
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;