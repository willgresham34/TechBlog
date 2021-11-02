const User = require("./User");
const Post = require("./Post");
const Comments = require("./Comments");

User.hasMany(Post, {
  foreignKey: "userId",
});

Post.belongsTo(User, {
  foreignKey: "userId",
});

Post.hasMany(Comments, {
  foreignKey: "post_id",
  onDelete: "CASCADE",
});

Comments.belongsTo(User, {
  foreignKey: "userId",
  onDelete: "CASCADE",
});

Comments.belongsTo(Post, {
  foreignKey: "post_id",
  onDelete: "CASCADE",
});

module.exports = {
  User,
  Post,
  Comments,
};
