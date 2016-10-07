
class @BlackHoof
  @init: ->
    @getFood()
  @getFood: ->
    $.ajax(
      type: "GET",
      url:  "https://the-black-hoof.firebaseio.com/hoof_food.json",
      success: (data) =>
        @buildFood(data)
    )
  @buildFood: (items) ->
    $foodMenu = $('.hoof-menu-food-list')
    $.each items, (i, val) ->
      $foodMenu.append('<li><h3>' + val.name + '<span>' + val.price + '</span></h3></li>')
      console.log(val)
    console.log(items)

window.BlackHoof.init()
