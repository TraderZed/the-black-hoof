# TODO: make this way better than it currently is lollllz


class @BlackHoof
  @init: ->
    @getFood()
    @getHours()
    @getCocktails()
    @getRedWine()
    @getWhiteWine()
  @getHours: ->
    $.ajax(
      type: "GET",
      url:  "https://the-black-hoof.firebaseio.com/hoof_hours.json",
      success: (data) =>
        @buildHours(data)
    )
  @getFood: ->
    $.ajax(
      type: "GET",
      url:  "https://the-black-hoof.firebaseio.com/hoof_food.json",
      success: (data) =>
        @buildFood(data)
    )
  @getCocktails: ->
    $.ajax(
      type: "GET",
      url:  "https://the-black-hoof.firebaseio.com/hoof_cocktails.json",
      success: (data) =>
        @buildCocktails(data)
    )
  @getRedWine: ->
    $.ajax(
      type: "GET",
      url:  "https://the-black-hoof.firebaseio.com/hoof_red_wine.json",
      success: (data) =>
        @buildRedWine(data)
    )
  @getWhiteWine: ->
    $.ajax(
      type: "GET",
      url:  "https://the-black-hoof.firebaseio.com/hoof_white_wine.json",
      success: (data) =>
        @buildWhiteWine(data)
    )
  @buildHours: (hours) ->
    $hoursTable = $('.hoof-info-hours')
    $.each hours, (i, val) ->
      $hoursTable.append('<tr><td>' + val.day + '</td><td>' + val.hours + '</td></tr>')
  @buildFood: (items) ->
    $foodMenu = $('.hoof-menu-food-list')
    $.each items, (i, val) ->
      $foodMenu.append('<li><h3>' + val.name + '<span>' + val.price + '</span></h3></li>')
  @buildCocktails: (items) ->
    $cocktailMenu = $('.hoof-menu-cocktails-list')
    $.each items, (i, val) ->
      $cocktailMenu.append('<li><h3 class="serif">' + val.name + '<span>' + val.price + '</span></h3><p>' + val.description + '</p></li>')
  @buildRedWine: (items) ->
    $redWineMenu = $('.hoof-menu-red-wine-list')
    $.each items, (i, val) ->
      $redWineMenu.append('<li><h3>' + val.name + '</h3><p>' + val.description + '<span>' + val.price + '</span></p></li>')
  @buildWhiteWine: (items) ->
    $whiteWineMenu = $('.hoof-menu-white-wine-list')
    $.each items, (i, val) ->
      $whiteWineMenu.append('<li><h3>' + val.name + '</h3><p>' + val.description + '<span>' + val.price + '</span></p></li>')

window.BlackHoof.init()
