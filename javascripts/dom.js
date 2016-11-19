"use strict";

function readProducts(productsData){	
	//console.log(productsData.fairy_sparklers.name);
	//^output's the name from charred_stump
	
	//define the output
	var output = document.getElementById("output");
	
	//grab the name of each product
	var productKeys = Object.keys(productsData);

	//How many products are there? And what's their key?
	for (var i = 0; i < productKeys.length; i++){

		//grab the info
		var getInfo = productKeys[i];
		var productName = productsData[getInfo]["name"];
		var productDescription = productsData[getInfo]["description"];

	     output.innerHTML += 
	     `<span class="col-md-6 prettify">
	     ${productName} - ${productDescription}<br>
	     </span>`;

		//console.log(productName + " - " + productDescription);
	}
}


function readCategories(categoryData) {
	var categoryKeys = Object.keys(categoryData);

	for (var i = 0; i < categoryData.length; i++){
		var getInfo = categoryKeys[i];
		var productName = categoryData[getInfo]["name"];

		//console.log(productName);
	}
}


function readTypes(typeData){
	for (var i = 0; i < typeData.length; i++){
	console.log(typeData[i]["name"]);
}
}




