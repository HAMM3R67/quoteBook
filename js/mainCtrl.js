var app = angular.module('quoteBook');
app.controller('mainCtrl', function($scope, QuoteFactory){
	$scope.quotes = QuoteFactory.getData();
	
	$scope.quotesAdd = function(text, author){
		var newQuote = {};
		newQuote.text = $scope.textQuote;
		newQuote.author = $scope.authorQuote;
		QuoteFactory.addData(newQuote);
	};
	
	$scope.quotesRemove = function(text){
		var removeQuote = {};
		for(var i = 0; i < QuoteFactory.getData; i++){
			if(QuoteFactory.getData[i] === text){
				QuoteFactory.removeData(text);
			}
		}
	}
});