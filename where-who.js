
//hover for where/who page
var country = document.querySelector('#country-hover');
var state = document.querySelector('#state-hover');
var city = document.querySelector('#city-hover');
var street = document.querySelector('#street-hover');
var building = document.querySelector('#building-hover');
var suite = document.querySelector('#suite-hover');
var imgInsert = document.querySelector('.img-insert');
var whereBold = document.querySelector('.where-bold');
var whereNormal = document.querySelector('.where-normal');

var countryName = document.querySelector('#country');

var stateName = document.querySelector('#state');


country.addEventListener("click", function(){
  imgInsert.src = "img/where-imgs/nasa-usa.png";
  imgInsert.style.transition = ".5s ease";


})

state.addEventListener("click", function(){
  imgInsert.src = "img/where-imgs/connecticut-img.png";
  imgInsert.style.transition = ".5s ease";

})

city.addEventListener("click", function(){
  imgInsert.src = "img/where-imgs/stamford-img.png";
  imgInsert.style.transition = ".5s ease";
})

street.addEventListener("click", function(){
  imgInsert.src = "img/where-imgs/Broad_street.jpg";
  imgInsert.style.transition = ".5s ease";
})

building.addEventListener("click", function(){
  imgInsert.src = "img/where-imgs/9wbroadst.png";
  imgInsert.style.transition = ".5s ease";
})

suite.addEventListener("click", function(){
  imgInsert.src = "img/where-imgs/StamfordTIP1.1.jpg";
  imgInsert.style.transition = ".5s ease";
})

