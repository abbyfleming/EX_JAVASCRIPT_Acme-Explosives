"use strict";

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
			url: "data/types.json"
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

getCategories()
	.then((categoryData) =>{
		readCategories(categoryData.categories);
		dynamicDropdown(categoryData.categories);
		return getProducts(); 
	})
	.then((productsData) => {
		readProducts(productsData.products[0]);
		return getTypes();
	})
	.then((typesData) => {
		readTypes(typesData.types);
	});








