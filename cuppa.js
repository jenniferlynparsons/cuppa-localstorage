(function(){
  var app = angular.module("cuppa",[]);

  app.component('teaList', {
      templateUrl:'app/components/tealist/tealist.html',
      controller: listController
  });

  function listController(teas){
    var $ctrl = this;
    $ctrl.teas = teas;
    $ctrl.deleteTea = function(tea) {
        $ctrl.teas.splice($ctrl.teas.indexOf(tea), 1);
    };
    $ctrl.viewTea = function(tea){
      $ctrl.chosenTea = tea;
      $ctrl.shownForm = "teadetails";
    };
    $ctrl.editTea = function(tea){
      $ctrl.chosenTea = tea;
      $ctrl.shownForm = "addedittea";
    };
  }

  app.component('teaDetails', {
      templateUrl:'app/components/teadetails/teadetails.html',
      bindings: {
        'tea': '<' // $ctrl.tea
      },
      require: {
          'listCtrl': '^?list'
      },
      controller: detailsController
  });

  function detailsController(){
    var $ctrl = this;
  }

  app.component('teaAddEdit', {
      templateUrl:'app/components/addedittea/addedittea.html',
      bindings: {
        'tea': '<' // $ctrl.tea
      },
      require:{'listCtrl': '^?list'},
      controller: addEditController
  });

  function addEditController(teas, teaOptions){
    var $ctrl = this;
    var editing = false;
    $ctrl.teas = teas;
    $ctrl.teaOptions = teaOptions;
    $ctrl.saveTea = function(){
      if(!editing){
        $ctrl.teas.push($ctrl.tea)
      }else{
        $ctrl.shownForm = "tealist";
      };
    };
    $ctrl.$onChanges = function(){
      if($ctrl.tea != null){
        editing = true;
      }else{
        editing = false;
        $ctrl.tea = {
          name: "Tea Name",
          type: "Black",
          ingredients: ["Tea"],
          style: "Loose",
          caffeine: "Medium",
          servings: 5,
          brand: "McNulty's",
          distributor: "McNulty's",
          source: ["China"],
          rating: 5,
          favorite: false,
          notes: "Notes on tea flavor, etc."
        }
      }
    };
  }

  app.factory('teas', function() {
    var teas = [
      {
        name: "Pu-Erh",
        type: "Black",
        ingredients: ["Tea"],
        style: "Loose",
        caffeine: "Medium",
        servings: 5,
        brand: "McNulty's",
        distributor: "McNulty's",
        source: ["China"],
        rating: 5,
        favorite: true,
        notes: "This is a good tea."
      },
      {
        name: "Jade Pearls",
        type: "Green",
        ingredients: ["Tea"],
        style: "Loose",
        caffeine: "High",
        servings: 10,
        brand: "Fairway",
        distributor: "Fairway",
        source: ["China"],
        rating: 5,
        favorite: false,
        notes: "This is a nice smooth tea."
      },
      {
        name: "Yorkshire",
        type: "Black",
        ingredients: ["Tea"],
        style: "Bags",
        caffeine: "High",
        servings: 5,
        brand: "Taylor's",
        distributor: "Fairway",
        source: ["India"],
        rating: 5,
        favorite: true,
        notes: "This is a wonderful tea"
      }
    ];
    return teas;
  });
  app.factory('teaOptions', function() {
    var teaOptions = {
      teaType: [
        "Black",
        "Chai",
        "Flowering",
        "Food",
        "Fruit",
        "Green",
        "Guayusa",
        "Herbal",
        "Honeybush",
        "Matcha",
        "Oolong",
        "Pu Erh",
        "Rooibos",
        "White",
        "Yellow",
        "Yerba Maté"
      ],
      teaIngredients: [
        "Tea",
        "Chocolate",
        "Chamomile",
        "Vanilla",
        "Other"
      ],
      teaStyle: [
        "Loose",
        "Bag",
        "Sachet"
      ],
      teaCaffeine: [
        "Low",
        "Medium",
        "High",
        "Decaffeinated",
        "Caffeine Free"
      ],
      teaBrand: [
        "Adagio",
        "Fairway",
        "McNulty's",
        "Mighty Leaf",
        "Republic of Tea",
        "Yorkshire Tea"
      ],
      teaDistributor: [
        "Adagio",
        "Fairway",
        "ShopRite",
        "Whole Foods"
      ],
      teaSource: [
        "Africa",
        "China",
        "India",
        "Various"
      ]
    }
    return teaOptions;
  });
})();
