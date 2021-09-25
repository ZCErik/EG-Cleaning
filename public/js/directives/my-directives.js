
angular.module('egCleaning', [])
  .directive('shortDescription', function(){
      var ddo = {};
      
      ddo.restrict = "AE";
      
      ddo.scope = {
            titulo: '@title'
        };
      
      ddo.transclude = true;
      
      ddo.templateUrl = './short-description.html'
      
      return ddo;
    
  })
  .directive('tryYourself', function(){
      var ddo = {};
      
      ddo.restrict = "AE";
      
      ddo.scope = {
            titulo: '@title'
        };
      
      ddo.transclude = true;
      
      ddo.templateUrl = './try-yourself.html'
      
      return ddo;
    
  })
  .directive('employeeRegister', function(){
    var ddo = {};
    
    ddo.restrict = "AE";
    
    ddo.scope = {
          titulo: '@title'
      };
    
    ddo.transclude = true;
    
    ddo.templateUrl = './employee-register.html'
    
    return ddo;
  
})
  .directive('egHeader', function(){
    var ddo = {};
    
    ddo.restrict = "AE";
    
    ddo.scope = {
          titulo: '@title'
      };
    
    ddo.transclude = true;
    
    ddo.templateUrl = './eg-header.html'
    
    return ddo;
})
  directive('headerHtml', function(){
    var ddo = {};
    
    ddo.restrict = "AE";
    
    ddo.scope = {
          titulo: '@title'
      };
    
    ddo.transclude = true;
    
    ddo.templateUrl = './head-html.html'
    
    return ddo;
  });