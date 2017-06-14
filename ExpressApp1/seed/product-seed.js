var Product = require('../models/product');
var mongoose = require('mongoose');
mongoose.connect('localhost:27017/shopping');

var products = [
    new Product({
        imagePath: 'https://pbs.twimg.com/media/CM2fqBOUsAAou1m.jpg',
        title: 'Boruto Video Game 1',
        description: 'Awesome Game 1',
        price: 5
    }),
    new Product({
        imagePath: 'http://cdn1-a.production.liputan6.static6.com/medias/1091071/big-portrait/010961500_1450701798-naruto-shinden-mv-edit1.jpg',
        title: 'Boruto Logo 1',
        description: 'Awesome Game 2',
        price: 20
    }),
    new Product({
        imagePath: 'https://4shoreg.files.wordpress.com/2015/06/7e1ff4f796eafe2d4c53e604dd2e1c861435273724_full.jpg',
        title: 'Itachi Senya 1',
        description: 'Awesome Game 3',
        price: 25
    }),
    new Product({
        imagePath: 'http://cdn0-a.production.liputan6.static6.com/medias/844936/big-portrait/016974400_1428378914-boruto-naruto-poster1.jpg',
        title: 'Boruto Video Game',
        description: 'Awesome Game 4',
        price: 10
    }),
    new Product({
        imagePath: 'https://pbs.twimg.com/media/CLIkquUUsAAWwIY.jpg',
        title: 'Boruto Logo',
        description: 'Awesome Game 5',
        price: 10
    }),
    new Product({
        imagePath: 'http://i.ebayimg.com/00/s/MTUzNlgxMTUy/z/NF0AAOSw7aBVAy3y/$_3.jpg',
        title: 'Itachi Senya',
        description: 'Awesome Game 6',
        price: 10
    }),
    new Product({
        imagePath: 'http://sonicgamesuae.ae/image/cache/catalog/ps4/ps4_games/pal/naruto-shippuden-ultimate-ninja-storm-4-road-to-boruto-ps4-pal-85424-600x800.jpg',
        title: 'Boruto Video Game',
        description: 'Awesome Game 7',
        price: 10
    }),
    new Product({
        imagePath: 'http://cdn0-a.production.liputan6.static6.com/medias/899597/big-portrait/028665200_1434099325-boruto-narutoles-liens-entre-les-personnages-principaux.jpg',
        title: 'Boruto Logo',
        description: 'Awesome Game 8',
        price: 10
    }),
    new Product({
        imagePath: 'https://s-media-cache-ak0.pinimg.com/originals/0b/5c/85/0b5c85c7a315376dbf02b46058446063.jpg',
        title: 'Itachi Senya',
        description: 'Awesome Game 9',
        price: 10
    }),
    new Product({
        imagePath: 'http://cdn0-a.production.liputan6.static6.com/medias/1171698/big-portrait/027728300_1458032276-boruto-new_sp2.jpg',
        title: 'Boruto Video Game',
        description: 'Awesome Game 10',
        price: 10
    }),
    new Product({
        imagePath: 'http://cdn0-a.production.liputan6.static6.com/medias/919665/big-portrait/066529300_1436154504-naruto-1-edit.jpg',
        title: 'Boruto Logo',
        description: 'Awesome Game 11',
        price: 10
    }),
    new Product({
        imagePath: 'http://i.imgur.com/pQvfGDR.jpg',
        title: 'Itachi Senya',
        description: 'Awesome Game 12',
        price: 10
    }),
    new Product({
        imagePath: 'http://coolwallpapers.website/wp-content/uploads/2016/12/Naruto-Shippuden-Good-Anime-Wallpaper-1920x1080-600x800.jpg',
        title: 'Boruto Logo',
        description: 'Awesome Game 13',
        price: 10
    }),
    new Product({
        imagePath: 'http://orig06.deviantart.net/54c1/f/2013/117/a/1/minato_and_naruto_by_katakitsu-d636aj0.png',
        title: 'Itachi Senya',
        description: 'Awesome Game 14',
        price: 10
    }),
        new Product({
            imagePath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScTt9Z6NLyj6ay6IJ-e_shrKA6vq9uxFF_tVDePSQE3i5CgHfk6g',
        title: 'Boruto Logo',
        description: 'Awesome Game 15',
        price: 10
    }),
    new Product({
        imagePath: 'https://sep.yimg.com/ay/animebooks-com/naruto-illustrations-uzumaki-naruto-art-book-26.gif',
        title: 'Itachi Senya',
        description: 'Awesome Game 16',
        price: 10
        }),
    new Product({
        imagePath: 'http://orig06.deviantart.net/54c1/f/2013/117/a/1/minato_and_naruto_by_katakitsu-d636aj0.png',
        title: 'Itachi Senya',
        description: 'Awesome Game 17',
        price: 10
    }),
    new Product({
        imagePath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScTt9Z6NLyj6ay6IJ-e_shrKA6vq9uxFF_tVDePSQE3i5CgHfk6g',
        title: 'Boruto Logo',
        description: 'Awesome Game 18',
        price: 10
    }),
    new Product({
        imagePath: 'https://sep.yimg.com/ay/animebooks-com/naruto-illustrations-uzumaki-naruto-art-book-26.gif',
        title: 'Itachi Senya',
        description: 'Awesome Game 19',
        price: 10
    }),
    new Product({
        imagePath: 'http://orig06.deviantart.net/54c1/f/2013/117/a/1/minato_and_naruto_by_katakitsu-d636aj0.png',
        title: 'Itachi Senya',
        description: 'Awesome Game 20',
        price: 10
    }),
    new Product({
        imagePath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScTt9Z6NLyj6ay6IJ-e_shrKA6vq9uxFF_tVDePSQE3i5CgHfk6g',
        title: 'Boruto Logo',
        description: 'Awesome Game 21',
        price: 10
    }),
    new Product({
        imagePath: 'https://sep.yimg.com/ay/animebooks-com/naruto-illustrations-uzumaki-naruto-art-book-26.gif',
        title: 'Itachi Senya',
        description: 'Awesome Game 22',
        price: 10
    }),
    new Product({
        imagePath: 'https://pbs.twimg.com/media/CM2fqBOUsAAou1m.jpg',
        title: 'Boruto Video Game 1',
        description: 'Awesome Game 1',
        price: 5
    }),
    new Product({
        imagePath: 'http://cdn1-a.production.liputan6.static6.com/medias/1091071/big-portrait/010961500_1450701798-naruto-shinden-mv-edit1.jpg',
        title: 'Boruto Logo 1',
        description: 'Awesome Game 2',
        price: 20
    }),
    new Product({
        imagePath: 'https://4shoreg.files.wordpress.com/2015/06/7e1ff4f796eafe2d4c53e604dd2e1c861435273724_full.jpg',
        title: 'Itachi Senya 1',
        description: 'Awesome Game 3',
        price: 25
    }),
    new Product({
        imagePath: 'http://cdn0-a.production.liputan6.static6.com/medias/844936/big-portrait/016974400_1428378914-boruto-naruto-poster1.jpg',
        title: 'Boruto Video Game',
        description: 'Awesome Game 4',
        price: 10
    }),
    new Product({
        imagePath: 'https://pbs.twimg.com/media/CLIkquUUsAAWwIY.jpg',
        title: 'Boruto Logo',
        description: 'Awesome Game 5',
        price: 10
    }),
    new Product({
        imagePath: 'http://i.ebayimg.com/00/s/MTUzNlgxMTUy/z/NF0AAOSw7aBVAy3y/$_3.jpg',
        title: 'Itachi Senya',
        description: 'Awesome Game 6',
        price: 10
    }),
    new Product({
        imagePath: 'http://sonicgamesuae.ae/image/cache/catalog/ps4/ps4_games/pal/naruto-shippuden-ultimate-ninja-storm-4-road-to-boruto-ps4-pal-85424-600x800.jpg',
        title: 'Boruto Video Game',
        description: 'Awesome Game 7',
        price: 10
    }),
    new Product({
        imagePath: 'http://cdn0-a.production.liputan6.static6.com/medias/899597/big-portrait/028665200_1434099325-boruto-narutoles-liens-entre-les-personnages-principaux.jpg',
        title: 'Boruto Logo',
        description: 'Awesome Game 8',
        price: 10
    }),
    new Product({
        imagePath: 'https://s-media-cache-ak0.pinimg.com/originals/0b/5c/85/0b5c85c7a315376dbf02b46058446063.jpg',
        title: 'Itachi Senya',
        description: 'Awesome Game 9',
        price: 10
    }),
    new Product({
        imagePath: 'http://cdn0-a.production.liputan6.static6.com/medias/1171698/big-portrait/027728300_1458032276-boruto-new_sp2.jpg',
        title: 'Boruto Video Game',
        description: 'Awesome Game 10',
        price: 10
    }),
    new Product({
        imagePath: 'http://cdn0-a.production.liputan6.static6.com/medias/919665/big-portrait/066529300_1436154504-naruto-1-edit.jpg',
        title: 'Boruto Logo',
        description: 'Awesome Game 11',
        price: 10
    }),
    new Product({
        imagePath: 'http://i.imgur.com/pQvfGDR.jpg',
        title: 'Itachi Senya',
        description: 'Awesome Game 12',
        price: 10
    }),
    new Product({
        imagePath: 'http://coolwallpapers.website/wp-content/uploads/2016/12/Naruto-Shippuden-Good-Anime-Wallpaper-1920x1080-600x800.jpg',
        title: 'Boruto Logo',
        description: 'Awesome Game 13',
        price: 10
    }),
    new Product({
        imagePath: 'http://orig06.deviantart.net/54c1/f/2013/117/a/1/minato_and_naruto_by_katakitsu-d636aj0.png',
        title: 'Itachi Senya',
        description: 'Awesome Game 14',
        price: 10
    }),
    new Product({
        imagePath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScTt9Z6NLyj6ay6IJ-e_shrKA6vq9uxFF_tVDePSQE3i5CgHfk6g',
        title: 'Boruto Logo',
        description: 'Awesome Game 15',
        price: 10
    }),
    new Product({
        imagePath: 'https://sep.yimg.com/ay/animebooks-com/naruto-illustrations-uzumaki-naruto-art-book-26.gif',
        title: 'Itachi Senya',
        description: 'Awesome Game 16',
        price: 10
    }),
    new Product({
        imagePath: 'http://orig06.deviantart.net/54c1/f/2013/117/a/1/minato_and_naruto_by_katakitsu-d636aj0.png',
        title: 'Itachi Senya',
        description: 'Awesome Game 17',
        price: 10
    }),
    new Product({
        imagePath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScTt9Z6NLyj6ay6IJ-e_shrKA6vq9uxFF_tVDePSQE3i5CgHfk6g',
        title: 'Boruto Logo',
        description: 'Awesome Game 18',
        price: 10
    }),
    new Product({
        imagePath: 'https://sep.yimg.com/ay/animebooks-com/naruto-illustrations-uzumaki-naruto-art-book-26.gif',
        title: 'Itachi Senya',
        description: 'Awesome Game 19',
        price: 10
    }),
    new Product({
        imagePath: 'http://orig06.deviantart.net/54c1/f/2013/117/a/1/minato_and_naruto_by_katakitsu-d636aj0.png',
        title: 'Itachi Senya',
        description: 'Awesome Game 20',
        price: 10
    }),
    new Product({
        imagePath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScTt9Z6NLyj6ay6IJ-e_shrKA6vq9uxFF_tVDePSQE3i5CgHfk6g',
        title: 'Boruto Logo',
        description: 'Awesome Game 21',
        price: 10
    }),
    new Product({
        imagePath: 'https://sep.yimg.com/ay/animebooks-com/naruto-illustrations-uzumaki-naruto-art-book-26.gif',
        title: 'Itachi Senya',
        description: 'Awesome Game 22',
        price: 10
    })
];

var done = 0;

for (var i = 0; i < products.length; i++) {
    products[i].title ="Boruto logo + :: "+ i;
        console.log("product item added " + ( i));
        products[i].save(function (err, result) {
            done++;
            if (done === products.length ) {
                exit();
            }
        });
    }

function exit() {
    mongoose.disconnect();
}