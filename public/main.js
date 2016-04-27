'use strict';

var app = angular.module('myApp', []);

app.controller('mainCtrl', function($scope){
  console.log('mainCtrl!');

  $scope.transactions = [];
    $scope.addTransaction = () => {
      $scope.transactions.push($scope.newTransaction);
      $scope.newTransaction = {};
    };
    $scope.removeTransaction = transaction => {
      $scope.transactions.push($scope.newTransaction);
      $scope.newTransaction = {};
      $scope.transactions.splice(index,1);
    };

    var editingIndex;

    $scope.editTransaction = transaction => {
      editingIndex = $scope.transactions.indexOf(transaction);
      $scope.transactionToEdit = angular.copy(transaction);

    };

    $scope.saveEdit = () => {
      $scope.transactions[editingIndex] = $scope.transactionToEdit;
      $scope.transactionToEdit = {};
    };

});
