'use strict';

module.exports = (sequelize, DataTypes) => {
    const Products = sequelize.define('Products', {
        title: {
            type: DataTypes.STRING,
            unique: true
        },
        description: DataTypes.STRING,
        price: DataTypes.INTEGER,
        quantity: DataTypes.INTEGER,
        image: DataTypes.STRING
    });
    return Products;
};