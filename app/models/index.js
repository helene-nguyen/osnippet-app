//~import modules
const User = require('./user.js');
const Role = require('./role.js');
const Category = require('./category.js');
const Snippet = require('./snippet.js');

//~association
//^----------Category - User
User.hasMany(Category, {
    foreignKey: 'user_id',
    as: 'categories'
});

Category.belongsTo(User, {
    foreignKey: 'user_id',
    as: 'creator'
});

//^----------Category - Snippet
Category.belongsToMany(Snippet, {
    foreignKey: 'category_id',
    through: 'category_has_snippet',
    otherKey: 'snippet_id',
    as: 'snippets'
});

Snippet.belongsToMany(Category, {
    foreignKey: 'snippet_id',
    through: 'category_has_snippet',
    otherKey: 'category_id',
    as: 'categories'
});

//^-----------Role - User
User.belongsTo(Role, {
    foreignKey: 'role_id',
    as: 'role'
});

Role.hasMany(User, {
    foreignKey: 'role_id',
    as: 'users'
});

//^----------- Snippet - User
User.hasMany(Snippet, {
    foreignKey: 'user_id',
    as: 'snippets'
});

Snippet.belongsTo(User, {
    foreignKey: 'user_id',
    as: 'user'
});

//~export module
module.exports = {
    User,
    Role,
    Category,
    Snippet
};