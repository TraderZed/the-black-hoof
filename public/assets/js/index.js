this.BlackHoof = (function() {
  function BlackHoof() {}

  BlackHoof.init = function() {
    return this.getFood();
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

  BlackHoof.buildFood = function(items) {
    var $foodMenu;
    $foodMenu = $('.hoof-menu-food-list');
    $.each(items, function(i, val) {
      $foodMenu.append('<li><h3>' + val.name + '<span>' + val.price + '</span></h3></li>');
      return console.log(val);
    });
    return console.log(items);
  };

  return BlackHoof;

})();

window.BlackHoof.init();
