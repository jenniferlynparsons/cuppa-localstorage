(function(){
  var app = angular.module("cuppa",[]);

  app.directive('teaList', function(){
    return {
      restrict: 'E',
      templateUrl:'app/components/tealist/tealist.html',
      controller: function(){
        this.brews = teas;
      },
      controllerAs: 'teas'
    };
  });
  app.directive('teaDetails', function(){
    return {
      restrict: 'E',
      templateUrl:'app/components/teadetails/teadetails.html',
      controller: function(){
        this.brews = teas;
      },
      controllerAs: 'tea'
    };
  });


  var teas = [
    {
      name: "Pu-Erh",
      type: "Black",
      ingredients: "Tea",
      style: "Loose",
      servings: 5,
      brand: "McNulty's",
      distributor: "McNulty's",
      source: "China",
      rating: 5,
      favorite: true,
      notes: "This is a good tea."
    },
    {
      name: "Jade Pearls",
      type: "Green",
      ingredients: "Tea",
      style: "Loose",
      servings: 10,
      brand: "Fairway",
      distributor: "Fairway",
      source: "China",
      rating: 5,
      favorite: false,
      notes: "This is a nice smooth tea."
    },
    {
      name: "Yorkshire",
      type: "Black",
      ingredients: "Tea",
      style: "Bags",
      servings: 5,
      brand: "Taylor's",
      distributor: "Fairway",
      source: "India",
      rating: 5,
      favorite: true,
      notes: "This is a wonderful tea"
    }
  ]
})();
