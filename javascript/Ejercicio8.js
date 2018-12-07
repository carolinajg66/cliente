$(function(){

    var items=document.getElementsByClassName("item");

    var price=document.getElementsByClassName("price");

    var cart_items=document.getElementById("cart_items");

    var imagenes=document.querySelectorAll("img");
    
    //var item_container=document.getElementById("item_container");

    var input=document.querySelectorAll("input");

    var div=document.querySelectorAll("div");

    //var cart_container=document.getElementById("cart_container");

    var nav_left=document.getElementById("nav_left");


    var title=document.getElementsByClassName("title");

    var img1=document.getElementById("i1");

    var img3=document.getElementById("i3");


    $(items).children("label").css("text-decoration", "underline");

    $(nav_left).children("button").css("color", "red");

    $(items).children("label").css("color", "white");

    $(price).css("color", "green");

    $(input).css("color", "green");

    $(items).css("background-color", "#cecece");

    $(cart_items).css("border", "4px solid black");

    $(imagenes).css("border", "1px solid blue");

    if($(div).children().length == 0){

        $(div).css("background-color", "yellow");

    }
    if($(div).length == 0){

        $(div).css("background-color", "yellow");

    }
    $(items).first().css("background-color", "red");

    $(items).last().css("background-color", "red");

    $(img1).children("img").css("border-color", "green");

    $(img3).children("img").css("border-color", "green");

    //$("p").eq(1).css("background-color", "yellow");
    
    //$(imagenes)[1].css("border", "2px green");

});

    