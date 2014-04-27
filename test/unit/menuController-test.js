'use strict';

describe('Controller: Menu Controller', function() {

    beforeEach(module('app'));

   var MenuController,
       scope,
       menuService;

   beforeEach(inject(function($controller) {
       scope = {};

       menuService = {
           get: function(data, callBack) {
           },
           save: function(data, callBack) {
               data.id = 10;
           },
           delete: function(data, callBack) {
           },
           query: function(callBack) {

           }
       };

       spyOn(menuService, 'query');
       spyOn(menuService, 'save');
       spyOn(menuService, 'delete');
       spyOn(menuService, 'get');

       MenuController = $controller('MenuCtrl', {
           $scope: scope,
           MenuService: menuService
       })
   }));

   it ('should query the data when created', function() {
       expect(menuService.query).toHaveBeenCalled();
   })
});