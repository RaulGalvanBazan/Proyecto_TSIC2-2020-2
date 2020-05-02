const path = require('path');
const Item = require('../models/items');

exports.index = function (req, res) {
    res.sendFile(path.resolve('views/items.html'));
};

exports.create = function (req, res) {
    var newItem = new Item(req.body);
    console.log(req.body);
    newItem.save(function (err) {
            if(err) {
            res.status(400).send('No se puede guardar en la base de datos');
        } else {
            res.redirect('/items/getitem');
        }
  });
               };

exports.list = function (req, res) {
        Item.find({}).exec(function (err, items) {
                if (err) {
                        return res.send(500, err);
                }
                res.render('getitem', {
                        items: items
             });
        });
};
