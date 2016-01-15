/**
 * Created by Alex on 10.01.2016.
 */

app.controller('homeController', function($scope, $rootScope){


    $scope.getCurrentTank = function(tank){
        $rootScope.currentTank = tank;
    }

});