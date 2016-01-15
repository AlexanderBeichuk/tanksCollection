/**
 * Created by Alex on 10.01.2016.
 */

app.controller('tankController', function($scope, $rootScope){
    $rootScope.prevPage = $rootScope.currentTank.id - 1;
    $rootScope.nextPage = $rootScope.currentTank.id + 1;

    $scope.hrefOnTank = function(idTank){
        for(var i = 1; i <= $rootScope.tanksCollection.length; i++){
            if (i === idTank){
                $rootScope.currentTank = $rootScope.tanksCollection[--i];
                break;
            }
        }
    };

});