// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category,{
  foreignKey: "categoryId"
});
// Categories have many Products
Category.hasMany(Product, {
foreignKey: "productId"
});
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
through:ProductTag, foreignKey: "productId"
});
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
through:ProductTag, foreignKey: "tagId"
});
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
