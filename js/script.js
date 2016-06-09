var userSelection;
var idNumber=0;
var comicsInformation;
var input;
var params={
			apikey: '9dcb20f1185fa9fc6ead79c1ce2be593'
			
		};

$(document).ready(function(){
	//getMarvelHero(input);
	
		// url2= "http://gateway.marvel.com/v1/public/characters/"+idNumber+"/comics?";
		// $.getJSON(url2,params,function(data2){
		// 	console.log("Title "+data2.data.results[0].title);
		// 	console.log("Description "+data2.data.results[0].description);
		// 	console.log("resourceURL "+data2.data.results[0].resourceURL);
		// 	console.log("resourceURL "+data2.data.results[0].urls[0].url);
		// });
});

$('#myForm').submit(function(e){
	e.preventDefault();
	input = $(this).find("input[name='userinput']").val();
	console.log(input);
	getMarvelHero(input);
})
//http://gateway.marvel.com:80/v1/public/characters?name=daredevil&apikey=9dcb20f1185fa9fc6ead79c1ce2be593

function getMarvelHero(hero){
	url = "http://gateway.marvel.com/v1/public/characters?name="+hero;
	$.getJSON(url,params,function(data){
		//console.log(data.data);
		console.log(data.data.results[0]);
		console.log(data.data.results[0].id);
		idNumber = data.data.results[0].id;

		console.log(data.data.results[0].comics.items[0]);
		// comics = data.data.results[0].comics.items;
		// for (var i =0,i < comics.length - 1; i++) {
		// 	comics[i]
		// }
		getComics(idNumber);
	});
}

function getComics(idNumber){
	url2= "http://gateway.marvel.com/v1/public/characters/"+idNumber+"/comics?";
	$.getJSON(url2,params,function(data2){
		 console.log("Title "+data2.data.results[0].title);
		 console.log(data2.data.results);
		// console.log("Description "+data2.data.results[0].description);
		// console.log("resourceURL "+data2.data.results[0].resourceURL);
		// console.log("resourceURL "+data2.data.results[0].urls[0].url);
		comicsInformation = data2.data.results;
		for (var i =0; i < comicsInformation.length; i++) {
			//data2.data.results[i];
			console.log("Title "+comicsInformation[i].title);
			console.log("Description "+comicsInformation[i].description);
			//console.log("resourceURL "+data2.data.results[i].resourceURL);
			console.log("resourceURL "+comicsInformation[i].urls[0].url);
		};
	});
}