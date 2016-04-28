'use strict';

var app = angular.module('myApp', []);

app.controller('mainCtrl', function($scope){
  console.log('mainCtrl!');

  $scope.transactions = [];

    $scope.addTransaction = () => {
      $scope.transactions.push($scope.newTransaction);
      $scope.newTransaction = {}; //clearing the inputs
    };

    $scope.removeTransaction = transaction => {
      var index = $scope.transactions.indexOf(transaction);
      $scope.transactions.splice(index,1);
    };

    $scope.sortBy = order => {
      $scope.sortOrder = order;
    };

    $scope.editTransaction = transaction => {
      editingIndex = $scope.transactions.indexOf(transaction);
      $scope.transactionToEdit = angular.copy(transaction);
    };

    $scope.saveEdit = transaction => {
      $scope.transactions[editingIndex] = $scope.transactionToEdit;
      $scope.transactionToEdit = null;
    };

    $scope.cancelEdit = transaction => {
      $scope.transactionToEdit = null;
    };
});
