/**
 * Created by Alex on 10.01.2016.
 */

var app = angular.module('myApp', ['ngRoute']);
app.
    config(function($routeProvider) {
        $routeProvider
            .otherwise({
                redirectTo: '/'
            })
            .when('/',{
                templateUrl : 'pages/views/home.html',
                controller : 'homeController'
            })
            .when('/about',{
                templateUrl : 'pages/views/about.html',
                controller : 'aboutController'
            })
            .when('/tank/:id', {
                templateUrl: 'pages/views/tank.html',
                controller: 'tankController'
            })
    });

app.run(function($rootScope){
    $rootScope.tanksCollection = [{
        id: 1,
        name: 'БТ 7',
        year: 1935,
        images: [
            'bt7.jpg',
            'bt7-2.jpg',
            'bt7-3.jpg',
            'bt7-4.jpg'
        ],
        tth:{
            massa: '13 т',
            ekipazh: '3 человека',
            vooryzhenie: '24-мм пушка 20К образца 1934 года, 2 х 7.62-мм пулемета ДТ',
            boekomplekt: '172 выстрела (132 выстрела для танка с радиостанцией), 2394 патрона',
            dvigatel: 'М-17Т, карбюраторный, мощность 400 л.с.',
            ydelnoe_davlenie_na_grynt: '0.78 кг/см^2',
            razmeri: {
                dlina: '5660 мм',
                shirina: '2230 мм',
                visota: '2420 мм'
            },
            bronya: {
                lob_korpusa: '13 мм',
                bort_korma: '13 мм',
                bashnya: '15 мм',
                krysha: '10 мм',
                dniwe: '6 мм'
            },
            skorost: {
                na_kolesah: '73 км/ч',
                na_gysenicah: '53 км/ч'
            },
            zapas_hoda: {
                na_kolesah: '500 км',
                na_gysenicah: '375 км'
            },
            prepyatstvia: {
                visota_stenki: 'нет данных',
                shirina_rva: 'нет данных',
                glybina_broda: '1.2 м'
            }
            }
        },
        {id: 2, name: 'tank2', year: 1992},
        {id: 3, name: 'tank3', year: 1993},
        {id: 4, name: 'tank4', year: 1994},
        {id: 5, name: 'tank5', year: 1995},
        {id: 6, name: 'tank6', year: 1996},
        {id: 7, name: 'tank7', year: 1997}
    ];

    $rootScope.currentTank = null;
    $rootScope.prevPage = 0;
    $rootScope.nextPage = 0;
});