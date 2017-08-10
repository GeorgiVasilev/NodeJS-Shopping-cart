var Product = require('../models/product');
var mongoose = require('mongoose');
mongoose.connect('localhost:27017/shopping');

var products = [
	new Product({
		imagePath: 'https://upload.wikimedia.org/wikipedia/en/0/07/Mass_Effect_Andromeda_cover.jpeg',
		title: 'Mass Effect: Andromeda',
		description: 'Best selling game 2017 !!!',
		price: 60
	}),
	new Product({
		imagePath: 'https://upload.wikimedia.org/wikipedia/en/b/b0/Mass_Effect_3_Game_Cover.jpg',
		title: 'Mass Effect 3',
		description: 'Awesome game !!!',
		price: 50
	}),
	new Product({
		imagePath: 'https://upload.wikimedia.org/wikipedia/en/0/05/MassEffect2_cover.PNG',
		title: 'Mass Effect 2',
		description: 'Awesome game !!!',
		price: 40
	}),
	new Product({
		imagePath: 'https://upload.wikimedia.org/wikipedia/en/e/e8/MassEffect.jpg',
		title: 'Mass Effect',
		description: 'Awesome game !!!',
		price: 20
	}),
	new Product({
		imagePath: 'https://upload.wikimedia.org/wikipedia/en/a/a5/Grand_Theft_Auto_V.png',
		title: 'GTA V',
		description: 'Awesome game !!!',
		price: 45
	}),
	new Product({
		imagePath: 'https://upload.wikimedia.org/wikipedia/en/f/fc/Battlefield_1_cover_art.jpg',
		title: 'Battlefield 1',
		description: 'Best shooter 2017 !!!',
		price: 65
	})
];

var done = 0;
for (var i = 0; i < products.length; i++) {
	products[i].save(function(err, result) {
		done++;
		if (done === products.length) {
			exit();
		}
	});
}

function exit() {
	mongoose.disconnect();
}
