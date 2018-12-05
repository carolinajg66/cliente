$(function(){

    var items=document.getElementsByClassName("item");

    var cart_items=document.getElementById("cart_items");

    var imagenes=document.querySelectorAll("img");

    var cart_container=document.getElementById("cart_container");

    $(items).children("label").css("text-decoration", "underline");

    $(cart_container).children("button").css("color", "red");

    
     $(items).css("background-color", "#cecece");

     $(cart_items).css("border", "4px solid black");

     $(imagenes).css("border", "1px solid blue");



});

    