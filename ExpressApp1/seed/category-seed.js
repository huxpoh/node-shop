var Category = require('../models/category');
var mongoose = require('mongoose');
mongoose.connect('localhost:27017/shopping');

var cats = [
    new Category({
        title: 'ВЫБРАТЬ КАТЕГОРИЮ',
        type: 'sub-main',
        subCategories: [
                'Просмотреть все',
                'Аксессуары',
                'Базовые модели',
                'Белье',
                'Брюки',
                'Брюки',
                'Брюки- чинос',
                'Брюки для бега',
                'Джинсы',
                'Кардиганы и джемперы',
                'Куртки и пальто',
                'Носки',
                'Обувь',
                'Одежда для плавания',
                'Пиджаки и костюмы',
                'Рубашки',
                'Спортивная одежда',
                'Футболки и майки',
                'Худи и толстовки',
                'Широкий размерный ряд',
                'Шорты'
        ]
    })
];


var done = 0;

for (var i = 0; i < cats.length; i++) {
  
    cats[i].save(function (err, result) {
        done++;
        if (done === cats.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}