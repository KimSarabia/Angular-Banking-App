'use strict';

var app = angular.module('myApp', []);

app.controller('mainCtrl', function($scope) {
    console.log('mainCtrl!');

    $scope.transactions = [{
        "name": "Saks Fifth",
        "deposit": 0,
        "withdrawal": 2000,
        "Date": new Date("Mar 25 2015"),
        "Notes": "Went Shopping!"
    }, {
        "name": "SpaceX",
        "deposit": 5000,
        "withdrawal": 100,
        "Date": 10 / 12 / 16,
        "Notes": "Pay Day!"
    }];

    $scope.addTransaction = () => {
        $scope.transactions.push($scope.newTransaction);
        $scope.newTransaction = {}; //clearing the inputs
    };

    $scope.removeTransaction = transaction => {
        var index = $scope.transactions.indexOf(transaction);
        $scope.transactions.splice(index, 1);
    };

    $scope.sortBy = order => {
        if ($scope.sortOrder === order) {
            $scope.sortOrder = `-${order}`;
        } else if ($scope.sortOrder === `-${order}`) {
            $scope.sortOrder = '';
        } else {
            $scope.sortOrder = order;
        }
    };

    var editingIndex;

    $scope.editTransaction = transaction => {
        editingIndex = $scope.transactions.indexOf(transaction);
        $scope.transactionToEdit = angular.copy(transaction);
    };

    $scope.saveEdit = () => {
        $scope.transactions[editingIndex] = $scope.transactionToEdit;
        $scope.transactionToEdit = null;
    };

    $scope.cancelEdit = () => {
        $scope.transactionToEdit = null;
    };

    $scope.showDepositTotal = () => {
        var total = 0;
        for (var i = 0; i < $scope.transactions.length; i++) {
            var item = $scope.transactions[i];
            total += item.deposit;
        }
        return total;
    };

    $scope.showWithdrawalTotal = () => {
        var total = 0;
        for (var i = 0; i < $scope.transactions.length; i++) {
            var item = $scope.transactions[i];
            total += item.withdrawal;
        }
        return total;
    };

});
