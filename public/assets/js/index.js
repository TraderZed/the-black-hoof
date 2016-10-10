this.BlackHoof = (function() {
  function BlackHoof() {}

  BlackHoof.init = function() {
    this.getFood();
    this.getHours();
    this.getCocktails();
    this.getRedWine();
    this.getWhiteWine();
    this.getBeer();
    return this.getCopy();
  };

  BlackHoof.getCopy = function() {
    return $.ajax({
      type: "GET",
      url: "https://the-black-hoof.firebaseio.com/hoof_copydeck.json",
      success: (function(_this) {
        return function(data) {
          return _this.populateCopy(data);
        };
      })(this)
    });
  };

  BlackHoof.getHours = function() {
    return $.ajax({
      type: "GET",
      url: "https://the-black-hoof.firebaseio.com/hoof_hours.json",
      success: (function(_this) {
        return function(data) {
          return _this.buildHours(data);
        };
      })(this)
    });
  };

  BlackHoof.getFood = function() {
    return $.ajax({
      type: "GET",
      url: "https://the-black-hoof.firebaseio.com/hoof_food.json",
      success: (function(_this) {
        return function(data) {
          return _this.buildFood(data);
        };
      })(this)
    });
  };

  BlackHoof.getCocktails = function() {
    return $.ajax({
      type: "GET",
      url: "https://the-black-hoof.firebaseio.com/hoof_cocktails.json",
      success: (function(_this) {
        return function(data) {
          return _this.buildCocktails(data);
        };
      })(this)
    });
  };

  BlackHoof.getRedWine = function() {
    return $.ajax({
      type: "GET",
      url: "https://the-black-hoof.firebaseio.com/hoof_red_wine.json",
      success: (function(_this) {
        return function(data) {
          return _this.buildRedWine(data);
        };
      })(this)
    });
  };

  BlackHoof.getWhiteWine = function() {
    return $.ajax({
      type: "GET",
      url: "https://the-black-hoof.firebaseio.com/hoof_white_wine.json",
      success: (function(_this) {
        return function(data) {
          return _this.buildWhiteWine(data);
        };
      })(this)
    });
  };

  BlackHoof.getBeer = function() {
    return $.ajax({
      type: "GET",
      url: "https://the-black-hoof.firebaseio.com/hoof_beer.json",
      success: (function(_this) {
        return function(data) {
          return _this.buildBeer(data);
        };
      })(this)
    });
  };

  BlackHoof.buildHours = function(hours) {
    var $hoursTable;
    $hoursTable = $('.hoof-info-hours');
    return $.each(hours, function(i, val) {
      return $hoursTable.append('<tr><td>' + val.day + '</td><td>' + val.hours + '</td></tr>');
    });
  };

  BlackHoof.buildFood = function(items) {
    var $foodMenu;
    $foodMenu = $('.hoof-menu-food-list');
    return $.each(items, function(i, val) {
      return $foodMenu.append('<li><h3>' + val.name + '<span>' + val.price + '</span></h3></li>');
    });
  };

  BlackHoof.buildCocktails = function(items) {
    var $cocktailMenu;
    $cocktailMenu = $('.hoof-menu-cocktails-list');
    return $.each(items, function(i, val) {
      return $cocktailMenu.append('<li><h3 class="serif">' + val.name + '<span>' + val.price + '</span></h3><p>' + val.description + '</p></li>');
    });
  };

  BlackHoof.buildBeer = function(items) {
    var $beerMenu;
    $beerMenu = $('.hoof-menu-beer-list');
    return $.each(items, function(i, val) {
      return $beerMenu.append('<li>' + val.name + '</li>');
    });
  };

  BlackHoof.buildRedWine = function(items) {
    var $redWineMenu;
    $redWineMenu = $('.hoof-menu-red-wine-list');
    return $.each(items, function(i, val) {
      return $redWineMenu.append('<li><h3>' + val.name + '</h3><p>' + val.description + '<span>' + val.price + '</span></p></li>');
    });
  };

  BlackHoof.buildWhiteWine = function(items) {
    var $whiteWineMenu;
    $whiteWineMenu = $('.hoof-menu-white-wine-list');
    return $.each(items, function(i, val) {
      return $whiteWineMenu.append('<li><h3>' + val.name + '</h3><p>' + val.description + '<span>' + val.price + '</span></p></li>');
    });
  };

  BlackHoof.populateCopy = function(copy) {
    return $.each(copy, function(i, val) {
      return $('.js-copy-' + val.key).html(val.copy);
    });
  };

  return BlackHoof;

})();

window.BlackHoof.init();
