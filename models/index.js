// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');


// Product belongs to Category, and Category has many Product models, as a category can have multiple products but a product can only belong to one category.
// Products belongsTo Category
// Categories have many Products


// Define a Product as belonging to one Category, thus creating a foreign key in the `category` table
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

// Define a Category as having many Products, thus creating a foreign key in the `product` table
Category.hasMany(Product, {
  foreignKey: 'category_id',
});

// Product belongs to many Tag models, and Tag belongs to many Product models. Allow products to have multiple tags and tags to have many products by using the ProductTag through model.
// Products belongToMany Tags (through ProductTag)
// Tags belongToMany Products (through ProductTag

Product.belongsToMany(Tag, { 
  through: {model: ProductTag},
  unique: false,
  foreignKey: 'product_id'
});

Tag.belongsToMany(Product, { 
  through: {model: ProductTag},
  unique: false,
  foreignKey: 'tag_id'
});



module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
