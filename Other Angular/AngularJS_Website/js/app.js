(function(){
var app = angular.module('store', []);

app.controller('StoreController', function(){
	this.products = gems;
});
var gems = [
{
	name: 'AbelAlvarez',
	price: 2.95,
	description: '.asdfasdfas ',
	canPurchase: true,
	soldOut: true
},
{
	name: 'Product 2',
	price: 1,
	description: '.asdfasdfas ',
	canPurchase: true,
	soldOut: true
}];
})();