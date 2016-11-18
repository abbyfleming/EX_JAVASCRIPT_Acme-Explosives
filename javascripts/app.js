//Promises to read, first, from the categories.json to load that array of objects, then load types.json, then products.json.


var output = document.getElementById("output");	

function getCategories(){
	return new Promise((resolve, reject) => {
		$.ajax({
			url: "data/categories.json"
		}).done(function(data) {
			resolve(data);
		}).fail((error) => {
			reject(error);
		});
	});
}


function getProducts(){
	return new Promise((resolve, reject) => {
		$.ajax({
			url: "data/products.json"
		}).done(function(data) {
			resolve(data);
		}).fail((error) => {
			reject(error);
		});
	});
}


function getTypes(){
	return new Promise((resolve, reject) => {
		$.ajax({
			url: "data/products.json"
		}).done(function(data) {
			resolve(data);
		}).fail((error) => {
			reject(error);
		});
	});
}


function checkData(data){
	console.log("checkData", data); 
}

function readProducts(productsData){	
	//console.log(productsData.fairy_sparklers.name);
	//^output's the name from charred_stump
	
	//grab the name of each product
	var productKeys = Object.keys(productsData);
	console.log("Product's Keys: ", productKeys);

	//How many products are there? And what's their key?
	for (var i = 0; i < productKeys.length; i++){

		var getInfo = productKeys[i];

		//use bracket notation to filter down into the data
		var productName = productsData[getInfo]["name"];
		var productDescription = productsData[getInfo]["description"];

		//output the data. yay.
		console.log(productName + " " + productDescription);
	}
}


getCategories()
	.then((categoryData) =>{
		//console.log(categoryData.categories);
		//readCategory(categoryData.categories);
		return getProducts(); 
	})
	.then((productsData) => {
		readProducts(productsData.products[0]);
		//console.log("productsData", productsData);
		return getTypes();
	// })
	// .then((typesData) => {
	// 	parseTypes(typesData);
	});








