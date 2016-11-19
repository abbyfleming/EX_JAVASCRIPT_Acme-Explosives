"use strict";

function dynamicDropdown(categoryData) {
	var categoryKeys = Object.keys(categoryData);
	var selectMenuDom = document.getElementById("selectMenu");
	var createSelect = document.createElement("select");

	for (var i = 0; i < categoryData.length; i++){
		var getInfo = categoryKeys[i];
		var productName = categoryData[getInfo]["name"];
		createSelect.innerHTML += `<option id= ${i}> ${productName} </option>`;
		selectMenuDom.appendChild(createSelect);
	}
}


function readProducts(productsData){	
	var output = document.getElementById("output");
	var productKeys = Object.keys(productsData);


	for (var i = 0; i < productKeys.length; i++){
		var getInfo = productKeys[i];
		var productName = productsData[getInfo]["name"];
		var productDescription = productsData[getInfo]["description"];

	     output.innerHTML += 
	     `<span class="col-md-6"> ${productName} - ${productDescription}<br> </span>`;
	}
}


function readCategories(categoryData) {
	var categoryKeys = Object.keys(categoryData);

	for (var i = 0; i < categoryData.length; i++){
		var getInfo = categoryKeys[i];
		var productName = categoryData[getInfo]["name"];

		console.log(productName);
	}
}


function readTypes(typeData){
	for (var i = 0; i < typeData.length; i++){
	console.log(typeData[i]["name"]);
	}
}
