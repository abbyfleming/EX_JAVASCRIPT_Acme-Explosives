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


function readCategory(categoryData){
	for (var i = 0; i < categoryData.length; i++){
		console.log(categoryData[i].name);
		console.log(categoryData[i].id);
	}
}

function readProducts(productsData){
	for (var i = 0; i < productsData.length; i++){
		console.log(productsData[i]);
	}
}

getCategories()
	.then((categoryData) =>{
		//console.log(categoryData.categories);
		readCategory(categoryData.categories);
		return getProducts(); 
	})
	.then((productsData) => {
		readProducts(productsData.products);
		return getTypes();
	// })
	// .then((typesData) => {
	// 	parseTypes(typesData);
	});








