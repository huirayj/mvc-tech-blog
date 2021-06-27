const { Post } = require('../models');

const postData = [
    {
        title: "Lorem ipsum",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed tristique ex, et faucibus massa. Vivamus sed dolor ac nulla aliquet congue ut et ligula. Donec mollis nibh ante, vitae ultricies lorem commodo ut. Sed sed nisl dui. Nullam nulla arcu, venenatis sed sapien a, ultrices varius arcu. Morbi consequat tempus ante nec viverra. Suspendisse potenti. Nullam efficitur dolor et nunc dapibus finibus. Aenean vel rutrum tellus. Mauris pellentesque mattis diam, rutrum tristique leo accumsan sed. Aliquam id libero sed orci laoreet ornare vel id lacus. Phasellus in lacus vel turpis placerat lobortis non a tellus. Pellentesque in turpis vitae nisl ultrices semper.",
        user_id: 1
    },
    {
        title: "Risus Lacus",
        content: "In risus lacus, venenatis ut orci ut, pulvinar maximus sem. Integer molestie gravida quam, sodales fermentum leo bibendum a. Donec iaculis mattis nibh sit amet posuere. Quisque viverra eget tellus eget dictum. Curabitur sit amet sem sapien. Cras tempor faucibus elit, eu rhoncus odio vehicula nec. Mauris ante massa, rutrum at gravida viverra, dignissim ac diam. Proin id lorem a erat efficitur condimentum. In feugiat sollicitudin tempor. In rutrum mauris dolor, quis ultrices libero vehicula in.",
        user_id: 1
    },
    {
        title: "Proin Varius",
        content: "Proin varius nisl sit amet nunc ornare accumsan. Vestibulum justo nulla, sodales vitae rutrum nec, blandit a nulla. Maecenas elementum commodo consectetur. Curabitur non magna et ligula fermentum tincidunt eu sollicitudin est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt libero eu turpis faucibus, in egestas tellus consequat. Phasellus a eros vel turpis vulputate placerat. Proin malesuada augue nec leo maximus dapibus. In non nulla lacus. Suspendisse dignissim vel enim sed efficitur. Duis neque ligula, sagittis non malesuada a, egestas id ligula.",
        user_id: 1
    },
    {
        title: "Sed Tempor",
        content: "Sed tempor nisl aliquam tincidunt sagittis. Cras at commodo metus. Nulla luctus cursus nulla, sit amet mollis velit semper ac. Nunc non interdum erat, id congue sapien. Sed in efficitur neque. Pellentesque molestie vulputate mauris. Praesent congue dictum tincidunt. Nulla eleifend magna quis purus egestas, eget porta arcu lacinia. Mauris tincidunt congue urna scelerisque vehicula. Phasellus in rhoncus elit. Donec velit risus, eleifend in congue sit amet, commodo vitae libero. In a lectus varius tellus tincidunt imperdiet. Morbi vulputate aliquet congue. Vestibulum ullamcorper pretium aliquam. Phasellus id ante ac urna faucibus eleifend vel eu nisi.",
        user_id: 2
    },
    {
        title: "Cras Gravida",
        content: "Cras gravida dui et dapibus viverra. Vivamus vestibulum, est ut sollicitudin consectetur, mauris est bibendum dolor, sed vehicula risus quam nec nisi. Nunc condimentum lacus a venenatis dignissim. Aenean quis fringilla velit. Donec a tincidunt metus. Etiam at leo lacus. Etiam scelerisque, nisi posuere aliquam vehicula, lacus nisl eleifend est, sit amet consequat velit justo vel diam. Donec id iaculis sapien. Morbi lorem urna, cursus non augue vitae, pretium dignissim urna.",
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;