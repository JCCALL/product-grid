const db = require("../models");

// Defining methods for the controller
module.exports = {
    findAll: function (req, res) {
        db.Products
            .findAll({})
            .then(dbProduct => res.json(dbProduct))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        db.Product
            .create({
                title: req.body.title,
                description: req.body.description,
                price: req.body.price,
                quantity: req.body.quantity,
                image: req.body.image
            })
            .then(dbProduct => res.json(dbProduct))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.Product
            .destroy({
                where: {
                    id: req.params.id
                }
            })
            .then(dbProduct => res.json(dbProduct))
            .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
        db.Product
            .update(
                {
                  title: req.body.title,
                  description: req.body.description,
                  price: req.body.price,
                  quantity: req.body.quantity,
                  image: req.body.image
                },
                {where: 
                    {id: req.params.id}
                } 
            )
            .then(dbProduct => res.json(dbProduct))
            .catch(err => res.status(422).json(err));
    },
};