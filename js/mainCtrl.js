var app = angular.module('quoteBook');
app.controller('mainCtrl', function($scope, QuoteFactory){
	$scope.quotes = QuoteFactory.getData();
	$scope.quotesAdd = function(text, author){
		var newQuote = {};
		newQuote.text = text;
		newQuote.author = author;
		QuoteFactory.addData(newQuote);
	}
});